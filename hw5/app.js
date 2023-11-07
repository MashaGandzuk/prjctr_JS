"use strict";

//1

function durationBetweenDates(
  dateString1 = "31 Jan 2022",
  dateString2 = "02 Feb 2022",
  format = "days"
) {
  const date1 = Date.parse(dateString1);
  const date2 = Date.parse(dateString2);
  const diffTime = Math.abs(date1 - date2);

  switch (format) {
    case "seconds":
      return `${Math.floor(diffTime / 1000)} ${format}`;
    case "minutes":
      return `${Math.floor(diffTime / (1000 * 60))} ${format}`;
    case "hours":
      return `${Math.floor(diffTime / (1000 * 60 * 60))} ${format}`;
    case "days":
      return `${Math.floor(diffTime / (1000 * 60 * 60 * 24))} ${format}`;
    default:
      return "unknown format";
  }
}

console.log("Default params: " + durationBetweenDates());
console.log(
  "02 Aug 1985 / 03 Aug 1985: " +
    durationBetweenDates("02 Aug 1985", "03 Aug 1985", "seconds")
);
console.log(
  "31 Jan 2022 / 01 Feb 2022: " +
    durationBetweenDates("31 Jan 2022", "01 Feb 2022", "minutes")
);
console.log(
  "02 Aug 1985 / 01 Aug 1985: " +
    durationBetweenDates("02 Aug 1985", "03 Aug 1985", "hours")
);
console.log(
  "31 Jan 2022 / 03 Feb 2021: " +
    durationBetweenDates("31 Jan 2022", "03 Feb 2021", "days")
);

//2

const priceData = {
  Apples: "23.4",
  BANANAS: "48",
  oRAngGEs: "48.7584",
};

function optimizer(data) {
  const entries = Object.entries(data);

  return Object.fromEntries(
    entries.map(([key, value]) => {
      return [key.toLowerCase(), Number(value).toFixed(2)];
    })
  );
}

let updatedPriceData = optimizer(priceData);

console.log(updatedPriceData); // {apples: '23.40', bananas: '48.00', oranges: '48.76'}
