/**
 * Smart Way Solutions — Google Sheets Lead Capture
 *
 * HOW TO SET UP (one-time, takes 5 minutes):
 *
 * 1. Go to https://sheets.google.com and create a new spreadsheet.
 *    Name it: "Smart Way Solutions — Leads"
 *
 * 2. In the spreadsheet, go to Extensions → Apps Script
 *
 * 3. Delete the default code and paste ALL of this file into the editor.
 *
 * 4. Click Save (Ctrl+S), then click Deploy → New Deployment
 *    - Type: Web App
 *    - Execute as: Me
 *    - Who has access: Anyone
 *    Click Deploy. Copy the Web App URL shown.
 *
 * 5. Paste the Web App URL into your Vercel environment variables:
 *    GOOGLE_SHEETS_WEBHOOK_URL = <paste URL here>
 *
 * That's it. Every enquiry form submission will now appear as a new row.
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Add headers on first run
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Submitted At",
        "Full Name",
        "Phone",
        "Email",
        "City / District",
        "Loan Type",
        "Loan Amount",
        "Employment Type",
        "Monthly Income",
        "Additional Details",
      ]);

      // Style header row
      var headerRange = sheet.getRange(1, 1, 1, 10);
      headerRange.setBackground("#1a1a1a");
      headerRange.setFontColor("#F5A623");
      headerRange.setFontWeight("bold");
      sheet.setFrozenRows(1);

      // Set column widths
      sheet.setColumnWidth(1, 160);  // Submitted At
      sheet.setColumnWidth(2, 160);  // Full Name
      sheet.setColumnWidth(3, 140);  // Phone
      sheet.setColumnWidth(4, 200);  // Email
      sheet.setColumnWidth(5, 140);  // City
      sheet.setColumnWidth(6, 220);  // Loan Type
      sheet.setColumnWidth(7, 140);  // Loan Amount
      sheet.setColumnWidth(8, 200);  // Employment Type
      sheet.setColumnWidth(9, 160);  // Monthly Income
      sheet.setColumnWidth(10, 260); // Additional Details
    }

    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.submittedAt || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      data.fullName || "",
      data.phone || "",
      data.email || "",
      data.city || "",
      data.loanType || "",
      data.loanAmount || "",
      data.employmentType || "",
      data.monthlyIncome || "",
      data.message || "",
    ]);

    // Highlight new row in light amber
    var lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 1, 1, 10).setBackground("#FFF8EC");

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function — run this manually from Apps Script to verify setup
function testSetup() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  Logger.log("Sheet name: " + sheet.getName());
  Logger.log("Last row: " + sheet.getLastRow());
  Logger.log("Setup looks good!");
}
