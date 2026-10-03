/* Hands-on labs for the skills outline. One array per group, same order as items in content.js.
   Page names are what you type in Tell Me (Alt+Q). */
window.MB800.labs = {
  company: [
    {
      open: "Assisted Setup",
      steps: [
        "Run Create New Company. Pick Evaluation if you want sample customers and items, Production if you want setup data only, or Create New if you want an empty company. Name it and finish the wizard.",
        "Switch into that company. Open Company Information and fill the name, address, and country. Set the experience (Essential or Premium) if the wizard did not.",
        "Open My Settings and confirm the company badge is the one you just created.",
      ],
      check: "The new company opens and Company Information is filled in. Copying a company copies setup. It is not Cloud Migration, and it does not keep replicating posted transactions from another environment.",
    },
    {
      open: "Configuration Worksheet",
      steps: [
        "Add a line for a table you mean to load, such as Customer or Item. Use Get Related Tables if you also want the satellite tables Business Central suggests.",
        "Assign a Package Code on those lines. That code is the name of the configuration package you will fill later.",
        "Leave the worksheet without exporting anything.",
      ],
      check: "The worksheet is only the shopping list of tables. It does not move data. If the task says “list the tables,” this is the page. If it says “import the spreadsheet,” that is the package.",
    },
    {
      open: "Configuration Packages",
      steps: [
        "Create a package whose code matches the worksheet, or use Get Tables from the worksheet so the same tables arrive here.",
        "Export to Excel, add one new record (a customer or a G/L account is enough), then Import the file back into the package.",
        "Run Validate. Fix any red rows. Then Apply Package.",
        "Open the card for the record you added and confirm the fields match the spreadsheet.",
      ],
      check: "The record exists in the company only after Apply. Export and Import alone do not write the table. A worksheet still does not move data.",
    },
    {
      open: "General Journals",
      steps: [
        "Do not type a balance onto the G/L account card. Opening balances are posted.",
        "Date the lines the day before go-live. For a G/L balance, enter the account and a balancing equity or clearing account.",
        "For an open customer or vendor balance, set Account Type to Customer or Vendor, and Bal. Account Type to G/L Account. Post.",
        "Open Customer Ledger Entries or Vendor Ledger Entries and confirm an open entry. Then open the Chart of Accounts and confirm the net change.",
      ],
      check: "Subledger opening balances are ledger entries, not a number typed on the account card. The G/L net change and the customer or vendor remaining amount both show the balance.",
    },
    {
      open: "Cloud Migration Management",
      steps: [
        "Open Cloud Migration Management. If the page is empty, start Set up Cloud Migration from Assisted Setup and read the source it asks for (an on-premises or other-environment company).",
        "Stop before you run replication unless you actually have that source. This tool copies company data, including posted transactions, into this SaaS company.",
        "For a move inside this environment with no history, go back to Assisted Setup and copy a company, or Apply a configuration package. That is the path you can finish in a normal sandbox.",
      ],
      check: "Cloud Migration is the replication tool when the source is another environment and posted history must come with it. A configuration package or a company copy is the tool when you are moving setup and masters inside Business Central.",
    },
  ],
  security: [
    {
      open: "Profiles",
      steps: [
        "Open Profiles and note the Role Center each profile points at. Business Manager and Accountant are typical ones.",
        "Open User Settings. On your user, set Profile ID to a different profile than the one in My Settings.",
        "Sign out and back in, or refresh. The Role Center changes. Set the profile back when you are done looking.",
      ],
      check: "A profile changes which Role Center and page layout someone sees. It does not grant or remove permission to post. Permission sets do that.",
    },
    {
      open: "Users",
      steps: [
        "Choose New. Prefer the Microsoft 365 / Entra user if the person already exists in the tenant. Otherwise create the user card the page offers.",
        "Set User Permission Sets only after the next labs, or add a restrictive set now and leave SUPER off this card.",
        "Open User Settings for the same person and set a profile so they land on a Role Center.",
      ],
      check: "The user card is the sign-in. The profile on User Settings is the home page. Neither one is a permission set. Do not give this lab user SUPER or you will not be able to see permission limits later.",
    },
    {
      open: "Permission Sets",
      steps: [
        "Create a new permission set instead of editing SUPER. Add a permission line for the Customer table with Read. Leave Insert, Modify, and Delete off.",
        "On the lab user from the previous step, assign this permission set and remove broader sets such as D365 BUS FULL ACCESS if they are there.",
        "Sign in as that user. Open Customers. You should see the list. Try to create a customer or post a general journal.",
      ],
      check: "The lab user can read customers and is blocked from the actions you did not grant. If they can still do everything, the card still has SUPER or a second set that includes it. SUPER bypasses the set you just wrote.",
    },
    {
      open: "Permission Sets",
      steps: [
        "Open the permission set from the previous lab. On the Customer permission line, open the Security Filter field.",
        "Filter Salesperson Code to one salesperson who owns only some customers. Or filter No. to a short list of customer numbers.",
        "Sign in as the lab user and open Customers again.",
      ],
      check: "The list is shorter. A security filter limits rows. It does not hide a field and it does not change the Role Center. Hiding a field is Personalize. The Role Center is the profile.",
    },
    {
      open: "Security Groups",
      steps: [
        "Open Security Groups. Groups here come from Microsoft Entra. If one is listed, add a permission set on that group.",
        "Open Users and confirm a member of the group shows the group's permission sets as inherited, without you pasting the same set onto every user card.",
        "On a different user, add a permission set directly on the user card as well, so you can see both paths.",
      ],
      check: "A security group hands the same permission sets to many users. A permission set on the user card is the direct path. A profile is still only the Role Center. If the sandbox has no Entra group, assign the set on the user and remember the group page for the exam.",
    },
    {
      open: "Change Log Setup",
      steps: [
        "Turn the change log on. Open the Tables action. Add Customer, and log Modification for the Credit Limit (LCY) field, or for all fields if you would rather see everything.",
        "Open a customer and change the credit limit. Then open Change Log Entries and filter to that customer.",
        "Optional second tool: open Monitored Fields (Field Monitoring) and add the same field if you want an email when it changes. Leave that off if mail is not set up.",
      ],
      check: "Change Log Entries shows who changed the credit limit, when, and the old and new values. That is the audit the outline means. It is not a permission set, and it is not the bank reconciliation. Field monitoring only adds a notification on top of the same idea.",
    },
  ],
  core: [
    {
      open: "Report Layouts",
      steps: [
        "Find the sales invoice report. Note the layout types available: RDLC, Word, and Excel. Select one layout as the company default.",
        "Open a customer. Use Document Layouts. For Usage Invoice, pick a layout and an email address.",
        "Print or preview an invoice for that customer, then preview one for a customer with no document layout.",
      ],
      check: "Report Layouts sets the company default. Document Layouts on the customer overrides it for that account only. You did not change the dataset, only which layout is used.",
    },
    {
      open: "Job Queue Entries",
      steps: [
        "Create an entry that runs a report, not a posting batch. Customer - Top 10 List is a safe choice. Set a recurrence.",
        "Set the status to Ready and wait until it has run once. Open the log or the Report Inbox and confirm the report was produced.",
        "If you want to see a failure, leave a required option blank, let the entry go to Error, then fix it and set the status back to Ready.",
      ],
      check: "The entry returns to Ready after a successful run. An entry in Error does not run again until you set it back to Ready. Job queues are how Adjust Cost - Item Entries, Adjust Exchange Rates, and Calculate Depreciation run unattended. Do not schedule those until you mean to post.",
    },
    {
      open: "No. Series",
      steps: [
        "Create a series with a starting number and an increment of 1. Turn Default Nos. on. Leave Manual Nos. off.",
        "Open General Journal Templates (or a batch on that template) and set No. Series to this series. A number series on the batch overrides the template.",
        "Open the journal, pick that template and batch, and look at the document number on a new line. Try to type your own number.",
      ],
      check: "The journal proposes the next number. With Manual Nos. off, typing your own number is rejected. Default Nos. is what makes the system propose the number. This is not a number you type on the customer card.",
    },
    {
      open: "Copilot & agent capabilities",
      steps: [
        "Open Copilot & agent capabilities. Turn on Copilot chat and Analyze list if those toggles are available. Activate one agent the page offers if the sandbox has data for it.",
        "If a toggle is disabled, it is blocked for the environment. A permission set on your user will not turn it on. An administrator has to allow it for the environment first.",
        "Open Items and start Copilot, or enter analysis mode, and confirm the capability responds.",
      ],
      check: "The capability shows as active and the Copilot pane or analysis assist opens. Enabling Copilot is not a profile and not a permission set. SUPER does not override a capability the environment admin has switched off.",
    },
  ],
  dimensions: [
    {
      open: "Dimensions",
      steps: [
        "Create a dimension, for example AREA. Open its Dimension Values and add two standard values, plus a Begin-Total and End-Total if you want a subtotal.",
        "Keep the value codes in an order that sorts the way you want totals to work. Hierarchy totals follow the code order.",
        "Post nothing yet. You will attach this dimension in the next labs.",
      ],
      check: "The dimension and its values exist, and no ledger entry uses them yet. Values are not G/L accounts. You still post to the chart of accounts. The dimension only tags the entry.",
    },
    {
      open: "General Ledger Setup",
      steps: [
        "On the Dimensions FastTab, read Global Dimension 1 and Global Dimension 2. Those two are the only dimensions stored as their own fields on entries. In a company that already has history, do not change them.",
        "If you need a new one, put the dimension from the previous lab in the first empty Shortcut Dimension (3 through 8). Shortcut 1 and 2 are the two global dimensions.",
        "Sign out and back in if Business Central asks you to, so the new shortcut field appears on journal lines.",
      ],
      check: "A journal line now has a field for that shortcut dimension. Global dimensions are the two you can filter on directly. Changing a global dimension later is Change Global Dimensions, which rewrites posted entries. Do not run that in a company you care about.",
    },
    {
      open: "Customer Card",
      steps: [
        "Open one customer. Choose Dimensions, and add the dimension from the earlier lab with a Dimension Value Code. Leave Value Posting as blank or Code Mandatory.",
        "Open a general journal or a sales invoice, enter that customer, and look at the dimension on the line.",
        "Clear the dimension on the line. If Value Posting is Code Mandatory, posting is blocked until you put a value back.",
      ],
      check: "The customer default copies onto the document and you can still edit it, unless Value Posting forbids that. This default is for one customer. The next labs set rules for every account of a type, and for which master wins when two disagree.",
    },
    {
      open: "Dimension Combinations",
      steps: [
        "In the matrix, set the intersection of two dimensions to Blocked. Leave the rest of the matrix alone.",
        "For a finer rule, set the same intersection to Limited, then on Dimension Value Combinations block only one pair of values.",
        "Post a journal line that uses the blocked pair.",
      ],
      check: "Posting is rejected for the blocked combination and accepted for any pair you did not block. Blocked means the two dimensions can never share an entry. Limited means only some value pairs are blocked. This is not a default dimension.",
    },
    {
      open: "Dimensions",
      steps: [
        "Open the dimension, then Account Type Default Dim. Add a line for G/L Account, or for Customer, with Value Posting set to Code Mandatory. Leave the dimension value blank.",
        "That rule applies to every account of that type, not to one card.",
        "Try to post a journal line of that account type with the dimension empty. Then open one customer who already has their own default and confirm the account default replaces the account-type default for that customer only.",
      ],
      check: "Posting without the dimension fails for every account of that type. A default on a single customer, vendor, or G/L account overrides the account-type rule for that one record. Do not set Code Mandatory on an account that Adjust Exchange Rates or Post Inventory Cost to G/L will post to. Those batches cannot fill the dimension.",
    },
    {
      open: "Default Dimension Priorities",
      steps: [
        "Pick the Source Code SALES. Add Customer at priority 1 and Item at priority 2 for the same dimension.",
        "Give a customer one dimension value and an item a different value for that same dimension.",
        "Create a sales line for that customer and that item. Note which value lands on the line. Enter the item first, then the customer, and see whether Business Central asks to overwrite.",
      ],
      check: "The higher priority source wins. On sales and purchase documents the header dimension is treated as the customer or vendor. Same priority on two tables is not safe: Business Central then keeps the table with the lower table ID. Test the order you enter data. Priorities do not block a combination. Dimension Combinations do that.",
    },
  ],
  workflows: [
    {
      open: "Workflow Templates",
      steps: [
        "Create a workflow from the Purchase Order Approval Workflow or Sales Order Approval Workflow template. Do not start in Power Automate.",
        "Open Approval User Setup. Set a second user as the approver, with a purchase or sales limit below the order you will create. One user can approve their own request only if you point Approver ID at yourself. A second user is the cleaner test.",
        "Turn the workflow Enabled on. Create an order above the limit and choose Send Approval Request.",
      ],
      check: "Approval Entries shows an open request, and the order will not release until it is approved. This is a Business Central workflow. A Power Automate cloud flow is a different product and is not this skill.",
    },
    {
      open: "Notification Setup",
      steps: [
        "Find the notification row for the approval you just enabled. Set how it is delivered.",
        "Send another approval request from an order.",
        "Open Notification Entries and confirm a row was created for the approver.",
      ],
      check: "The approver gets a notification entry when the request is sent. Notification Setup is the delivery rule. It does not choose who approves. Approval User Setup and the workflow response do that.",
    },
    {
      open: "Approval User Setup",
      steps: [
        "For the requester, set Sales Amount Approval Limit or Purchase Amount Approval Limit, and set Approver ID to the person who should approve above that limit.",
        "Open Workflow User Groups. Create a group, add two users, and set a sequence.",
        "On the workflow response, set Approver Type to Workflow User Group and pick that group. Send a new request.",
      ],
      check: "Approval Entries is created for the group, in the sequence you set. Limits on Approval User Setup decide whether a request is required. The group decides who receives it. Neither page is a permission set.",
    },
  ],
  fm: [
    {
      open: "General Ledger Setup",
      steps: [
        "Note LCY Code, Allow Posting From, and Allow Posting To. Narrow Allow Posting To to yesterday.",
        "Try to post a one-line general journal dated today.",
        "Put the dates back to a window that includes today. If the journal still fails on a date inside that window, open User Setup and check that user's own Allow Posting From and Allow Posting To.",
      ],
      check: "A date outside the window is rejected. User Setup dates override General Ledger Setup for that user, which is why one person can be blocked while another can post. This page is also where the two global dimensions are stored.",
    },
    {
      open: "Accounting Periods",
      steps: [
        "Use Create Year and create the next fiscal year as 12 monthly periods. Do not close the current year.",
        "Open the new year and confirm the period start dates run a full year and none of them overlap.",
        "Close a period only in a copy company, and only when you want to see the closed mark. Closing locks that period.",
      ],
      check: "The new year exists as twelve periods. Creating the year does not post anything. Closing a period is a lock. It is not how you enter opening balances.",
    },
    {
      open: "Payment Terms",
      steps: [
        "Create a code such as 30 DAYS. Set Due Date Calculation to 30D. Optionally set Discount Date Calculation to 10D and Discount % to 2.",
        "Put that code on a customer card.",
        "Create a sales invoice for the customer and look at Due Date and the payment-discount date.",
      ],
      check: "The invoice dates are calculated from the document date plus the term. You do not type the due date by hand unless you mean to override the term. Payment Methods are a different page. They control how money moves, not when it is due.",
    },
    {
      open: "Deferral Templates",
      steps: [
        "Create a template, for example 12M. Set Calc. Method to Straight-Line, Start Date to Beginning of Next Period or Posting Date, and No. of Periods to 12.",
        "Set Deferral Account to a balance-sheet G/L account, not to the rent or revenue account.",
        "Leave the template unused for now. The purchasing and sales labs post a document with this code.",
      ],
      check: "The template exists and its deferral account is a balance-sheet account. Creating the template posts nothing. The expense or revenue account is recognized later, when a document that uses the code is posted.",
    },
    {
      open: "Currencies",
      steps: [
        "Add a foreign currency if the company only has the local one. Open Currency Exchange Rates and add a rate with a starting date of today.",
        "Add a second rate dated a month ago so you can see that the rate is date-sensitive.",
        "Set Currency Code on a vendor to that currency. Create a purchase invoice and look at the line amount in the currency and the LCY amount Business Central stores.",
      ],
      check: "The invoice shows both the foreign amount and the LCY amount from the rate that applies on the posting date. Adjusting open balances later is Adjust Exchange Rates, a different lab. Revaluing a G/L account balance is a third lab.",
    },
    {
      open: "Payment Methods",
      steps: [
        "Create a method, or open an existing one such as BANK. Set Bal. Account Type to Bank Account and Bal. Account No. to a bank account.",
        "Put that Payment Method Code on a customer.",
        "Open Payment Registration or a cash receipt journal and start a payment for that customer. Note the balancing account that is proposed.",
      ],
      check: "The method proposes the bank account that the payment posts to. It does not calculate the due date. Payment Terms do that. A method with no balancing account still records the method, but you must pick the bank yourself.",
    },
  ],
  coa: [
    {
      open: "Chart of Accounts",
      steps: [
        "Create a G/L account. Set Income/Balance, Account Category, and a posting account type of Posting. A Begin-Total or Heading account cannot be posted to.",
        "Fill Direct Posting. Turn it off if this account should only be posted by a posting group, and on if journals may use it.",
        "Post a one-line journal to the account if Direct Posting is on, then open Ledger Entries from the account card.",
      ],
      check: "The ledger entry hits this account. Begin-Total, End-Total, and Heading accounts are structure, not posting accounts. The balance you see is the sum of entries. You never type the balance onto the card.",
    },
    {
      open: "G/L Account Categories",
      steps: [
        "Open G/L Account Categories and add a subcategory under an existing category, for example a subcategory under Expense.",
        "On two posting accounts, set Account Category and Account Subcategory to that new subcategory.",
        "Open the Chart of Accounts and group or filter by the subcategory so both accounts sit together.",
      ],
      check: "Both accounts report under that subcategory. Categories are how financial reports can follow the chart without a hardcoded account range. They are not posting groups, and they do not replace the account number.",
    },
    {
      open: "Financial Reports",
      steps: [
        "Open a financial report, or create one. Open its Row Definition. Add a row whose totaling is an account category you set up, and another row whose totaling is a short account range.",
        "Open the Column Definition. Include a Net Change column and a Balance column.",
        "Run View Report for a date range that contains the journal you posted earlier.",
      ],
      check: "The report shows the posted amount in the column you defined. A row built from an account category still works after you add another account to that category. An account range does not. These used to be called account schedules. Analysis mode on a list is not a financial report.",
    },
    {
      open: "Recurring General Journals",
      steps: [
        "Create a line with a G/L account and an amount. Set Recurring Method to F Fixed. Do not post yet.",
        "Choose Allocations. Add two lines that split the amount, 60 and 40, to two dimension values or two accounts. The shares must add to 100 percent.",
        "Close the allocations page and confirm the journal line shows that it is allocated.",
      ],
      check: "The allocation lines exist and total 100 percent. Nothing is posted yet. Posting this line is the operations lab. Allocations are not a second chart of accounts, and they are not dimension combinations.",
    },
  ],
  posting: [
    {
      open: "Customer Posting Groups",
      steps: [
        "Create a customer posting group and fill Receivables Account with a posting G/L account. Look at the other accounts on the card (payment discount, interest, invoice rounding) so you know they live here.",
        "Open Vendor Posting Groups, Inventory Posting Groups, Bank Account Posting Groups, and FA Posting Groups. Each of these points at G/L accounts on its own card.",
        "Assign the new customer posting group to one customer.",
      ],
      check: "Specific posting groups hold the balance-sheet accounts for that subledger. The customer group does not hold the sales revenue account. Revenue is on General Posting Setup. General business and general product posting groups also do not hold G/L accounts.",
    },
    {
      open: "Gen. Business Posting Groups",
      steps: [
        "Open Gen. Business Posting Groups and add a code you can recognize, or use an existing one such as DOMESTIC. Confirm the card has no sales or COGS account on it.",
        "Open Gen. Product Posting Groups and do the same for a product group such as RETAIL.",
        "Assign the business group to a customer and the product group to an item.",
      ],
      check: "These two lists are only codes. The G/L accounts are filled on the intersection, which is the next lab. Mixing these up with customer or inventory posting groups is the usual posting-setup error.",
    },
    {
      open: "General Posting Setup",
      steps: [
        "Find or create the row for the business group and product group you just assigned. Fill Sales Account, COGS Account, and Purch. Account at least.",
        "Create a sales invoice for that customer and that item. Preview Posting.",
        "In the preview, confirm revenue goes to the sales account on this row, and the receivable goes to the receivables account on the customer posting group.",
      ],
      check: "Preview shows both accounts. A missing intersection, or a blank sales account on that intersection, is why posting fails even when the customer posting group is filled. Customer posting groups do not pick the revenue account.",
    },
    {
      open: "Inventory Posting Setup",
      steps: [
        "Add a row for a location (or the blank location) and an inventory posting group. Fill Inventory Account.",
        "Open an item that uses that inventory posting group and confirm its Inventory Posting Group field.",
        "Post a one-line item journal, entry type Positive Adjmt., for that item and location. Then open the G/L entries.",
      ],
      check: "The inventory account on this row is the one that moved. General Posting Setup does not hold the inventory balance-sheet account. A missing location plus inventory-posting-group row is why an item journal fails for one location and works for another.",
    },
    {
      open: "Sales & Receivables Setup",
      steps: [
        "Turn on Allow Multiple Posting Groups. Do the same on Purchases & Payables Setup if you want the vendor side.",
        "Open Customer Posting Groups, choose Alternative Groups, and allow a second customer posting group as a substitute for the default one.",
        "On one customer card, turn on Allow Multiple Posting Groups. Create a sales invoice for that customer and change Customer Posting Group on the invoice to the alternative.",
      ],
      check: "The invoice keeps the alternative group, and preview posts the receivable to that group's receivables account. Without the toggle on setup and on the customer, the posting group on the document stays locked to the card. This does not change general posting setup.",
    },
  ],
  journals: [
    {
      open: "Bank Accounts",
      steps: [
        "Create a bank account. Assign a Bank Acc. Posting Group, a currency if it is a foreign bank, and the bank account number.",
        "Open Bank Account Posting Groups and confirm that group's G/L account is a posting account.",
        "Post a general journal with Bal. Account Type Bank Account for a small amount. Open Bank Account Ledger Entries.",
      ],
      check: "You have a bank ledger entry and a G/L entry to the posting group's account. The bank card does not store the G/L account itself. The posting group does. Payment journals will use this bank later.",
    },
    {
      open: "General Journal Templates",
      steps: [
        "Create a template with Type General. Set No. Series to a series you created, with Default Nos. on.",
        "Open the template's Batches and add a batch. Leave the batch number series blank for this step so the template series is used.",
        "Open General Journals, select this template and batch, and confirm the next document number is proposed from the series.",
      ],
      check: "The template supplies the journal type and, unless the batch overrides it, the number series. A template is not a posted register. Nothing is posted until you post a batch.",
    },
    {
      open: "General Journal Templates",
      steps: [
        "On the template from the previous lab, open Batches and create a second batch. Give this batch its own No. Series, different from the template.",
        "Open General Journals and switch between the two batches. Compare the document numbers that are proposed.",
        "Post one balanced line in the batch that has its own series.",
      ],
      check: "The batch series wins when it is filled. The other batch still uses the template series. The posted line appears in G/L Registers under that batch. Batches are the working sets inside a template, not separate templates.",
    },
    {
      open: "General Journal Templates",
      steps: [
        "Create a template with Type Recurring, or open Recurring General Journals and note which template it uses.",
        "Add a batch on that template. On a line, set Recurring Method to F Fixed, Recurring Frequency to 1M, and a starting posting date.",
        "Do not post it yet if you want the operations lab to be the first posting. Confirm the line stays on the page after you leave and come back.",
      ],
      check: "The recurring template keeps its lines after posting. A normal general journal clears posted lines. The recurring method and frequency are what make it recurring. The allocations lab can reuse this line.",
    },
  ],
  ap: [
    {
      open: "Vendors",
      steps: [
        "Create a vendor. Fill Vendor Posting Group, Gen. Bus. Posting Group, Payment Terms, and Currency Code if you want a foreign vendor.",
        "Use Vendor Bank Accounts and add the vendor's bank account. This is their account, not yours.",
        "Open the vendor card again and confirm Payment Method and the posting groups saved.",
      ],
      check: "The vendor posts through the posting groups on the card, not through accounts typed on each invoice. Vendor Bank Account is where you pay them. Your own cash account is a Bank Account, set up in the journal lab.",
    },
    {
      open: "Purchases & Payables Setup",
      steps: [
        "Set the default number series for orders, invoices, and credit memos if they are blank.",
        "Note Check Doc. Total Amounts, and turn on Allow Multiple Posting Groups if you did not already.",
        "Set a default posting date restriction only if you mean to. Otherwise leave posting dates to General Ledger Setup and User Setup.",
      ],
      check: "New purchase documents take their number series from this page. Vendor defaults such as payment terms still come from the vendor card. This page does not hold the payables G/L account. The vendor posting group does.",
    },
    {
      open: "Payment Journals",
      steps: [
        "Select a payment journal batch whose Bal. Account Type is Bank Account, or set the bank on the batch.",
        "Run Suggest Vendor Payments for open vendor invoices. If you have none, post a small purchase invoice first, then suggest again.",
        "Check the applies-to link on the suggested line, then post. Open Vendor Ledger Entries and Bank Account Ledger Entries.",
      ],
      check: "The invoice remaining amount is zero and the bank balance moved. Suggest Vendor Payments only proposes lines. Posting is what closes the vendor entry. A cash receipt journal is the customer side, not this page.",
    },
    {
      open: "Vendor Ledger Entries",
      steps: [
        "Post a purchase invoice for a vendor. Open Vendor Ledger Entries and find the invoice. Note Document No., Amount, and Remaining Amount.",
        "Drill into Detailed Vendor Ledger Entries for that invoice. You should see the initial entry.",
        "Choose Find entries. Confirm the G/L entries, including the payables account from the vendor posting group.",
      ],
      check: "One posted invoice produced a vendor ledger entry, detailed vendor ledger entries, and G/L entries. The vendor card does not store the balance. The open vendor ledger entry does. Find entries is how you move from the subledger to the G/L.",
    },
  ],
  ar: [
    {
      open: "Customers",
      steps: [
        "Create a customer. Fill Customer Posting Group, Gen. Bus. Posting Group, Payment Terms, and Payment Method.",
        "Use Ship-to Addresses only if you need a second delivery address. Use Customer Bank Accounts if they pay you from a known bank.",
        "Create a sales invoice and confirm the posting groups and payment terms copied onto the header.",
      ],
      check: "The invoice inherited the card. Changing the term on one invoice does not change the card. The receivables account is not on the customer. It is on the customer posting group.",
    },
    {
      open: "Sales & Receivables Setup",
      steps: [
        "Set the default number series for quotes, orders, invoices, and credit memos.",
        "Find Calc. Inv. Discount and Combine Shipments. Leave Combine Shipments for the operations lab, but know the toggle is here.",
        "Turn on Allow Multiple Posting Groups here if that lab is not done yet.",
      ],
      check: "Sales document numbers come from this page. Customer-level options, such as the customer's own Combine Shipments checkbox, can still override a company default. The receivables G/L account is still the customer posting group, not this page.",
    },
    {
      open: "Cash Receipt Journals",
      steps: [
        "Open a cash receipt batch with Bal. Account Type Bank Account.",
        "Enter the customer and the amount received. Use Apply Entries to mark the open invoice this receipt closes.",
        "Post. Open Customer Ledger Entries and confirm the invoice remaining amount is zero. Open the bank ledger and confirm the deposit.",
      ],
      check: "The receipt closed the invoice and increased the bank. A line with no application stays on the customer as an open payment. Payment Registration is a simpler page over the same idea. Payment Journals are for vendors.",
    },
    {
      open: "Payment Registration Setup",
      steps: [
        "Set the journal template, batch, and balancing bank account that Payment Registration should post through.",
        "Open Payment Registration. Enter a customer, an amount, and the document it settles.",
        "Post the registration. Then open the cash receipt journal batch you named in setup and the customer ledger.",
      ],
      check: "The customer entry is closed and the bank moved, and the underlying journal is the batch you named in setup. Payment Registration is not a second ledger. If the setup batch or bank is wrong, every registration posts to the wrong place.",
    },
    {
      open: "Customer Ledger Entries",
      steps: [
        "Post a sales invoice. Open Customer Ledger Entries and find it. Note Remaining Amount.",
        "Open Detailed Customer Ledger Entries for that document. The first line is the initial invoice.",
        "Choose Find entries and open the G/L side. Find the receivables account from the customer posting group and the revenue account from general posting setup.",
      ],
      check: "The customer balance is the open customer ledger entry, not a field you edit on the customer card. Detailed entries are the applications and adjustments under that entry. Find entries crosses to the G/L. Vendor ledger entries work the same way on the purchase side.",
    },
  ],
  fa: [
    {
      open: "Depreciation Books",
      steps: [
        "Open Fixed Asset Setup and note the default depreciation book. Open Depreciation Books and turn on G/L integration for acquisition cost and depreciation on that book if you want the G/L to move when you post assets.",
        "Open FA Classes and FA Subclasses and create one of each, for example TANGIBLE and MACHINERY.",
        "Open FA Posting Groups. Fill Acquisition Cost Account, Accumulated Depreciation Account, and Depreciation Expense Account.",
      ],
      check: "You have a book integrated to the G/L, a class, a subclass, and a posting group with three accounts. No asset exists yet. A book that is not integrated to the G/L will post FA ledger entries and leave the general ledger unchanged.",
    },
    {
      open: "Fixed Assets",
      steps: [
        "Create a fixed asset. Assign the class, subclass, and FA posting group from the setup lab. On the Depreciation Book lines, set a depreciation starting date and a useful life.",
        "Create a second, smaller asset. Set Main Asset/Component to Component, and set the main asset number to the first asset. On the first asset, set Main Asset/Component to Main Asset.",
        "Open the main asset's component list and confirm the second asset is attached.",
      ],
      check: "Both assets exist. The component points at the main asset. Components are separate assets with their own ledger. They are not extra lines on one asset card. Posting an acquisition is the operations lab.",
    },
    {
      open: "Fixed Assets",
      steps: [
        "On one asset's depreciation book line, set Depreciation Method to Straight-Line and a number of years.",
        "On a second asset with the same cost and the same life, set Depreciation Method to Declining-Balance 1.",
        "Run Calculate Depreciation for both, into the FA G/L journal, for one month. Compare the two lines. Delete the unposted lines when you have seen the amounts, so the later depreciation lab starts clean.",
      ],
      check: "The straight-line amount is the depreciable base spread over the life. The declining-balance amount is a percentage of the remaining book value, so the two lines differ. Calculate Depreciation only fills a journal. Nothing is posted until that journal is posted.",
    },
  ],
  inventory: [
    {
      open: "Inventory Setup",
      steps: [
        "Read Automatic Cost Posting and Automatic Cost Adjustment. For a sandbox, Always on cost adjustment keeps value entries current while you practice.",
        "Note the default costing method. New items inherit it, and you can override the method on the item card.",
        "Leave location mandatory off unless you want every journal to require a location. The location lab creates a simple location that does not require warehouse documents.",
      ],
      check: "You know whether costs post to the G/L as you post item entries, and whether cost adjustment runs immediately. Costing method on this page is only the default. The item card is what the item actually uses.",
    },
    {
      open: "Items",
      steps: [
        "Create an item. Set a base unit of measure, an inventory posting group, a gen. product posting group, and a costing method.",
        "Open Item Categories and assign a category. Open Item Attributes, define one attribute such as Color, and assign it on the item.",
        "Add a second unit of measure, for example BOX of 6 pieces. Open Item Variants and add one variant if you want the item tracked by variant.",
      ],
      check: "The item card points at a category, carries the attribute, has two units of measure, and can use a variant on a document line. Variants are not locations. Units of measure are not posting groups.",
    },
    {
      open: "Locations",
      steps: [
        "Create a location with a short code. Leave Require Receive, Require Put-away, Require Shipment, and Require Pick turned off.",
        "Create a second location the same way. You need two for the transfer lab.",
        "Open Inventory Posting Setup and add a row for each new location and the item's inventory posting group, with an inventory account.",
      ],
      check: "Both locations exist and neither one forces a warehouse receipt or shipment. With those toggles on, you cannot simply Post Receive on a purchase order. You would need warehouse documents. Inventory posting setup must have a row or the first item posting to that location fails.",
    },
    {
      open: "Item Ledger Entries",
      steps: [
        "Post a purchase invoice or an item journal purchase for an item, with a unit cost. Open Item Ledger Entries and find the receipt.",
        "Drill into Value Entries for that item ledger entry. You should see the cost.",
        "Choose Find entries, or open G/L Entries from the value entry, and find the inventory account.",
      ],
      check: "Quantity lives on the item ledger entry. Cost lives on the value entry. The G/L only moves if automatic cost posting is on, or after you run Post Inventory Cost to G/L. The item card quantity is a flow of these entries, not a number you edit.",
    },
    {
      open: "Items",
      steps: [
        "Create two items with the same posting groups. Set one Costing Method to FIFO and the other to Average.",
        "In the item journal, receive 1 at a unit cost of 10 and 1 at 30 for each item. Post. Then issue 1 of each (entry type Sale or Negative Adjmt.) and post.",
        "Open Value Entries for both items and compare the remaining value.",
      ],
      check: "FIFO still holds the second layer, so the remaining value is 30. Average blends the two receipts, so the remaining value is 20. Standard ignores the purchase cost and uses the standard cost on the card. Specific is for serial or lot items you cost individually. The method on the item card controls this, not Inventory Setup, once the item exists.",
    },
    {
      open: "Stockkeeping Units",
      steps: [
        "Pick an item and one of the locations you created. Run Create Stockkeeping Unit for that item and location, or new up a stockkeeping unit card yourself.",
        "On the stockkeeping unit, set a Replenishment System, a Vendor No., or a Reordering Policy that is different from the item card.",
        "Open the item card and confirm its own replenishment fields did not change. Planning for that location uses the stockkeeping unit.",
      ],
      check: "The location has its own replenishment values. Where no stockkeeping unit exists, planning falls back to the item card. A stockkeeping unit is not a second item and it does not move quantity. Transfers move quantity.",
    },
  ],
  master: [
    {
      open: "Customer Card",
      steps: [
        "On the Shipping FastTab, set Location Code and a Shipping Agent. Open Shipping Agents first if you need to create the agent and a service.",
        "Use Ship-to Addresses and add a second delivery address.",
        "Create a sales order for the customer. Confirm the location and agent defaulted. Change Ship-to to the extra address and confirm the address block changes.",
      ],
      check: "The order inherits location, agent, and ship-to from the customer. The ship-to address is not the bill-to customer. Sell-to, bill-to, and ship-to can be three different parties.",
    },
    {
      open: "Vendor Card",
      steps: [
        "On Receiving, set Location Code and Lead Time Calculation, for example 5D.",
        "Open Order Addresses and add an order-from address that is different from the vendor's main address.",
        "Create a purchase order. Confirm the expected receipt date reflects the lead time and the location defaulted. Point the order address at the extra address.",
      ],
      check: "Lead time pushes the expected receipt date out from the order date. The order address is where the purchase document is sent. It is not your warehouse location. The location code is your receiving site.",
    },
  ],
  pricing: [
    {
      open: "Purchase Price Lists",
      steps: [
        "Open Sales & Receivables Setup or Purchases & Payables Setup and read Price Calculation Method. New companies use Price List. Older ones use Lowest Price.",
        "If the method is Price List, create a Purchase Price List, assign it to one vendor, add a line for one item with a direct unit cost, and set the list Active. If the method is Lowest Price, enter the same price on Purchase Prices instead.",
        "Create a purchase order for that vendor and item. Confirm the unit cost came from the list, not from the item card.",
      ],
      check: "The order line shows the vendor price. An inactive list, a wrong vendor, or a minimum quantity you did not reach leaves the item-card cost in place. Sales prices do not affect this order.",
    },
    {
      open: "Purchase Price Lists",
      steps: [
        "On a purchase price list line, set a line discount percent for an item. For the legacy experience, use Purchase Line Discounts instead.",
        "Open the vendor and set up Vend. Invoice Discounts: a minimum amount and a discount percent. Turn on Calc. Inv. Discount in Purchases & Payables Setup.",
        "Create a purchase invoice above that minimum, with the discounted item. Calculate the invoice discount if it does not fill by itself.",
      ],
      check: "The line discount is on the line. The invoice discount is on the document total and only applies when the invoice reaches the minimum. Line discount and invoice discount are two different setups. A price list line does not create the invoice discount.",
    },
    {
      open: "Sales Price Lists",
      steps: [
        "Create a Sales Price List for one customer, with one item and a unit price, status Active. On the legacy experience, use Sales Prices instead.",
        "Create a sales order for that customer and item.",
        "Change the order date or the quantity outside the line's starting date or minimum quantity and refresh the price.",
      ],
      check: "Inside the line's date and quantity, the customer price replaces the item-card unit price. Outside it, the line falls back. Purchase price lists do not drive this sales order.",
    },
    {
      open: "Sales Price Lists",
      steps: [
        "Add a line discount percent on a sales price list line, or use Sales Line Discounts if the company is on the legacy calculation.",
        "On the customer, set Cust. Invoice Discounts with a minimum amount and a percent. Turn on Calc. Inv. Discount in Sales & Receivables Setup.",
        "Create a sales invoice that qualifies. Confirm the line shows the line discount and the invoice totals show the invoice discount.",
      ],
      check: "Line discount and invoice discount both calculate, and they are not the same field. The invoice discount depends on the customer minimum. A sales line discount for a different customer does not apply.",
    },
  ],
  basic: [
    {
      open: "Customer Card",
      steps: [
        "Personalize: on the customer list, choose the gear, then Personalize. Hide one field. The change is stored for your user only.",
        "Customize: open Profiles, select the profile from My Settings, and choose Customize pages. Hide a different part of the customer list for that profile.",
        "Design is not on this menu. A new field that does not exist on the page is an AL page extension, shipped as an app.",
      ],
      check: "Personalize affects only you. Customize affects everyone who uses that profile. Design is a developer change and survives a profile reset. Hiding a field is not a security filter. The user can still reach the data from another page.",
    },
    {
      open: "Profiles",
      steps: [
        "Select the profile your lab users share. Choose Customize pages. The client opens in customization mode for that profile.",
        "Hide a FactBox or move a field. Save and exit customization.",
        "Open the same page as a user on that profile, then as a user on a different profile.",
      ],
      check: "Only the customized profile shows the change. Your personal Personalize tweaks are a separate layer. Customizing a page does not change permissions.",
    },
    {
      open: "Customers",
      steps: [
        "Open the filter pane. Filter to one city, or to Balance greater than zero.",
        "Save the view and give it a name. Leave the page and come back. Pick that view.",
        "Clear the filter and confirm the full list returns. The saved view is still in the view list.",
      ],
      check: "The view is a filter you can return to. It does not remove rows from the database, and other users do not lose those customers. A security filter on a permission set is what actually restricts rows for a user.",
    },
    {
      open: "Posted Sales Invoices",
      steps: [
        "Open a posted sales invoice. If you do not have one, post a small invoice first.",
        "Choose Find entries.",
        "Open the customer ledger entry, the G/L entries, and the item ledger entry if the invoice sold an item.",
      ],
      check: "Find entries lists every ledger that posted document created. It is the way you move from a posted invoice to the customer, the G/L, and the item. The customer card balance is not where you start this trace.",
    },
    {
      open: "Customer Card",
      steps: [
        "Open a customer. Press Ctrl+Alt+F1, or use Help and then Inspect pages and data.",
        "Find the table name and number, and the field behind Credit Limit (LCY).",
        "Close inspection without changing anything. Inspection has no save.",
      ],
      check: "You can name the table and the field. That is how you know which table to add on Change Log Setup. Inspection does not edit data, and it is not Personalize.",
    },
    {
      open: "Customers",
      steps: [
        "On the customer list, choose Edit in Excel and open the workbook in the Excel add-in.",
        "Change one phone number. Publish.",
        "Refresh the customer list in Business Central.",
      ],
      check: "The phone number changed on the card. Edit in Excel writes records back. Analysis mode does not. A configuration package is the tool when you are loading many new setup rows from a designed spreadsheet, not when you are correcting a list you already have open.",
    },
    {
      open: "Customer Ledger Entries",
      steps: [
        "Choose Enter analysis mode. If the action is missing, turn on Analyze list under Copilot & agent capabilities and confirm your user is allowed to use it.",
        "Build a small pivot: group by Customer No. and sum Remaining Amount. Add a filter for open entries.",
        "Save the analysis tab. Leave the page and open analysis mode again.",
      ],
      check: "The tab is still there and the total matches a filtered remaining-amount view of the same list. Analysis mode does not post and does not write back. A financial report is the tool when the result must follow the chart of accounts and account categories.",
    },
    {
      open: "Customer List",
      steps: [
        "Choose the gear, then Personalize. Hide one column that Customize did not already hide.",
        "Exit personalization. Open My Settings and confirm this is your user.",
        "If you can, open the same list as another user. The column is still there for them.",
      ],
      check: "The hidden column is gone only for you. Clearing personalization brings it back. Everyone on a profile loses a field only when that profile is customized. A permission set is what stops a user from opening the page at all.",
    },
  ],
  purch: [
    {
      open: "Purchase Quotes",
      steps: [
        "Create a purchase quote for a vendor and one item. Note that a quote does not reserve stock and does not post.",
        "Use Make Order. Open the purchase order that was created and confirm the quote number is linked.",
        "Open the original quote and confirm it is no longer an open document you would post.",
      ],
      check: "Make Order is what turns the quote into a purchase order. Printing the quote does not. A quote has no item ledger entry.",
    },
    {
      open: "Purchase Orders",
      steps: [
        "Create a purchase order. Pick a vendor so the posting groups default. Add an item line with a quantity and a location that does not require warehouse receipt.",
        "Confirm the line has a unit cost, a location, and a gen. product posting group.",
        "Leave it unposted. The next labs receive it, then invoice it.",
      ],
      check: "The order exists with status Open and nothing in Item Ledger Entries yet. A purchase invoice is a different document. You use an order when you expect a receipt.",
    },
    {
      open: "Purchase Orders",
      steps: [
        "Open the order from the previous lab. Choose Post, then Receive. Do not invoice.",
        "Open Posted Purchase Receipts and find the receipt. Open Item Ledger Entries for the item.",
        "On the order, compare Quantity, Qty. Received, and Qty. Invoiced.",
      ],
      check: "Quantity is on hand, Qty. Received equals the receipt, and Qty. Invoiced is still zero. The vendor is not credited until you invoice. Receive is not Undo, and it is not a warehouse receipt unless the location requires one.",
    },
    {
      open: "Over-Receipt Codes",
      steps: [
        "Create an over-receipt code with a tolerance of 10 percent. Assign it on the vendor card, or on the purchase line.",
        "Create an order for a quantity of 10. Set Qty. to Receive to 11. Post Receive.",
        "Try a second receipt far above the tolerance, or set Qty. to Receive to 15 on a copy, and confirm posting is blocked.",
      ],
      check: "The posted receipt quantity is 11, which is more than the order quantity, and the order quantity itself was not edited up to 11. Past the tolerance, posting stops. Turning the order quantity up is not an over-receipt. That is just a bigger order.",
    },
    {
      open: "Posted Purchase Receipts",
      steps: [
        "Open a posted receipt that has not been invoiced. Select the line and run Undo Receipt.",
        "Open Item Ledger Entries and find the reversing entry. On the purchase order, check Qty. Received.",
        "If Undo is unavailable, the receipt was already invoiced. Invoice undo is a credit memo, not this action.",
      ],
      check: "Qty. Received is back down and on-hand quantity no longer includes that receipt. Undo Receipt only works before invoicing. A posted purchase credit memo is how you reverse an invoice.",
    },
    {
      open: "Purchase Orders",
      steps: [
        "On an order that is received and not invoiced, set Qty. to Invoice to the received quantity. Post, and choose Invoice.",
        "Open Posted Purchase Invoices and Vendor Ledger Entries.",
        "On the order, confirm Qty. Invoiced now matches Qty. Received. Invoice the order only for the received quantity, not for a quantity you have not received, unless you mean to.",
      ],
      check: "A vendor ledger entry exists and the payables account moved. The item quantity did not change again, because the receipt already did that. Posting Invoice on an unreceived order can receive and invoice together. That is a different choice from invoicing a receipt you already posted.",
    },
    {
      open: "Recurring Purchase Lines",
      steps: [
        "Create a recurring purchase line set with one G/L account or item line and a quantity.",
        "On the vendor card, assign that recurring set.",
        "Create a purchase invoice for the vendor and run Get Recurring Purchase Lines. The lines insert. Delete them if you do not want to post.",
      ],
      check: "The invoice received the standard lines from the vendor. They are a template, not a posted invoice, and they are not a blanket order. A blanket order tracks a quantity you release over time.",
    },
    {
      open: "Blanket Purchase Orders",
      steps: [
        "Create a blanket purchase order for a vendor and an item, with a quantity large enough for several releases.",
        "Run Make Order for part of the quantity. Open the purchase order that was created.",
        "On the blanket order, compare Quantity and Qty. on Orders. The blanket still holds the rest.",
      ],
      check: "The blanket order remains open and shows how much has been turned into purchase orders. Make Order does not post a receipt. You still receive and invoice the individual purchase order.",
    },
    {
      open: "Purchase Orders",
      steps: [
        "Confirm a deferral template exists and its deferral account is a balance-sheet account.",
        "On a purchase line for a G/L expense, set Deferral Code to that template. Open the deferral schedule and read the periods.",
        "Post the invoice. Open the G/L entries. The expense account is not the full amount in this period. The deferral account holds the rest.",
      ],
      check: "The first period recognized some expense, and the balance-sheet deferral account holds the unrecognized part. A deferral is not a prepayment. Prepayments bill the vendor before you receive the goods. Deferrals spread a cost you are already posting.",
    },
  ],
  sales: [
    {
      open: "Sales Quotes",
      steps: [
        "Create a sales quote for a customer and an item. Confirm it does not appear in Item Ledger Entries.",
        "Leave it open. The next lab converts it.",
        "Optional: print or preview the quote so you can see it is a customer-facing document with no posting.",
      ],
      check: "A quote is unposted. It does not ship, reserve, or hit the customer ledger. Make Order or Make Invoice is what turns it into a document you can post.",
    },
    {
      open: "Sales Quotes",
      steps: [
        "On the quote, run Make Order. Open the sales order and confirm the quote link.",
        "Create a second quote and run Make Invoice instead. Open the sales invoice it created.",
        "Try to post the original quote. There is nothing left to post.",
      ],
      check: "Make Order gives you an order you can ship. Make Invoice gives you an invoice and skips the shipping document. Those are different paths. Neither one posts by itself.",
    },
    {
      open: "Sales Orders",
      steps: [
        "On a sales line, choose Item Availability by Location. Note the quantity on hand at the location on the line.",
        "Also open Item Availability by Period, or the availability FactBox, and note the projected available balance.",
        "Change the location on the line and look again.",
      ],
      check: "You can say whether this location can ship the quantity. Availability is calculated from item ledger entries and outstanding orders. It is not the number in the Quantity field on the item card alone when locations are in use.",
    },
    {
      open: "Sales Orders",
      steps: [
        "Create a sales order for an item you have on hand, at a location that does not require warehouse shipment. Post, and choose Ship. Do not invoice.",
        "Open Posted Sales Shipments and Item Ledger Entries.",
        "On the order, compare Qty. Shipped and Qty. Invoiced.",
      ],
      check: "On-hand quantity dropped, Qty. Shipped increased, and Qty. Invoiced is still zero. The customer has not been charged. Ship is not a sales invoice.",
    },
    {
      open: "Posted Sales Shipments",
      steps: [
        "Open a posted shipment that has not been invoiced. On the line, run Undo Shipment.",
        "Check Item Ledger Entries for the reversing entry and Qty. Shipped on the sales order.",
        "If the action is missing, the shipment was already invoiced. You would need a sales credit memo, not Undo.",
      ],
      check: "The quantity is back on hand and Qty. Shipped is reduced. Undo Shipment does not create a customer credit. It only reverses an uninvoiced shipment.",
    },
    {
      open: "Sales Orders",
      steps: [
        "On a shipped, uninvoiced order, post and choose Invoice.",
        "Open Posted Sales Invoices and Customer Ledger Entries.",
        "Confirm Qty. Invoiced caught up with Qty. Shipped, and that on-hand quantity did not drop a second time.",
      ],
      check: "The customer ledger shows the invoice. Inventory already moved at shipment, so the invoice posts revenue and the receivable, not a second shipment. Get Shipment Lines on a separate sales invoice is the other way to bill a shipment. That is the combine-shipments lab.",
    },
    {
      open: "Recurring Sales Lines",
      steps: [
        "Create a recurring sales line set with one line. Assign it on the customer card.",
        "Create a sales invoice for that customer and run Get Recurring Sales Lines.",
        "Confirm the lines inserted. Delete the invoice if you do not want to post it.",
      ],
      check: "The customer pulls in the standard lines. They are not posted, and they are not a blanket sales order. Blanket orders release a committed quantity over time.",
    },
    {
      open: "Blanket Sales Orders",
      steps: [
        "Create a blanket sales order with a quantity you will release in parts.",
        "Run Make Order for part of the quantity. Open the sales order.",
        "On the blanket, read Qty. on Orders against the original quantity.",
      ],
      check: "The blanket stays open and tracks what you have released. Make Order does not ship. You ship the sales order. A recurring sales line does not track a remaining quantity.",
    },
    {
      open: "Sales Orders",
      steps: [
        "Use the same style of deferral template as the purchase lab, with a balance-sheet deferral account.",
        "On a sales line for revenue, set the deferral code. Open the schedule and confirm the periods.",
        "Post the invoice. In the G/L entries, confirm this period's revenue is only the recognized slice.",
      ],
      check: "Unearned revenue sits on the deferral account, and this period's revenue account shows one slice. That is not a prepayment. A prepayment invoices the customer before you ship.",
    },
  ],
  docs: [
    {
      open: "Purchase Invoices",
      steps: [
        "Create a purchase invoice that is not created from an order. Pick a vendor and either a G/L account line or an item line.",
        "Preview posting. Confirm the payables account and the expense or inventory account.",
        "Post. Open Posted Purchase Invoices and Vendor Ledger Entries.",
      ],
      check: "A vendor ledger entry exists. If the line was an item, quantity was received and invoiced together. There is no separate posted purchase receipt unless you started from an order and received first.",
    },
    {
      open: "Purchase Credit Memos",
      steps: [
        "Start a purchase credit memo for the same vendor. Use Get Posted Document Lines to Reverse and select the posted invoice, or copy the lines.",
        "Preview and confirm the amounts reverse the invoice.",
        "Post. Open Vendor Ledger Entries. Apply the credit to the invoice if they did not apply automatically.",
      ],
      check: "The vendor remaining amount is reduced or zero. A credit memo is how you reverse a posted purchase invoice. Undo Receipt cannot do that, and Reverse Transaction on a G/L register is for journals, not for this document.",
    },
    {
      open: "Sales Invoices",
      steps: [
        "Create a sales invoice directly, not from an order. Use a customer and an item you have on hand, or a G/L account line.",
        "Preview, then post.",
        "Open Posted Sales Invoices, Customer Ledger Entries, and, if you sold an item, Item Ledger Entries.",
      ],
      check: "The customer is charged and, for an item line, quantity shipped and invoiced together. There is no posted sales shipment document when you invoice directly. Shipping first requires a sales order.",
    },
    {
      open: "Sales Credit Memos",
      steps: [
        "Create a sales credit memo. Pull the posted invoice lines with Get Posted Document Lines to Reverse, or copy them.",
        "Post. Open Customer Ledger Entries.",
        "Apply the credit to the invoice if it is still open.",
      ],
      check: "The customer balance dropped by the credit. Correct or Cancel on the posted invoice will create this credit for you. Writing a credit memo yourself is the same ledger result when the lines match. Undo Shipment is not available once the invoice exists.",
    },
    {
      open: "Combine Shipments",
      steps: [
        "On the customer, turn on Combine Shipments. Post two sales orders as Ship only, for that customer, with nothing invoiced.",
        "Run Combine Shipments for that customer and those shipment dates.",
        "Open the sales invoice the batch created and confirm both shipments are on it. Post the invoice when you are satisfied.",
      ],
      check: "One sales invoice covers both posted shipments. Combine Shipments does not ship anything. It only bills shipments you already posted. The customer toggle is required. The batch skips customers who do not have it.",
    },
    {
      open: "Purchase Invoices",
      steps: [
        "Post two purchase orders as Receive only, for the same vendor.",
        "Create one purchase invoice for that vendor. Run Get Receipt Lines and select both receipts. Or run the Combine Receipts batch if you want Business Central to create the invoice.",
        "Confirm both receipts are lines on the same invoice, then post it.",
      ],
      check: "One posted purchase invoice cleared both receipts, and Qty. Invoiced on each order caught up. Get Receipt Lines is the manual path. Combine Receipts is the batch. Neither one receives goods. The receipts already did.",
    },
    {
      open: "Posted Purchase Invoices",
      steps: [
        "Open an unpaid posted purchase invoice. Choose Correct.",
        "Business Central posts a purchase credit memo and opens a new purchase invoice that you can edit. Post that new invoice only if the corrected amounts are right.",
        "Run Cancel on a different unpaid invoice if you want to see the other action. Cancel credits the invoice and does not open a new one.",
      ],
      check: "Correct gives you a credit memo and a new draft invoice. Cancel gives you only the credit. Neither action is Undo Receipt. If the invoice is applied to a payment, unapply it before Correct will run.",
    },
    {
      open: "Posted Sales Invoices",
      steps: [
        "Open an unpaid posted sales invoice. Choose Correct. Confirm a posted sales credit memo exists and a new sales invoice is open.",
        "Choose Cancel on a second unpaid invoice. Confirm there is a credit memo and no new invoice.",
        "If either action is blocked, open Customer Ledger Entries and unapply the payment first.",
      ],
      check: "Correct is “credit this and give me a new invoice to fix.” Cancel is “credit this and stop.” A sales credit memo you type yourself is the manual version of the same credit. Do not use Undo Shipment once the invoice has been posted.",
    },
    {
      open: "Sales Orders",
      steps: [
        "On an open sales order, choose Release. The status becomes Released. Try to change the quantity.",
        "Choose Reopen. Change the quantity. Release again.",
        "Do the same on a purchase order so you have seen both documents.",
      ],
      check: "Released locks the lines against casual edits. Reopen is what lets you change them. Release is not posting, and it is not an approval. An approval workflow may release the order for you when the request is approved.",
    },
    {
      open: "Sales Orders",
      steps: [
        "On the customer posting group, fill the prepayment account. On General Posting Setup for this customer and item, fill the sales prepayment account. Do the vendor side the same way if you will try a purchase.",
        "On a sales order, set Prepayment % to 50 on the header or the line. Post the prepayment invoice.",
        "Open Customer Ledger Entries and confirm a prepayment invoice. Then ship and post the final invoice. The final invoice deducts the prepayment.",
      ],
      check: "You posted two customer documents: the prepayment invoice, then the final invoice net of that prepayment. The prepayment account is a balance-sheet account, not revenue. A deferral is the other tool. Deferrals spread revenue after you invoice the full amount. Prepayments collect cash before the final invoice.",
    },
  ],
  pay: [
    {
      open: "Payment Journals",
      steps: [
        "Post a vendor invoice if none are open. Open Payment Journals and run Suggest Vendor Payments.",
        "Confirm each suggested line applies to an invoice and the balancing account is your bank.",
        "Post. Check the vendor remaining amount and the bank ledger.",
      ],
      check: "The invoice is closed and the bank decreased. Suggest does not post. A line you post without an application leaves an open payment on the vendor. Cash receipt journals are the customer equivalent.",
    },
    {
      open: "Cash Receipt Journals",
      steps: [
        "Post a sales invoice if the customer has no open entry. In the cash receipt journal, enter the customer and the amount.",
        "Apply the line to that invoice. Set the balancing account to the bank.",
        "Post. Confirm the customer entry is closed and the bank increased.",
      ],
      check: "The receipt is applied and posted. Leaving Applies-to blank posts an open payment you can apply later. Payment Registration is a guided version of this journal. It is not a different ledger.",
    },
    {
      open: "Payment Registration",
      steps: [
        "Confirm Payment Registration Setup points at a cash receipt batch and a bank.",
        "Enter one payment against an open customer invoice. Post the registration.",
        "Open Customer Ledger Entries and the bank account ledger.",
      ],
      check: "The invoice is closed from this page, and the cash receipt batch is what posted. Use the cash receipt journal when you need a lump sum, a different balancing account, or several customers on lines you edit yourself.",
    },
    {
      open: "Customer Ledger Entries",
      steps: [
        "Leave an invoice and a payment both open. On the payment, choose Apply Entries, mark the invoice, and post the application.",
        "Confirm Remaining Amount is zero on both. Open Detailed Customer Ledger Entries and find the application line.",
        "Run Unapply Entries. Confirm both documents are open again. Repeat the idea once on Vendor Ledger Entries if you have a vendor payment.",
      ],
      check: "Application closes the two entries without posting a new invoice. Unapply reopens them and writes an unapplication in the detailed ledger. Unapply is not a credit memo and not Reverse Transaction.",
    },
    {
      open: "G/L Registers",
      steps: [
        "Post a simple balanced general journal. Note the register number.",
        "On that register, choose Reverse, or open the entries and run Reverse Transaction.",
        "Try the same action on a register that came from a posted sales invoice.",
      ],
      check: "The journal register is reversed by a new register with the opposite amounts, and it cannot be reversed twice. The sales invoice register is refused. Posted invoices are reversed with Correct, Cancel, or a credit memo.",
    },
    {
      open: "Bank Account Reconciliations",
      steps: [
        "Create a reconciliation for your bank. Set the statement date and the statement ending balance to the balance you can already explain, so the difference can reach zero.",
        "Run Suggest Lines. Mark the ledger entries that appear on the statement.",
        "Post when the difference is zero. Open the bank card and the bank ledger.",
      ],
      check: "The reconciliation posts, and the statement number on the bank advances. A nonzero difference will not post until you account for it. Payment Reconciliation Journals are the other tool: they import a bank file and apply payments. This page is the statement you match by hand.",
    },
    {
      open: "Recurring General Journals",
      steps: [
        "Use a line with Recurring Method F Fixed, a frequency of 1M, a posting date, and a balanced account.",
        "Post it once.",
        "Look at the same line. The posting date has moved forward by a month, and the line is still there. Open G/L Registers and find the posting you just made.",
      ],
      check: "One posting happened, and the line remains for the next period. A normal general journal would have deleted the line. Methods that start with R, such as RF Reversing Fixed, also post an automatic reversal the next day. F Fixed does not.",
    },
    {
      open: "Recurring General Journals",
      steps: [
        "On a recurring line, open Allocations. Split 100 percent across two dimension values, 60 and 40.",
        "Post the line.",
        "Open the G/L entries for that document and look at the dimension on each line.",
      ],
      check: "The posted amount is split 60/40. You did not get one entry with a blank dimension. If the shares do not add to 100 percent, fix the allocation before you trust the posting. Setting a default dimension on the account is a different mechanism.",
    },
    {
      open: "Adjust Exchange Rates",
      steps: [
        "Add a newer currency exchange rate than the one used on an open foreign-currency customer or vendor invoice.",
        "Run Adjust Exchange Rates for that currency and a posting date that picks up the new rate. Post the journal it creates if the batch does not post by itself.",
        "Open Detailed Customer Ledger Entries or Detailed Vendor Ledger Entries and the G/L entries.",
      ],
      check: "An unrealized gain or loss hits the receivable or payable, and the open invoice's foreign amount is unchanged. This batch adjusts customers, vendors, and bank accounts. It is not the tool that revalues a bare G/L account balance. That is G/L Currency Revaluation.",
    },
    {
      open: "Dimension Corrections",
      steps: [
        "Post a general journal with a shortcut dimension filled in. Note the amount.",
        "Open Dimension Corrections, or choose Correct Dimensions on the G/L register. Select that entry. On Dimension Correction Changes, set the new dimension value.",
        "Run Validate Dimension Changes. If the status is clean, choose Run and let it finish. Open the G/L entry again.",
      ],
      check: "The amount is unchanged and the dimension value is the new one. Validation fails if the new value breaks a blocked combination or a value-posting rule. This is not Reverse Transaction, and it does not create a credit memo. History of the correction stays on the dimension correction.",
    },
    {
      open: "Chart of Accounts",
      steps: [
        "On a balance-sheet G/L account, open the Revaluation FastTab. Set Source Currency Revaluation to Yes. Set Source Currency Posting if you want to limit which currencies can post there.",
        "Post a foreign-currency amount to that account from a general journal. Then add a later exchange rate.",
        "On the Chart of Accounts, run G/L Currency Revaluation for that account and post the journal it creates.",
      ],
      check: "The account's local-currency balance moved and the source-currency amount did not. Adjust Exchange Rates would not have touched this account, because that batch revalues customers, vendors, and banks. An account with Source Currency Revaluation left off is skipped.",
    },
  ],
  "fa-tx": [
    {
      open: "Fixed Asset G/L Journals",
      steps: [
        "Use a depreciation book that is integrated to the G/L. On a line, set the FA number, FA Posting Type Acquisition Cost, the amount, and a balancing bank or clearing account.",
        "Post. Open FA Ledger Entries and the G/L entries.",
        "The payables path is a purchase invoice line with the same FA number. Use that when a vendor bills you. The journal is the direct acquisition.",
      ],
      check: "FA Ledger Entries shows Acquisition Cost, and the acquisition cost account from the FA posting group moved in the G/L. If the book is not integrated, you get the FA entry and no G/L entry. A main asset does not automatically acquire its components. Post each asset.",
    },
    {
      open: "Calculate Depreciation",
      steps: [
        "Run Calculate Depreciation for the book and a depreciation date that includes the asset you acquired. Let it insert lines into the Fixed Asset G/L Journal.",
        "Open that journal, confirm the FA posting type is Depreciation, and post.",
        "Open the asset's FA Ledger Entries and book value.",
      ],
      check: "Book value dropped by the depreciation amount. The G/L shows depreciation expense and accumulated depreciation from the FA posting group. Calculate Depreciation does not post by itself. An asset with no acquisition, or a date before the depreciation starting date, produces no line.",
    },
    {
      open: "Fixed Asset G/L Journals",
      steps: [
        "On a line for the same asset, set FA Posting Type to Disposal. Enter the disposal proceeds if you sold it, and a balancing account for the cash or receivable.",
        "Post. Open FA Ledger Entries and the book value.",
        "Open the G/L entries and find the gain or loss account from the FA posting group.",
      ],
      check: "The asset's book value is zero after a full disposal, and the gain or loss is in the G/L. Leaving the asset at its remaining book value after you have sold it is the mistake. Disposal is not depreciation, and it is not a sales credit memo unless you are invoicing a customer for the proceeds.",
    },
  ],
  "inv-tx": [
    {
      open: "Item Journals",
      steps: [
        "Enter a line with Entry Type Positive Adjmt. or Purchase, an item, a quantity, a unit cost, and a location that does not require a warehouse receipt.",
        "Post. Open Item Ledger Entries and Value Entries.",
        "If automatic cost posting is on, also find the inventory G/L entry.",
      ],
      check: "On-hand quantity went up without a purchase order or a vendor. A purchase order receipt is the purchasing path and creates a posted purchase receipt. This journal does not. A location that requires warehouse receipt will block the simple journal line.",
    },
    {
      open: "Item Journals",
      steps: [
        "Enter Entry Type Negative Adjmt. or Sale for an item you have on hand. Use a quantity you actually have at that location.",
        "Post. Open Item Ledger Entries.",
        "Confirm the remaining quantity on the item for that location.",
      ],
      check: "Quantity went down and there is no customer and no posted sales shipment. A sales order ship is the sales path. Use the journal when you are issuing stock without a sales document. You cannot issue more than the location has unless the item is set to allow it.",
    },
    {
      open: "Transfer Orders",
      steps: [
        "Create a transfer order from one simple location to the other. Both locations should have inventory posting setup and neither should require warehouse documents.",
        "Post the shipment. If Direct Transfer is off, then post the receipt. If Direct Transfer is on, one post moves the item.",
        "Open Item Ledger Entries at both locations.",
      ],
      check: "Quantity left the From location and arrived at the To location. A transfer order is the document for that move. The item reclassification journal can also change location, but it does not create a transfer order. Use the order when the move is an operation you want to ship and receive.",
    },
    {
      open: "Revaluation Journals",
      steps: [
        "Run Calculate Inventory Value for one item, or enter the item and a new unit cost (revalued).",
        "Post. Open Value Entries and confirm a Revaluation entry. Quantity on the item ledger did not change.",
        "Know the other batch: Adjust Cost - Item Entries pushes remaining cost to the G/L when automatic cost adjustment has not already done it. It does not type a new unit cost. The revaluation journal does.",
      ],
      check: "Remaining value changed and quantity did not. A positive adjustment would have changed quantity. Adjust Cost - Item Entries is the batch that clears rounding and expected cost. It is not how you decide a new cost.",
    },
    {
      open: "Phys. Inventory Journals",
      steps: [
        "Run Calculate Inventory for one location. The journal fills with the quantity Business Central thinks is there.",
        "For one item, set the physical quantity to a different number. Leave the other lines equal to the calculated quantity.",
        "Post. Open Item Ledger Entries for the item you changed.",
      ],
      check: "Only the difference posted, as a positive or negative adjustment. Lines where the physical quantity matched did not post. This is a count, not a revaluation. Costs stay as they are unless you also revalue.",
    },
    {
      open: "Item Reclassification Journals",
      steps: [
        "Enter an item, the current location, and a new location. Or keep the location and change a dimension or a lot.",
        "Post.",
        "Open Item Ledger Entries and read the entry type.",
      ],
      check: "The entries are transfers, and there is no transfer order document. Use this journal to correct where stock sits, or its dimension or lot. Use a transfer order when you are shipping between locations as a process. A physical inventory journal is the tool when the quantity itself is wrong.",
    },
  ],
};
