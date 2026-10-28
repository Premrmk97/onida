// print today's date in dd-mm-yyyy format


let today: Date = new Date();

console.log(today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear());

console.log("=======================");

let today1: Date = new Date();

// Automatically handles human-readable formatting and localized month names
let formattedDate = new Intl.DateTimeFormat('en-GB', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric'
}).format(today);

console.log(formattedDate); // Outputs e.g., "27-10-2026"