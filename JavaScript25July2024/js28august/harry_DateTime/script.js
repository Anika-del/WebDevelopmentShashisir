console.log("this is a date time tutorial ");

let now = new Date();
console.log(now); //gives me current date and time

let dt = new Date(1000);
console.log(dt); //gives me 

let date = new Date("2024-08-28");
console.log(date); //gives me current date and time

// let newDate = new Date(year, month, date,hourse, minutes, second, milliseconds);
let newDate = new Date(3020, 4, 6, 9, 3, 2, 34);
console.log(newDate); //gives me current date and time

// methods of date----------------------------------------
let yr = newDate.getYear();
console.log("the year is", yr);

let mont = newDate.getMonth();
console.log("the month is", mont);

let fullyr = newDate.getFullYear();
console.log("the full year is", fullyr);

let utcm = newDate.getUTCMonth();
console.log("the UTC MONTHS is", utcm);

let hr = newDate.getHours();
console.log("the hourse is", hr);
