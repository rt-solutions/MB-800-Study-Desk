window.MB800 = {
  meta: {
    exam: "MB-800",
    title: "Microsoft Dynamics 365 Business Central Functional Consultant",
    credential: "Microsoft Certified: Dynamics 365 Business Central Functional Consultant Associate",
    skillsAsOf: "2026-06-30",
    duration: "100 minutes",
    pass: "700 / 1000 (scaled)",
    renewal: "12 months, free online assessment on Microsoft Learn",
    languages: "English, Japanese, Chinese (Simplified), German, French, Spanish, Portuguese (Brazil), Arabic (Saudi Arabia)",
    retake: "24 hours after the first fail; later waits follow Microsoft’s retake policy",
    officialGuide: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/mb-800",
    officialCert: "https://learn.microsoft.com/en-us/credentials/certifications/d365-business-central-functional-consultant-associate/",
    practice: "https://learn.microsoft.com/en-us/credentials/certifications/d365-business-central-functional-consultant-associate/practice/assessment?assessment-type=practice&assessmentId=109&practice-assessment-type=certification",
    sandbox: "https://aka.ms/examdemo",
    docs: "https://learn.microsoft.com/en-us/dynamics365/business-central/",
    mockLength: 40,
    mockMinutes: 100,
    mockQuotas: { setup: 9, fin: 13, trade: 5, ops: 13 },
    passScaled: 700,
  },
  changelog: [
    { area: "Audience profile", change: "Minor. Copilot and built-in agents called out; integrations with Microsoft 365, Power Platform, and Dynamics 365 remain in the audience profile even though the integrations skill area is gone." },
    { area: "Set up Business Central", change: "Weight decreased to 20–25%. Core functionality is a major rewrite (Copilot and agents). Company, security, and dimensions are minor. “Describe Business Central integrations with other products” removed as a skill area." },
    { area: "Configure financials", change: "Weight unchanged (30–35%). Minor wording on chart of accounts, posting groups, journals/bank, accounts receivable, and fixed assets." },
    { area: "Configure sales and purchasing", change: "Still 10–15%. No structural change on the June 2026 change log — still inventory, sales/purchasing master data, and prices/discounts." },
    { area: "Perform Business Central operations", change: "Weight increased to 30–35%. Basic tasks expanded (major). “Process payments and journals” renamed/expanded to “Process journals and payments” (major) — bank rec, allocations, FX, Dimension Correction Tool, revalue G/L. Process inventory transactions is new." },
  ],
  domains: [
    {
      id: "setup",
      name: "Set up Business Central",
      weight: "20–25%",
      weightMid: 22.5,
      color: "#1c2430",
      groups: [
        {
          id: "company",
          title: "Create and configure a company",
          items: [
            "Create a company by using Assisted Setup",
            "Create a configuration worksheet",
            "Create and use a configuration package",
            "Create journal opening balances",
            "Migrate data to and within Business Central",
          ],
        },
        {
          id: "security",
          title: "Manage security",
          items: [
            "Create and assign user profiles",
            "Set up a new user",
            "Create permissions and permission sets",
            "Apply security filters",
            "Assign user permissions by using security groups and permission sets",
            "Configure and use security auditing in Business Central",
          ],
        },
        {
          id: "core",
          title: "Set up core functionality",
          items: [
            "Set up reports and configure report layouts",
            "Set up and use job queues",
            "Set up number series",
            "Enable Copilot and agent capabilities",
          ],
        },
        {
          id: "dimensions",
          title: "Set up dimensions",
          items: [
            "Set up dimensions and dimension values",
            "Set up global dimensions and shortcut dimensions",
            "Set up default dimensions for master data",
            "Set up blocking combinations of dimensions and dimension values",
            "Set up default dimensions for account types",
            "Set up default dimension priorities",
          ],
        },
        {
          id: "workflows",
          title: "Manage approvals by using workflows",
          items: [
            "Set up native workflows",
            "Set up a notification system",
            "Set up users for approval and workflow user groups",
          ],
        },
      ],
    },
    {
      id: "fin",
      name: "Configure financials",
      weight: "30–35%",
      weightMid: 32.5,
      color: "#c45c2a",
      groups: [
        {
          id: "fm",
          title: "Set up financial management",
          items: [
            "Configure general ledger setup",
            "Configure accounting periods",
            "Set up payment terms",
            "Set up deferrals",
            "Configure currencies including exchange rates",
            "Set up payment methods",
          ],
        },
        {
          id: "coa",
          title: "Manage the chart of accounts",
          items: [
            "Set up general ledger accounts",
            "Create account categories and subcategories",
            "Prepare financial reporting with financial data and account categories",
            "Set up general ledger allocations",
          ],
        },
        {
          id: "posting",
          title: "Set up posting groups",
          items: [
            "Create specific posting groups",
            "Create general posting groups",
            "Configure the general posting setup",
            "Configure inventory posting setup",
            "Allow multiple posting groups",
          ],
        },
        {
          id: "journals",
          title: "Set up journals and bank accounts",
          items: [
            "Set up bank accounts",
            "Create journal templates, including number series",
            "Create batches",
            "Create templates for recurring journals",
          ],
        },
        {
          id: "ap",
          title: "Set up accounts payables",
          items: [
            "Create vendor accounts, including payment terms, vendor bank accounts, and related records",
            "Configure Purchases & Payables Setup",
            "Set up payment journals",
            "Assess the relationship between vendors, vendor ledger entries, detailed vendor ledger entries, and general ledger entries",
          ],
        },
        {
          id: "ar",
          title: "Set up accounts receivables",
          items: [
            "Create customer accounts, including payment terms, payment methods, customer bank accounts, and related records",
            "Configure Sales & Receivables Setup",
            "Set up cash receipt journals",
            "Set up payment registration",
            "Assess the relationship between customers, customer ledger entries, detailed customer ledger entries, and general ledger entries",
          ],
        },
        {
          id: "fa",
          title: "Configure fixed assets",
          items: [
            "Configure fixed asset settings, including depreciation books and fixed asset classes and subclasses",
            "Create and modify fixed assets, main assets, and components",
            "Differentiate between different depreciation methods",
          ],
        },
      ],
    },
    {
      id: "trade",
      name: "Configure sales and purchasing",
      weight: "10–15%",
      weightMid: 12.5,
      color: "#2f6b4f",
      groups: [
        {
          id: "inventory",
          title: "Set up inventory",
          items: [
            "Configure inventory setup",
            "Configure core item settings, including item categories, item attributes, units of measure, and item variants",
            "Create locations",
            "Assess the relationship between items, item ledger entries, value entries, and general ledger entries",
            "Differentiate between costing methods",
            "Configure stockkeeping units",
          ],
        },
        {
          id: "master",
          title: "Configure master data for sales and purchasing",
          items: [
            "Configure core customer settings including shipping agents, locations, and shipping addresses",
            "Configure core vendor settings including order address, lead time, and locations",
          ],
        },
        {
          id: "pricing",
          title: "Manage pricing and discounts",
          items: [
            "Manage vendor purchase prices",
            "Manage purchase line and invoice discounts",
            "Manage customer sales prices",
            "Manage sales line and invoice discounts",
          ],
        },
      ],
    },
    {
      id: "ops",
      name: "Perform Business Central operations",
      weight: "30–35%",
      weightMid: 32.5,
      color: "#8b2e2e",
      groups: [
        {
          id: "basic",
          title: "Perform basic tasks in Business Central",
          items: [
            "Differentiate between designing, customizing, and personalizing pages",
            "Customize pages",
            "Apply and save filters",
            "Find documents and related entries",
            "Inspect pages",
            "Perform data updates by using the Edit in Excel feature",
            "Configure and use data analysis mode",
            "Personalize pages",
          ],
        },
        {
          id: "purch",
          title: "Process purchases",
          items: [
            "Manage quotes",
            "Create a purchase order",
            "Receive items for a purchase order",
            "Receive more items than ordered",
            "Reverse a receipt",
            "Create a posted invoice from a purchase order",
            "Configure recurring purchase lines",
            "Manage blanket purchase orders",
            "Use deferrals with purchasing documents",
          ],
        },
        {
          id: "sales",
          title: "Process sales",
          items: [
            "Manage quotes",
            "Convert a sales quote into a sales order or sales invoice",
            "Analyze item availability",
            "Ship items for a sales order",
            "Reverse a shipment",
            "Create a sales invoice from a sales order",
            "Configure recurring sales lines",
            "Manage blanket sales orders",
            "Use deferrals with sales documents",
          ],
        },
        {
          id: "docs",
          title: "Process financial documents",
          items: [
            "Process purchase invoices",
            "Process purchase credit memos",
            "Process sales invoices",
            "Process sales credit memos",
            "Combine sales shipments into a single sales invoice",
            "Combine purchase receipts into a single purchase invoice",
            "Correct a posted purchase invoice",
            "Correct a posted sales invoice",
            "Release and reopen documents",
            "Process prepayment invoices for purchases and sales",
          ],
        },
        {
          id: "pay",
          title: "Process journals and payments",
          items: [
            "Process payments by using payment journals",
            "Process receipts by using the cash receipt journal",
            "Process payment registrations",
            "Apply ledger entries and undo applied entries",
            "Reverse posted journals",
            "Perform bank account reconciliation",
            "Process recurring transactions by using the recurring journals",
            "Use general ledger allocations",
            "Adjust currency exchange rates",
            "Correct posted dimensions using the Dimension Correction Tool",
            "Revalue general ledger account balances",
          ],
        },
        {
          id: "fa-tx",
          title: "Process fixed asset transactions",
          items: [
            "Process fixed asset acquisitions",
            "Process fixed asset depreciations",
            "Process fixed asset disposals",
          ],
        },
        {
          id: "inv-tx",
          title: "Process inventory transactions",
          items: [
            "Process inventory receipts",
            "Process inventory shipments",
            "Transfer items between locations",
            "Adjust item cost",
            "Count inventory",
            "Reclassify inventory",
          ],
        },
      ],
    },
  ],
};

