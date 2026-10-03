/* Where did it post? One document at a time.
   Assumes no tax and no discounts. Item costs post to the G/L (automatic cost posting is on). */
window.MB800.traces = [
  {
    id: "sales-item",
    title: "Sales invoice for an item",
    scene: "You posted a sales invoice for a customer and an inventory item. The quantity shipped and was invoiced on the same document. Automatic cost posting is on. No tax, no discount, no prepayment, no deferral.",
    hits: [
      {
        what: "The customer owes the invoice",
        list: "Customer Ledger Entries",
        account: "Receivables account",
        page: "Customer Posting Groups",
      },
      {
        what: "The revenue",
        list: "General Ledger Entries",
        account: "Sales account (a credit)",
        page: "General Posting Setup, on the row for this customer's general business posting group and the item's general product posting group",
      },
      {
        what: "The quantity that left the shelf",
        list: "Item Ledger Entries",
        account: "No G/L account. This entry is quantity only.",
        page: "No posting group. The item and the location decide the quantity.",
      },
      {
        what: "The inventory value that left",
        list: "General Ledger Entries, from the value entry",
        account: "Inventory account (a credit)",
        page: "Inventory Posting Setup, on the row for the location and the item's inventory posting group",
      },
      {
        what: "The cost of the sale",
        list: "General Ledger Entries",
        account: "COGS account (a debit)",
        page: "General Posting Setup, on the same row as the sales account",
      },
    ],
    not: "The sales account does not come from the customer posting group. The receivables account does not come from general posting setup.",
  },
  {
    id: "sales-gl",
    title: "Sales invoice for a G/L account",
    scene: "You posted a sales invoice with one line. The line type is G/L Account, not Item. You typed an income account on the line. No item, no deferral.",
    hits: [
      {
        what: "The customer owes the invoice",
        list: "Customer Ledger Entries",
        account: "Receivables account",
        page: "Customer Posting Groups",
      },
      {
        what: "The income",
        list: "General Ledger Entries",
        account: "The G/L account you typed on the invoice line",
        page: "The line itself. General Posting Setup is not asked for a sales account on a G/L line.",
      },
      {
        what: "Inventory and cost",
        list: "Nowhere. No item ledger entry and no COGS entry.",
        account: "None",
        page: "None. There was no item.",
      },
    ],
    not: "An item line takes revenue from General Posting Setup. A G/L line takes the account you typed.",
  },
  {
    id: "ship-only",
    title: "Sales order, shipped and not invoiced",
    scene: "You posted a sales order and chose Ship. You did not invoice. The location does not use a warehouse shipment.",
    hits: [
      {
        what: "The quantity that left",
        list: "Item Ledger Entries, and a posted sales shipment",
        account: "No revenue account and no receivables account",
        page: "No posting group chooses a customer amount, because the customer has not been charged.",
      },
      {
        what: "Interim cost, only if it is turned on",
        list: "General Ledger Entries, only when Expected Cost Posting to G/L is on",
        account: "Inventory (Interim) and COGS (Interim)",
        page: "Inventory Posting Setup. If expected cost posting is off, these accounts do not move.",
      },
      {
        what: "The customer balance",
        list: "No customer ledger entry",
        account: "None yet",
        page: "The invoice, later, creates the receivable. Shipping does not.",
      },
    ],
    not: "Qty. to Ship moves inventory. Qty. to Invoice charges the customer. Undo Shipment is available only while this shipment is still not invoiced.",
  },
  {
    id: "purch-item",
    title: "Purchase invoice for an item",
    scene: "You posted a purchase invoice for a vendor and an inventory item, received and invoiced together. Automatic cost posting is on. No tax and no discount.",
    hits: [
      {
        what: "You owe the vendor",
        list: "Vendor Ledger Entries",
        account: "Payables account",
        page: "Vendor Posting Groups",
      },
      {
        what: "The stock you now hold",
        list: "General Ledger Entries, and an item ledger entry for the quantity",
        account: "Inventory account (a debit)",
        page: "Inventory Posting Setup, for the location and the item's inventory posting group",
      },
      {
        what: "The purchase accounts that wash",
        list: "General Ledger Entries",
        account: "Direct Cost Applied (a credit) and Purch. Account (a debit), for the same amount",
        page: "General Posting Setup. The two amounts offset, so the item purchase is not left as an expense.",
      },
    ],
    not: "Payables do not come from general posting setup. The inventory account does not come from the vendor posting group.",
  },
  {
    id: "purch-gl",
    title: "Purchase invoice for a G/L expense",
    scene: "You posted a purchase invoice with one G/L Account line. You typed an expense account on the line. No item.",
    hits: [
      {
        what: "You owe the vendor",
        list: "Vendor Ledger Entries",
        account: "Payables account",
        page: "Vendor Posting Groups",
      },
      {
        what: "The expense",
        list: "General Ledger Entries",
        account: "The G/L account you typed on the line",
        page: "The line itself",
      },
      {
        what: "Inventory",
        list: "No item ledger entry",
        account: "None",
        page: "None. Purch. Account on General Posting Setup is for item cost, not for this line.",
      },
    ],
    not: "Do not 'fix' a G/L expense by editing General Posting Setup. Change the account on the line, or the account the vendor invoice was posted to.",
  },
  {
    id: "receive-only",
    title: "Purchase order, received and not invoiced",
    scene: "You posted a purchase order and chose Receive. You did not invoice. The location does not use a warehouse receipt.",
    hits: [
      {
        what: "The quantity that arrived",
        list: "Item Ledger Entries, and a posted purchase receipt",
        account: "No payables account",
        page: "The vendor is not credited until you invoice.",
      },
      {
        what: "Interim accounts, only if they are turned on",
        list: "General Ledger Entries, only when Expected Cost Posting to G/L is on",
        account: "Inventory (Interim) and Invt. Accrual Acc. (Interim)",
        page: "Inventory Posting Setup. If expected cost posting is off, the G/L does not move.",
      },
    ],
    not: "Undo Receipt reverses this, and only while the receipt is not invoiced. A vendor credit memo is for an invoice.",
  },
  {
    id: "undo-receipt",
    title: "Undo a posted purchase receipt",
    scene: "A posted purchase receipt has not been invoiced. You ran Undo Receipt on the line.",
    hits: [
      {
        what: "The quantity comes back off the books",
        list: "Item Ledger Entries, a reversing entry. Qty. Received on the order goes back down.",
        account: "No payables account",
        page: "No vendor posting group is involved. The vendor was never credited.",
      },
      {
        what: "Interim cost, if it had been posted",
        list: "General Ledger Entries, reversing the interim accounts",
        account: "Inventory (Interim) and Invt. Accrual Acc. (Interim), reversed",
        page: "Inventory Posting Setup. If those interim entries were never posted, there is nothing to reverse in the G/L.",
      },
    ],
    not: "Undo Receipt is not a purchase credit memo, and it is not Correct or Cancel. Those belong to a posted invoice.",
  },
  {
    id: "prepay-sales",
    title: "Sales prepayment invoice",
    scene: "A sales order has a prepayment percent. You posted the prepayment invoice. You have not shipped, and you have not posted the final invoice.",
    hits: [
      {
        what: "The customer owes the deposit",
        list: "Customer Ledger Entries, on the prepayment invoice",
        account: "Receivables account",
        page: "Customer Posting Groups",
      },
      {
        what: "The deposit you are holding",
        list: "General Ledger Entries",
        account: "Sales Prepayments Account (a liability, a credit)",
        page: "General Posting Setup, for this customer's general business posting group and the item's general product posting group",
      },
      {
        what: "Revenue and inventory",
        list: "No sales account yet, and no item ledger entry",
        account: "None",
        page: "The final invoice, after you ship, recognizes the sale and clears the prepayment.",
      },
    ],
    not: "A prepayment collects money before the final invoice. A deferral is the other tool: you invoice the full amount and spread the revenue.",
  },
  {
    id: "defer-sales",
    title: "Sales invoice with a deferral",
    scene: "You posted a sales invoice for a G/L income account and set a deferral code on the line. The template is straight-line over 12 periods. The deferral account is a balance-sheet account.",
    hits: [
      {
        what: "The customer owes the full invoice",
        list: "Customer Ledger Entries",
        account: "Receivables account, for the whole amount",
        page: "Customer Posting Groups",
      },
      {
        what: "The part that is revenue now",
        list: "General Ledger Entries",
        account: "The income account on the line, for this period's slice only",
        page: "The invoice line, not the full amount",
      },
      {
        what: "The part that is not revenue yet",
        list: "General Ledger Entries",
        account: "The deferral account on the template (a liability, a credit)",
        page: "Deferral Templates",
      },
    ],
    not: "The deferral account is not the sales prepayments account. Prepayments are a separate invoice posted before the final sale.",
  },
  {
    id: "cash-receipt",
    title: "Customer payment",
    scene: "You posted a cash receipt journal line for a customer, applied it to an open invoice, and balanced it to a bank account. The invoice was already posted.",
    hits: [
      {
        what: "The bank goes up",
        list: "Bank Account Ledger Entries, and General Ledger Entries",
        account: "The G/L account on the bank account posting group",
        page: "Bank Account Posting Groups",
      },
      {
        what: "The customer owes less",
        list: "Customer Ledger Entries. The invoice remaining amount goes to zero if you applied the full amount. Detailed Customer Ledger Entries shows the application.",
        account: "Receivables account (a credit)",
        page: "Customer Posting Groups",
      },
      {
        what: "Inventory and revenue",
        list: "No new item ledger entry and no new sales account",
        account: "None",
        page: "Those moved when you posted the invoice, not when the customer paid.",
      },
    ],
    not: "Payment Registration posts through a cash receipt journal. It does not keep its own ledger. A payment journal is how you pay a vendor.",
  },
  {
    id: "vend-payment",
    title: "Vendor payment",
    scene: "You posted a payment journal. Suggest Vendor Payments had proposed the line, it was applied to an open invoice, and the bank is the balancing account.",
    hits: [
      {
        what: "The bank goes down",
        list: "Bank Account Ledger Entries",
        account: "The G/L account on the bank account posting group",
        page: "Bank Account Posting Groups",
      },
      {
        what: "You owe the vendor less",
        list: "Vendor Ledger Entries, applied. Detailed Vendor Ledger Entries shows the application.",
        account: "Payables account (a debit)",
        page: "Vendor Posting Groups",
      },
    ],
    not: "Suggest Vendor Payments only fills the journal. Posting the journal is what moves the bank and the payables. A cash receipt journal is the customer side.",
  },
  {
    id: "sales-credit",
    title: "Sales credit memo for an item",
    scene: "You posted a sales credit memo that reverses a posted sales invoice for an item. The credit is for the full quantity. No tax and no discount.",
    hits: [
      {
        what: "The customer owes less",
        list: "Customer Ledger Entries",
        account: "Receivables account, reversed",
        page: "Customer Posting Groups, the same group as the invoice",
      },
      {
        what: "The revenue comes back down",
        list: "General Ledger Entries",
        account: "Sales account, reversed",
        page: "General Posting Setup",
      },
      {
        what: "The quantity comes back",
        list: "Item Ledger Entries",
        account: "Inventory account goes back up, and COGS is reversed",
        page: "Inventory Posting Setup for the inventory account. General Posting Setup for COGS.",
      },
    ],
    not: "Correct posts this credit and opens a new invoice, which has not posted yet. Cancel posts this credit and stops. Undo Shipment cannot do this once the invoice exists.",
  },
  {
    id: "fx-customer",
    title: "Adjust exchange rates on an open invoice",
    scene: "A customer invoice is still open, in a foreign currency. You added a newer exchange rate and ran Adjust Exchange Rates for that currency. You posted the result.",
    hits: [
      {
        what: "The open invoice is revalued",
        list: "Detailed Customer Ledger Entries. The invoice's foreign amount does not change.",
        account: "Receivables account, for the local-currency difference",
        page: "Customer Posting Groups",
      },
      {
        what: "The gain or loss",
        list: "General Ledger Entries",
        account: "Unrealized gain or loss account on the currency",
        page: "Currencies. Not General Posting Setup.",
      },
    ],
    not: "Adjust Exchange Rates revalues customers, vendors, and bank accounts. It does not revalue a bare G/L account. That is G/L Currency Revaluation on the chart of accounts.",
  },
  {
    id: "gl-revalue",
    title: "Revalue a G/L account balance",
    scene: "A balance-sheet G/L account has Source Currency Revaluation turned on. You posted a foreign-currency amount to it, added a later exchange rate, and ran G/L Currency Revaluation.",
    hits: [
      {
        what: "The account's local balance moves",
        list: "General Ledger Entries only. There is no customer ledger entry and no vendor ledger entry.",
        account: "The G/L account you are revaluing. Its source-currency amount stays the same.",
        page: "The G/L account card, on the Revaluation FastTab. An account with Source Currency Revaluation left off is skipped.",
      },
      {
        what: "The gain or loss",
        list: "General Ledger Entries",
        account: "The currency's gain or loss account. Unrealized if the G/L account has Unrealized Revaluation turned on.",
        page: "Currencies",
      },
    ],
    not: "Do not run Adjust Exchange Rates and expect this account to move. That batch never sees it.",
  },
  {
    id: "fa-buy",
    title: "Fixed asset acquisition",
    scene: "The depreciation book is integrated to the G/L. You posted a Fixed Asset G/L Journal line with FA Posting Type Acquisition Cost, and a bank account as the balance.",
    hits: [
      {
        what: "The asset is recorded",
        list: "FA Ledger Entries, entry type Acquisition Cost",
        account: "Acquisition Cost Account",
        page: "FA Posting Groups",
      },
      {
        what: "The bank or clearing account",
        list: "General Ledger Entries",
        account: "The balancing account you typed on the journal line",
        page: "The journal line. A purchase invoice with an FA number on the line is the other way to acquire, and then the credit is the vendor's payables account.",
      },
    ],
    not: "If the depreciation book is not integrated to the G/L, you still get the FA ledger entry and the general ledger does not move.",
  },
  {
    id: "fa-depr",
    title: "Fixed asset depreciation",
    scene: "You ran Calculate Depreciation. It filled the Fixed Asset G/L Journal. You posted that journal.",
    hits: [
      {
        what: "The asset's book value drops",
        list: "FA Ledger Entries, entry type Depreciation",
        account: "Accumulated Depreciation Account (a credit)",
        page: "FA Posting Groups",
      },
      {
        what: "The expense",
        list: "General Ledger Entries",
        account: "Depreciation Expense Account (a debit)",
        page: "FA Posting Groups",
      },
    ],
    not: "Calculate Depreciation does not post. The journal does. An asset with no acquisition, or a date before its depreciation starting date, produces no line.",
  },
  {
    id: "item-up",
    title: "Item journal, positive adjustment",
    scene: "You posted an item journal line, entry type Positive Adjmt., for an item at a location that does not require a warehouse receipt. Automatic cost posting is on. There is no vendor and no purchase order.",
    hits: [
      {
        what: "Quantity goes up",
        list: "Item Ledger Entries",
        account: "No vendor and no payables account",
        page: "No vendor posting group. This did not come from a purchase document.",
      },
      {
        what: "Inventory value goes up",
        list: "General Ledger Entries, from the value entry",
        account: "Inventory account (a debit)",
        page: "Inventory Posting Setup",
      },
      {
        what: "The other side of the value",
        list: "General Ledger Entries",
        account: "Inventory Adjmt. Account (a credit)",
        page: "General Posting Setup",
      },
    ],
    not: "A revaluation journal changes the value and leaves the quantity. A physical inventory journal posts only the difference between the count and the book quantity. A purchase order is what creates a posted receipt and, when invoiced, a vendor ledger entry.",
  },
  {
    id: "dim-fix",
    title: "Dimension correction",
    scene: "A general journal was posted with the wrong dimension value. You ran a dimension correction: validated it, then ran it. The amount was 100.",
    hits: [
      {
        what: "The amount",
        list: "The same General Ledger Entries. The amount is still 100.",
        account: "The same G/L account. Nothing is reversed and nothing is credited.",
        page: "No posting group. Dimension Corrections changes the dimension on the posted entry.",
      },
      {
        what: "The dimension",
        list: "The dimension on that G/L entry, and the completed row on Dimension Corrections",
        account: "Not an amount",
        page: "Dimension Corrections. A blocked combination or a value-posting rule makes validation fail instead of posting a new amount.",
      },
    ],
    not: "Reverse Transaction posts the opposite amount for a journal. Correct and Cancel reverse a document. A dimension correction does neither.",
  },
];
