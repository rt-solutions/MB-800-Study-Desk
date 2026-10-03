(() => {
  const DATA = window.MB800;
  const STORE_KEY = "openperiod.mb800.v1";
  const stage = document.querySelector(".stage");
  const searchInput = document.querySelector("#q");
  const DOMAIN_SHORT = { setup: "Setup", fin: "Financials", trade: "Sales & purchasing", ops: "Operations" };

  const load = () => {
    try {
      return JSON.parse(localStorage.getItem(STORE_KEY)) || {};
    } catch {
      return {};
    }
  };
  const save = (state) => localStorage.setItem(STORE_KEY, JSON.stringify(state));

  const migrateKnown = (known) => {
    if (!known || typeof known !== "object") return {};
    const next = {};
    Object.keys(known).forEach((k) => {
      if (!known[k]) return;
      if (DATA.cards.some((c) => c.id === k)) {
        next[k] = true;
        return;
      }
      if (/^\d+$/.test(k)) {
        const card = DATA.cards[Number(k)];
        if (card?.id) next[card.id] = true;
      }
    });
    return next;
  };

  let state = Object.assign(
    { checked: {}, notes: {}, known: {}, scores: [], misses: [], exam: null, planTarget: "", planDone: {}, traced: {}, alike: {}, pages: {} },
    load()
  );
  state.known = migrateKnown(state.known);
  if (!Array.isArray(state.misses)) state.misses = [];
  if (!Array.isArray(state.scores)) state.scores = [];
  if (state.exam && typeof state.exam !== "object") state.exam = null;
  if (!state.planDone || typeof state.planDone !== "object") state.planDone = {};
  if (!state.traced || typeof state.traced !== "object") state.traced = {};
  if (!state.alike || typeof state.alike !== "object") state.alike = {};
  if (!state.pages || typeof state.pages !== "object") state.pages = {};
  if (!state.planTarget) state.planTarget = (DATA.curriculum && DATA.curriculum.defaultTarget) || "2027-02-05";

  const escapeHtml = (s) =>
    String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const labFor = (groupId, index) => {
    const list = DATA.labs && DATA.labs[groupId];
    return list && list[index] ? list[index] : null;
  };

  const labText = (lab) => (lab ? [lab.open, ...(lab.steps || []), lab.check].filter(Boolean).join(" ") : "");

  const allSkills = () => {
    const out = [];
    DATA.domains.forEach((d) =>
      d.groups.forEach((g) =>
        g.items.forEach((text, i) =>
          out.push({ id: `${d.id}.${g.id}.${i}`, domain: d.id, groupId: g.id, group: g.title, text })
        )
      )
    );
    return out;
  };

  const groupMeta = (id) => {
    for (const d of DATA.domains) {
      const g = d.groups.find((x) => x.id === id);
      if (g) return { ...g, domain: d.id, domainName: d.name };
    }
    return null;
  };

  const cardId = (card, i) => card.id || `c${i}`;

  const progress = () => {
    const skills = allSkills();
    const done = skills.filter((s) => state.checked[s.id]).length;
    const notesDone = DATA.notes.filter((n) => state.notes[n.id]).length;
    const cardsKnown = DATA.cards.filter((c, i) => state.known[cardId(c, i)]).length;
    const groups = [];
    DATA.domains.forEach((d) => {
      d.groups.forEach((g) => {
        const items = g.items.map((_, i) => `${d.id}.${g.id}.${i}`);
        const ticked = items.filter((id) => state.checked[id]).length;
        groups.push({
          id: g.id,
          title: g.title,
          domain: d.id,
          domainName: d.name,
          ticked,
          total: items.length,
          pct: items.length ? Math.round((100 * ticked) / items.length) : 0,
          studied: !!state.notes[g.id],
          qCount: DATA.questions.filter((q) => q.group === g.id).length,
        });
      });
    });
    return {
      skills,
      done,
      skillPct: skills.length ? Math.round((100 * done) / skills.length) : 0,
      notesDone,
      notesPct: Math.round((100 * notesDone) / DATA.notes.length),
      cardsKnown,
      cardsPct: Math.round((100 * cardsKnown) / DATA.cards.length),
      groups,
      missN: state.misses.filter((id) => DATA.questions.some((q) => q.id === id)).length,
    };
  };

  const fmtMmSs = (ms) => {
    const s = Math.max(0, Math.ceil(ms / 1000));
    const m = Math.floor(s / 60);
    const r = s % 60;
    return `${m}:${String(r).padStart(2, "0")}`;
  };

  const examRemaining = () => {
    if (!state.exam || state.exam.submitted) return 0;
    return Math.max(0, state.exam.endsAt - Date.now());
  };

  const paintRail = () => {
    const p = progress();
    const examLive = state.exam && !state.exam.submitted;
    const clock = examLive
      ? `<div class="exam-clock ${examRemaining() < 5 * 60 * 1000 ? "low" : ""}"><a href="#/exam">${fmtMmSs(examRemaining())} left</a></div>`
      : "";
    document.querySelector("#rail-progress").innerHTML = `
      ${clock}
      <div>Outline ${p.done}/${p.skills.length}</div>
      <div class="bar"><span style="width:${p.skillPct}%"></span></div>
      <div class="muted">Notes ${p.notesDone}/${DATA.notes.length} · Cards ${p.cardsKnown}/${DATA.cards.length} · Misses ${p.missN}</div>
    `;
    document.querySelectorAll(".nav [data-route]").forEach((a) => {
      const hash = location.hash.replace(/^#/, "") || "/";
      const routeName = a.getAttribute("data-route");
      const active =
        (routeName === "home" && (hash === "/" || hash === "")) ||
        (routeName !== "home" && hash.startsWith("/" + routeName));
      a.classList.toggle("active", active);
    });
  };

  const route = () => {
    const raw = (location.hash || "#/").replace(/^#/, "") || "/";
    const [path, query] = raw.split("?");
    const parts = path.split("/").filter(Boolean);
    const params = new URLSearchParams(query || "");
    return { parts, params, path: "/" + parts.join("/") };
  };

  const fmtWhen = (ms) => {
    try {
      return new Date(ms).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });
    } catch {
      return "";
    }
  };

  const parseDay = (s) => {
    const [y, m, d] = String(s)
      .split("-")
      .map((n) => Number(n));
    if (!y || !m || !d) return null;
    return new Date(y, m - 1, d);
  };
  const fmtISO = (dt) => {
    const y = dt.getFullYear();
    const m = String(dt.getMonth() + 1).padStart(2, "0");
    const d = String(dt.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  };
  const startOfDay = (dt) => new Date(dt.getFullYear(), dt.getMonth(), dt.getDate());
  const mondayOnOrBefore = (dt) => {
    const x = startOfDay(dt);
    const day = x.getDay();
    x.setDate(x.getDate() + (day === 0 ? -6 : 1 - day));
    return x;
  };
  const addDays = (dt, n) => {
    const x = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate());
    x.setDate(x.getDate() + n);
    return x;
  };
  const fmtRange = (a, b) => {
    const sameMonth = a.getMonth() === b.getMonth();
    if (sameMonth) return `${a.getDate()}–${b.toLocaleDateString(undefined, { day: "numeric", month: "short" })}`;
    return `${a.toLocaleDateString(undefined, { day: "numeric", month: "short" })} – ${b.toLocaleDateString(undefined, { day: "numeric", month: "short" })}`;
  };
  const daysBetween = (a, b) => Math.round((startOfDay(b) - startOfDay(a)) / 86400000);

  const mergeModules = (list) => {
    if (list.length === 1) return { ...list[0] };
    const groups = [];
    list.forEach((m) => (m.groups || []).forEach((g) => { if (!groups.includes(g)) groups.push(g); }));
    const phases = [];
    list.forEach((m) => { if (m.phase && !phases.includes(m.phase)) phases.push(m.phase); });
    return {
      id: list.map((m) => m.id).join("+"),
      kind: list[0].kind,
      phase: phases.length === 1 ? phases[0] : phases.join(" · "),
      title: list.map((m) => m.title).join(" · "),
      hours: list.reduce((s, m) => s + (m.hours || 0), 0),
      groups,
      focus: list.map((m) => m.focus).filter(Boolean).join(" "),
      sandbox: list.map((m) => m.sandbox).filter(Boolean).join(" "),
    };
  };

  const chunkEven = (arr, k) => {
    if (k <= 0) return [];
    if (k >= arr.length) return arr.map((m) => ({ ...m }));
    const out = [];
    const base = Math.floor(arr.length / k);
    let extra = arr.length % k;
    let i = 0;
    for (let g = 0; g < k; g++) {
      const take = base + (extra > 0 ? 1 : 0);
      extra -= 1;
      out.push(mergeModules(arr.slice(i, i + take)));
      i += take;
    }
    return out;
  };

  const packCurriculum = (weekCount) => {
    const mods = (DATA.curriculum && DATA.curriculum.modules) || [];
    const n = Math.max(1, weekCount);
    if (n >= mods.length) {
      const extra = n - mods.length;
      const learn = mods.filter((m) => m.kind === "learn").map((m) => ({ ...m }));
      const exam = mods.filter((m) => m.kind === "exam").map((m) => ({ ...m }));
      if (!extra) return learn.concat(exam);
      const out = [];
      let placed = 0;
      learn.forEach((m, i) => {
        out.push(m);
        const want = Math.floor(((i + 1) * extra) / learn.length);
        while (placed < want) {
          out.push({
            id: `buffer-${placed}-${m.id}`,
            kind: "learn",
            phase: m.phase,
            title: `Recap: ${m.phase}`,
            hours: (DATA.curriculum && DATA.curriculum.hoursPerWeek) || 6,
            groups: (m.groups || []).slice(),
            focus: "Re-read traps, burn remaining cards in this phase, drill misses. Do not start a new domain until this one is automatic.",
            sandbox: "Re-do the last sandbox task from memory, then tick the outline for this phase.",
          });
          placed += 1;
        }
      });
      return out.concat(exam);
    }
    const learn = mods.filter((m) => m.kind === "learn");
    const exam = mods.filter((m) => m.kind === "exam");
    const examKeep = Math.min(exam.length, Math.max(1, Math.min(4, n - 1)));
    const learnKeep = Math.max(1, n - examKeep);
    return chunkEven(learn, Math.min(learnKeep, learn.length)).concat(exam.slice(Math.max(0, exam.length - examKeep)));
  };

  const buildSchedule = (targetStr) => {
    const target = parseDay(targetStr) || parseDay("2027-02-05");
    const today = startOfDay(new Date());
    const start = mondayOnOrBefore(today);
    const endMonday = mondayOnOrBefore(target);
    let weekCount = Math.floor(daysBetween(start, endMonday) / 7) + 1;
    if (weekCount < 1) weekCount = 1;
    const packed = packCurriculum(weekCount);
    return packed.map((mod, i) => {
      const from = addDays(start, i * 7);
      const to = addDays(from, 6);
      const now = today >= from && today <= to;
      const past = today > to;
      return { ...mod, from, to, index: i, now, past };
    });
  };

  const moduleStats = (mod) => {
    const groups = mod.groups || [];
    const notes = DATA.notes.filter((n) => groups.includes(n.id));
    const notesDone = notes.filter((n) => state.notes[n.id]).length;
    const cards = DATA.cards.filter((c) => groups.includes(c.group));
    const cardsDone = cards.filter((c) => state.known[c.id]).length;
    const skills = allSkills().filter((s) => groups.includes(s.groupId));
    const ticks = skills.filter((s) => state.checked[s.id]).length;
    const done = state.planDone[mod.id] || {};
    const mocks = (state.scores || []).filter((s) => s.type === "mock");
    const lastMock = mocks.slice(-1)[0];
    let parts = [];
    if (notes.length) parts.push(notesDone / notes.length);
    if (cards.length) parts.push(cardsDone / cards.length);
    if (skills.length) parts.push(ticks / skills.length);
    if (/mock/i.test(`${mod.id} ${mod.title}`)) {
      parts.push(mocks.length ? 1 : 0);
    }
    if (done.sandbox) parts.push(1);
    else if (mod.sandbox) parts.push(0.15);
    const pct = parts.length ? Math.round((100 * parts.reduce((a, b) => a + b, 0)) / parts.length) : done.sandbox ? 100 : 0;
    return {
      notesDone,
      notesTotal: notes.length,
      cardsDone,
      cardsTotal: cards.length,
      ticks,
      tickTotal: skills.length,
      mocks: mocks.length,
      lastMock,
      sandbox: !!done.sandbox,
      practice: !!done.practice,
      pearson: !!done.pearson,
      pct,
    };
  };

  const nextUp = (p) => {
    if (state.exam && !state.exam.submitted) return { href: "#/exam", label: "Resume mock exam" };
    if (DATA.curriculum) {
      const cur = buildSchedule(state.planTarget).find((w) => w.now);
      if (cur && moduleStats(cur).pct < 85) return { href: "#/plan", label: `This week: ${cur.title}` };
    }
    const unread = DATA.notes.find((n) => !state.notes[n.id]);
    if (p.skillPct < 40) return { href: "#/outline", label: "Tick the skills outline against a sandbox" };
    if (unread) return { href: `#/notes/${unread.id}`, label: `Read: ${unread.title}` };
    if (p.cardsKnown < DATA.cards.length) return { href: "#/cards", label: "Burn remaining flashcards" };
    if (p.missN) return { href: "#/drill?misses=1", label: `Redo ${p.missN} missed drills` };
    return { href: "#/drill", label: "Run a mixed practice drill" };
  };

  const exportProgress = () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "openperiod-mb800-progress.json";
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const importProgress = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result);
        if (!parsed || typeof parsed !== "object") throw new Error("not an object");
        state = Object.assign(
          { checked: {}, notes: {}, known: {}, scores: [], misses: [], exam: null, planTarget: "", planDone: {}, traced: {}, alike: {}, pages: {} },
          parsed
        );
        state.known = migrateKnown(state.known);
        if (!Array.isArray(state.misses)) state.misses = [];
        if (!Array.isArray(state.scores)) state.scores = [];
        save(state);
        render();
      } catch {
        alert("Could not read that progress file.");
      }
    };
    reader.readAsText(file);
  };

  const home = () => {
    const p = progress();
    const go = nextUp(p);
    const domains = DATA.domains
      .map((d) => {
        const gs = p.groups.filter((g) => g.domain === d.id);
        const ticked = gs.reduce((n, g) => n + g.ticked, 0);
        const total = gs.reduce((n, g) => n + g.total, 0);
        const pct = total ? Math.round((100 * ticked) / total) : 0;
        return `
        <article class="card">
          <div class="weight">${escapeHtml(d.weight)}</div>
          <h3>${escapeHtml(d.name)}</h3>
          <div class="domain-bar"><span style="width:${pct}%;background:${d.color}"></span></div>
          <p class="small muted">${ticked}/${total} outline · ${gs.filter((g) => g.studied).length}/${gs.length} notes</p>
          <p class="small"><a href="#/notes">Study notes</a> · <a href="#/drill?domain=${d.id}">Drill this domain</a></p>
        </article>`;
      })
      .join("");
    const cov = p.groups
      .map((g) => {
        const tone = g.pct === 100 ? "ok" : g.pct === 0 ? "cold" : "";
        return `<a class="cov-cell ${tone}" href="#/notes/${g.id}" title="${escapeHtml(g.domainName)}">
          <span>${escapeHtml(g.title)}</span>
          <b>${g.pct}%</b>
        </a>`;
      })
      .join("");
    const recent = (state.scores || [])
      .slice(-5)
      .reverse()
      .map((s) => {
        const pct = s.total ? Math.round((100 * s.correct) / s.total) : 0;
        const label =
          s.type === "mock"
            ? `Mock · scaled ${s.scaled}`
            : s.domain === "misses"
              ? "Misses"
              : s.group
                ? groupMeta(s.group)?.title || s.group
                : s.domain === "all"
                  ? "All domains"
                  : DOMAIN_SHORT[s.domain] || s.domain;
        return `<li><span class="pct">${s.correct}/${s.total} (${pct}%)</span> ${escapeHtml(label)} · ${escapeHtml(fmtWhen(s.at))}</li>`;
      })
      .join("");
    const changes = DATA.changelog
      .map((c) => `<li><strong>${escapeHtml(c.area)}.</strong> ${escapeHtml(c.change)}</li>`)
      .join("");
    stage.innerHTML = `
      <p class="kicker">Exam ${escapeHtml(DATA.meta.exam)} · skills as of 30 June 2026</p>
      <h1>${escapeHtml(DATA.meta.title)}</h1>
      <p class="lede">Unofficial study desk: the official outline, high-signal notes, flashcards, and original scenario drills. Progress stays in this browser.</p>
      <div class="meta-row">
        <span class="chip rust">${escapeHtml(DATA.meta.duration)}</span>
        <span class="chip">Pass ${escapeHtml(DATA.meta.pass)}</span>
        <span class="chip">Renew ${escapeHtml(DATA.meta.renewal.split(",")[0])}</span>
        <span class="chip">Outline ${p.skillPct}%</span>
        <span class="chip">${DATA.questions.length} drills · ${DATA.cards.length} cards</span>
      </div>
      <section class="card next-up">
        <p class="kicker">Next</p>
        <p><a class="btn" href="${go.href}">${escapeHtml(go.label)}</a>
        ${p.missN ? `<a class="btn ghost" href="#/drill?misses=1">Redo ${p.missN} misses</a>` : ""}
        <a class="btn ghost" href="#/drill">Mixed drill</a>
        <a class="btn ghost" href="#/exam">${state.exam && !state.exam.submitted ? "Resume mock" : "Timed mock"}</a>
        <a class="btn ghost" href="#/plan">Study plan</a></p>
      </section>
      <div class="grid four" style="margin-top:18px">${domains}</div>
      <section style="margin-top:22px">
        <h2>Coverage</h2>
        <p class="small muted">Percent is outline ticks, not exam score. Open a group for notes; drill from the notes page or the drill filter.</p>
        <div class="cov">${cov}</div>
      </section>
      <section class="card" style="margin-top:18px">
        <h2>Recent drills</h2>
        ${recent ? `<ul class="scores">${recent}</ul>` : `<p class="muted">No sessions yet. Run a <a href="#/drill">practice drill</a>.</p>`}
      </section>
      <section class="card" style="margin-top:18px">
        <h2>Order to use this</h2>
        <p class="small muted">Same numbers as the menu. Desk is 1.</p>
        <ol start="2">
          <li>Open the <a href="#/plan">study plan</a>, set your sitting date, and work the week marked now.</li>
          <li>Read that week’s <a href="#/notes">study notes</a>. Traps first, then the tables.</li>
          <li>Do the <a href="#/outline">skills outline</a> labs for that group in a sandbox, and tick only what you actually did.</li>
          <li>On <a href="#/posted">Where it posted</a>, name the list, the account, and the setup page before you look.</li>
          <li>Separate the tools on <a href="#/alike">Look-alikes</a>.</li>
          <li>Name the fix on <a href="#/page">Which page</a>.</li>
          <li>Burn <a href="#/cards">flashcards</a> until posting groups, costing, and personalize / customize / design are automatic.</li>
          <li>Run the <a href="#/drill">practice drill</a>. Misses stay in a review pile.</li>
          <li>Sit a <a href="#/exam">timed mock</a> after a full pass, and again before you book.</li>
          <li>Use <a href="#/links">official links</a> for Microsoft Learn, the <a href="${DATA.meta.practice}">practice assessment</a>, and the <a href="${DATA.meta.sandbox}">exam sandbox</a>.</li>
        </ol>
        <div class="toolbar">
          <button class="btn ghost" type="button" id="export-progress">Export progress</button>
          <label class="btn ghost file-btn">Import progress<input id="import-progress" type="file" accept="application/json,.json" hidden /></label>
        </div>
      </section>
      <section style="margin-top:18px">
        <h2>What changed for 30 June 2026</h2>
        <ul>${changes}</ul>
      </section>
      <p class="small muted">Audience: implement Business Central — companies, security, financials, sales/purchasing, inventory, fixed assets, Copilot/agents. Integrations with Microsoft 365, Power Platform, and Dynamics 365 are still in the audience profile, but “describe integrations” is no longer its own skill area.</p>
      <footer class="tiny">Unofficial study aid. Not affiliated with Microsoft. Questions are original practice items written from the published skills list — not exam dumps. Always confirm against Microsoft Learn.</footer>
    `;
    document.querySelector("#export-progress").addEventListener("click", exportProgress);
    document.querySelector("#import-progress").addEventListener("change", (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) importProgress(file);
    });
  };

  const outline = () => {
    const p = progress();
    const html = DATA.domains
      .map((d) => {
        const groups = d.groups
          .map((g) => {
            const focusLab = route().params.get("lab");
            const items = g.items
              .map((text, i) => {
                const id = `${d.id}.${g.id}.${i}`;
                const checked = state.checked[id] ? "checked" : "";
                const lab = labFor(g.id, i);
                const open = focusLab === id;
                const steps = lab
                  ? lab.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")
                  : "";
                const labHtml = lab
                  ? `<button type="button" class="lab-toggle" data-lab-btn="${id}" aria-expanded="${open ? "true" : "false"}" aria-controls="lab-${id}">Lab</button>
                <div class="lab" id="lab-${id}"${open ? "" : " hidden"}>
                  <p><strong>Open.</strong> Tell Me: ${escapeHtml(lab.open)}</p>
                  <p><strong>Do.</strong></p>
                  <ol>${steps}</ol>
                  <p class="lab-check"><strong>Check.</strong> ${escapeHtml(lab.check)}</p>
                </div>`
                  : "";
                return `<div class="skill-block" id="skill-${id}"><label class="skill-item"><input type="checkbox" data-skill="${id}" ${checked}><span>${escapeHtml(text)}</span></label>${labHtml}</div>`;
              })
              .join("");
            const meta = p.groups.find((x) => x.id === g.id);
            const note = DATA.notes.find((n) => n.id === g.id);
            const link = note ? `<a class="small" href="#/notes/${note.id}">notes</a>` : "";
            return `<div class="skill-group"><div class="group-head"><h3>${escapeHtml(g.title)}</h3><span class="pct">${meta ? `${meta.ticked}/${meta.total}` : ""} ${link} · <a class="small" href="#/drill?group=${g.id}">drill</a></span></div>${items}</div>`;
          })
          .join("");
        return `<section class="card" style="margin-bottom:16px"><div class="group-head"><h2>${escapeHtml(d.name)}</h2><span class="pct">${escapeHtml(d.weight)}</span></div>${groups}</section>`;
      })
      .join("");
    stage.innerHTML = `
      <p class="kicker">Tick what you can actually do in a company</p>
      <h1>Skills outline</h1>
      <p class="lede">Copied from Microsoft’s study guide as of 30 June 2026. Open <strong>Lab</strong> under a skill for the pages to use in a sandbox. Related topics can still appear. Most items are GA; commonly used preview features can show up.</p>
      <div class="toolbar">
        <button class="btn ghost" type="button" id="clear-outline">Clear ticks</button>
        <span class="muted small" id="outline-count"></span>
      </div>
      ${html}
    `;
    const count = () => {
      const now = progress();
      document.querySelector("#outline-count").textContent = `${now.done} of ${now.skills.length} ticked`;
    };
    count();
    stage.querySelectorAll("[data-skill]").forEach((el) => {
      el.addEventListener("change", () => {
        state.checked[el.getAttribute("data-skill")] = el.checked;
        save(state);
        paintRail();
        count();
      });
    });
    document.querySelector("#clear-outline").addEventListener("click", () => {
      state.checked = {};
      save(state);
      render();
    });
    stage.querySelectorAll("[data-lab-btn]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-lab-btn");
        const panel = document.getElementById("lab-" + id);
        if (!panel) return;
        const open = panel.hasAttribute("hidden");
        if (open) panel.removeAttribute("hidden");
        else panel.setAttribute("hidden", "");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });
    const focusLab = route().params.get("lab");
    if (focusLab) {
      const el = document.getElementById("skill-" + focusLab);
      if (el) requestAnimationFrame(() => el.scrollIntoView({ block: "start" }));
    }
  };

  const notesIndex = () => {
    const byDomain = DATA.domains
      .map((d) => {
        const notes = DATA.notes.filter((n) => n.domain === d.id);
        const links = notes
          .map((n) => {
            const mark = state.notes[n.id] ? "studied" : "unread";
            return `<a href="#/notes/${n.id}"><span>${escapeHtml(n.title)}</span><span class="pct">${mark}</span></a>`;
          })
          .join("");
        return `<section style="margin-bottom:22px"><h2>${escapeHtml(d.name)}</h2><div class="toc">${links}</div></section>`;
      })
      .join("");
    stage.innerHTML = `
      <p class="kicker">Read traps first</p>
      <h1>Study notes</h1>
      <p class="lede">One sheet per skill group. Teaching notes from the published outline and Microsoft Learn — not a dump of live exam items.</p>
      ${byDomain}
    `;
  };

  const notePage = (id) => {
    const note = DATA.notes.find((n) => n.id === id);
    if (!note) return notesIndex();
    const domain = DATA.domains.find((d) => d.id === note.domain);
    const idx = DATA.notes.findIndex((n) => n.id === id);
    const prev = DATA.notes[idx - 1];
    const next = DATA.notes[idx + 1];
    const studied = state.notes[note.id];
    const qn = DATA.questions.filter((q) => q.group === note.id).length;
    stage.innerHTML = `
      <p class="kicker">${escapeHtml(domain.name)}</p>
      <h1>${escapeHtml(note.title)}</h1>
      <div class="toolbar">
        <button class="btn ${studied ? "ghost" : ""}" type="button" id="mark-note">${studied ? "Studied" : "Mark studied"}</button>
        ${prev ? `<a class="btn ghost" href="#/notes/${prev.id}">Previous</a>` : ""}
        ${next ? `<a class="btn ghost" href="#/notes/${next.id}">Next</a>` : ""}
        <a class="btn ghost" href="#/notes">All notes</a>
        ${qn ? `<a class="btn ghost" href="#/drill?group=${note.id}">Drill ${qn}</a>` : ""}
        ${note.learn ? `<a class="btn ghost" href="${escapeHtml(note.learn)}" target="_blank" rel="noopener">Microsoft Learn</a>` : ""}
      </div>
      <article class="card note-body">${note.html}</article>
    `;
    document.querySelector("#mark-note").addEventListener("click", () => {
      state.notes[note.id] = !state.notes[note.id];
      save(state);
      render();
    });
  };

  let cardIndex = 0;
  let cardFlipped = false;
  let cardDomain = "";

  const cardsInDomain = (domain) => {
    if (!domain) return DATA.cards.map((_, i) => i);
    return DATA.cards
      .map((c, i) => i)
      .filter((i) => {
        const g = DATA.cards[i].group;
        if (!g) return false;
        return DATA.notes.find((n) => n.id === g)?.domain === domain;
      });
  };

  const cards = () => {
    const { params } = route();
    cardDomain = params.get("domain") || "";
    const domainIdx = cardsInDomain(cardDomain);
    const unknown = domainIdx.filter((i) => !state.known[cardId(DATA.cards[i], i)]);
    const pool = unknown.length ? unknown : domainIdx.length ? domainIdx : DATA.cards.map((_, i) => i);
    if (!pool.includes(cardIndex)) cardIndex = pool[0];
    const card = DATA.cards[cardIndex];
    const knownN = DATA.cards.filter((c, i) => state.known[cardId(c, i)]).length;
    const g = card.group ? groupMeta(card.group) : null;
    stage.innerHTML = `
      <p class="kicker">Space to flip · 1 = know · 2 = again</p>
      <h1>Flashcards</h1>
      <p class="lede">${knownN} of ${DATA.cards.length} marked known. These are product facts from the skills outline — not exam admin. Unknown cards stay in the pile.</p>
      <div class="toolbar">
        <a class="btn ghost ${cardDomain ? "" : "on"}" href="#/cards">All</a>
        ${DATA.domains.map((d) => `<a class="btn ghost ${cardDomain === d.id ? "on" : ""}" href="#/cards?domain=${d.id}">${escapeHtml(DOMAIN_SHORT[d.id])}</a>`).join("")}
      </div>
      <article class="card flash" id="flash" tabindex="0">
        <div class="face">
          ${cardFlipped ? `<p class="muted small">Answer</p><div class="back">${escapeHtml(card.b)}</div>` : `<p class="muted small">${g ? escapeHtml(g.title) : "Prompt"}</p><h2>${escapeHtml(card.f)}</h2>`}
        </div>
      </article>
      <div class="toolbar" style="margin-top:14px">
        <button class="btn ghost" type="button" id="flip">Flip</button>
        <button class="btn" type="button" id="know">Know</button>
        <button class="btn ghost" type="button" id="again">Again</button>
        <button class="btn ghost" type="button" id="reset-cards">Reset known</button>
        <span class="muted small">${cardIndex + 1} / ${DATA.cards.length}${g ? ` · ${escapeHtml(g.title)}` : ""}</span>
      </div>
    `;
    const nextCard = (know) => {
      const id = cardId(card, cardIndex);
      if (know) state.known[id] = true;
      else delete state.known[id];
      save(state);
      const rest = pool.filter((i) => i !== cardIndex && !state.known[cardId(DATA.cards[i], i)]);
      const fallback = pool.filter((i) => i !== cardIndex);
      cardIndex = rest[0] ?? fallback[0] ?? cardIndex;
      cardFlipped = false;
      render();
    };
    document.querySelector("#flash").addEventListener("click", () => {
      cardFlipped = !cardFlipped;
      render();
    });
    document.querySelector("#flip").addEventListener("click", () => {
      cardFlipped = !cardFlipped;
      render();
    });
    document.querySelector("#know").addEventListener("click", () => nextCard(true));
    document.querySelector("#again").addEventListener("click", () => nextCard(false));
    document.querySelector("#reset-cards").addEventListener("click", () => {
      state.known = {};
      save(state);
      cardIndex = 0;
      cardFlipped = false;
      render();
    });
  };

  let drill = null;

  const drillKey = (params) =>
    `${params.get("domain") || "all"}|${params.get("group") || ""}|${params.get("misses") || ""}`;

  const startDrill = (opts) => {
    const domain = opts.domain || null;
    const group = opts.group || null;
    const misses = !!opts.misses;
    let bank = DATA.questions.slice();
    if (misses) {
      const set = new Set(state.misses);
      bank = DATA.questions.filter((q) => set.has(q.id));
      if (!bank.length) bank = DATA.questions.slice();
    } else if (group) {
      bank = DATA.questions.filter((q) => q.group === group);
    } else if (domain) {
      bank = DATA.questions.filter((q) => q.domain === domain);
    }
    const shuffled = bank
      .map((q) => ({ q, r: Math.random() }))
      .sort((a, b) => a.r - b.r)
      .map((x) => x.q);
    drill = {
      queue: shuffled,
      i: 0,
      picked: [],
      revealed: false,
      correct: 0,
      wrong: [],
      domain: misses ? "misses" : domain || "all",
      group: group || "",
      key: `${domain || "all"}|${group || ""}|${misses ? "1" : ""}`,
    };
  };

  const drillView = () => {
    const { params } = route();
    const key = drillKey(params);
    if (!drill || drill.key !== key) {
      startDrill({
        domain: params.get("domain"),
        group: params.get("group"),
        misses: params.get("misses") === "1",
      });
    }
    if (drill.i >= drill.queue.length) {
      const total = drill.queue.length;
      if (!drill.saved) {
        state.scores.push({ at: Date.now(), correct: drill.correct, total, domain: drill.domain, group: drill.group });
        drill.wrong.forEach((q) => {
          if (!state.misses.includes(q.id)) state.misses.push(q.id);
        });
        const wrongIds = new Set(drill.wrong.map((q) => q.id));
        drill.queue.forEach((q) => {
          if (wrongIds.has(q.id)) return;
          state.misses = state.misses.filter((id) => id !== q.id);
        });
        save(state);
        drill.saved = true;
      }
      const misses = drill.wrong.map((q) => `<li>${escapeHtml(q.q)}</li>`).join("");
      stage.innerHTML = `
        <p class="kicker">Session complete</p>
        <h1 class="score">${drill.correct} / ${total}</h1>
        <p class="lede">${total ? Math.round((100 * drill.correct) / total) : 0}% on original scenario items. These are not live exam questions.</p>
        <div class="toolbar">
          <button class="btn" type="button" id="again-drill">Drill again</button>
          <button class="btn ghost" type="button" id="miss-drill">Redo this session’s misses</button>
          <a class="btn ghost" href="#/drill?misses=1">All saved misses</a>
          <a class="btn ghost" href="#/notes">Back to notes</a>
        </div>
        ${drill.wrong.length ? `<h2>Review</h2><ul>${misses}</ul>` : `<p>Clean sheet. Take Microsoft’s official practice assessment next.</p>`}
      `;
      document.querySelector("#again-drill").addEventListener("click", () => {
        const { params: p } = route();
        startDrill({ domain: p.get("domain"), group: p.get("group"), misses: p.get("misses") === "1" });
        render();
      });
      document.querySelector("#miss-drill").addEventListener("click", () => {
        const miss = drill.wrong.slice();
        drill = {
          queue: miss.length ? miss : DATA.questions.slice(),
          i: 0,
          picked: [],
          revealed: false,
          correct: 0,
          wrong: [],
          domain: "misses",
          group: "",
          key: "all||1",
        };
        location.hash = "#/drill?misses=1";
      });
      return;
    }
    const q = drill.queue[drill.i];
    const multi = q.answer.length > 1;
    const choices = q.choices
      .map((c, i) => {
        let cls = "choice";
        if (drill.picked.includes(i)) cls += " picked";
        if (drill.revealed) {
          if (q.answer.includes(i)) cls += " right";
          else if (drill.picked.includes(i)) cls += " wrong";
        }
        return `<button class="${cls}" type="button" data-choice="${i}"><span class="key">${i + 1}</span> ${escapeHtml(c)}</button>`;
      })
      .join("");
    const domainName = DATA.domains.find((d) => d.id === q.domain)?.name || q.domain;
    const g = groupMeta(q.group);
    const activeDomain = params.get("domain") || "";
    const missMode = params.get("misses") === "1";
    const groupMode = params.get("group") || "";
    stage.innerHTML = `
      <p class="kicker">${escapeHtml(domainName)}${g ? " · " + escapeHtml(g.title) : ""} · ${drill.i + 1} of ${drill.queue.length}${multi ? " · select all that apply" : ""} · keys 1–${q.choices.length}, Enter to check</p>
      <h1>Practice drill</h1>
      <div class="toolbar">
        <a class="btn ghost ${!activeDomain && !missMode && !groupMode ? "on" : ""}" href="#/drill">All</a>
        ${DATA.domains.map((d) => `<a class="btn ghost ${activeDomain === d.id && !missMode && !groupMode ? "on" : ""}" href="#/drill?domain=${d.id}">${escapeHtml(DOMAIN_SHORT[d.id])}</a>`).join("")}
        <a class="btn ghost ${missMode ? "on" : ""}" href="#/drill?misses=1">Misses (${progress().missN})</a>
      </div>
      ${groupMode ? `<p class="small muted">Filtered to ${escapeHtml(g?.title || groupMode)}. <a href="#/drill">Clear filter</a></p>` : ""}
      <article class="card">
        <p>${escapeHtml(q.q)}</p>
        ${choices}
        ${drill.revealed ? `<div class="explain trap"><strong>Why</strong>${escapeHtml(q.why)}</div>` : ""}
      </article>
      <div class="toolbar" style="margin-top:14px">
        <button class="btn" type="button" id="check" ${drill.picked.length ? "" : "disabled"}>${drill.revealed ? "Next" : "Check"}</button>
        <span class="muted small">Score ${drill.correct} correct so far</span>
      </div>
    `;
    stage.querySelectorAll("[data-choice]").forEach((b) => {
      b.addEventListener("click", () => {
        if (drill.revealed) return;
        const i = Number(b.getAttribute("data-choice"));
        if (multi) {
          drill.picked = drill.picked.includes(i) ? drill.picked.filter((x) => x !== i) : drill.picked.concat(i);
        } else {
          drill.picked = [i];
        }
        render();
      });
    });
    document.querySelector("#check").addEventListener("click", () => {
      if (!drill.revealed) {
        const ok = drill.picked.length === q.answer.length && q.answer.every((a) => drill.picked.includes(a));
        if (ok) drill.correct += 1;
        else drill.wrong.push(q);
        drill.revealed = true;
        render();
      } else {
        drill.i += 1;
        drill.picked = [];
        drill.revealed = false;
        render();
      }
    });
  };

  const planView = () => {
    const target = state.planTarget || DATA.curriculum.defaultTarget;
    const sched = buildSchedule(target);
    const today = startOfDay(new Date());
    const sit = parseDay(target) || today;
    const days = daysBetween(today, sit);
    const current = sched.find((w) => w.now) || sched[sched.length - 1];
    const p = progress();
    const mocks = (state.scores || []).filter((s) => s.type === "mock");
    const lastMock = mocks.slice(-1)[0];
    const ready = [
      { label: "Notes", val: `${p.notesDone}/${DATA.notes.length}`, pct: p.notesPct },
      { label: "Cards", val: `${p.cardsKnown}/${DATA.cards.length}`, pct: p.cardsPct },
      { label: "Outline", val: `${p.done}/${p.skills.length}`, pct: p.skillPct },
      {
        label: "Last mock",
        val: lastMock ? String(lastMock.scaled) : "—",
        pct: lastMock ? Math.min(100, lastMock.scaled / 10) : 0,
      },
    ];

    const taskList = (mod) => {
      const st = moduleStats(mod);
      const tasks = [];
      (mod.groups || []).forEach((gid) => {
        const note = DATA.notes.find((n) => n.id === gid);
        if (!note) return;
        const on = !!state.notes[gid];
        tasks.push({
          id: `note-${gid}`,
          on,
          html: `${on ? "Notes read" : "Read notes"}: <a href="#/notes/${gid}">${escapeHtml(note.title)}</a>`,
        });
      });
      const domains = [...new Set((mod.groups || []).map((g) => DATA.notes.find((n) => n.id === g)?.domain).filter(Boolean))];
      domains.forEach((d) => {
        const n = DATA.cards.filter((c) => DATA.notes.find((x) => x.id === c.group)?.domain === d).length;
        if (!n) return;
        tasks.push({
          id: `cards-${d}`,
          on: false,
          html: `Flashcards: <a href="#/cards?domain=${d}">${escapeHtml(DOMAIN_SHORT[d] || d)}</a> (${n} in this domain)`,
        });
      });
      (mod.groups || []).forEach((gid) => {
        const qn = DATA.questions.filter((q) => q.group === gid).length;
        if (!qn) return;
        const g = groupMeta(gid);
        tasks.push({
          id: `drill-${gid}`,
          on: false,
          html: `Drill ${qn}: <a href="#/drill?group=${gid}">${escapeHtml(g ? g.title : gid)}</a>`,
        });
      });
      if (/mock/i.test(`${mod.id} ${mod.title}`)) {
        tasks.push({
          id: "mock",
          on: mocks.length > 0 && /first/i.test(mod.title) ? mocks.length >= 1 : /second/i.test(mod.title) ? mocks.length >= 2 : mocks.length > 0,
          html: `<a href="#/exam">Timed mock</a> — 40 items, 100 minutes${lastMock ? ` (last scaled ${lastMock.scaled})` : ""}`,
        });
        tasks.push({
          id: "misses",
          on: p.missN === 0 && mocks.length > 0,
          html: `<a href="#/drill?misses=1">Review the miss pile</a> (${p.missN})`,
        });
      }
      if (/practice|official/i.test(mod.title)) {
        tasks.push({
          id: "practice",
          on: !!(state.planDone[mod.id] || {}).practice,
          check: "practice",
          html: `<a href="${DATA.meta.practice}" target="_blank" rel="noopener">Microsoft’s free practice assessment</a>`,
        });
        tasks.push({
          id: "pearson",
          on: !!(state.planDone[mod.id] || {}).pearson,
          check: "pearson",
          html: `<a href="${DATA.meta.sandbox}" target="_blank" rel="noopener">Pearson exam sandbox</a> (aka.ms/examdemo)`,
        });
      }
      if (mod.kind === "exam" && /weak|gap/i.test(mod.id + mod.title)) {
        const unread = DATA.notes.filter((n) => !state.notes[n.id]);
        unread.slice(0, 6).forEach((n) => {
          tasks.push({ id: `gap-${n.id}`, on: false, html: `Unread: <a href="#/notes/${n.id}">${escapeHtml(n.title)}</a>` });
        });
        if (p.missN) tasks.push({ id: "gap-miss", on: false, html: `<a href="#/drill?misses=1">${p.missN} missed drills</a>` });
      }
      if (mod.sandbox) {
        tasks.push({
          id: "sandbox",
          on: st.sandbox,
          check: "sandbox",
          html: `<strong>Sandbox.</strong> ${escapeHtml(mod.sandbox)}`,
        });
      }
      return tasks;
    };

    const renderTasks = (mod) =>
      taskList(mod)
        .map((t) => {
          if (t.check) {
            return `<label class="task ${t.on ? "done" : ""}"><input type="checkbox" data-plan-mod="${escapeHtml(mod.id)}" data-plan-check="${t.check}" ${t.on ? "checked" : ""}><span>${t.html}</span></label>`;
          }
          return `<div class="task ${t.on ? "done" : ""}">${t.on ? "✓ " : ""}${t.html}</div>`;
        })
        .join("");

    const weekBlock = (mod, featured) => {
      const st = moduleStats(mod);
      const cls = ["card", "week-card", mod.now ? "now" : "", st.pct >= 85 ? "done" : "", mod.past && !mod.now ? "past" : ""]
        .filter(Boolean)
        .join(" ");
      return `
        <article class="${cls}" id="week-${mod.index}">
          <p class="kicker">${escapeHtml(mod.phase)} · week ${mod.index + 1} of ${sched.length}${mod.now ? " · this week" : ""}</p>
          <h2>${escapeHtml(mod.title)}</h2>
          <div class="week-meta">
            <span>${escapeHtml(fmtRange(mod.from, mod.to))}</span>
            <span>~${mod.hours || DATA.curriculum.hoursPerWeek} h</span>
            <span class="pct">${st.pct}%</span>
            ${st.notesTotal ? `<span>Notes ${st.notesDone}/${st.notesTotal}</span>` : ""}
            ${st.cardsTotal ? `<span>Cards ${st.cardsDone}/${st.cardsTotal}</span>` : ""}
          </div>
          <div class="bar"><span style="width:${st.pct}%"></span></div>
          <p>${escapeHtml(mod.focus || "")}</p>
          ${featured ? renderTasks(mod) : `<p class="small"><a href="#/plan">Open this week</a> to see tasks.</p>`}
        </article>`;
    };

    const timeline = sched
      .map((mod) => {
        const st = moduleStats(mod);
        const tone = mod.now ? "now" : st.pct >= 85 ? "ok" : "";
        return `<button type="button" class="cov-cell ${tone}" data-jump-week="${mod.index}">
          <span>W${mod.index + 1} ${escapeHtml(mod.title)}</span>
          <b>${st.pct}%</b>
        </button>`;
      })
      .join("");

    stage.innerHTML = `
      <p class="kicker">Guided path · sit by early February</p>
      <div class="plan-hero">
        <h1>Study plan</h1>
        <p class="days">${days >= 0 ? days : 0}</p>
        <p class="lede">${days >= 0 ? "days until your sitting date." : "Sitting date is in the past — pick a new one."} Default is Friday 5 February 2027. Change it if you book a different day. About ${DATA.curriculum.hoursPerWeek} hours a week, weighted toward financials and operations.</p>
      </div>
      <div class="toolbar">
        <label class="small">Sit date
          <input id="plan-target" type="date" value="${escapeHtml(fmtISO(sit))}" />
        </label>
        <span class="muted small">${sched.length} weeks from the Monday of this week through the week of the sitting.</span>
      </div>
      <div class="ready-grid" style="margin: 16px 0 22px">
        ${ready
          .map(
            (r) => `<article class="card"><div class="weight">${escapeHtml(r.label)}</div><h3>${escapeHtml(r.val)}</h3>
            <div class="domain-bar"><span style="width:${r.pct}%;background:var(--rust)"></span></div></article>`
          )
          .join("")}
      </div>
      <h2>This week</h2>
      ${weekBlock(current, true)}
      <h2 style="margin-top:28px">All weeks</h2>
      <p class="small muted">Learn setup → financials (posting groups get their own time) → inventory/pricing → operations → mocks. Extra calendar weeks become recap buffers so you are not cramming new topics in January.</p>
      <div class="cov">${timeline}</div>
      <div class="timeline">
        ${sched.map((m) => weekBlock(m, true)).join("")}
      </div>
      <footer class="tiny">Unofficial plan. Not affiliated with Microsoft. Confirm everything in a Business Central sandbox and on Microsoft Learn. Book from your own Learn profile.</footer>
    `;

    document.querySelector("#plan-target").addEventListener("change", (e) => {
      const v = e.target.value;
      if (!parseDay(v)) return;
      state.planTarget = v;
      save(state);
      render();
    });
    stage.querySelectorAll("[data-plan-check]").forEach((el) => {
      el.addEventListener("change", () => {
        const key = el.getAttribute("data-plan-check");
        const id = el.getAttribute("data-plan-mod");
        state.planDone[id] = Object.assign({}, state.planDone[id], { [key]: el.checked });
        save(state);
        render();
      });
    });
    stage.querySelectorAll("[data-jump-week]").forEach((b) => {
      b.addEventListener("click", () => {
        const el = document.getElementById(`week-${b.getAttribute("data-jump-week")}`);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  };

  const EXAM_LEN = DATA.meta.mockLength || 40;
  const EXAM_MIN = DATA.meta.mockMinutes || 100;
  const EXAM_QUOTAS = DATA.meta.mockQuotas || { setup: 9, fin: 13, trade: 5, ops: 13 };
  const PASS_SCALED = DATA.meta.passScaled || 700;

  let examReviewI = null;
  let examTick = null;

  const shuffle = (arr) =>
    arr
      .map((x) => ({ x, r: Math.random() }))
      .sort((a, b) => a.r - b.r)
      .map((o) => o.x);

  const answersMatch = (expected, picked) => {
    if (!Array.isArray(expected) || !Array.isArray(picked) || expected.length !== picked.length) return false;
    const a = expected.slice().sort((x, y) => x - y);
    const b = picked.slice().sort((x, y) => x - y);
    return a.every((v, i) => v === b[i]);
  };

  const drawExam = () => {
    const by = { setup: [], fin: [], trade: [], ops: [] };
    DATA.questions.forEach((q) => {
      if (by[q.domain]) by[q.domain].push(q.id);
    });
    const picked = [];
    const used = new Set();
    Object.keys(EXAM_QUOTAS).forEach((dom) => {
      const n = EXAM_QUOTAS[dom];
      shuffle(by[dom]).forEach((id) => {
        if (picked.length >= EXAM_LEN) return;
        if (used.has(id)) return;
        if (picked.filter((x) => DATA.questions.find((q) => q.id === x)?.domain === dom).length >= n) return;
        picked.push(id);
        used.add(id);
      });
    });
    if (picked.length < EXAM_LEN) {
      shuffle(DATA.questions.map((q) => q.id))
        .filter((id) => !used.has(id))
        .slice(0, EXAM_LEN - picked.length)
        .forEach((id) => picked.push(id));
    }
    return shuffle(picked).slice(0, EXAM_LEN);
  };

  const scoreExam = (exam) => {
    const items = exam.ids.map((id) => DATA.questions.find((q) => q.id === id)).filter(Boolean);
    const byDomain = {};
    DATA.domains.forEach((d) => {
      byDomain[d.id] = { id: d.id, name: d.name, color: d.color, weight: d.weight, n: 0, correct: 0 };
    });
    const wrongIds = [];
    let correct = 0;
    items.forEach((q) => {
      const ok = answersMatch(q.answer, exam.answers[q.id] || []);
      if (byDomain[q.domain]) {
        byDomain[q.domain].n += 1;
        if (ok) byDomain[q.domain].correct += 1;
      }
      if (ok) correct += 1;
      else wrongIds.push(q.id);
    });
    const total = items.length;
    const scaled = total ? Math.round((1000 * correct) / total) : 0;
    return { correct, total, scaled, pass: scaled >= PASS_SCALED, byDomain, wrongIds, at: Date.now() };
  };

  const persistExam = () => {
    save(state);
  };

  const startExam = () => {
    const now = Date.now();
    state.exam = {
      startedAt: now,
      endsAt: now + EXAM_MIN * 60 * 1000,
      ids: drawExam(),
      i: 0,
      answers: {},
      flagged: {},
      submitted: false,
      result: null,
    };
    examReviewI = null;
    persistExam();
  };

  const submitExam = () => {
    if (!state.exam || state.exam.submitted) return;
    const result = scoreExam(state.exam);
    state.exam.submitted = true;
    state.exam.result = result;
    result.wrongIds.forEach((id) => {
      if (!state.misses.includes(id)) state.misses.push(id);
    });
    state.exam.ids.forEach((id) => {
      if (result.wrongIds.includes(id)) return;
      state.misses = state.misses.filter((m) => m !== id);
    });
    state.scores.push({
      type: "mock",
      at: result.at,
      correct: result.correct,
      total: result.total,
      scaled: result.scaled,
      domain: "mock",
    });
    persistExam();
    examReviewI = null;
    if (examTick) {
      clearInterval(examTick);
      examTick = null;
    }
    render();
  };

  const abandonExam = () => {
    state.exam = null;
    examReviewI = null;
    persistExam();
    if (examTick) {
      clearInterval(examTick);
      examTick = null;
    }
    render();
  };

  const ensureExamTick = () => {
    if (examTick) return;
    examTick = setInterval(() => {
      if (!state.exam || state.exam.submitted) {
        clearInterval(examTick);
        examTick = null;
        paintRail();
        return;
      }
      if (Date.now() >= state.exam.endsAt) {
        submitExam();
        return;
      }
      const el = document.querySelector("#exam-clock");
      const ms = examRemaining();
      if (el) {
        el.textContent = fmtMmSs(ms);
        el.classList.toggle("low", ms < 5 * 60 * 1000);
      }
      paintRail();
    }, 1000);
  };

  const qnavHtml = (exam, current) => {
    const cells = exam.ids
      .map((id, i) => {
        const answered = (exam.answers[id] || []).length > 0;
        const flagged = !!exam.flagged[id];
        const cls = ["qnav-i", i === current ? "current" : "", answered ? "answered" : "", flagged ? "flagged" : ""]
          .filter(Boolean)
          .join(" ");
        return `<button class="${cls}" type="button" data-jump="${i}" aria-label="Question ${i + 1}">${i + 1}</button>`;
      })
      .join("");
    return `
      <p class="legend"><i class="answered"></i> answered <i class="flagged"></i> flagged <i class="current"></i> current</p>
      <div class="qnav">${cells}</div>`;
  };

  const bindQnav = () => {
    stage.querySelectorAll("[data-jump]").forEach((b) => {
      b.addEventListener("click", () => {
        if (!state.exam) return;
        state.exam.i = Number(b.getAttribute("data-jump"));
        examReviewI = state.exam.submitted ? state.exam.i : null;
        persistExam();
        render();
      });
    });
  };

  const examIntro = () => {
    const last = (state.scores || []).filter((s) => s.type === "mock").slice(-1)[0];
    const inProgress = state.exam && !state.exam.submitted;
    const done = state.exam && state.exam.submitted;
    stage.innerHTML = `
      <p class="kicker">Timed sitting · ${EXAM_LEN} items · ${EXAM_MIN} minutes</p>
      <h1>Mock exam</h1>
      <p class="lede">A domain-weighted draw from the original drill bank. No feedback until you submit. This is not Microsoft’s exam and the 700-point scale here is linear (raw percent × 10), not Pearson’s formula.</p>
      <div class="grid two">
        <article class="card">
          <h3>Blueprint mix</h3>
          <ul>
            ${DATA.domains
              .map((d) => `<li>${escapeHtml(d.name)} (${escapeHtml(d.weight)}) → <strong>${EXAM_QUOTAS[d.id]}</strong> items</li>`)
              .join("")}
          </ul>
          <p class="small muted">Items are shuffled. Multi-select must match exactly. Unanswered counts as wrong.</p>
        </article>
        <article class="card">
          <h3>During the sitting</h3>
          <ul>
            <li>Flag, skip, jump the 40-cell grid.</li>
            <li>Keys: 1–9 pick, N / P next-prev, F flag.</li>
            <li>Timer is wall-clock. Refresh keeps remaining time.</li>
            <li>At 0:00 the paper is submitted as-is.</li>
          </ul>
        </article>
      </div>
      <div class="toolbar" style="margin-top:18px">
        ${inProgress ? `<button class="btn" type="button" id="resume-exam">Resume (${fmtMmSs(examRemaining())} left)</button>` : ""}
        ${done ? `<button class="btn" type="button" id="review-exam">Review last score</button>` : ""}
        <button class="btn ${inProgress || done ? "ghost" : ""}" type="button" id="begin-exam">${inProgress || done ? "Start a new mock" : "Begin mock"}</button>
        ${inProgress ? `<button class="btn ghost" type="button" id="abandon-exam">Abandon</button>` : ""}
      </div>
      ${last ? `<p class="muted small">Last mock: scaled ${last.scaled} (${last.correct}/${last.total}) on ${escapeHtml(fmtWhen(last.at))}.</p>` : ""}
      <footer class="tiny">Unofficial. Not affiliated with Microsoft. Sit Microsoft’s free practice assessment before you book.</footer>
    `;
    document.querySelector("#begin-exam").addEventListener("click", () => {
      if (inProgress && !confirm("Start a new mock? The in-progress sitting will be discarded.")) return;
      startExam();
      render();
    });
    document.querySelector("#resume-exam")?.addEventListener("click", () => {
      examReviewI = null;
      render();
    });
    document.querySelector("#review-exam")?.addEventListener("click", () => {
      examReviewI = null;
      render();
    });
    document.querySelector("#abandon-exam")?.addEventListener("click", () => {
      if (confirm("Abandon this sitting? Answers are discarded.")) abandonExam();
    });
  };

  const examTaking = () => {
    ensureExamTick();
    const exam = state.exam;
    if (Date.now() >= exam.endsAt) {
      submitExam();
      return;
    }
    const q = DATA.questions.find((x) => x.id === exam.ids[exam.i]);
    if (!q) {
      stage.innerHTML = `<p>This sitting referenced a question that is no longer in the bank. <button class="btn" type="button" id="abandon-exam">Close</button></p>`;
      document.querySelector("#abandon-exam").addEventListener("click", abandonExam);
      return;
    }
    const picked = exam.answers[q.id] || [];
    const multi = q.answer.length > 1;
    const ms = examRemaining();
    const answeredN = exam.ids.filter((id) => (exam.answers[id] || []).length).length;
    const choices = q.choices
      .map((c, i) => {
        const on = picked.includes(i) ? " picked" : "";
        return `<button class="choice${on}" type="button" data-choice="${i}"><span class="key">${i + 1}</span> ${escapeHtml(c)}</button>`;
      })
      .join("");
    stage.innerHTML = `
      <div class="group-head">
        <p class="kicker">Item ${exam.i + 1} of ${exam.ids.length}${multi ? " · select all that apply" : ""}</p>
        <span id="exam-clock" class="exam-clock ${ms < 5 * 60 * 1000 ? "low" : ""}">${fmtMmSs(ms)}</span>
      </div>
      <h1>Mock exam</h1>
      ${qnavHtml(exam, exam.i)}
      <article class="card">
        <p>${escapeHtml(q.q)}</p>
        ${choices}
      </article>
      <div class="toolbar" style="margin-top:14px">
        <button class="btn ghost" type="button" id="exam-prev" ${exam.i === 0 ? "disabled" : ""}>Previous</button>
        <button class="btn" type="button" id="exam-next">${exam.i === exam.ids.length - 1 ? "Review grid" : "Next"}</button>
        <button class="btn ghost ${exam.flagged[q.id] ? "on" : ""}" type="button" id="exam-flag">${exam.flagged[q.id] ? "Flagged" : "Flag"}</button>
        <button class="btn ghost" type="button" id="exam-submit">Submit</button>
        <button class="btn ghost" type="button" id="exam-quit">Quit</button>
        <span class="muted small">${answeredN} answered · ${Object.keys(exam.flagged).filter((k) => exam.flagged[k]).length} flagged</span>
      </div>
      <p class="small muted">No answer key until you submit. Flag anything you want to revisit.</p>
    `;
    bindQnav();
    stage.querySelectorAll("[data-choice]").forEach((b) => {
      b.addEventListener("click", () => {
        const i = Number(b.getAttribute("data-choice"));
        const cur = (state.exam.answers[q.id] || []).slice();
        let next;
        if (multi) next = cur.includes(i) ? cur.filter((x) => x !== i) : cur.concat(i);
        else next = [i];
        if (!next.length) delete state.exam.answers[q.id];
        else state.exam.answers[q.id] = next;
        persistExam();
        render();
      });
    });
    document.querySelector("#exam-prev").addEventListener("click", () => {
      if (state.exam.i > 0) state.exam.i -= 1;
      persistExam();
      render();
    });
    document.querySelector("#exam-next").addEventListener("click", () => {
      if (state.exam.i < state.exam.ids.length - 1) state.exam.i += 1;
      persistExam();
      render();
    });
    document.querySelector("#exam-flag").addEventListener("click", () => {
      if (state.exam.flagged[q.id]) delete state.exam.flagged[q.id];
      else state.exam.flagged[q.id] = true;
      persistExam();
      render();
    });
    document.querySelector("#exam-submit").addEventListener("click", () => {
      const blank = exam.ids.filter((id) => !(exam.answers[id] || []).length).length;
      const msg = blank
        ? `${blank} item(s) unanswered. Unanswered count as wrong. Submit anyway?`
        : "Submit this mock? You cannot change answers after this.";
      if (confirm(msg)) submitExam();
    });
    document.querySelector("#exam-quit").addEventListener("click", () => {
      if (confirm("Quit this sitting without scoring? Answers are discarded.")) abandonExam();
    });
  };

  const examReport = () => {
    const exam = state.exam;
    const r = exam.result || scoreExam(exam);
    const hero = r.pass ? "pass" : "fail";
    const domains = DATA.domains
      .map((d) => {
        const row = r.byDomain[d.id] || { n: 0, correct: 0 };
        const pct = row.n ? Math.round((100 * row.correct) / row.n) : 0;
        return `
          <div class="domain-score">
            <div class="row"><strong>${escapeHtml(d.name)}</strong><span class="pct">${row.correct}/${row.n} · ${pct}%</span></div>
            <div class="domain-bar"><span style="width:${pct}%;background:${d.color}"></span></div>
            <p class="small muted">Exam weight ${escapeHtml(d.weight)} · ${EXAM_QUOTAS[d.id]} items in this mock</p>
          </div>`;
      })
      .join("");
    const misses = r.wrongIds
      .map((id) => {
        const q = DATA.questions.find((x) => x.id === id);
        if (!q) return "";
        const g = groupMeta(q.group);
        const idx = exam.ids.indexOf(id);
        return `<li><a href="#/exam" data-review="${idx}">${escapeHtml(q.q)}</a>
          <div class="small muted">${g ? escapeHtml(g.title) : q.group} · <a href="#/notes/${q.group}">notes</a></div></li>`;
      })
      .join("");
    stage.innerHTML = `
      <p class="kicker">Session complete · linear scale</p>
      <article class="card report-hero ${hero}">
        <p class="muted small">${r.pass ? "At or above 700 on this linear scale" : "Below 700 on this linear scale"}</p>
        <h1 class="score">${r.scaled}</h1>
        <p>${r.correct} / ${r.total} correct (${r.total ? Math.round((100 * r.correct) / r.total) : 0}%). Microsoft’s real score is scaled; 70% here is 700, and is not a Pearson prediction.</p>
      </article>
      <h2 style="margin-top:22px">By domain</h2>
      ${domains}
      <h2 style="margin-top:22px">${r.wrongIds.length ? "Misses" : "Clean sheet"}</h2>
      ${r.wrongIds.length ? `<ul>${misses}</ul>` : `<p>No misses. Take Microsoft’s official practice assessment next.</p>`}
      <div class="toolbar" style="margin-top:18px">
        <button class="btn" type="button" id="review-first">Review items</button>
        <button class="btn ghost" type="button" id="begin-exam">New mock</button>
        <a class="btn ghost" href="#/drill?misses=1">Drill misses</a>
        <a class="btn ghost" href="#/">Desk</a>
      </div>
      ${qnavHtml(exam, -1)}
    `;
    bindQnav();
    document.querySelector("#review-first").addEventListener("click", () => {
      examReviewI = 0;
      render();
    });
    document.querySelector("#begin-exam").addEventListener("click", () => {
      startExam();
      render();
    });
    stage.querySelectorAll("[data-review]").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        examReviewI = Number(a.getAttribute("data-review"));
        render();
      });
    });
  };

  const examReviewItem = () => {
    const exam = state.exam;
    const r = exam.result || scoreExam(exam);
    if (examReviewI == null || examReviewI < 0) examReviewI = 0;
    if (examReviewI >= exam.ids.length) {
      examReviewI = null;
      return examReport();
    }
    const q = DATA.questions.find((x) => x.id === exam.ids[examReviewI]);
    const picked = exam.answers[q.id] || [];
    const ok = answersMatch(q.answer, picked);
    const g = groupMeta(q.group);
    const choices = q.choices
      .map((c, i) => {
        let cls = "choice";
        if (picked.includes(i)) cls += " picked";
        if (q.answer.includes(i)) cls += " right";
        else if (picked.includes(i)) cls += " wrong";
        return `<button class="${cls}" type="button" disabled><span class="key">${i + 1}</span> ${escapeHtml(c)}</button>`;
      })
      .join("");
    stage.innerHTML = `
      <p class="kicker">Review ${examReviewI + 1} of ${exam.ids.length} · ${ok ? "correct" : "incorrect"}</p>
      <h1>Mock exam</h1>
      ${qnavHtml(exam, examReviewI)}
      <article class="card">
        <p>${escapeHtml(q.q)}</p>
        ${choices}
        <div class="explain ${ok ? "ok" : "trap"}"><strong>Why</strong>${escapeHtml(q.why)}</div>
      </article>
      <div class="toolbar" style="margin-top:14px">
        <button class="btn ghost" type="button" id="exam-prev" ${examReviewI === 0 ? "disabled" : ""}>Previous</button>
        <button class="btn" type="button" id="exam-next">${examReviewI === exam.ids.length - 1 ? "Back to report" : "Next"}</button>
        ${g ? `<a class="btn ghost" href="#/notes/${q.group}">Notes: ${escapeHtml(g.title)}</a>` : ""}
        <button class="btn ghost" type="button" id="back-report">Score report</button>
      </div>
    `;
    bindQnav();
    document.querySelector("#exam-prev").addEventListener("click", () => {
      examReviewI = Math.max(0, examReviewI - 1);
      render();
    });
    document.querySelector("#exam-next").addEventListener("click", () => {
      if (examReviewI >= exam.ids.length - 1) {
        examReviewI = null;
      } else examReviewI += 1;
      render();
    });
    document.querySelector("#back-report").addEventListener("click", () => {
      examReviewI = null;
      render();
    });
  };

  const examView = () => {
    if (!state.exam) return examIntro();
    if (state.exam.submitted) {
      if (examReviewI == null) return examReport();
      return examReviewItem();
    }
    return examTaking();
  };

  window.MB800Exam = { drawExam, scoreExam, answersMatch, EXAM_QUOTAS, EXAM_LEN, PASS_SCALED };
  window.MB800Plan = { buildSchedule, packCurriculum, moduleStats, parseDay };

  const links = () => {
    const items = DATA.resources
      .map(
        (r) => `
        <article class="card">
          <h3><a href="${r.href}" target="_blank" rel="noopener">${escapeHtml(r.name)}</a></h3>
          <p class="small">${escapeHtml(r.note)}</p>
        </article>`
      )
      .join("");
    stage.innerHTML = `
      <p class="kicker">Go to the source</p>
      <h1>Official links</h1>
      <p class="lede">Use this desk to drill. Use Microsoft Learn to confirm. Book the exam from your Learn profile with a personal MSA so the record stays yours.</p>
      <div class="grid two">${items}</div>
      <footer class="tiny">Languages listed by Microsoft: ${escapeHtml(DATA.meta.languages)}. First retake after 24 hours. Price depends on the country where the exam is proctored.</footer>
    `;
  };

  let traceOpen = false;
  let traceSeen = "";

  const posted = () => {
    const traces = DATA.traces || [];
    const { parts } = route();
    let idx = Math.max(0, traces.findIndex((t) => t.id === parts[1]));
    if (!traces.length) {
      stage.innerHTML = `<h1>Where did it post?</h1><p>No documents loaded.</p>`;
      return;
    }
    if (idx < 0) idx = 0;
    const t = traces[idx];
    if (traceSeen !== t.id) {
      traceSeen = t.id;
      traceOpen = false;
    }
    const prev = traces[idx - 1];
    const next = traces[idx + 1];
    const marked = traces.filter((row) => state.traced[row.id]).length;
    const hits = t.hits
      .map((hit) => {
        const answer = traceOpen
          ? `<div class="trace-answer">
              <p><strong>List.</strong> ${escapeHtml(hit.list)}</p>
              <p><strong>Account.</strong> ${escapeHtml(hit.account)}</p>
              <p><strong>Setup page.</strong> ${escapeHtml(hit.page)}</p>
            </div>`
          : `<p class="muted small">Which list, which account, and which setup page?</p>`;
        return `<section class="trace-hit"><h3>${escapeHtml(hit.what)}</h3>${answer}</section>`;
      })
      .join("");
    const jump = traces
      .map((row, i) => {
        const mark = state.traced[row.id] ? " · traced" : "";
        const here = i === idx ? " here" : "";
        return `<a class="${here.trim()}" href="#/posted/${row.id}">${escapeHtml(row.title)}<span class="pct">${i + 1}${mark}</span></a>`;
      })
      .join("");
    stage.innerHTML = `
      <p class="kicker">Document ${idx + 1} of ${traces.length} · ${marked} traced</p>
      <h1>${escapeHtml(t.title)}</h1>
      <p class="lede">${escapeHtml(t.scene)}</p>
      <article class="card">${hits}</article>
      ${traceOpen && t.not ? `<div class="trap"><strong>Not this</strong>${escapeHtml(t.not)}</div>` : ""}
      <div class="toolbar">
        ${prev ? `<a class="btn ghost" href="#/posted/${prev.id}">Previous</a>` : `<button class="btn ghost" type="button" disabled>Previous</button>`}
        <button class="btn" type="button" id="trace-show"${traceOpen ? " disabled" : ""}>${traceOpen ? "Posting is open" : "Show the posting"}</button>
        ${next ? `<a class="btn ghost" id="trace-next" href="#/posted/${next.id}">Next</a>` : `<button class="btn ghost" type="button" disabled>Next</button>`}
      </div>
      <label class="skill-item"><input type="checkbox" id="trace-mark" ${state.traced[t.id] ? "checked" : ""}><span>I could name these before I looked</span></label>
      <h2>All documents</h2>
      <div class="toc">${jump}</div>
      <footer class="tiny">No tax and no discounts. Item cost is posted to the G/L. Confirm a real posting with Find entries in a sandbox.</footer>
    `;
    document.querySelector("#trace-show").addEventListener("click", () => {
      traceOpen = true;
      posted();
      paintRail();
    });
    document.querySelector("#trace-mark").addEventListener("change", (e) => {
      state.traced[t.id] = e.target.checked;
      save(state);
      posted();
      paintRail();
    });
  };

  const alikeSeen = { id: "", open: false };
  const pageSeen = { id: "", open: false };

  const deck = (cfg) => {
    const rows = cfg.rows;
    const { parts } = route();
    let idx = rows.findIndex((row) => row.id === parts[1]);
    if (!rows.length) {
      stage.innerHTML = `<h1>${escapeHtml(cfg.heading)}</h1><p>Nothing loaded.</p>`;
      return;
    }
    if (idx < 0) idx = 0;
    const row = rows[idx];
    if (cfg.seen.id !== row.id) {
      cfg.seen.id = row.id;
      cfg.seen.open = false;
    }
    const prev = rows[idx - 1];
    const next = rows[idx + 1];
    const store = state[cfg.store];
    const marked = rows.filter((item) => store[item.id]).length;
    const jump = rows
      .map((item, i) => {
        const mark = store[item.id] ? " · done" : "";
        const here = i === idx ? " here" : "";
        return `<a class="${here.trim()}" href="#/${cfg.route}/${item.id}">${escapeHtml(item.title)}<span class="pct">${i + 1}${mark}</span></a>`;
      })
      .join("");
    stage.innerHTML = `
      <p class="kicker">${escapeHtml(cfg.unit)} ${idx + 1} of ${rows.length} · ${marked} done</p>
      <h1>${escapeHtml(row.title)}</h1>
      ${cfg.body(row, cfg.seen.open)}
      <div class="toolbar">
        ${prev ? `<a class="btn ghost" href="#/${cfg.route}/${prev.id}">Previous</a>` : `<button class="btn ghost" type="button" disabled>Previous</button>`}
        <button class="btn" type="button" id="deck-show"${cfg.seen.open ? " disabled" : ""}>${cfg.seen.open ? escapeHtml(cfg.shown) : escapeHtml(cfg.show)}</button>
        ${next ? `<a class="btn ghost" id="deck-next" href="#/${cfg.route}/${next.id}">Next</a>` : `<button class="btn ghost" type="button" disabled>Next</button>`}
      </div>
      <label class="skill-item"><input type="checkbox" id="deck-mark" ${store[row.id] ? "checked" : ""}><span>${escapeHtml(cfg.mark)}</span></label>
      <h2>${escapeHtml(cfg.listTitle)}</h2>
      <div class="toc">${jump}</div>
      <footer class="tiny">${escapeHtml(cfg.footer)}</footer>
    `;
    document.querySelector("#deck-show").addEventListener("click", () => {
      cfg.seen.open = true;
      cfg.render();
      paintRail();
    });
    document.querySelector("#deck-mark").addEventListener("change", (e) => {
      store[row.id] = e.target.checked;
      save(state);
      cfg.render();
      paintRail();
    });
  };

  const alike = () =>
    deck({
      rows: DATA.pairs || [],
      route: "alike",
      store: "alike",
      seen: alikeSeen,
      unit: "Pair",
      heading: "Look-alikes",
      show: "Show the difference",
      shown: "Difference is open",
      mark: "I could separate these before I looked",
      listTitle: "All pairs",
      footer: "Say the job of each name before you open the difference.",
      render: alike,
      body: (row, open) => {
        const names = row.names
          .map((item) =>
            open
              ? `<section class="trace-hit"><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.does)}</p></section>`
              : `<p class="pair-name">${escapeHtml(item.name)}</p>`
          )
          .join("");
        const lead = open
          ? `<div class="trap"><strong>The split</strong>${escapeHtml(row.split)}</div>`
          : `<p class="lede">Say what each one does.</p>`;
        return `${lead}<article class="card">${names}</article>`;
      },
    });

  const whichPage = () =>
    deck({
      rows: DATA.fixes || [],
      route: "page",
      store: "pages",
      seen: pageSeen,
      unit: "Problem",
      heading: "Which page",
      show: "Show the page",
      shown: "Page is open",
      mark: "I knew the page before I looked",
      listTitle: "All problems",
      footer: "Name the page you would open. Then check it.",
      render: whichPage,
      body: (row, open) => {
        const answer = open
          ? `<div class="trace-answer">
              <p><strong>Page.</strong> ${escapeHtml(row.page)}</p>
              <p><strong>Do.</strong> ${escapeHtml(row.why)}</p>
            </div>
            <div class="trap"><strong>Not this</strong>${escapeHtml(row.not)}</div>`
          : `<p class="muted">Which page do you open?</p>`;
        return `<p class="lede">${escapeHtml(row.scene)}</p><article class="card">${answer}</article>`;
      },
    });

  const searchView = (q) => {
    const needle = q.trim().toLowerCase();
    if (!needle) return home();
    const hits = [];
    DATA.notes.forEach((n) => {
      const blob = (n.title + " " + n.html.replace(/<[^>]+>/g, " ")).toLowerCase();
      if (blob.includes(needle)) hits.push({ kind: "Note", title: n.title, href: `#/notes/${n.id}` });
    });
    allSkills().forEach((s) => {
      const index = Number(s.id.slice(s.id.lastIndexOf(".") + 1));
      const lab = labFor(s.groupId, index);
      const blob = (s.text + " " + s.group + " " + labText(lab)).toLowerCase();
      if (!blob.includes(needle)) return;
      const inTitle = s.text.toLowerCase().includes(needle) || s.group.toLowerCase().includes(needle);
      hits.push({
        kind: inTitle ? "Skill" : "Lab",
        title: s.text,
        href: `#/outline?lab=${encodeURIComponent(s.id)}`,
      });
    });
    DATA.cards.forEach((c) => {
      if ((c.f + " " + c.b).toLowerCase().includes(needle)) {
        hits.push({ kind: "Card", title: c.f, href: "#/cards" });
      }
    });
    (DATA.pairs || []).forEach((row) => {
      const blob = [row.title, row.split, ...(row.names || []).flatMap((n) => [n.name, n.does])].join(" ").toLowerCase();
      if (blob.includes(needle)) hits.push({ kind: "Look-alike", title: row.title, href: `#/alike/${row.id}` });
    });
    (DATA.fixes || []).forEach((row) => {
      const blob = [row.title, row.scene, row.page, row.why, row.not].join(" ").toLowerCase();
      if (blob.includes(needle)) hits.push({ kind: "Which page", title: row.title, href: `#/page/${row.id}` });
    });
    (DATA.traces || []).forEach((t) => {
      const blob = [t.title, t.scene, t.not, ...(t.hits || []).flatMap((h) => [h.what, h.list, h.account, h.page])]
        .join(" ")
        .toLowerCase();
      if (blob.includes(needle)) hits.push({ kind: "Posting", title: t.title, href: `#/posted/${t.id}` });
    });
    DATA.questions.forEach((qn) => {
      const blob = (qn.q + " " + (qn.why || "") + " " + (qn.choices || []).join(" ")).toLowerCase();
      if (blob.includes(needle)) hits.push({ kind: "Drill", title: qn.q, href: `#/drill?group=${qn.group || ""}` });
    });
    stage.innerHTML = `
      <p class="kicker">Search</p>
      <h1>${hits.length} matches for “${escapeHtml(q)}”</h1>
      ${
        hits
          .slice(0, 50)
          .map((h) => `<div class="search-hit"><span class="tag">${escapeHtml(h.kind)}</span><a href="${h.href}">${escapeHtml(h.title)}</a></div>`)
          .join("") || "<p>Nothing matched.</p>"
      }
    `;
  };

  const render = () => {
    const { parts } = route();
    const q = searchInput.value;
    if (searchInput.dataset.mode === "on" && q.trim()) {
      searchView(q);
      paintRail();
      return;
    }
    const head = parts[0] || "";
    if (!head) home();
    else if (head === "outline") outline();
    else if (head === "notes" && parts[1]) notePage(parts[1]);
    else if (head === "notes") notesIndex();
    else if (head === "posted") posted();
    else if (head === "alike") alike();
    else if (head === "page") whichPage();
    else if (head === "cards") cards();
    else if (head === "drill") drillView();
    else if (head === "exam") examView();
    else if (head === "plan") planView();
    else if (head === "links") links();
    else home();
    paintRail();
    if (state.exam && !state.exam.submitted) ensureExamTick();
  };

  window.addEventListener("hashchange", () => {
    searchInput.dataset.mode = "";
    const { parts } = route();
    if (parts[0] !== "drill") drill = null;
    render();
    window.scrollTo(0, 0);
  });
  searchInput.addEventListener("input", () => {
    searchInput.dataset.mode = searchInput.value.trim() ? "on" : "";
    render();
  });
  document.addEventListener("keydown", (e) => {
    if (e.target && (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")) return;
    const { parts } = route();
    if (parts[0] === "posted" || parts[0] === "alike" || parts[0] === "page") {
      const nextId = parts[0] === "posted" ? "#trace-next" : "#deck-next";
      const showId = parts[0] === "posted" ? "#trace-show" : "#deck-show";
      if (e.key === "n" || e.key === "N" || e.key === "ArrowRight") {
        e.preventDefault();
        document.querySelector(nextId)?.click();
      }
      if (e.key === "Enter") {
        const show = document.querySelector(showId);
        if (show && !show.disabled) {
          e.preventDefault();
          show.click();
        }
      }
    }
    if (parts[0] === "cards") {
      if (e.key === " ") {
        e.preventDefault();
        cardFlipped = !cardFlipped;
        render();
      }
      if (e.key === "1") document.querySelector("#know")?.click();
      if (e.key === "2") document.querySelector("#again")?.click();
    }
    if (parts[0] === "drill") {
      if (e.key >= "1" && e.key <= "9") {
        const btn = document.querySelector(`[data-choice="${Number(e.key) - 1}"]`);
        if (btn) {
          e.preventDefault();
          btn.click();
        }
      }
      if (e.key === "Enter") {
        const check = document.querySelector("#check");
        if (check && !check.disabled) {
          e.preventDefault();
          check.click();
        }
      }
    }
    if (parts[0] === "exam") {
      if (e.key >= "1" && e.key <= "9") {
        const btn = document.querySelector(`[data-choice="${Number(e.key) - 1}"]`);
        if (btn && !btn.disabled) {
          e.preventDefault();
          btn.click();
        }
      }
      const next = e.key === "n" || e.key === "N" || e.key === "ArrowRight";
      const prev = e.key === "p" || e.key === "P" || e.key === "ArrowLeft";
      if (next) {
        e.preventDefault();
        document.querySelector("#exam-next")?.click();
      }
      if (prev) {
        e.preventDefault();
        document.querySelector("#exam-prev")?.click();
      }
      if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        document.querySelector("#exam-flag")?.click();
      }
    }
  });
  if (state.exam && !state.exam.submitted && Date.now() >= state.exam.endsAt) submitExam();
  else render();
})();