window.MB800.notes = [
  {
    id: "company",
    domain: "setup",
    title: "Create and configure a company",
    learn: "https://learn.microsoft.com/en-us/dynamics365/business-central/ui-get-ready-to-work",
    html: `
      <p>Assisted Setup’s <strong>Create New Company</strong> wizard is the exam’s default path. Typical choices: a blank company, copy from an existing company, or start from a template (including evaluation data). Copying a company can bring setup and selected master data; it is not the tool for ongoing transactional replication.</p>
      <h3>RapidStart: worksheet then package</h3>
      <table>
        <tr><th>Object</th><th>Job</th></tr>
        <tr><td>Configuration worksheet</td><td>Pick tables, related tables, and the package they belong to. This is the shopping list.</td></tr>
        <tr><td>Configuration package</td><td>Export to Excel, have the customer fill it, import, validate, then Apply. Apply writes to the company.</td></tr>
      </table>
      <p>Opening balances usually land in general journals (G/L) and, for subledgers, in journals that create customer/vendor ledger entries with a balancing G/L account. Do not “type balances onto the chart of accounts.”</p>
      <h3>Migrate data to and within Business Central</h3>
      <table>
        <tr><th>Need</th><th>Tool</th></tr>
        <tr><td>New company, setup and masters from Excel / another company</td><td>RapidStart: worksheet → configuration package → Apply</td></tr>
        <tr><td>On-prem (or another cloud) company into SaaS, with history</td><td>Cloud Migration (replication, then switch)</td></tr>
        <tr><td>Clone setup in the same environment, no history</td><td>Create New Company / copy company</td></tr>
      </table>
      <div class="trap"><strong>Exam trap</strong>A configuration <em>worksheet</em> does not move data. A <em>package</em> does, after Apply. If the scenario says “list the tables to migrate,” pick the worksheet. If it says “import the filled spreadsheet,” pick the package. If it says “replicate the on-prem company to cloud including transactions,” that is Cloud Migration, not RapidStart.</div>
    `,
  },
  {
    id: "security",
    domain: "setup",
    title: "Manage security",
    learn: "https://learn.microsoft.com/en-us/dynamics365/business-central/ui-define-granular-permissions",
    html: `
      <p>A <strong>user</strong> is the sign-in. A <strong>permission set</strong> is what they may execute. A <strong>security group</strong> (typically Microsoft Entra) is how you assign the same permission sets to many people. A <strong>profile</strong> (role) is the Role Center and page layout they see — not their rights.</p>
      <table>
        <tr><th>Need</th><th>Use</th></tr>
        <tr><td>Everyone in Finance sees the same Role Center</td><td>Profile assigned to users</td></tr>
        <tr><td>Warehouse cannot post G/L</td><td>Permission sets (and maybe exclude SUPER)</td></tr>
        <tr><td>Salesperson only sees their customers</td><td>Security filter on a permission set, or responsibility-center patterns</td></tr>
        <tr><td>Prove who changed sensitive setup</td><td>Security auditing / change log, depending on the scenario</td></tr>
      </table>
      <p>Security filters restrict <em>rows</em> (for example Customer."Salesperson Code" = USER). They do not hide UI chrome; personalization and profiles do that.</p>
      <h3>Security auditing</h3>
      <p>The June 2026 outline names <strong>security auditing</strong> explicitly. In the product that is field monitoring / change log style auditing: turn on auditing, pick tables and fields, then read who changed what and when. It is not a permission set, and it is not the bank reconciliation log. Login and permission-change telemetry may also appear in admin telemetry, but exam stems that say “prove who changed the customer credit limit” want field monitoring / the change log, not a profile.</p>
      <div class="trap"><strong>Exam trap</strong>SUPER bypasses permission checks. If a user still sees everything after you assigned a tight permission set, look for SUPER, a second permission set, or a security group that still grants D365 BUS FULL ACCESS.</div>
    `,
  },
  {
    id: "core",
    domain: "setup",
    title: "Core functionality, number series, Copilot",
    learn: "https://learn.microsoft.com/en-us/dynamics365/business-central/enable-ai",
    html: `
      <h3>Number series</h3>
      <p>Documents, journals, and master data take numbers from a number series. On the series: <strong>Default Nos.</strong> (system proposes a number) and <strong>Manual Nos.</strong> (user may type one). Date Order can require chronological numbering. Lines on a series can change the starting number by date.</p>
      <h3>Reports and job queues</h3>
      <p>Report layouts: <strong>RDLC</strong> (original), <strong>Word</strong> (mail-merge style, common for custom documents), <strong>Excel</strong>, and <strong>Custom</strong> (external renderer). The Report Layouts page switches the built-in layout. <em>Document layouts</em> on a customer or vendor pick which layout goes out for that account (email a Word invoice to this customer, RDLC to that one).</p>
      <p><strong>Job queues</strong> run reports, codeunits, and batch jobs on a schedule in the background (Adjust Cost - Item Entries, Adjust Exchange Rates, recurring journals, Calculate Depreciation). An entry in Error must be restarted after you fix the cause; Ready/On Hold are the normal states. Job queue categories keep noisy jobs off the same worker.</p>
      <h3>Copilot and agents (added for the 30 June 2026 outline)</h3>
      <p>Open <strong>Copilot &amp; agent capabilities</strong>. Activate or deactivate each feature. Built-in agents (for example Sales Order Agent, Payables Agent, Expense Agent) act with human review; Copilot assist features (chat, analysis assist, autofill, bank rec assist, marketing text) sit beside the page. Features can be on and still invisible if personalization hid the action, Feature Management is off, or the user lacks the Copilot permission set.</p>
      <div class="ok"><strong>Remember</strong>The exam still expects you to know Microsoft 365 / Power Platform / Dynamics 365 exist, but “describe integrations” was <em>removed</em> as its own skill area. Setup of Copilot itself is in.</div>
    `,
  },
  {
    id: "dimensions",
    domain: "setup",
    title: "Dimensions",
    learn: "https://learn.microsoft.com/en-us/dynamics365/business-central/finance-dimensions",
    html: `
      <p>A dimension is an analysis tag (Department, Project, Customer Group). Values are the codes. <strong>Global dimensions</strong> (two of them) are stored on ledger entries and are cheapest to filter and report. <strong>Shortcut dimensions</strong> (typically eight more) appear as columns on documents and journals; they still post to analysis views / dimension sets.</p>
      <ul>
        <li><strong>Default dimensions</strong> on a customer, vendor, item, or G/L account can be blank / code mandatory / same code mandatory.</li>
        <li><strong>Default dimensions for account types</strong> apply to every record of that type.</li>
        <li><strong>Priorities</strong> decide whether the customer’s department beats the G/L account’s department when both default.</li>
        <li><strong>Dimension combinations</strong> block (or limit) illegal pairs: you cannot post Project X with Department Sales.</li>
      </ul>
      <div class="trap"><strong>Exam trap</strong>Changing global dimensions is a heavy, company-wide task — not a casual rename. If you only need another column on the sales line, add a shortcut dimension. If financial reports must slice every G/L entry by Department, make Department global.</div>
    `,
  },
  {
    id: "workflows",
    domain: "setup",
    title: "Native approval workflows",
    learn: "https://learn.microsoft.com/en-us/dynamics365/business-central/across-how-to-set-up-workflows",
    html: `
      <p>Business Central ships <strong>workflow templates</strong> (purchase invoice approval, sales order approval, and so on). You copy a template, set the event (when a document is released, or when amount exceeds X), then the response (create an approval request).</p>
      <p><strong>Approval User Setup</strong> names the approver, substitute, and amount limits. <strong>Workflow user groups</strong> let several people approve. <strong>Notification Setup</strong> plus Notification Schedule decides whether approvers get a note in the bell, email, or both.</p>
      <p>A document that needs approval typically must be <em>sent for approval</em> before it can be released and posted. Reject returns it; cancel approval request lets the sender edit again.</p>
      <div class="trap"><strong>Exam trap</strong>Native workflows live in BC. Power Automate is integration territory — and that skill area was removed in the June 2026 outline. If the question is “set up purchase order approval inside Business Central,” pick native workflows, approval user setup, and notifications — not a cloud flow unless the stem forces it.</div>
    `,
  },
  {
    id: "fm",
    domain: "fin",
    title: "Financial management setup",
    learn: "https://learn.microsoft.com/en-us/dynamics365/business-central/finance-setup-finance",
    html: `
      <p><strong>General Ledger Setup</strong> is the company-wide finance switchboard: local currency, additional reporting currency, Allow Posting From/To, invoice rounding, LCY rounding, bank account nos., and whether dimensions are mandatory on journals.</p>
      <p><strong>Accounting periods</strong> are created in a batch (a year of months). Closing a year is not the same as closing the income statement. Close Year locks new periods; <strong>Close Income Statement</strong> is a batch that posts net income to retained earnings. You can still post into a closed year if G/L Setup’s posting date window allows it.</p>
      <p><strong>Payment terms</strong> use date formulas: <code>14D</code>, <code>1M</code>, <code>CM+10D</code> (current month plus 10 days). Due Date Calculation drives the due date on invoices. Discount Date Calculation plus Discount % is the cash discount.</p>
      <p><strong>Deferrals</strong>: a deferral template (periods, even/uneven schedule, deferral account) is assigned to a G/L account or a document line. Posting the invoice creates the schedule; a later batch recognizes expense/revenue into periods.</p>
      <p>Currencies need exchange rates. Payment methods (BANK, CASH, CHECK) sit on customers/vendors and can point at a balancing account for the cash receipt / payment journal.</p>
    `,
  },
  {
    id: "coa",
    domain: "fin",
    title: "Chart of accounts, categories, allocations",
    learn: "https://learn.microsoft.com/en-us/dynamics365/business-central/finance-setup-chart-accounts",
    html: `
      <p>Account types: Posting, Heading, Total, Begin-Total, End-Total. Only <strong>Posting</strong> accounts receive entries. Begin-Total / End-Total indent and total a range. Direct Posting can be turned off so the account is used only through a posting group.</p>
      <p><strong>Account categories</strong> and subcategories (Assets, Liabilities, Equity, Income, Expense, plus finer buckets) power the built-in financial reports. If a new posting account is missing from the P&amp;L, map its category — do not rebuild the report from scratch first.</p>
      <p><strong>G/L allocations</strong> spread a balance (rent, utilities) to departments or other accounts. Two exam-visible tools:</p>
      <ul>
        <li><strong>Allocation accounts</strong> — a G/L account type that splits a posted amount by percent, quantity, or a breakdown on the fly.</li>
        <li><strong>Recurring journal allocation keys</strong> — classic: one source line, several allocation lines (percent or amount), often with dimensions.</li>
      </ul>
      <p>Operations also lists “Use general ledger allocations,” so expect a scenario that posts through an allocation account, not only the setup page.</p>
      <div class="ok"><strong>Remember</strong>Financial reports in modern BC lean on account categories / row definitions, not on “run the old account-schedule Excel only.” Be ready to say “assign the account to a category.”</div>
    `,
  },
  {
    id: "posting",
    domain: "fin",
    title: "Posting groups",
    learn: "https://learn.microsoft.com/en-us/dynamics365/business-central/finance-posting-groups",
    html: `
      <p>Posting groups are how a customer sale becomes G/L. Learn the matrix cold.</p>
      <table>
        <tr><th>Group</th><th>Lives on</th><th>Decides</th></tr>
        <tr><td>Customer posting group</td><td>Customer</td><td>Receivables account, payment disc., interest, rounding</td></tr>
        <tr><td>Vendor posting group</td><td>Vendor</td><td>Payables account, payment disc., rounding</td></tr>
        <tr><td>Inventory posting group + Location</td><td>Item / SKU</td><td>Inventory, WIP, and related inventory accounts (Inventory Posting Setup)</td></tr>
        <tr><td>Gen. Bus. + Gen. Prod.</td><td>Customer/vendor + item/resource/G/L</td><td>Sales, COGS, discounts, inventory adj. (General Posting Setup)</td></tr>
        <tr><td>VAT/Tax Bus. + VAT/Tax Prod.</td><td>Same</td><td>VAT/tax accounts (VAT Posting Setup)</td></tr>
      </table>
      <p><strong>Allow multiple posting groups</strong> lets a customer or vendor use an alternate posting group on a document (intercompany, a second receivables account) without changing the master default.</p>
      <div class="trap"><strong>Exam trap</strong>Wrong inventory account almost always means Inventory Posting Setup (location × inventory posting group), not General Posting Setup. Wrong sales/COGS account means General Posting Setup. Wrong receivables account means Customer Posting Group.</div>
    `,
  },
  {
    id: "journals",
    domain: "fin",
    title: "Journals and bank accounts",
    learn: "https://learn.microsoft.com/en-us/dynamics365/business-central/finance-general-journal",
    html: `
      <p>A <strong>journal template</strong> defines the type (General, Cash Receipts, Payments, Recurring, Fixed Assets, Items, …), the default No. Series, and the page. A <strong>batch</strong> is a named stack of lines under that template (for example DEFAULT, MONTH-END). Users can have their own batch.</p>
      <p>Bank accounts are master data: currency, bank posting group (G/L bank account), last statement number. One bank account per currency is the usual pattern.</p>
      <p>Recurring journals use a <strong>recurring method</strong>:</p>
      <table>
        <tr><th>Code</th><th>Meaning</th></tr>
        <tr><td>F Fixed</td><td>Same amount every period</td></tr>
        <tr><td>V Variable</td><td>You type the amount each run</td></tr>
        <tr><td>B Balance</td><td>Posts the current account balance (often used to zero an account)</td></tr>
        <tr><td>RF / RV / RB</td><td>Same as above, then auto-reverses next period</td></tr>
      </table>
      <p>Recurring Frequency is a date formula (<code>1M</code>). Expiration Date stops the line.</p>
    `,
  },
  {
    id: "ap",
    domain: "fin",
    title: "Accounts payable setup",
    learn: "https://learn.microsoft.com/en-us/dynamics365/business-central/purchasing-setup-purchasing",
    html: `
      <p>Vendor card: posting groups, payment terms, payment method, vendor bank accounts (for electronic payments), order addresses, default dimensions, currency.</p>
      <p><strong>Purchases &amp; Payables Setup</strong>: number series for quotes/orders/invoices/credit memos/receipts, discount posting, receipt posting, invoice rounding, and whether you allow posting of invoices without a receipt (depending on localization and settings).</p>
      <p>The <strong>payment journal</strong> is how you pay vendors: Suggest Vendor Payments, apply invoices, export a payment file, post. Posting creates vendor ledger entries (and detailed entries) and G/L.</p>
      <p>Chain to memorize: Vendor → <strong>Vendor Ledger Entry</strong> (the invoice or payment) → <strong>Detailed Vendor Ledg. Entry</strong> (application, remaining amount) → G/L Entry (via the vendor posting group and balancing bank/G/L).</p>
    `,
  },
  {
    id: "ar",
    domain: "fin",
    title: "Accounts receivable setup",
    learn: "https://learn.microsoft.com/en-us/dynamics365/business-central/sales-setup-sales",
    html: `
      <p>Customer card mirrors the vendor: posting groups, payment terms, payment method, reminder/finance charge terms, shipping, bill-to vs sell-to, customer bank accounts.</p>
      <p><strong>Sales &amp; Receivables Setup</strong>: number series, discount posting, shipment posting, credit warnings, stockout warnings, invoice rounding, customer default search.</p>
      <p>Two ways to take money:</p>
      <ul>
        <li><strong>Cash receipt journal</strong> — classic journal: one line per payment, apply to invoices, post. Good for mixed banks and G/L.</li>
        <li><strong>Payment registration</strong> — a worksheet of open customer invoices; you tick what was paid. Faster for a pile of cheque/deposit slips.</li>
      </ul>
      <p>Chain: Customer → Customer Ledger Entry → Detailed Cust. Ledg. Entry → G/L Entry.</p>
      <div class="trap"><strong>Exam trap</strong>Payment Registration is not a bank reconciliation and not a sales invoice. It applies customer receipts. Bank rec is a different page against the bank account.</div>
    `,
  },
  {
    id: "fa",
    domain: "fin",
    title: "Fixed assets setup",
    learn: "https://learn.microsoft.com/en-us/dynamics365/business-central/fa-setup",
    html: `
      <p>A fixed asset has a <strong>class</strong> (tangible / intangible) and <strong>subclass</strong> (building, vehicle, machinery) which drive G/L via FA posting groups. A <strong>depreciation book</strong> (often COMPANY, plus a tax book) holds the method, useful life, and posting setup. An asset can use several books.</p>
      <p><strong>Main assets and components</strong>: a main asset (a production line) can have component assets that depreciate on their own but report under the main asset.</p>
      <table>
        <tr><th>Method</th><th>When the exam wants it</th></tr>
        <tr><td>Straight-Line</td><td>Even expense over life</td></tr>
        <tr><td>Declining-Balance 1 / 2</td><td>Accelerated; a DB% on book value</td></tr>
        <tr><td>DB1/SL or DB2/SL</td><td>Accelerated, then switch to straight-line when that is higher</td></tr>
        <tr><td>User-Defined</td><td>A custom depreciation table</td></tr>
        <tr><td>Manual</td><td>You post depreciation yourself</td></tr>
      </table>
    `,
  },
  {
    id: "inventory",
    domain: "trade",
    title: "Inventory and costing methods",
    learn: "https://learn.microsoft.com/en-us/dynamics365/business-central/design-details-costing-methods",
    html: `
      <p>Item card: type (Inventory / Service / Non-Inventory), base unit of measure, posting groups, costing method, replenishment, variants, attributes, category. <strong>Locations</strong> are warehouses or bins-of-a-sort; with bins you step toward warehouse. A <strong>stockkeeping unit (SKU)</strong> is the item at a location (and variant): its own costing, replenishment, and bin.</p>
      <table>
        <tr><th>Costing method</th><th>Use</th></tr>
        <tr><td>FIFO</td><td>Oldest receipt cost is sold first. Stable cost, shelf life.</td></tr>
        <tr><td>LIFO</td><td>Newest receipt first. Disallowed in many countries.</td></tr>
        <tr><td>Average</td><td>Average cost; mixed/bulk goods, unstable prices.</td></tr>
        <tr><td>Standard</td><td>Preset cost; variances to actual. Cost control / manufacturing.</td></tr>
        <tr><td>Specific</td><td>This serial/lot’s exact cost. High-value identifiable units.</td></tr>
      </table>
      <p>Chain: Item → <strong>Item Ledger Entry</strong> (quantity) → <strong>Value Entry</strong> (cost) → G/L Entry (via inventory posting setup). Quantity and cost are not the same table. <strong>Adjust Cost - Item Entries</strong> forwards cost when purchase invoices arrive after the shipment was sold.</p>
      <div class="trap"><strong>Exam trap</strong>Unit Cost on the item card for FIFO/LIFO/Average/Specific is an average-over-time figure. Only Standard is a true standard. Serial-tracked goods → Specific, not FIFO, if the stem cares about the exact unit.</div>
    `,
  },
  {
    id: "master",
    domain: "trade",
    title: "Sales and purchasing master data",
    learn: "https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-register-new-customers",
    html: `
      <p>Customers: ship-to addresses, location code (which warehouse ships), shipping agent and agent service (UPS Ground), shipment method (CIF, EXW). Bill-to can differ from Sell-to.</p>
      <table>
        <tr><th>Field</th><th>Means</th></tr>
        <tr><td>Shipping agent</td><td>The carrier (UPS, FedEx, own fleet)</td></tr>
        <tr><td>Shipping agent service</td><td>The service level (Ground, Next Day)</td></tr>
        <tr><td>Shipment method</td><td>Incoterms / how ownership moves (FOB, CIF, EXW)</td></tr>
        <tr><td>Ship-to address</td><td>A delivery address that is not the customer card address</td></tr>
        <tr><td>Location code</td><td>Which warehouse the document will ship or receive from</td></tr>
      </table>
      <p>Vendors: order addresses (alternate purchase addresses), lead time calculation, location code (where you receive), shipment method. Lead time is a date formula added to the order date to get the expected receipt date; it feeds planning.</p>
      <p>These fields default onto orders and can be overridden per document. If availability looks wrong, check the location on the line, not only the item.</p>
    `,
  },
  {
    id: "pricing",
    domain: "trade",
    title: "Prices and discounts",
    learn: "https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-to-set-up-automatic-pricing",
    html: `
      <p>Modern BC uses price lists (sales and purchase). You can still meet older names on the exam: sales prices, sales line discounts, invoice discounts; purchase prices, purchase line discounts.</p>
      <ul>
        <li><strong>Price</strong> replaces the unit price / direct unit cost for an item–customer/vendor (and variant, UOM, quantity break, date, currency).</li>
        <li><strong>Line discount %</strong> knocks a percent off that price on the line.</li>
        <li><strong>Invoice discount</strong> is a header-level discount, often based on the invoice total (calibrated on customer/vendor invoice discount).</li>
      </ul>
      <p>Best-price logic picks the lowest eligible sales price. Line discount is not the same as a cheaper price list. Campaigns and special prices can also participate.</p>
      <div class="ok"><strong>Remember</strong>Invoice discount is not applied by typing a percent on a random line. It needs Allow Invoice Disc. on the item/price and invoice discount setup on the customer or vendor.</div>
    `,
  },
  {
    id: "basic",
    domain: "ops",
    title: "Personalize, customize, design, and daily tools",
    learn: "https://learn.microsoft.com/en-us/dynamics365/business-central/ui-personalization-user",
    html: `
      <table>
        <tr><th>Layer</th><th>Who</th><th>Who sees it</th></tr>
        <tr><td>Personalize</td><td>Any user, Personalizing banner</td><td>Only that user</td></tr>
        <tr><td>Customize</td><td>Admin, Customize pages on a profile</td><td>Everyone on that profile (role)</td></tr>
        <tr><td>Design / AL</td><td>Developer, page extension or Designer in an extension</td><td>All users (the app)</td></tr>
      </table>
      <p>Personalize can move/hide fields and add fields that are already on the page. Customize for a profile can additionally surface fields from the source table that were not shown. Design changes the object and can add logic — that is not a functional-consultant click-path for a one-user request.</p>
      <ul>
        <li><strong>Filters</strong>: set, then Save as a view. Views are personalization.</li>
        <li><strong>Find</strong> related entries from a document’s Related / Navigate / Find Entries.</li>
        <li><strong>Inspect pages</strong> (Ctrl+Alt+F1): table name, field names, filters, extensions — gold when a field is missing.</li>
        <li><strong>Edit in Excel</strong>: publish changes back; needs the Excel add-in and insert/modify permission. Good for bulk master-data edits.</li>
        <li><strong>Data analysis mode</strong>: pivot-style analysis on a list <em>inside</em> BC, no Excel. Does not write back.</li>
      </ul>
      <div class="trap"><strong>Exam trap</strong>Edit in Excel writes. Data analysis mode does not. Personalize does not change other users. If the warehouse role should all see the same extra column, customize the profile — do not ask each user to personalize.</div>
    `,
  },
  {
    id: "purch",
    domain: "ops",
    title: "Process purchases",
    learn: "https://learn.microsoft.com/en-us/dynamics365/business-central/purchasing-how-record-purchases",
    html: `
      <p>Happy path: Quote → Order → Receive (posted warehouse/purchase receipt) → Invoice (posted purchase invoice). You can invoice from the order (Receive and Invoice) or invoice later from the receipt lines.</p>
      <p><strong>Over-receipt</strong>: item or location has an Over-Receipt Code with a tolerance %. Without it, you cannot receive more than outstanding quantity.</p>
      <p><strong>Undo Receipt</strong> reverses a posted receipt that is not fully invoiced. If it is invoiced, you need a purchase return / credit memo, not Undo.</p>
      <p><strong>Blanket purchase order</strong>: a long-term quantity agreement. You make ordinary purchase orders against remaining quantity. Recurring purchase lines stamp a standard set of lines onto new documents for a vendor. Deferral codes on lines spread expense.</p>
    `,
  },
  {
    id: "sales",
    domain: "ops",
    title: "Process sales",
    learn: "https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-sell",
    html: `
      <p>Quote can become an order (fulfill later) or an invoice (bill immediately). Availability: Check Availability / item availability by <strong>location</strong>, <strong>event</strong> (what is incoming/outgoing), <strong>period</strong>, variant, or BOM. Ship then invoice, or Ship and Invoice.</p>
      <p><strong>Undo Shipment</strong> is the mirror of Undo Receipt — only if not fully invoiced. If the shipment is invoiced, you need a sales return / credit memo, not Undo. Blanket sales orders and recurring sales lines mirror purchasing. Deferrals on sales lines spread revenue.</p>
      <p>If stock looks available in one warehouse and the order still warns, read the <em>location code on the line</em>.</p>
    `,
  },
  {
    id: "docs",
    domain: "ops",
    title: "Financial documents: correct, combine, prepay",
    learn: "https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-correct-cancel-unpaid-sales-invoices",
    html: `
      <p><strong>Release</strong> locks a document for posting and runs checks (approvals, dimensions). <strong>Reopen</strong> lets you edit again.</p>
      <p><strong>Combine shipments</strong>: on a sales invoice, Get Shipment Lines for one customer (and usually one currency) to bill many deliveries together. Combine receipts is the purchase mirror.</p>
      <table>
        <tr><th>Action on a posted invoice</th><th>What you get</th></tr>
        <tr><td>Cancel</td><td>A corrective credit memo that fully reverses the invoice</td></tr>
        <tr><td>Correct</td><td>A corrective credit memo <em>plus</em> a new invoice copy you can edit and repost</td></tr>
      </table>
      <p>Those actions require the invoice not to be paid/applied (or you unapply first). Older path: manual credit memo with Copy Document / Get Posted Document Lines to Reverse.</p>
      <p><strong>Prepayments</strong>: Prepayment % on customer/vendor or the document. Post a prepayment invoice before shipment; later invoices deduct the prepaid amount. Setup lives in G/L and on posting groups (prepayment accounts).</p>
    `,
  },
  {
    id: "pay",
    domain: "ops",
    title: "Journals, payments, bank rec, dimensions after the fact",
    learn: "https://learn.microsoft.com/en-us/dynamics365/business-central/bank-how-reconcile",
    html: `
      <ul>
        <li>Payment journal: Suggest Vendor Payments → apply → post (and export files if used).</li>
        <li>Cash receipt journal: customer money in.</li>
        <li>Payment registration: tick open invoices as paid.</li>
        <li>Apply / Unapply Entries on customer or vendor ledger entries. Unapply before you try to correct a paid invoice.</li>
        <li>Reverse Transaction on a G/L register / posted general journal (not a substitute for a sales credit memo).</li>
        <li>Bank Account Reconciliation: import statement or enter lines, match outstanding payments/receipts, post. Difference must be zero (or you post a balancing difference line if policy allows). Copilot can assist matching — still a bank rec, not payment registration.</li>
        <li>Adjust Exchange Rates: FX on customer, vendor, and bank account remaining amounts, plus additional reporting currency. It does not revalue inventory cost.</li>
        <li><strong>Dimension Correction Tool</strong>: fix posted dimensions without reversing the original financial posting — new-style exam bait.</li>
        <li>Revalue G/L account balances: additional reporting currency / FX revaluation of G/L balances, not Adjust Cost - Item Entries and not a phys. inventory.</li>
      </ul>
      <div class="trap"><strong>Exam trap</strong>Posted sales documents are not reversed with Reverse Transaction. Use Correct/Cancel or a credit memo. Reverse Transaction is for journals. Dimension mistakes on posted G/L → Dimension Correction Tool if the stem offers it, not “delete the ledger entry.”</div>
    `,
  },
  {
    id: "fa-tx",
    domain: "ops",
    title: "Fixed asset transactions",
    learn: "https://learn.microsoft.com/en-us/dynamics365/business-central/fa-how-acquire",
    html: `
      <p><strong>Acquisition</strong>: FA G/L journal or a purchase invoice with the FA on the line (FA Posting Type = Acquisition Cost). Puts cost on the book and the G/L.</p>
      <p><strong>Depreciation</strong>: Calculate Depreciation batch, then post the FA G/L journal it created. Frequency is usually monthly via a job queue.</p>
      <p><strong>Disposal</strong>: sale or write-off through an FA journal or a sales document, depending on setup. Posts disposal, reverses remaining book value, and recognizes gain/loss.</p>
      <p>You cannot depreciate before acquisition, and you cannot dispose of an asset with unposted journals hanging on it. Posting types on FA journals matter: Acquisition Cost, Depreciation, Write-Down, Appreciation, Disposal.</p>
    `,
  },
  {
    id: "inv-tx",
    domain: "ops",
    title: "Inventory transactions (new on the 2026 outline)",
    learn: "https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-count-adjust-reclassify",
    html: `
      <p>This skill group was added as of 30 June 2026. Do not skip it.</p>
      <table>
        <tr><th>Task</th><th>Tool</th></tr>
        <tr><td>Inventory receipt / shipment without a trade document</td><td>Item journal (positive/negative adjustment) or inventory documents, depending on setup</td></tr>
        <tr><td>Move stock between locations</td><td>Transfer order (in-transit location if used) or item reclass. journal</td></tr>
        <tr><td>Change bin / dimension / variant without changing net qty</td><td>Item reclassification journal</td></tr>
        <tr><td>Count</td><td>Phys. Inventory Journal: Calculate Inventory, enter counted qty, post. Cycle counting uses counting periods on SKUs/items</td></tr>
        <tr><td>Forward late purchase costs onto already-sold goods</td><td>Adjust Cost - Item Entries (often a job queue)</td></tr>
      </table>
      <div class="ok"><strong>Remember</strong>A transfer order is logistics between locations. A reclass journal is a ledger move (location, bin, dimension, lot). Adjust Cost is costing, not counting.</div>
    `,
  },
];

