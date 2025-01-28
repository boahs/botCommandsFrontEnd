// // netlify/functions/getScores.js

// // (A) We can load .env for local dev, but Netlify will supply vars at runtime
// require("dotenv").config(); 

// const { google } = require("googleapis");

// exports.handler = async function (event, context) {
//   try {
//     // (B) AUTHENTICATE with Google using Service Account or API key
//     // If you are using a Service Account, you'll do something like:
//     const auth = new google.auth.JWT(
//       process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
//       null,
//       // Replace escaped \n with actual line breaks if needed:
//       process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
//       ["https://www.googleapis.com/auth/spreadsheets.readonly"]
//     );

//     // (C) Create sheets client
//     const sheets = google.sheets({ version: "v4", auth });

//     // (D) The spreadsheet ID and range you want
//     // or store it in environment variable: process.env.GOOGLE_SHEETS_SPREADSHEET_ID
//     const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
//     const range = "Scoreboard!A1:B10"; 
//     // For example, if your scoreboard is in A1:B10

//     // (E) Fetch data
//     const response = await sheets.spreadsheets.values.get({
//       spreadsheetId,
//       range,
//     });

//     // The response will have .data.values with row data
//     // Let's transform that into a simple JSON structure
//     let rows = response.data.values || [];
//     // Example: each row [playerName, score]

//     // (F) Turn the rows into something you can map over in React
//     let scoreboard = rows.map((row) => {
//       return {
//         player: row[0],
//         score: row[1],
//       };
//     });

//     // (G) Return the data as JSON
//     return {
//       statusCode: 200,
//       body: JSON.stringify(scoreboard),
//     };
//   } catch (error) {
//     console.error("Error fetching scoreboard:", error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({
//         error: "Failed to fetch scoreboard data: " + error.toString(),
//       }),
//     };
//   }
// };
