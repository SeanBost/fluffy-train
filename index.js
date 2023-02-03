// sean bost Feb 2023

// quotes declared here for reference
const quote1 = "If you're going through hell, keep going";
const quote2 = "Alone we can do so little; together we can do so much";
const quote3 = "Not every day is good but there's something good in every day";

// makes random number, roughly rounds it to 1 2 or 3, then logs quote
var randNumber = Math.random();
if (randNumber < 0.3333) {
    console.log(quote1);
}
else if (randNumber > 0.6667) {
    console.log(quote3);
}
else {
    console.log(quote2);
}