# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.












Google Apps Script Setup Instructions
To Connect Google Sheets:
Open your Google Sheet: https://docs.google.com/spreadsheets/d/1YNdY4UHY4YilU2CTukFygbEgbLp0UKfU4mYi4MQoz58

Go to Extensions → Apps Script

Paste this code:

javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      new Date(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.projectType || '',
      data.budget || '',
      data.message || '',
      data.userLocation || '',
      data.timestamp || ''
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput('Service is running')
    .setMimeType(ContentService.MimeType.TEXT);
}
Deploy as Web App: Click "Deploy" → "New Deployment" → Select "Web App" → Set "Execute as" to "Me" and "Who has access" to "Anyone" → Deploy

Copy the Web App URL and replace YOUR_SCRIPT_ID in the service file



Update Service with Your Script URL
src/services/googleSheetsService.js
Replace the URL with your deployed Apps Script URL:

javascript
const SHEETS_API_URL = 'https://script.google.com/macros/s/YOUR_ACTUAL_SCRIPT_ID/exec';
✅ Features Added:
Feature	Description
Google Sheets Integration	All form submissions saved to your spreadsheet
User Location Detection	IP-based location detection
3D Globe Visualization	Animated globe showing location
8 Social Media Icons	GitHub, LinkedIn, Twitter, Instagram, YouTube, TikTok, WhatsApp, Telegram
Floating Share Bubble	Sidebar with share options
Share Options	Twitter, LinkedIn, Facebook, WhatsApp, Telegram, Reddit, Copy Link
Contact Form	Name, Email, Phone, Project Type, Budget, Message
Quick Contact Cards	WhatsApp, Email, Calendar, Response Time
Mobile Responsive	Fully responsive design
Animated Popups	Smooth animations for share menu