window.MB800.cards = [
  { id: "fc-company-assisted", group: "company", f: "Assisted Setup “Create New Company” typical choices", b: "Blank company, copy from an existing company (setup/masters, not a live replica of postings), or a template including evaluation data." },
  { id: "fc-company-worksheet", group: "company", f: "Configuration worksheet vs configuration package", b: "Worksheet = the list of tables (and related tables) to migrate. Package = export to Excel, import the filled file, validate, then Apply. Apply writes to the company. The worksheet does not move data." },
  { id: "fc-company-apply", group: "company", f: "When does RapidStart actually create records?", b: "When you Apply the configuration package. Import only stages the package; Apply writes." },
  { id: "fc-company-opening", group: "company", f: "Where do opening balances get created?", b: "Journals: G/L in the general journal; customers/vendors via journals that create ledger entries with a balancing G/L account. Never by typing a balance on the G/L account card." },
  { id: "fc-company-migrate", group: "company", f: "Cloud Migration vs RapidStart vs copy company", b: "Cloud Migration replicates an on-prem/other-cloud company including history. RapidStart packages move setup/master data you Apply. Copy / Create New Company clones setup in the same environment without posting history." },

  { id: "fc-sec-objects", group: "security", f: "User vs permission set vs security group vs profile", b: "User = sign-in. Permission set = what they may execute. Security group (usually Entra) assigns the same permission sets to many people. Profile = Role Center and page layout, not rights." },
  { id: "fc-sec-filter", group: "security", f: "What does a security filter restrict?", b: "Rows (for example Customer.\"Salesperson Code\" = USER). It does not hide UI chrome — profiles and personalization do that." },
  { id: "fc-sec-super", group: "security", f: "User still has full access after a tight permission set. First two places to look?", b: "SUPER on the user, and a security group that still assigns a broad set such as D365 BUS FULL ACCESS. Rights accumulate." },
  { id: "fc-sec-audit", group: "security", f: "How do you prove who changed Customer Credit Limit?", b: "Security auditing / field monitoring (change log) on that table and field. Not a permission set, not bank rec, not a profile." },

  { id: "fc-core-nos", group: "core", f: "Default Nos. vs Manual Nos. on a number series", b: "Default Nos. = Business Central proposes the next number. Manual Nos. = the user may type one. For automatic-only documents: Default Nos. Yes, Manual Nos. No." },
  { id: "fc-core-layouts", group: "core", f: "RDLC vs Word vs Excel vs Custom report layouts", b: "RDLC = classic built-in. Word = restylable document. Excel = spreadsheet output. Custom = external renderer. Switch them on Report Layouts." },
  { id: "fc-core-doclayout", group: "core", f: "One customer must get a Word invoice; everyone else keeps RDLC. Where?", b: "Document Layouts on that customer (or vendor), not a company-wide layout change alone." },
  { id: "fc-core-jobq", group: "core", f: "Job queue status Error means what, and what do you do?", b: "The last run failed. Fix the cause, then restart the entry. Ready / On Hold are normal. Use job queue categories so noisy jobs do not block one worker." },
  { id: "fc-core-jobq-use", group: "core", f: "Name batches you typically put on a job queue", b: "Adjust Cost - Item Entries, Adjust Exchange Rates, recurring journals, Calculate Depreciation, and scheduled reports." },
  { id: "fc-core-copilot", group: "core", f: "Where do you activate or deactivate Copilot and agents?", b: "Copilot & agent capabilities. After that, the user still needs the Copilot permission set, and personalization must not have hidden the action." },
  { id: "fc-core-agents", group: "core", f: "Sales Order Agent vs Payables Agent", b: "Sales Order Agent turns incoming sales email into a quote/order with human review. Payables Agent captures vendor invoices from mail and matches PO/receipt, with review. They do not post unsupervised as the default story." },

  { id: "fc-dim-global", group: "dimensions", f: "Global dimensions vs shortcut dimensions", b: "Two globals are stored on ledger entries and are the cheap reporting slice. Shortcuts (typically eight more) appear as columns on documents and journals; they still post to dimension sets." },
  { id: "fc-dim-when-global", group: "dimensions", f: "Department must be on every G/L entry for financial reports. Project is only a column on sales lines. How do you set them?", b: "Department = global dimension. Project = shortcut dimension. Do not swap those." },
  { id: "fc-dim-default", group: "dimensions", f: "Default dimension options on a customer or G/L account", b: "Blank (optional), Code Mandatory, Same Code, or a specific value. Same Code forces that value on every posting." },
  { id: "fc-dim-priority", group: "dimensions", f: "Customer defaults Department = SALES, revenue account defaults CORP. Sales should keep SALES. What setup?", b: "Default dimension priorities: Customer ranks above G/L Account for Department." },
  { id: "fc-dim-combo", group: "dimensions", f: "Posting must fail if Department SALES is paired with Project ADMIN. What setup?", b: "Dimension combinations: block (or limit) that pair. Priorities do not block pairs." },
  { id: "fc-dim-accttype", group: "dimensions", f: "Every G/L account should default Department = CORP unless the account overrides. What setup?", b: "Default dimensions for account type G/L Account, then per-account defaults and priorities if needed." },
  { id: "fc-dim-change-global", group: "dimensions", f: "Why you do not casually change a global dimension", b: "It is a heavy company-wide change to posted ledger storage. If you only need another document column, add a shortcut dimension instead." },

  { id: "fc-wf-stack", group: "workflows", f: "Native purchase-invoice approval inside Business Central: three objects", b: "A workflow copied from a template, Approval User Setup (approver, substitute, amount limits) or a workflow user group, and Notification Setup / schedule." },
  { id: "fc-wf-send", group: "workflows", f: "A document that needs approval typically cannot be what until it is approved?", b: "Released (and therefore posted). Use Send Approval Request. Reject returns it; Cancel Approval Request lets the sender edit." },
  { id: "fc-wf-not-pa", group: "workflows", f: "Purchase order approval “inside Business Central” — native workflow or Power Automate?", b: "Native workflows, Approval User Setup, and notifications. Power Automate is integration territory unless the stem forces a cloud flow." },

  { id: "fc-fm-posting-window", group: "fm", f: "Users must not post into last year, but this year stays open. Where is the hard gate?", b: "General Ledger Setup: Allow Posting From / Allow Posting To. Close Year or Close Income Statement does not stop posting if the date window still includes those dates." },
  { id: "fc-fm-close", group: "fm", f: "Close Year vs Close Income Statement", b: "Close Year closes accounting periods. Close Income Statement is a batch that posts net income to retained earnings." },
  { id: "fc-fm-cm10d", group: "fm", f: "Payment term date formula CM+10D on an invoice dated 17 March. Due when?", b: "10 April. CM = end of March (31), then +10 days." },
  { id: "fc-fm-formulas", group: "fm", f: "What do 14D, 1M, and CM mean on payment terms?", b: "14D = 14 days from the document date. 1M = one month. CM = current month-end. Due Date Calculation sets the due date; Discount Date Calculation + Discount % is the cash discount." },
  { id: "fc-fm-deferral", group: "fm", f: "Annual insurance must hit expense over 12 months. What do you set up?", b: "A deferral template (periods, even/uneven, deferral account) assigned to the G/L account or document line. Posting the invoice creates the schedule; a later batch recognizes expense." },
  { id: "fc-fm-arc", group: "fm", f: "Where do you turn on additional reporting currency?", b: "General Ledger Setup. Exchange rates still live on the currency. Adjust Exchange Rates updates FX including additional reporting currency." },
  { id: "fc-fm-paymethod", group: "fm", f: "Payment method CASH should balance cash receipt lines to petty cash automatically. What field?", b: "Balancing Account on the payment method (G/L or bank)." },

  { id: "fc-coa-types", group: "coa", f: "Which G/L account type can receive entries?", b: "Posting. Heading, Total, Begin-Total, and End-Total are structure only." },
  { id: "fc-coa-direct", group: "coa", f: "What does Direct Posting = No on a G/L account mean?", b: "You cannot post to it from a journal line; it is used through posting groups / documents. Typical for receivables, payables, inventory control accounts." },
  { id: "fc-coa-cat", group: "coa", f: "A new posting account never appears on the built-in income statement. First check?", b: "Account category / subcategory. Financial reports are driven by categories, not by “rebuild the report from scratch.”" },
  { id: "fc-coa-alloc", group: "coa", f: "Rent must split 70/30 to two departments as it posts. Which tools?", b: "An allocation account (splits by percent, quantity, or breakdown on the fly) or a recurring journal with allocation keys. Security filters do not allocate." },

  { id: "fc-pg-ar", group: "posting", f: "Wrong receivables G/L on a sales invoice. Which posting group?", b: "Customer posting group on the customer. Not general posting setup." },
  { id: "fc-pg-sales", group: "posting", f: "Receivables are right but sales revenue hits the wrong account. Where?", b: "General posting setup: Gen. Business posting group × Gen. Product posting group → sales, COGS, discounts." },
  { id: "fc-pg-inv", group: "posting", f: "EAST and WEST must post the same item to different inventory accounts. Where?", b: "Inventory posting setup: Location × Inventory posting group." },
  { id: "fc-pg-vat", group: "posting", f: "VAT/tax accounts are mapped where?", b: "VAT posting setup: VAT Bus. posting group × VAT Prod. posting group. Separate from general posting setup." },
  { id: "fc-pg-multi", group: "posting", f: "Allow multiple posting groups does what?", b: "Lets a customer or vendor use an alternate posting group on a document (second receivables/payables account) without changing the master default." },

  { id: "fc-jnl-tmpl", group: "journals", f: "Journal template vs batch", b: "Template = type (General, Payments, Cash Receipts, Recurring, FA, Item…), default number series, and page. Batch = a named pile of lines under that template (DEFAULT, MONTH-END, a user’s batch)." },
  { id: "fc-jnl-bank", group: "journals", f: "Two setup facts on a EUR bank account", b: "Currency Code = EUR, and a bank account posting group that points at the EUR cash G/L account. One bank account per currency is the usual pattern." },
  { id: "fc-jnl-f", group: "journals", f: "Recurring journal method F vs V vs B", b: "F Fixed = same stored amount every run. V Variable = you type the amount each run. B Balance = posts the current account balance (often to zero it)." },
  { id: "fc-jnl-rf", group: "journals", f: "What do RF, RV, and RB add?", b: "The reversing versions: post this period, then auto-reverse next period. Recurring Frequency is a date formula (1M). Expiration Date stops the line." },

  { id: "fc-ap-chain", group: "ap", f: "Posted purchase invoice document chain", b: "Vendor → vendor ledger entry → detailed vendor ledger entry (remaining amount, applications) → G/L entry via the vendor posting group." },
  { id: "fc-ap-bank", group: "ap", f: "SEPA / electronic vendor payments need what on the vendor besides posting groups and payment terms?", b: "A vendor bank account (IBAN/BIC or local equivalent). Payment terms do not store the bank." },
  { id: "fc-ap-setup", group: "ap", f: "Purchases & Payables Setup holds what kind of switches?", b: "Number series for quotes/orders/invoices/credit memos/receipts, discount posting, receipt posting, invoice rounding, and related purchase posting defaults." },
  { id: "fc-ap-pj", group: "ap", f: "How do you pay vendors in the product?", b: "Payment journal: Suggest Vendor Payments, apply invoices, export a payment file if used, post." },

  { id: "fc-ar-chain", group: "ar", f: "Posted sales invoice document chain", b: "Customer → customer ledger entry → detailed cust. ledger entry → G/L entry via the customer posting group." },
  { id: "fc-ar-cash-vs-reg", group: "ar", f: "Cash receipt journal vs payment registration", b: "Cash receipt journal = line-by-line incoming money, flexible balancing accounts. Payment registration = worksheet of open customer invoices you tick as paid. Neither is bank reconciliation." },
  { id: "fc-ar-setup", group: "ar", f: "Sales & Receivables Setup holds what kind of switches?", b: "Number series, discount posting, shipment posting, credit warnings, stockout warnings, invoice rounding, default search." },
  { id: "fc-ar-billto", group: "ar", f: "Bill-to vs Sell-to on a customer", b: "Sell-to is who buys. Bill-to can be a different customer who receives the invoice. Ship-to is a delivery address, not the bill-to." },

  { id: "fc-fa-class", group: "fa", f: "FA class vs subclass vs FA posting group", b: "Class = tangible / intangible. Subclass = building, vehicle, machinery. FA posting group (often via subclass) maps acquisition, accumulated depreciation, and expense G/L accounts." },
  { id: "fc-fa-book", group: "fa", f: "What does a depreciation book hold?", b: "Method, useful life, posting setup. An asset can use several books (COMPANY plus a tax book)." },
  { id: "fc-fa-methods", group: "fa", f: "Straight-Line vs DB1/SL (or DB2/SL)", b: "Straight-Line = even expense over life. DB1/SL or DB2/SL = declining-balance while that is higher, then switch to straight-line. Manual = you post depreciation yourself. User-Defined = a custom table. Specific/Average are inventory costing, not FA." },
  { id: "fc-fa-main", group: "fa", f: "Main asset vs component", b: "Components depreciate on their own lives but roll up under a main asset for reporting (a production line with three machines)." },

  { id: "fc-inv-type", group: "inventory", f: "Item type Inventory vs Service vs Non-Inventory", b: "Inventory tracks quantity and cost. Service has no on-hand qty (consulting hours). Non-Inventory is consumed (office supplies) without stock." },
  { id: "fc-inv-fifo", group: "inventory", f: "When FIFO vs Specific vs Average vs Standard", b: "FIFO = oldest receipt cost first (shelf life, stable). Specific = this serial/lot’s exact cost. Average = mixed bulk with unstable cost. Standard = preset cost plus variances. LIFO is newest-first and disallowed in many countries." },
  { id: "fc-inv-ile", group: "inventory", f: "Item ledger entry vs value entry", b: "Item ledger entry = quantity. Value entry = cost. G/L follows from value entries through inventory posting setup. Quantity looking right with a wrong inventory G/L is a costing/value-entry problem." },
  { id: "fc-inv-sku", group: "inventory", f: "What is a stockkeeping unit?", b: "The item at a location (and variant) with its own replenishment and optionally its own cost. Use SKUs when EAST and WEST replenish or cost the same item differently." },
  { id: "fc-inv-cat", group: "inventory", f: "Item category vs attribute vs variant", b: "Category = hierarchy/reporting. Attribute = name/value tag for filtering (Material = Carbon). Variant = stock-keeping option on the item (Red/Blue, S/M/L)." },
  { id: "fc-inv-unitcost", group: "inventory", f: "Unit Cost on the item card for FIFO/Average — is it “the” cost?", b: "No. It is an average-over-time figure. Only Standard costing stores a true standard. Specific uses the exact unit." },

  { id: "fc-master-ship", group: "master", f: "Shipping agent vs shipping agent service vs shipment method vs ship-to", b: "Agent = carrier (UPS). Agent service = Ground / Next Day. Shipment method = Incoterms (FOB, CIF, EXW). Ship-to = a delivery address that is not the customer card address. Location code = which warehouse ships." },
  { id: "fc-master-lead", group: "master", f: "Vendor lead time calculation vs order address", b: "Lead time is a date formula added to the order date to get expected receipt (feeds planning). Order address is an alternate purchase address, not lead time." },
  { id: "fc-master-loc", group: "master", f: "Availability looks fine on the item, the sales line still warns. First check?", b: "Location code on the line. Availability is per location, not the item-card total." },

  { id: "fc-price-three", group: "pricing", f: "Sales price vs line discount vs invoice discount", b: "Price / price list replaces the unit price (item, customer, variant, UOM, qty break, date, currency). Line discount % knocks a percent off that price on the line. Invoice discount is header-level when Allow Invoice Disc. is on the item and invoice discount is set up on the customer." },
  { id: "fc-price-purch", group: "pricing", f: "Purchase price vs purchase line discount", b: "Purchase price / price list replaces direct unit cost. Line discount % knocks a percent off that cost. Do not confuse either with a sales invoice discount." },
  { id: "fc-price-best", group: "pricing", f: "When several sales prices qualify, what does Business Central pick?", b: "Best-price logic: the lowest eligible sales price. A line discount is not the same as a cheaper price list line." },

  { id: "fc-basic-pcd", group: "basic", f: "Personalize vs customize vs design", b: "Personalize = this user only (Personalizing banner). Customize = everyone on that profile/role (can also surface source-table fields not on the page). Design / AL = the app for everyone." },
  { id: "fc-basic-warehouse", group: "basic", f: "Whole warehouse role must see an extra Item-list column that exists on the table but not the page. What do you do?", b: "Customize pages for the warehouse profile. Do not ask each user to personalize. Edit in Excel does not change the page layout." },
  { id: "fc-basic-inspect", group: "basic", f: "Inspect pages shortcut and what it shows", b: "Ctrl+Alt+F1 — table name, field names, filters, extensions. Read-only diagnostics when a field is “missing.”" },
  { id: "fc-basic-excel", group: "basic", f: "Edit in Excel vs data analysis mode", b: "Edit in Excel can publish changes back (Excel add-in + insert/modify permission). Data analysis mode is read-only pivoting inside BC. Analysis does not write." },
  { id: "fc-basic-view", group: "basic", f: "A saved filter/view on sales orders is which layer?", b: "Personalization for that user. If the whole sales profile should see it, customize the profile instead." },
  { id: "fc-basic-find", group: "basic", f: "How do you jump from a document to related ledger entries?", b: "Find Entries / Navigate / Related on the document — not Inspect pages and not payment registration." },

  { id: "fc-purch-path", group: "purch", f: "Happy path for a stock purchase", b: "Quote → Order → Receive (posted receipt) → Invoice (posted purchase invoice). You can Receive and Invoice together, or invoice later from the receipt lines." },
  { id: "fc-purch-over", group: "purch", f: "PO is 100, truck brought 108, receiving 108 fails. What is missing?", b: "An Over-Receipt Code with a tolerance that covers 8%, on the item or the location." },
  { id: "fc-purch-undo", group: "purch", f: "Undo Receipt is allowed when?", b: "When the posted receipt is not fully invoiced. Invoiced receipts need a purchase return / credit memo, not Undo." },
  { id: "fc-purch-blanket", group: "purch", f: "Recurring purchase lines vs blanket purchase order", b: "Recurring lines stamp a standard set of lines onto a new document (weekly office supplies). A blanket order is a remaining-quantity commitment you release ordinary POs against." },
  { id: "fc-purch-def", group: "purch", f: "Annual software licence on a purchase invoice, not stocked. How do you spread expense?", b: "A deferral code on the purchase line or G/L account — not an over-receipt code and not Specific costing." },

  { id: "fc-sales-convert", group: "sales", f: "Sales quote → invoice vs quote → order", b: "Invoice = bill now (no warehouse flow required). Order = commit to ship and invoice later." },
  { id: "fc-sales-avail", group: "sales", f: "Item availability views to know", b: "By location, by event (supply/demand), by period, by variant, by BOM. Always read the location on the line." },
  { id: "fc-sales-undo", group: "sales", f: "Undo Shipment is allowed when?", b: "When the shipment is not fully invoiced. Invoiced shipments need a sales return / credit memo (and Correct/Cancel on the invoice if unpaid)." },
  { id: "fc-sales-blanket", group: "sales", f: "Customer commits to 5,000 units over six months; you will ship on ordinary orders. What first?", b: "A blanket sales order. Recurring sales lines only stamp the same lines; they do not track remaining commitment." },

  { id: "fc-docs-release", group: "docs", f: "Release vs Reopen on a sales or purchase document", b: "Release locks the document, runs checks (approvals, dimensions), and is required before many posts. Reopen returns it to Open so you can edit." },
  { id: "fc-docs-combine-s", group: "docs", f: "Five posted sales shipments, one customer, one invoice. What action?", b: "Get Shipment Lines on a sales invoice (combine shipments)." },
  { id: "fc-docs-combine-p", group: "docs", f: "Three posted purchase receipts, one vendor, one invoice. What action?", b: "Get Receipt Lines on a purchase invoice (combine receipts)." },
  { id: "fc-docs-correct", group: "docs", f: "Correct vs Cancel on a posted sales invoice (unpaid)", b: "Cancel = corrective credit memo only. Correct = credit memo plus a new invoice copy you can edit and repost." },
  { id: "fc-docs-unapply", group: "docs", f: "Posted invoice is applied to a payment. Correct is not available. First step?", b: "Unapply Entries on the customer/vendor ledger, then Correct or Cancel. Do not delete G/L entries." },
  { id: "fc-docs-prepay", group: "docs", f: "Customer must pay 30% before you ship. Flow?", b: "Prepayment % on the customer or the sales document → post a prepayment invoice → later invoice deducts the prepaid amount. Setup includes prepayment G/L on posting groups." },

  { id: "fc-pay-tools", group: "pay", f: "Payment journal vs cash receipt journal vs payment registration", b: "Payment journal = pay vendors. Cash receipt journal = customer money in, line by line. Payment registration = tick open customer invoices as paid. Bank rec is none of these." },
  { id: "fc-pay-apply", group: "pay", f: "Apply Entries vs Unapply Entries", b: "Apply links a payment to invoices (remaining → 0). Unapply reverses that link. Unapply before Correct/Cancel on a paid invoice, or when a payment hit the wrong invoice." },
  { id: "fc-pay-reverse", group: "pay", f: "When is Reverse Transaction the right tool?", b: "Posted general journals / G/L registers. Not posted sales or purchase documents — those use Correct/Cancel or a credit memo." },
  { id: "fc-pay-bankrec", group: "pay", f: "Bank statement arrived. Which page matches it to bank ledger entries?", b: "Bank Account Reconciliation. Difference must be zero (or a permitted balancing difference). Copilot can assist matching. This is not payment registration." },
  { id: "fc-pay-fx", group: "pay", f: "Adjust Exchange Rates restates what?", b: "FX on customer, vendor, and bank remaining amounts, plus additional reporting currency. It does not revalue inventory cost (that is Adjust Cost - Item Entries)." },
  { id: "fc-pay-dimcorr", group: "pay", f: "Posted general journal used the wrong Department. Amounts are correct. Tool?", b: "Dimension Correction Tool — fixes posted dimensions without reversing the original financial posting. Not Undo Receipt, not delete ledger entry." },
  { id: "fc-pay-revalue", group: "pay", f: "Revalue G/L account balances is for what?", b: "Additional reporting currency / FX revaluation of G/L balances. Not phys. inventory and not Adjust Cost." },
  { id: "fc-pay-alloc-use", group: "pay", f: "Month-end: post rent through an allocation account. What do you post to?", b: "The allocation account. It fans out to the destination accounts and dimensions. That is “use general ledger allocations,” not a sales document." },

  { id: "fc-fatx-acq", group: "fa-tx", f: "Two valid ways to post FA acquisition", b: "FA G/L journal, or a purchase invoice line with FA Posting Type = Acquisition Cost." },
  { id: "fc-fatx-dep", group: "fa-tx", f: "Calculate Depreciation produces what?", b: "An FA G/L journal you then post. Typically scheduled monthly on a job queue. You cannot depreciate before acquisition." },
  { id: "fc-fatx-disp", group: "fa-tx", f: "FA disposal posts which three economic effects?", b: "Removes remaining book value, posts disposal proceeds if sold, and recognizes gain or loss. Acquisition and depreciation must already be posted." },

  { id: "fc-invtx-no-po", group: "inv-tx", f: "Found 12 units that were never purchased on a PO and will not be invoiced. What do you post?", b: "Item journal positive adjustment (or an inventory receipt document if enabled) — not a dummy purchase order." },
  { id: "fc-invtx-xfer", group: "inv-tx", f: "Move 40 units EAST → WEST overnight with in-transit. Which document?", b: "Transfer order (supports in-transit). Reclass can change location in one posting but is not the in-transit shipment/receipt document." },
  { id: "fc-invtx-reclass", group: "inv-tx", f: "Same quantity, change bin / lot / dimension / variant. Which journal?", b: "Item reclassification journal. Phys. inventory posts counting differences; it is not a bin move." },
  { id: "fc-invtx-count", group: "inv-tx", f: "Phys. inventory journal steps", b: "Calculate Inventory → enter counted quantities → post the difference (counted 7, calculated 10 → negative adjustment of 3). Cycle counting uses counting periods on items/SKUs." },
  { id: "fc-invtx-adjcost", group: "inv-tx", f: "Qty on hand is right, inventory G/L is wrong after a late vendor invoice. Which batch?", b: "Adjust Cost - Item Entries. It forwards the late cost into outbound entries and G/L. Often a job queue. It is costing, not counting." },
];

