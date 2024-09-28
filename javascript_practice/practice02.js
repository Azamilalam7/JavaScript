const now = new Date();
console.log(now); // Outputs the current date and time

const specificDate = new Date('2024-09-11T16:53:43');
console.log(specificDate); // Outputs the specified date and time

const dateComponents = new Date(2024, 8, 11, 16, 53, 43); // Note: Months are 0-indexed (0 = January, 11 = December)
console.log(dateComponents); // Outputs the specified date and time

const epochDate = new Date(0); // January 1, 1970
console.log(epochDate);

const date = new Date();
console.log(date.getFullYear()); // Gets the year (e.g., 2024)
console.log(date.getMonth()); // Gets the month (0-11)
console.log(date.getDate()); // Gets the day of the month (1-31)
console.log(date.getHours()); // Gets the hours (0-23)
console.log(date.getMinutes()); // Gets the minutes (0-59)
console.log(date.getSeconds()); // Gets the seconds (0-59)
console.log(date.getMilliseconds()); // Gets the milliseconds (0-999)

const date1 = new Date();
date.setFullYear(2025);
date.setMonth(0); // January
date.setDate(15);
date.setHours(10);
date.setMinutes(30);
date.setSeconds(45);
console.log(date); // Outputs the updated date and time

// toLocaleDateString()

const date2 = new Date();
console.log(date.toLocaleDateString()); // Outputs date in local format

//toLocaleTimeString()

const date3 = new Date();
console.log(date.toLocaleTimeString()); // Outputs time in local format


function displayCurrentDateTime() {
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    console.log(`Current Date: ${formattedDate}`);
    console.log(`Current Time: ${formattedTime}`);
  }
  
  displayCurrentDateTime();
  