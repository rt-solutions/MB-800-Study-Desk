/* Look-alikes. Names first. The jobs and the separating sentence stay hidden until reveal. */
window.MB800.pairs = [
  {
    id: "worksheet-package",
    title: "Worksheet or package",
    names: [
      { name: "Configuration worksheet", does: "The list of tables you plan to load. It does not move any data." },
      { name: "Configuration package", does: "The file you fill in, validate, and Apply. Apply is what writes the records." },
    ],
    split: "“List the tables” is the worksheet. “Import the spreadsheet” is the package. Export alone does not write the table.",
  },
  {
    id: "copy-migrate",
    title: "Copy a company or cloud migration",
    names: [
      { name: "Copy a company", does: "A one-time copy of setup inside this environment, from Assisted Setup. It is not a running feed of posted transactions." },
      { name: "Cloud Migration", does: "Copies a company, including posted history, from another environment into this SaaS company." },
    ],
    split: "No second environment means copy the company or Apply a package. Posted history from on-premises or another environment means Cloud Migration.",
  },
  {
    id: "profile-permission",
    title: "Profile or permission set",
    names: [
      { name: "Profile", does: "Which Role Center you land on, and the page layout for that role." },
      { name: "Permission set", does: "Which tables you can read, insert, or post." },
    ],
    split: "Changing the profile never lets someone post. SUPER on the user card ignores the tight permission set you just wrote.",
  },
  {
    id: "filter-hide",
    title: "Security filter or hiding a field",
    names: [
      { name: "Security filter", does: "On a permission line. That user only sees the rows that match, such as one salesperson’s customers." },
      { name: "Personalize", does: "Hides a field on your screen. The rows are still there, and another page can still show them." },
    ],
    split: "A saved view is also just a filter for you. It does not remove customers from the company. Only the security filter does that.",
  },
  {
    id: "three-pages",
    title: "Personalize, customize, or design",
    names: [
      { name: "Personalize", does: "A change only you see. Gear, then Personalize." },
      { name: "Customize", does: "A change for everyone on that profile. Open Profiles, then Customize pages." },
      { name: "Design", does: "An AL page extension, shipped as an app. It is not a command on the page." },
    ],
    split: "Hiding a field that is already there is Personalize or Customize. A field that does not exist yet is Design.",
  },
  {
    id: "log-monitor",
    title: "Change log or field monitoring",
    names: [
      { name: "Change log", does: "Records who changed a field, when, and the old and new values. You read it on Change Log Entries." },
      { name: "Monitored fields", does: "Sends a notice when a sensitive field changes. It does not replace the log." },
    ],
    split: "The log is the audit. Monitoring is the alert. Neither one grants or removes permission.",
  },
  {
    id: "receivable-sales",
    title: "Customer posting group or general posting setup",
    names: [
      { name: "Customer posting group", does: "The receivables account, and the other customer balance-sheet accounts." },
      { name: "General posting setup", does: "The sales account and the COGS account, for one general business group plus one general product group." },
    ],
    split: "The customer owes you from the customer posting group. The revenue does not. Revenue comes from general posting setup.",
  },
  {
    id: "codes-or-accounts",
    title: "General groups or specific posting groups",
    names: [
      { name: "General business and general product posting groups", does: "Codes only. Those cards do not hold G/L accounts." },
      { name: "Customer, vendor, inventory, bank, and FA posting groups", does: "The cards that hold the G/L accounts for that subledger." },
    ],
    split: "If the card has no sales account on it, you are looking at a general group. The accounts are on the intersection, or on the specific posting group.",
  },
  {
    id: "inventory-general",
    title: "Inventory posting setup or general posting setup",
    names: [
      { name: "Inventory posting setup", does: "The inventory account, for one location plus one inventory posting group. Also the interim accounts." },
      { name: "General posting setup", does: "Sales, COGS, the purchase account, direct cost applied, and the inventory adjustment account." },
    ],
    split: "An item journal that fails at one location only is a missing inventory posting setup row. A missing sales account is general posting setup.",
  },
  {
    id: "terms-methods",
    title: "Payment terms or payment methods",
    names: [
      { name: "Payment terms", does: "When the invoice is due, and the date a payment discount ends." },
      { name: "Payment method", does: "How the money moves. It can propose the bank account that balances the payment." },
    ],
    split: "A wrong due date is the term on the customer or vendor. A wrong bank on the payment is the method, or the journal.",
  },
  {
    id: "deferral-prepay",
    title: "Deferral or prepayment",
    names: [
      { name: "Deferral", does: "You invoice the full amount now. Revenue or expense is spread over the periods on the template. The holding account is on the deferral template." },
      { name: "Prepayment", does: "A separate invoice for a deposit, before the final invoice. The holding account is the prepayment account on general posting setup." },
    ],
    split: "A deferral does not collect a deposit. A prepayment does not spread the final invoice across twelve months.",
  },
  {
    id: "undo-ship",
    title: "Undo shipment or a sales credit memo",
    names: [
      { name: "Undo Shipment", does: "Puts an uninvoiced shipment back into stock. The customer was never charged, so there is no credit." },
      { name: "Sales credit memo", does: "Reverses a posted sales invoice, including what the customer owes." },
    ],
    split: "If the shipment is already invoiced, Undo is gone. Use a credit memo, Correct, or Cancel.",
  },
  {
    id: "undo-receipt",
    title: "Undo receipt or a purchase credit memo",
    names: [
      { name: "Undo Receipt", does: "Reverses a posted receipt that has not been invoiced. The vendor was never credited." },
      { name: "Purchase credit memo", does: "Reverses a posted purchase invoice and what you owe the vendor." },
    ],
    split: "Undo Receipt does not create a vendor credit. A credit memo does not undo a receipt you have not invoiced.",
  },
  {
    id: "correct-cancel",
    title: "Correct or Cancel",
    names: [
      { name: "Correct", does: "Posts a credit memo for the posted invoice and opens a new draft invoice you can fix." },
      { name: "Cancel", does: "Posts the credit memo and stops. There is no new invoice." },
    ],
    split: "Both fail if a payment is still applied. Unapply first. The new invoice from Correct has not posted until you post it.",
  },
  {
    id: "ship-invoice",
    title: "Ship or invoice",
    names: [
      { name: "Ship, or Receive", does: "Moves the quantity. You get an item ledger entry. You do not get a customer or vendor ledger entry." },
      { name: "Invoice", does: "Charges the customer or records what you owe the vendor. That is the subledger entry." },
    ],
    split: "Qty. to Ship and Qty. to Invoice are different numbers. Posting Ship does not create the receivable.",
  },
  {
    id: "two-journals",
    title: "Payment journal or cash receipt journal",
    names: [
      { name: "Payment journal", does: "You pay a vendor. The bank goes down and payables go down." },
      { name: "Cash receipt journal", does: "A customer pays you. The bank goes up and receivables go down." },
    ],
    split: "Suggest Vendor Payments only fills the payment journal. Nothing moves until you post. Payment Registration is a simpler page over the cash receipt journal, not a third ledger.",
  },
  {
    id: "two-revalues",
    title: "Adjust exchange rates or G/L revaluation",
    names: [
      { name: "Adjust Exchange Rates", does: "Revalues open customer, vendor, and bank amounts in a foreign currency. The foreign amount on the invoice stays the same." },
      { name: "G/L Currency Revaluation", does: "Revalues a G/L account that has Source Currency Revaluation turned on. Run it from the chart of accounts." },
    ],
    split: "Adjust Exchange Rates never sees a bare G/L account. An account left off on the Revaluation FastTab is skipped by G/L Currency Revaluation.",
  },
  {
    id: "transfer-reclass",
    title: "Transfer order or reclassification journal",
    names: [
      { name: "Transfer order", does: "Ships quantity from one location and receives it at another. It is its own document." },
      { name: "Item reclassification journal", does: "Changes location, bin, lot, or dimension. There is no transfer order." },
    ],
    split: "Use the order when the move is a warehouse operation. Use the journal when you are correcting where the stock sits. A count that fixes quantity is the physical inventory journal, not either of these.",
  },
  {
    id: "value-or-qty",
    title: "Revaluation or a physical count",
    names: [
      { name: "Revaluation journal", does: "Changes what the stock is worth. The quantity does not change." },
      { name: "Physical inventory journal", does: "Posts only the difference between the count and the book quantity. It does not type a new unit cost." },
    ],
    split: "A positive item journal also changes quantity, and it is not a count. Adjust Cost - Item Entries pushes cost to the G/L. It does not decide a new cost.",
  },
  {
    id: "reverse-or-credit",
    title: "Reverse a journal or credit an invoice",
    names: [
      { name: "Reverse Transaction", does: "On a G/L register that came from a general journal. It posts the opposite amounts. You cannot run it twice." },
      { name: "Credit memo, Correct, or Cancel", does: "How you reverse a posted sales or purchase invoice." },
    ],
    split: "Reverse Transaction refuses a register that came from a sales invoice. A dimension correction changes the dimension and leaves the amount alone. It is neither of these.",
  },
  {
    id: "blanket-recurring",
    title: "Blanket order or recurring lines",
    names: [
      { name: "Blanket order", does: "A quantity you release in parts with Make Order. The blanket stays open and shows what is left." },
      { name: "Recurring sales or purchase lines", does: "A template. Get Recurring Lines drops those lines onto a new invoice. Nothing is tracked as remaining quantity." },
    ],
    split: "Make Order does not ship or receive. Recurring lines do not keep a balance to draw down.",
  },
  {
    id: "excel-analysis",
    title: "Edit in Excel, analysis mode, or a package",
    names: [
      { name: "Edit in Excel", does: "Opens the list you are on and writes your changes back when you publish." },
      { name: "Analysis mode", does: "Pivots that list. It does not change records and it does not post." },
      { name: "Configuration package", does: "Loads many setup rows from a spreadsheet you designed, after you validate and Apply." },
    ],
    split: "Analysis mode is not an import. Edit in Excel is not how you load a new chart of accounts. A financial report is not analysis mode either.",
  },
];