window.MB800.questions = [
  {
    id: "q1",
    domain: "setup",
    group: "company",
    q: "Contoso has a live company with master data. They need a new legal entity with the same chart of accounts and posting groups, but no posted transactions. What should you use first?",
    choices: [
      "Create a configuration package from posted G/L entries and apply it",
      "Run Assisted Setup Create New Company and copy setup/master data from the existing company",
      "Run Close Income Statement in the live company, then rename it",
      "Create a blank company and use Payment Registration to import opening balances",
    ],
    answer: [1],
    why: "Assisted Setup’s create-company path can copy a company or selected setup/master data without dragging the full transaction history. Packages of G/L entries would copy transactions. Closing income statement does not clone a company.",
  },
  {
    id: "q2",
    domain: "setup",
    group: "company",
    q: "You must list the tables a customer will fill in Excel for a RapidStart migration, including related tables. Which object do you build first?",
    choices: ["Configuration package only", "Configuration worksheet", "Data exchange definition", "Inventory posting setup"],
    answer: [1],
    why: "The configuration worksheet is the catalogue of tables. You then create/export a package from that list. Data exchange definitions are for ongoing file imports, not RapidStart company spin-up.",
  },
  {
    id: "q3",
    domain: "setup",
    group: "security",
    q: "A salesperson must see only customers that have their salesperson code. Permission sets already allow Customer table read. What else do you apply?",
    choices: [
      "A profile with a custom Role Center",
      "A security filter on the permission set",
      "Personalization to hide the customer list",
      "SUPER, then teach them to filter",
    ],
    answer: [1],
    why: "Security filters restrict rows. Profiles and personalization change UI, not data access. SUPER would make the problem worse.",
  },
  {
    id: "q4",
    domain: "setup",
    group: "security",
    q: "Users still have full access after you assigned a narrow permission set. Which two checks are the most likely?",
    choices: [
      "The user still has SUPER or a broad permission set from a security group",
      "The number series Manual Nos. flag is on",
      "Another security group still assigns D365 BUS FULL ACCESS",
      "The item costing method is FIFO",
    ],
    answer: [0, 2],
    why: "Rights accumulate. SUPER or a leftover full-access assignment via a group will override your careful set. Number series and costing are unrelated.",
  },
  {
    id: "q5",
    domain: "ops",
    group: "basic",
    q: "Warehouse users should all see extra columns on the Item list, including a field that exists on the table but not on the page. What do you do?",
    choices: [
      "Ask each user to personalize their page",
      "Customize pages for the warehouse profile",
      "Change global dimension 1 to Item Category",
      "Run Edit in Excel once",
    ],
    answer: [1],
    why: "Profile customization can surface source-table fields for everyone on that role. Personalization is per user and cannot always add fields that were never on the page. Edit in Excel does not change the page layout.",
  },
  {
    id: "q6",
    domain: "setup",
    group: "core",
    q: "Sales invoices must be numbered automatically and users must not type their own numbers. How do you set the number series?",
    choices: [
      "Default Nos. = Yes, Manual Nos. = No",
      "Default Nos. = No, Manual Nos. = Yes",
      "Date Order = No, Manual Nos. = Yes",
      "Assign the series to the customer posting group",
    ],
    answer: [0],
    why: "Default Nos. proposes the next number; turning Manual Nos. off blocks typed numbers.",
  },
  {
    id: "q7",
    domain: "setup",
    group: "core",
    q: "Copilot’s bank reconciliation assist is missing. The user has ordinary finance permissions. Where do you activate the feature?",
    choices: [
      "General Ledger Setup",
      "Copilot & agent capabilities",
      "Payment Registration Setup",
      "Inventory Setup",
    ],
    answer: [1],
    why: "Feature on/off for Copilot and agents is the Copilot & agent capabilities page. Then confirm permissions and that personalization did not hide the action.",
  },
  {
    id: "q8",
    domain: "setup",
    group: "dimensions",
    q: "Department must be on every G/L entry and used heavily in financial reports. Project is only needed as a column on sales and purchase lines. What should you configure?",
    choices: [
      "Department as a shortcut, Project as global dimension 1",
      "Department as a global dimension, Project as a shortcut dimension",
      "Both as item attributes",
      "Both as number series",
    ],
    answer: [1],
    why: "Globals are stored on ledger entries and are the reporting default. Shortcuts are the extra document columns.",
  },
  {
    id: "q9",
    domain: "setup",
    group: "dimensions",
    q: "Posting must fail if Department = SALES is combined with Project = ADMIN. What do you set up?",
    choices: ["Default dimension priority", "Dimension combination (blocked)", "A security filter on G/L", "Payment terms"],
    answer: [1],
    why: "Dimension combinations block illegal pairs. Priorities resolve competing defaults; they do not block pairs.",
  },
  {
    id: "q10",
    domain: "setup",
    group: "dimensions",
    q: "A customer defaults Department = SALES. The revenue G/L account defaults Department = CORP. Sales lines should keep the customer’s department. What do you configure?",
    choices: [
      "Default dimension priorities so Customer ranks above G/L Account",
      "A blocked dimension combination",
      "A new vendor posting group",
      "Close the fiscal year",
    ],
    answer: [0],
    why: "Default dimension priorities decide which master wins when both supply a dimension.",
  },
  {
    id: "q11",
    domain: "setup",
    group: "workflows",
    q: "You need purchase invoices above 5,000 to require a manager’s approval inside Business Central, with email notices. Which three objects are part of the native solution?",
    choices: [
      "A workflow based on a purchase invoice approval template",
      "Approval User Setup (and amount limits)",
      "Notification Setup / schedule",
      "Inventory Posting Setup",
    ],
    answer: [0, 1, 2],
    why: "Native approvals = workflow + approvers + notifications. Inventory posting setup is G/L mapping for stock.",
  },
  {
    id: "q12",
    domain: "fin",
    group: "fm",
    q: "Payment terms code 10TH uses date formula CM+10D. An invoice dated 17 March is due when?",
    choices: ["27 March", "10 April", "31 March", "17 April"],
    answer: [1],
    why: "CM is the end of March (31). +10D is 10 April.",
  },
  {
    id: "q13",
    domain: "fin",
    group: "fm",
    q: "Users must not post into last fiscal year, but this year’s periods should stay open. Where do you enforce the date window?",
    choices: [
      "Close Income Statement only",
      "General Ledger Setup Allow Posting From / Allow Posting To",
      "Payment terms",
      "Item categories",
    ],
    answer: [1],
    why: "Allow Posting From/To is the hard gate. Closing a year or running Close Income Statement does not by itself stop posting if the date window still includes those dates.",
  },
  {
    id: "q14",
    domain: "fin",
    group: "fm",
    q: "An annual insurance invoice must hit expense over 12 months. What do you set up?",
    choices: [
      "A deferral template and assign it to the expense account or document line",
      "A blanket sales order",
      "Standard costing",
      "Payment registration",
    ],
    answer: [0],
    why: "Deferrals spread revenue or expense across periods. Blanket orders are quantity agreements.",
  },
  {
    id: "q15",
    domain: "fin",
    group: "coa",
    q: "A newly created posting G/L account never appears on the built-in income statement. What is the first thing to check?",
    choices: [
      "Whether the account has an account category / subcategory",
      "Whether Manual Nos. is enabled",
      "Whether the user personalized the Role Center",
      "Whether LIFO is allowed",
    ],
    answer: [0],
    why: "Financial reports are driven by account categories. Uncategorized posting accounts drop out of the layouts.",
  },
  {
    id: "q16",
    domain: "fin",
    group: "posting",
    q: "Posted sales show the correct receivables account but sales revenue hits the wrong G/L account. Where do you fix the mapping?",
    choices: [
      "Customer posting group",
      "General posting setup (Gen. Bus. × Gen. Prod.)",
      "Inventory posting setup",
      "FA depreciation book",
    ],
    answer: [1],
    why: "Receivables = customer posting group. Sales/COGS/discounts = general posting setup. Inventory account = inventory posting setup.",
  },
  {
    id: "q17",
    domain: "fin",
    group: "posting",
    q: "Items in location EAST post to a different inventory account than location WEST. Which setup controls that?",
    choices: [
      "General posting setup",
      "Inventory posting setup for location × inventory posting group",
      "Vendor posting group",
      "Payment methods",
    ],
    answer: [1],
    why: "Inventory G/L is location plus inventory posting group.",
  },
  {
    id: "q18",
    domain: "fin",
    group: "journals",
    q: "Once a month you must post whatever remains on a clearing account to zero it. Which recurring method?",
    choices: ["F Fixed", "V Variable", "B Balance", "RF Reversing Fixed"],
    answer: [2],
    why: "B posts the current balance. F repeats an amount you stored. V waits for a typed amount. RF would reverse next period.",
  },
  {
    id: "q19",
    domain: "fin",
    group: "ap",
    q: "Which chain is correct for a posted purchase invoice?",
    choices: [
      "Vendor → G/L entry only; no vendor ledger",
      "Vendor → vendor ledger entry → detailed vendor ledger entry → G/L entry",
      "Vendor → item ledger entry → customer ledger entry",
      "Vendor → FA depreciation book → payment registration",
    ],
    answer: [1],
    why: "Subledger then details (remaining amount, applications) then G/L. Purchase invoices do not create customer ledger entries.",
  },
  {
    id: "q20",
    domain: "fin",
    group: "ar",
    q: "The AR clerk has a stack of customer cheques and a list of open invoices. They want to tick invoices as paid without building journal lines by hand. Which page?",
    choices: ["Payment journal", "Payment registration", "Phys. Inventory Journal", "Dimension Correction Tool"],
    answer: [1],
    why: "Payment registration is the open-invoice worksheet for incoming customer money. Payment journal is the vendor-pay side (and general payments).",
  },
  {
    id: "q21",
    domain: "fin",
    group: "fa",
    q: "A machine should depreciate faster in early years, then never below straight-line. Which method family fits?",
    choices: ["Manual", "DB1/SL or DB2/SL", "Specific", "Average"],
    answer: [1],
    why: "Declining-balance with straight-line switch. Specific/Average are inventory costing methods, not FA depreciation.",
  },
  {
    id: "q22",
    domain: "fin",
    group: "fa",
    q: "A production line is one main asset with three component assets that must depreciate on their own lives. What do you create?",
    choices: [
      "One FA with costing method FIFO",
      "A main asset and component assets linked to it",
      "Three SKUs and a transfer order",
      "A blanket purchase order only",
    ],
    answer: [1],
    why: "Main asset + components is the FA model. Costing methods belong to items.",
  },
  {
    id: "q23",
    domain: "trade",
    group: "inventory",
    q: "Serialized generators must carry the exact cost of the unit that was received. Which costing method?",
    choices: ["FIFO", "Average", "Standard", "Specific"],
    answer: [3],
    why: "Specific costing is for identifiable units (serials). FIFO would peel the oldest receipt regardless of which serial shipped.",
  },
  {
    id: "q24",
    domain: "trade",
    group: "inventory",
    q: "Chemicals are stored in a tank and cannot be distinguished by receipt. Costs move every week. Which costing method?",
    choices: ["Specific", "Average", "LIFO only", "Standard, because variances"],
    answer: [1],
    why: "Average is the textbook match for mixed, indistinguishable stock with unstable cost. Standard is for cost control with variances, not ‘we cannot tell the molecules apart.’",
  },
  {
    id: "q25",
    domain: "trade",
    group: "inventory",
    q: "Quantity on hand looks right but the inventory G/L balance is wrong after a late vendor invoice. Which batch is designed for that?",
    choices: [
      "Close Income Statement",
      "Adjust Cost - Item Entries",
      "Calculate Depreciation",
      "Combine shipments",
    ],
    answer: [1],
    why: "Item ledger holds qty; value entries hold cost. Adjust Cost forwards the late invoice cost into outbound entries and G/L.",
  },
  {
    id: "q26",
    domain: "trade",
    group: "inventory",
    q: "The same item is replenished differently in EAST and WEST, and WEST should use a different standard cost. What do you create?",
    choices: ["Two customer posting groups", "Stockkeeping units per location", "Two number series named EAST and WEST", "A security filter on Item"],
    answer: [1],
    why: "SKUs hold location- (and variant-) specific replenishment and cost.",
  },
  {
    id: "q27",
    domain: "trade",
    group: "pricing",
    q: "A customer should get a cheaper unit price for item 1001 above 50 pcs, and a 2% discount on the whole invoice if the invoice is large. Which two setups?",
    choices: [
      "A sales price / price list with a quantity break",
      "Invoice discount setup on the customer (and allow invoice disc. on the item)",
      "Over-receipt code",
      "FA subclass",
    ],
    answer: [0, 1],
    why: "Quantity break = price. Header discount = invoice discount. Over-receipt is purchasing tolerance; FA subclass is assets.",
  },
  {
    id: "q28",
    domain: "ops",
    group: "basic",
    q: "A user hid the FactBox on Customer Card. Other users still see it. What happened?",
    choices: ["They customized the profile", "They personalized their own workspace", "They designed a page extension", "They ran a configuration package"],
    answer: [1],
    why: "Personalization is per user. Profile customization and AL design would show for others.",
  },
  {
    id: "q29",
    domain: "ops",
    group: "basic",
    q: "You need to know which table and field a missing column would come from, and which extension added a nearby field. Which tool?",
    choices: ["Payment registration", "Inspect pages (Ctrl+Alt+F1)", "Phys. Inventory Journal", "Close Year"],
    answer: [1],
    why: "Page inspection is the functional consultant’s debugger for tables, fields, and extensions.",
  },
  {
    id: "q30",
    domain: "ops",
    group: "basic",
    q: "You must bulk-edit vendor payment terms and write the changes back to Business Central. Which tool?",
    choices: ["Data analysis mode", "Edit in Excel", "Bank account reconciliation", "Tell me, then personalize"],
    answer: [1],
    why: "Edit in Excel can publish. Data analysis mode is read-only analysis.",
  },
  {
    id: "q31",
    domain: "ops",
    group: "purch",
    q: "A purchase order is for 100. The truck brought 108. Receiving 108 fails. What is missing?",
    choices: [
      "An Over-Receipt Code with a tolerance that covers 8%",
      "A blanket sales order",
      "Standard costing",
      "A shortcut dimension",
    ],
    answer: [0],
    why: "Over-receipt is blocked unless an over-receipt code (item or location) allows the extra quantity.",
  },
  {
    id: "q32",
    domain: "ops",
    group: "purch",
    q: "A purchase receipt was posted but not invoiced. The quantity was wrong. What reverses it?",
    choices: ["Undo Receipt", "Cancel posted sales invoice", "Reverse Transaction on a G/L register", "Calculate Depreciation"],
    answer: [0],
    why: "Undo Receipt is for uninvoiced posted receipts. Reverse Transaction is for journals. Cancel posted sales invoice is the sales AR document tool.",
  },
  {
    id: "q33",
    domain: "ops",
    group: "purch",
    q: "A vendor agrees to supply 12,000 units over a year. You will place monthly orders against that remaining quantity. What do you create first?",
    choices: ["Recurring general journal", "Blanket purchase order", "FA component", "Payment registration"],
    answer: [1],
    why: "Blanket PO is the quantity agreement. Recurring purchase lines repeat the same lines; they do not track a remaining commitment of 12,000.",
  },
  {
    id: "q34",
    domain: "ops",
    group: "sales",
    q: "A sales quote should become a shipment-and-invoice process later, not a bill today. What do you convert it to?",
    choices: ["Sales invoice", "Sales order", "Purchase credit memo", "Recurring journal"],
    answer: [1],
    why: "Order = later fulfillment. Invoice = bill now (no warehouse flow required).",
  },
  {
    id: "q35",
    domain: "ops",
    group: "docs",
    q: "Five posted sales shipments for the same customer must appear on one invoice. What do you use?",
    choices: ["Get Shipment Lines on a sales invoice (combine shipments)", "Payment registration", "Item reclassification journal", "Close Year"],
    answer: [0],
    why: "Combine shipments = Get Shipment Lines. Payment registration collects cash, not shipments.",
  },
  {
    id: "q36",
    domain: "ops",
    group: "docs",
    q: "A posted sales invoice has a wrong item. It is not paid. You need a reversed credit memo and a new invoice you can edit. Which action?",
    choices: ["Cancel", "Correct", "Undo Shipment only", "Reverse Transaction"],
    answer: [1],
    why: "Correct = corrective credit memo + new invoice copy. Cancel = credit memo only. Reverse Transaction is not for posted sales invoices.",
  },
  {
    id: "q37",
    domain: "ops",
    group: "docs",
    q: "A posted sales invoice is applied to a payment. Correct is not available. What do you do first?",
    choices: [
      "Unapply the ledger entries, then Correct or Cancel",
      "Change the costing method to Standard",
      "Delete the G/L entries",
      "Run Assisted Setup",
    ],
    answer: [0],
    why: "Applied (paid) invoices must be unapplied before corrective actions.",
  },
  {
    id: "q38",
    domain: "ops",
    group: "pay",
    q: "A posted general journal used the wrong Department dimension. The amounts are correct. Microsoft’s current tool for this is:",
    choices: [
      "Dimension Correction Tool",
      "Undo Receipt",
      "Payment terms",
      "Create a new company",
    ],
    answer: [0],
    why: "The Dimension Correction Tool fixes posted dimensions without reversing the original financial posting. That skill is explicit on the June 2026 outline.",
  },
  {
    id: "q39",
    domain: "ops",
    group: "inv-tx",
    q: "You need to move 40 units from location EAST to WEST, with an in-transit location so stock is not ‘nowhere’ overnight. Which document?",
    choices: ["Item reclassification journal only", "Transfer order", "Sales credit memo", "FA disposal"],
    answer: [1],
    why: "Transfer orders support in-transit. Reclass can change location in one posting but is not the in-transit shipment/receipt document.",
  },
  {
    id: "q40",
    domain: "ops",
    group: "inv-tx",
    q: "Stock is in the right location but the bin and lot need to change. Quantity must stay 40. Which journal?",
    choices: ["Phys. Inventory Journal", "Item reclassification journal", "Payment journal", "Recurring general journal method F"],
    answer: [1],
    why: "Reclass changes bin/variant/lot/dimension/location without intending a net qty change. Phys. inventory posts counting differences.",
  },
  {
    id: "q41",
    domain: "ops",
    group: "inv-tx",
    q: "You calculated inventory on the phys. inventory journal. Counted quantity is 7; calculated is 10. What happens when you post?",
    choices: [
      "A negative adjustment of 3",
      "A transfer order of 3",
      "A sales invoice of 3",
      "Nothing; analysis mode is read-only",
    ],
    answer: [0],
    why: "Phys. inventory posts the difference between counted and calculated on-hand.",
  },
  {
    id: "q42",
    domain: "ops",
    group: "docs",
    q: "A customer must pay 30% before you ship. Where do you start?",
    choices: [
      "Set a prepayment % on the customer or sales document and post a prepayment invoice",
      "Use over-receipt codes",
      "Switch costing to LIFO",
      "Run Combine receipts",
    ],
    answer: [0],
    why: "Prepayment invoices are a first-class sales/purchase flow on the outline.",
  },
  {
    id: "q43",
    domain: "ops",
    group: "basic",
    q: "Which statement about page changes is accurate?",
    choices: [
      "Designing a page in AL affects only the consultant who published it",
      "Customizing a profile affects users assigned that profile",
      "Personalizing a page affects the whole company",
      "Inspect pages writes back like Edit in Excel",
    ],
    answer: [1],
    why: "Customize = that role. Personalize = me. Design = everyone with the extension. Inspect is read-only diagnostics.",
  },
  {
    id: "q44",
    domain: "setup",
    group: "core",
    q: "Which change is true of the skills measured as of 30 June 2026?",
    choices: [
      "Process inventory transactions is a new operations skill",
      "Describe Business Central integrations was expanded to 30–35%",
      "Configure financials was removed",
      "Copilot was removed from core functionality",
    ],
    answer: [0],
    why: "Microsoft’s change log: inventory transactions new; integrations skill area removed; Copilot/agents added to core setup; financials weight unchanged.",
  },
  {
    id: "q45",
    domain: "ops",
    group: "fa-tx",
    q: "You posted FA acquisition from a purchase invoice. Next month you want depreciation to post automatically. What is the usual pair of tools?",
    choices: [
      "Calculate Depreciation (fills an FA G/L journal) and a job queue to run it",
      "Payment registration and Combine shipments",
      "Phys. inventory and over-receipt",
      "Edit in Excel on the FA class",
    ],
    answer: [0],
    why: "Calculate Depreciation prepares the journal; job queues schedule the batch. The other tools are unrelated.",
  },

  {
    id: "q46",
    domain: "setup",
    group: "company",
    q: "You must move an on-premises Business Central company into a SaaS tenant, including posted transactions. Which tool matches the outline’s “migrate data to and within Business Central” for that scenario?",
    choices: [
      "A RapidStart configuration worksheet only",
      "Cloud Migration (replication), then cut over",
      "Payment registration",
      "Create a blank company and type opening balances on G/L account cards",
    ],
    answer: [1],
    why: "Cloud Migration replicates history. RapidStart packages are for setup/master data you Apply. You do not type opening balances on the account card.",
  },
  {
    id: "q47",
    domain: "setup",
    group: "security",
    q: "Finance wants an audit of who changed customer Credit Limit fields. Which setup is the outline pointing at?",
    choices: [
      "Security auditing / field monitoring (change log) on the Customer table field",
      "A shipping agent service",
      "Over-receipt codes",
      "Standard costing",
    ],
    answer: [0],
    why: "Security auditing is field-level history. Shipping agents, over-receipt, and costing do not record who edited a master-data field.",
  },
  {
    id: "q48",
    domain: "setup",
    group: "core",
    q: "One customer must receive a Word invoice layout by email; everyone else keeps the built-in RDLC layout. Where do you set the exception?",
    choices: [
      "Document layouts on that customer",
      "Inventory posting setup",
      "Payment terms",
      "Phys. Inventory Journal",
    ],
    answer: [0],
    why: "Document layouts on the customer/vendor pick the layout for that account. Inventory posting and payment terms are unrelated.",
  },
  {
    id: "q49",
    domain: "setup",
    group: "core",
    q: "Adjust Cost - Item Entries should run every night without a user at the keyboard. What do you set up?",
    choices: [
      "A job queue entry for the report/codeunit on a schedule",
      "A blanket sales order",
      "SUPER for the warehouse profile",
      "A shortcut dimension named NIGHT",
    ],
    answer: [0],
    why: "Job queues are how BC runs batches unattended. Blanket orders and dimensions do not schedule cost adjustment.",
  },
  {
    id: "q50",
    domain: "fin",
    group: "fm",
    q: "Management wants a second currency on financial reports in addition to local currency. Where do you turn that on?",
    choices: [
      "Additional reporting currency on General Ledger Setup, with exchange rates on the currency",
      "Item attributes",
      "Over-receipt code",
      "A saved view on the customer list",
    ],
    answer: [0],
    why: "Additional reporting currency is a G/L Setup switch. Exchange rates still live on the currency card. Item attributes are not a currency engine.",
  },
  {
    id: "q51",
    domain: "fin",
    group: "fm",
    q: "Payment method CASH should drop cash receipt journal lines onto a petty-cash G/L account automatically. What do you put on the payment method?",
    choices: [
      "A balancing account (G/L or bank)",
      "An FA subclass",
      "A costing method",
      "Default Nos. = No",
    ],
    answer: [0],
    why: "Payment methods can carry a balancing account so the journal balances without typing the cash account each time.",
  },
  {
    id: "q52",
    domain: "fin",
    group: "coa",
    q: "Rent is posted to one account and must split 70/30 to two departments as it posts. Which setup matches “general ledger allocations”?",
    choices: [
      "An allocation account (or a recurring journal with allocation keys) that breaks the amount by percent and dimension",
      "A security filter on G/L",
      "Specific costing",
      "Undo Receipt",
    ],
    answer: [0],
    why: "Allocation accounts and recurring-journal allocation keys are the G/L split tools. Security filters restrict rows; they do not allocate rent.",
  },
  {
    id: "q53",
    domain: "fin",
    group: "journals",
    q: "You add a EUR bank account. Which two setup facts are the usual pair?",
    choices: [
      "Currency Code = EUR on the bank account",
      "A bank account posting group that points at the EUR cash G/L account",
      "Costing method LIFO on the bank account",
      "A blanket purchase order for the bank",
    ],
    answer: [0, 1],
    why: "Bank accounts have a currency and a posting group (G/L). Costing methods belong to items. Blanket orders are purchasing.",
  },
  {
    id: "q54",
    domain: "fin",
    group: "ap",
    q: "You will pay a vendor by SEPA credit transfer from the payment journal. The vendor card has posting groups and payment terms. What is still missing on the vendor?",
    choices: [
      "A vendor bank account with the IBAN/BIC (or local equivalent)",
      "A customer ship-to address",
      "An FA depreciation book",
      "Data analysis mode",
    ],
    answer: [0],
    why: "Electronic payments need vendor bank details. Ship-to is sales. FA books are assets. Analysis mode does not pay vendors.",
  },
  {
    id: "q55",
    domain: "fin",
    group: "ar",
    q: "You are setting up accounts receivable. Which page is the cash-receipt equivalent of the vendor payment journal?",
    choices: [
      "Cash receipt journal",
      "Phys. Inventory Journal",
      "FA G/L journal only",
      "Item reclassification journal",
    ],
    answer: [0],
    why: "Cash receipt journal is the AR journal for incoming money. Payment registration is a worksheet on top of open invoices; it is not a journal template.",
  },
  {
    id: "q56",
    domain: "trade",
    group: "master",
    q: "Customer CARDIO ships via UPS Next Day to a clinic that is not the bill-to address. Which three customer setups apply?",
    choices: [
      "A ship-to address for the clinic",
      "Shipping agent UPS and shipping agent service Next Day",
      "A shipment method if you track Incoterms",
      "Vendor posting group on the customer",
    ],
    answer: [0, 1, 2],
    why: "Ship-to, agent/service, and shipment method are sales master data. Vendor posting groups belong on vendors.",
  },
  {
    id: "q57",
    domain: "trade",
    group: "master",
    q: "A vendor’s factory is in another city and typically needs 14 days before goods arrive. Which two vendor fields?",
    choices: [
      "Order address (the factory)",
      "Lead time calculation 14D",
      "Customer posting group",
      "Over-receipt code on a sales quote",
    ],
    answer: [0, 1],
    why: "Order address is an alternate purchase address. Lead time is the date formula for expected receipt. Customer posting groups are AR.",
  },
  {
    id: "q58",
    domain: "ops",
    group: "purch",
    q: "Purchasing sent a quote to a vendor, the vendor accepted, and you now need a document you can receive against. What do you do?",
    choices: [
      "Convert / make a purchase order from the quote",
      "Post a sales credit memo",
      "Run Close Income Statement",
      "Create a customer bank account",
    ],
    answer: [0],
    why: "You receive against a purchase order, not against a quote. Sales credit memos and year-end are unrelated.",
  },
  {
    id: "q59",
    domain: "ops",
    group: "purch",
    q: "Every Friday you buy the same five office items from the same vendor, but there is no annual quantity commitment. What should you configure?",
    choices: [
      "Recurring purchase lines for that vendor",
      "A blanket purchase order for 12,000 units",
      "A main FA with components",
      "Standard costing on the vendor card",
    ],
    answer: [0],
    why: "Recurring purchase lines stamp a standard set of lines. A blanket order is a remaining-qty contract, which this scenario does not have.",
  },
  {
    id: "q60",
    domain: "ops",
    group: "purch",
    q: "A purchase invoice for an annual software licence must hit expense over 12 months. The licence is not an item you stock. What do you put on the purchase line?",
    choices: [
      "A deferral code (template) on the line or G/L account",
      "An over-receipt code",
      "Costing method Specific",
      "Undo Receipt",
    ],
    answer: [0],
    why: "Deferral codes on purchasing documents spread expense. Over-receipt is quantity tolerance. Specific costing is inventory.",
  },
  {
    id: "q61",
    domain: "ops",
    group: "sales",
    q: "A sales shipment was posted and then fully invoiced. Quantity was wrong. What is the valid correction path?",
    choices: [
      "Undo Shipment",
      "A sales return order or credit memo (Correct/Cancel if the invoice is still open)",
      "Item reclassification journal to the customer",
      "Payment registration",
    ],
    answer: [1],
    why: "Undo Shipment is blocked once the shipment is invoiced. You reverse with a return/credit (and Correct/Cancel on the invoice if unpaid).",
  },
  {
    id: "q62",
    domain: "ops",
    group: "sales",
    q: "An order line at location EAST warns on availability, but the item list shows stock at WEST. What should you check first?",
    choices: [
      "Item availability by location (and the location code on the line)",
      "Whether LIFO is legal",
      "The vendor’s FA class",
      "Report layouts",
    ],
    answer: [0],
    why: "Availability is per location. The item card total is not a promise that EAST can ship.",
  },
  {
    id: "q63",
    domain: "ops",
    group: "sales",
    q: "A customer commits to buy 5,000 units over six months. You will ship against that remaining quantity with ordinary sales orders. What do you create first?",
    choices: [
      "A blanket sales order",
      "A recurring general journal method B",
      "A configuration worksheet",
      "Payment registration",
    ],
    answer: [0],
    why: "Blanket sales orders are the quantity agreement. Recurring journals are G/L. Configuration worksheets are RapidStart.",
  },
  {
    id: "q64",
    domain: "ops",
    group: "docs",
    q: "Three posted purchase receipts for one vendor must appear on a single purchase invoice. What do you use?",
    choices: [
      "Get Receipt Lines on a purchase invoice (combine receipts)",
      "Get Shipment Lines on a sales invoice",
      "Calculate Depreciation",
      "Edit in Excel on the vendor list",
    ],
    answer: [0],
    why: "Combine receipts is the purchase mirror of combine shipments. Get Shipment Lines is sales.",
  },
  {
    id: "q65",
    domain: "ops",
    group: "docs",
    q: "A posted purchase invoice overcharged you. It is unpaid. You need to reverse it with a purchase credit memo. Which path matches the outline?",
    choices: [
      "Correct or Cancel the posted purchase invoice, or a purchase credit memo with Get Posted Document Lines to Reverse",
      "Undo Receipt on an invoiced receipt",
      "Reverse Transaction from a sales register",
      "Personalize the vendor card",
    ],
    answer: [0],
    why: "Posted purchase invoices are corrected with corrective credit memos (Correct/Cancel) or a manual credit memo. Undo Receipt is for uninvoiced receipts. Reverse Transaction is a journal tool.",
  },
  {
    id: "q66",
    domain: "ops",
    group: "docs",
    q: "A sales order must be locked for picking and posting, with dimension and approval checks run. Which action?",
    choices: ["Release", "Reopen", "Suggest Vendor Payments", "Inspect pages"],
    answer: [0],
    why: "Release changes status to Released and runs those checks. Reopen unlocks it again.",
  },
  {
    id: "q67",
    domain: "ops",
    group: "pay",
    q: "The bank statement arrived. You need to match it to bank ledger entries and post the reconciliation. Which page?",
    choices: [
      "Bank Account Reconciliation",
      "Payment registration",
      "Phys. Inventory Journal",
      "Document layouts",
    ],
    answer: [0],
    why: "Bank rec is its own page against the bank account. Payment registration applies customer invoices; it does not reconcile the bank statement.",
  },
  {
    id: "q68",
    domain: "ops",
    group: "pay",
    q: "A customer payment was applied to the wrong invoice. You have not reversed the payment. What do you do first?",
    choices: [
      "Unapply Entries on the customer ledger, then apply to the correct invoice",
      "Delete the G/L entries",
      "Change the item costing method",
      "Create a configuration package of ledger entries",
    ],
    answer: [0],
    why: "Unapply breaks the application without inventing a delete-ledger-entry tool. Then apply to the right invoice.",
  },
  {
    id: "q69",
    domain: "ops",
    group: "pay",
    q: "A posted general journal accrued wages and should be reversed on day 1 of next period. Which two approaches are valid?",
    choices: [
      "Recurring method RF/RV/RB so it auto-reverses next period",
      "Reverse Transaction on the posted register / G/L register",
      "Cancel posted sales invoice",
      "Undo Shipment",
    ],
    answer: [0, 1],
    why: "Reversing recurring methods and Reverse Transaction are journal tools. Cancel/Undo are document tools.",
  },
  {
    id: "q70",
    domain: "ops",
    group: "pay",
    q: "Month-end: post the month’s rent through an allocation account that splits by department. This is the operations skill “use general ledger allocations.” What do you post to?",
    choices: [
      "The allocation account (it fans out to the destination accounts/dimensions)",
      "Payment registration",
      "A blanket sales order",
      "An item journal for rent",
    ],
    answer: [0],
    why: "Using allocations means posting to the allocation account (or a recurring journal with allocation keys), not a sales or item document.",
  },
  {
    id: "q71",
    domain: "ops",
    group: "pay",
    q: "EUR customer remaining amounts must be restated at month-end rates in local currency. Which batch?",
    choices: [
      "Adjust Exchange Rates",
      "Adjust Cost - Item Entries",
      "Calculate Inventory",
      "Combine shipments",
    ],
    answer: [0],
    why: "Adjust Exchange Rates is FX on customers, vendors, banks, and additional reporting currency. Adjust Cost is inventory costing.",
  },
  {
    id: "q72",
    domain: "ops",
    group: "pay",
    q: "Additional reporting currency G/L balances are stale after a rate change. Inventory quantities are fine. Which batch matches “revalue general ledger account balances”?",
    choices: [
      "Revalue G/L account balances (reporting-currency / FX revaluation of G/L)",
      "Phys. Inventory Journal",
      "Undo Receipt",
      "Create a stockkeeping unit",
    ],
    answer: [0],
    why: "The outline item is G/L revaluation, not counting stock and not RapidStart.",
  },
  {
    id: "q73",
    domain: "ops",
    group: "fa-tx",
    q: "You sold a vehicle that is a fixed asset. Acquisition and depreciation are posted. What must you still process?",
    choices: [
      "FA disposal (FA journal or a sales document with FA posting type Disposal) so book value, proceeds, and gain/loss post",
      "A purchase blanket order",
      "Specific costing on the vehicle item only, with no FA disposal",
      "Payment registration of the original acquisition",
    ],
    answer: [0],
    why: "Disposal is a first-class FA transaction on the outline. Leaving the asset at remaining book value after a sale is the wrong books.",
  },
  {
    id: "q74",
    domain: "ops",
    group: "inv-tx",
    q: "Warehouse found 12 units that were never purchased on a PO and will not be invoiced. You need inventory and value in the ledger. What do you post?",
    choices: [
      "An item journal positive adjustment (or inventory receipt document), not a dummy purchase order",
      "A sales invoice",
      "Close Year",
      "A workflow template",
    ],
    answer: [0],
    why: "Inventory receipts without a trade document are item journals / inventory documents. A fake PO would expect a vendor invoice later.",
  },
  {
    id: "q75",
    domain: "trade",
    group: "pricing",
    q: "Vendor FURNITURE gives you a lower direct unit cost on item DESK above 10 pcs, and a 3% line discount on chairs regardless of qty. Which two setups?",
    choices: [
      "A purchase price / price list with a quantity break on DESK",
      "A purchase line discount % on chairs",
      "A customer invoice discount on FURNITURE",
      "FA declining-balance 2",
    ],
    answer: [0, 1],
    why: "Purchase prices replace cost; line discounts knock a percent off. Invoice discount on a customer is sales, and FA methods are assets.",
  },
  {
    id: "q76",
    domain: "setup",
    group: "workflows",
    q: "A purchase invoice is Open. A native approval workflow is live for that document type. The buyer posts and is surprised it worked with no approval. What did they skip?",
    choices: [
      "Send for approval (and wait for Approval until the document can be released/posted)",
      "Adjust Cost - Item Entries",
      "Create a SKU",
      "Enable LIFO",
    ],
    answer: [0],
    why: "Native workflows typically require Send Approval Request before Release/post. If posting is still allowed, the workflow event/condition does not cover that path — but the exam’s default story is send-for-approval first.",
  },
  {
    id: "q77",
    domain: "setup",
    group: "dimensions",
    q: "Every G/L account should default Department = CORP unless the account has its own default. Which setup is that?",
    choices: [
      "Default dimensions for account type G/L Account, plus per-account defaults and priorities if needed",
      "A blanket sales order",
      "Payment registration setup",
      "Item attributes named Department",
    ],
    answer: [0],
    why: "Default dimensions for account types apply to every record of that type. Item attributes are not ledger dimensions.",
  },
  {
    id: "q78",
    domain: "trade",
    group: "inventory",
    q: "Consulting hours should appear on sales invoices but must never have on-hand quantity. Which item type?",
    choices: ["Inventory", "Service", "Fixed asset class Tangible", "Begin-Total G/L account"],
    answer: [1],
    why: "Service items have no inventory quantity. Inventory items stock. FA classes are assets, not item types.",
  },
  {
    id: "q79",
    domain: "trade",
    group: "inventory",
    q: "The same bike is sold in Red/Blue and sizes S/M/L. You also want a “Material = Carbon” tag for filtering, and a hierarchy for reporting. Which three features?",
    choices: [
      "Item variants for color and size",
      "Item attributes for Material = Carbon",
      "Item categories for the reporting hierarchy",
      "Vendor bank accounts for each color",
    ],
    answer: [0, 1, 2],
    why: "Variants are the stock-keeping options. Attributes are name/value tags. Categories are the tree. Vendor bank accounts are AP.",
  },
  {
    id: "q80",
    domain: "ops",
    group: "basic",
    q: "A user built a filter on sales orders (Status = Released, Location = EAST) and wants it back tomorrow. What do they save, and which layer is it?",
    choices: [
      "Save as a view — personalization for that user",
      "A page extension in AL — design for everyone",
      "A configuration package",
      "A depreciation book",
    ],
    answer: [0],
    why: "Saved views are personalization. If the whole sales profile should see it, customize the profile instead — the stem says “a user.”",
  },
];

