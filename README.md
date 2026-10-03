# Open Period — MB-800 study desk

Unofficial study page for **Exam MB-800: Microsoft Dynamics 365 Business Central Functional Consultant**.

Mapped to Microsoft’s skills measured **as of 30 June 2026**. Not affiliated with Microsoft. Practice items are original — not exam dumps.

## What’s in it

- Full official outline (123 bullets) with ticks stored in this browser
- 22 study notes (one per skill group), each with a Microsoft Learn link
- 107 flashcards of need-to-know product facts (`Space` flip, `1` know, `2` again; filter by domain)
- 80 original scenario drills covering every skill group (`1–9` pick, `Enter` check)
- Timed mock exam: 40 items, 100 minutes, domain-weighted, flag/skip, linear 700-scale report
- Guided study plan to an early-February sitting (default Fri 5 Feb 2027), ~6 h/week, wired to notes/cards/drills/mock
- Miss pile, recent scores, coverage grid, progress export/import
- Official Learn / practice assessment / sandbox links

Progress key: `localStorage["openperiod.mb800.v1"]`.

## Run

Colophon stays on **5173**. This desk listens on **8000**.

```bash
python3 -m http.server 8000 --bind 0.0.0.0 --directory /home/ubuntu/mb800
```

Open:

- http://127.0.0.1:8000/
- http://192.168.99.39:8000/ from another machine on the LAN