window.MB800.resources = [
  { name: "Official MB-800 study guide (skills measured)", href: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/mb-800", note: "Source of the outline in this desk. Read the change log." },
  { name: "Associate credential page", href: "https://learn.microsoft.com/en-us/credentials/certifications/d365-business-central-functional-consultant-associate/", note: "Duration, languages, renewal, schedule with Pearson VUE." },
  { name: "Free Microsoft practice assessment", href: "https://learn.microsoft.com/en-us/credentials/certifications/d365-business-central-functional-consultant-associate/practice/assessment?assessment-type=practice&assessmentId=109&practice-assessment-type=certification", note: "Closest official feel for question style. Do this before you book." },
  { name: "Exam sandbox", href: "https://aka.ms/examdemo", note: "Click through the real Pearson UI, including case-study layout." },
  { name: "Business Central product docs", href: "https://learn.microsoft.com/en-us/dynamics365/business-central/", note: "Search the exact page name from a question (Undo Receipt, Dimension Correction, Copilot & agent capabilities)." },
  { name: "Configure Copilot and agent capabilities", href: "https://learn.microsoft.com/en-us/dynamics365/business-central/enable-ai", note: "Activate/deactivate, permissions, data movement." },
  { name: "Costing methods", href: "https://learn.microsoft.com/en-us/dynamics365/business-central/design-details-costing-methods", note: "FIFO, LIFO, Average, Specific, Standard — exam favourite." },
  { name: "Personalize your workspace", href: "https://learn.microsoft.com/en-us/dynamics365/business-central/ui-personalization-user", note: "Vs customize-for-profile vs AL design." },
  { name: "Customize pages for profiles", href: "https://learn.microsoft.com/en-us/dynamics365/business-central/ui-personalization-manage", note: "The ‘whole warehouse role’ answer." },
  { name: "MB-800 hosted labs (Microsoft Learning)", href: "https://microsoftlearning.github.io/MB-800-Business-Central-Functional-Consultant/", note: "Lab list aligned to the instructor-led course. Use a sandbox tenant if you have one." },

  { name: "Cloud migration", href: "https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/migrate-data", note: "Replicate on-prem/other-cloud companies including history. Distinct from RapidStart packages." },
  { name: "Dimension corrections", href: "https://learn.microsoft.com/en-us/dynamics365/business-central/finance-dimension-corrections", note: "Posted dimension fixes without reversing the original G/L amounts." },
  { name: "Allocation accounts", href: "https://learn.microsoft.com/en-us/dynamics365/business-central/finance-allocation-accounts", note: "Split a G/L posting by percent, quantity, or breakdown — “use general ledger allocations.”" },
  { name: "Bank account reconciliation", href: "https://learn.microsoft.com/en-us/dynamics365/business-central/bank-how-reconcile", note: "Match statement to bank ledger. Not payment registration." },
  { name: "Count, adjust, reclassify inventory", href: "https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-count-adjust-reclassify", note: "Phys. inventory, item journals, reclass — the new operations skill group." },
];

window.MB800.curriculum = {
  defaultTarget: "2027-02-05",
  hoursPerWeek: 6,
  modules: [
    {
      id: "company",
      kind: "learn",
      phase: "Set up Business Central",
      title: "Company, RapidStart, opening balances",
      hours: 6,
      groups: ["company"],
      focus: "Worksheet lists tables. Package + Apply moves data. Opening balances are journals. Cloud Migration is the history replica.",
      sandbox: "Create a company from Assisted Setup. Build a tiny configuration package (one table), export to Excel, import, Apply. Post a G/L opening journal — do not type a balance on the account card.",
    },
    {
      id: "security-core",
      kind: "learn",
      phase: "Set up Business Central",
      title: "Security, number series, Copilot",
      hours: 6,
      groups: ["security", "core"],
      focus: "Profile is layout, permission set is rights, security filter is rows. Copilot & agent capabilities is the on/off page. Default Nos. vs Manual Nos.",
      sandbox: "Create a user, assign a permission set and a profile, add a security filter. Open Copilot & agent capabilities. Set a number series to Default Nos. = Yes, Manual Nos. = No.",
    },
    {
      id: "dim-wf",
      kind: "learn",
      phase: "Set up Business Central",
      title: "Dimensions and native approvals",
      hours: 6,
      groups: ["dimensions", "workflows"],
      focus: "Globals on ledger entries, shortcuts on documents. Priorities vs blocked combinations. Native workflow + Approval User Setup + notifications — not Power Automate unless the stem forces it.",
      sandbox: "Make Department global and Project a shortcut. Block one illegal pair. Copy a purchase invoice approval template, set an amount limit, send a test invoice for approval.",
    },
    {
      id: "fm",
      kind: "learn",
      phase: "Configure financials",
      title: "G/L setup, periods, terms, deferrals, FX",
      hours: 6,
      groups: ["fm"],
      focus: "Allow Posting From/To is the hard date gate. Close Year ≠ Close Income Statement. CM+10D. Deferral templates. Additional reporting currency lives on G/L Setup.",
      sandbox: "Set a posting-date window. Create a year of accounting periods. Add payment terms CM+10D. Create a 12-period deferral template. Look at additional reporting currency on G/L Setup.",
    },
    {
      id: "posting",
      kind: "learn",
      phase: "Configure financials",
      title: "Chart of accounts and posting groups",
      hours: 7,
      groups: ["coa", "posting"],
      focus: "Only Posting accounts take entries. Categories feed financial reports. Customer posting group = receivables. Gen. Bus. × Gen. Prod. = sales/COGS. Location × inventory posting group = inventory G/L.",
      sandbox: "Post a sales invoice and a purchase of stock. Open the resulting G/L entries and name which posting group produced receivables, sales, COGS, and inventory. Map a new G/L account to a category.",
    },
    {
      id: "journals-ap-ar-fa",
      kind: "learn",
      phase: "Configure financials",
      title: "Journals, bank, AP, AR, FA setup",
      hours: 7,
      groups: ["journals", "ap", "ar", "fa"],
      focus: "Template vs batch. Recurring F/V/B and RF/RV/RB. Cash receipt journal vs payment registration. Vendor bank accounts for e-pay. FA class/subclass/book/method.",
      sandbox: "Create a payment journal batch. Recurring method B on a clearing account. Tick a customer invoice in payment registration. Add a vendor bank account. Create an FA with a straight-line book.",
    },
    {
      id: "inventory",
      kind: "learn",
      phase: "Configure sales and purchasing",
      title: "Inventory, costing, SKUs",
      hours: 6,
      groups: ["inventory"],
      focus: "Inventory vs Service vs Non-Inventory. FIFO / Specific / Average / Standard. Item ledger = qty, value entry = cost. SKU = item at a location.",
      sandbox: "Create one FIFO item, one Specific (serial) item, one Service item. Make a SKU for a second location. Post a purchase and a sale, then look at item ledger vs value entries.",
    },
    {
      id: "master-price",
      kind: "learn",
      phase: "Configure sales and purchasing",
      title: "Shipping, lead time, prices and discounts",
      hours: 5,
      groups: ["master", "pricing"],
      focus: "Agent = carrier, service = Ground, shipment method = Incoterms, ship-to = address. Price replaces unit price; line % hits the line; invoice discount is header-level.",
      sandbox: "Add a ship-to, UPS Ground, and FOB on a customer. Set vendor lead time 14D. Create a quantity-break sales price and an invoice discount on the customer.",
    },
    {
      id: "basic",
      kind: "learn",
      phase: "Perform Business Central operations",
      title: "Personalize, customize, design, daily tools",
      hours: 5,
      groups: ["basic"],
      focus: "Personalize = me. Customize = this profile. Design = the app. Edit in Excel writes. Data analysis mode does not. Inspect = Ctrl+Alt+F1.",
      sandbox: "Personalize one field on your user. Customize the same page for a profile. Inspect the page. Try data analysis mode on a list. Do not use Excel unless you mean to write back.",
    },
    {
      id: "purch-sales-docs",
      kind: "learn",
      phase: "Perform Business Central operations",
      title: "Purchases, sales, correct / combine / prepay",
      hours: 7,
      groups: ["purch", "sales", "docs"],
      focus: "Undo Receipt/Shipment only if not invoiced. Over-receipt needs a code. Correct = credit + new invoice. Cancel = credit only. Combine shipments = Get Shipment Lines. Release then post.",
      sandbox: "PO: receive, undo receipt, receive extra with an over-receipt code, invoice. SO: ship, invoice, Correct. Combine two shipments onto one invoice. Release/reopen a document.",
    },
    {
      id: "pay-ops",
      kind: "learn",
      phase: "Perform Business Central operations",
      title: "Payments, bank rec, dimensions, FA and inventory tx",
      hours: 7,
      groups: ["pay", "fa-tx", "inv-tx"],
      focus: "Reverse Transaction is journals only. Bank rec ≠ payment registration. Dimension Correction Tool. Transfer vs reclass vs Adjust Cost. Calculate Depreciation fills an FA journal.",
      sandbox: "Apply and unapply a customer payment. Open Bank Account Reconciliation. Find Dimension Correction Tool. Post an item reclass. Run Calculate Depreciation (do not post if you should not). Transfer between two locations.",
    },
    {
      id: "weak",
      kind: "exam",
      phase: "Exam ready",
      title: "Close gaps — unread notes and the miss pile",
      hours: 6,
      groups: [],
      focus: "Anything still unread or in the miss pile is this week’s syllabus. Posting groups, costing, and personalize/customize/design first.",
      sandbox: "In a sandbox, perform the three outline ticks you are least sure about until you can do them without notes.",
    },
    {
      id: "mock1",
      kind: "exam",
      phase: "Exam ready",
      title: "First timed mock (100 minutes)",
      hours: 5,
      groups: [],
      focus: "Sit the 40-item mock cold. Then review every miss against its note. Do not cram new topics the same day.",
      sandbox: "None. Treat it like Pearson: no docs, no pausing the clock for research.",
    },
    {
      id: "mock2",
      kind: "exam",
      phase: "Exam ready",
      title: "Second mock + official Microsoft practice",
      hours: 6,
      groups: [],
      focus: "Another desk mock, then Microsoft’s free practice assessment. Compare weak domains. Target 700 on this linear scale before you book.",
      sandbox: "Click through aka.ms/examdemo so the Pearson UI is not a surprise.",
    },
    {
      id: "sit",
      kind: "exam",
      phase: "Exam ready",
      title: "Taper and sit",
      hours: 4,
      groups: [],
      focus: "Light trap cards only: posting groups, costing, Undo vs Correct/Cancel, Copilot page, Dimension Correction Tool. Sleep. Sit early February.",
      sandbox: "Do not start a new company the day before. Book with the MSA you want on the transcript.",
    },
  ],
};

