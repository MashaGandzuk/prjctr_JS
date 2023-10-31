"use strict";

//1

const userNames = [
  "Петрик Ольга Іванівна",
  "Гнатюк Петро Антонович",
  "Рудко Андрій Опанасович",
];

const initials = userNames.map((user) => {
  return user
    .split(" ")
    .map((a) => `${a[0]}.`)
    .join("");
});
initials.sort();

console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]

// 2

const userNames2 = [
  "Петро",
  "Емма",
  "Юстин",
  "Ілля",
  "Марта",
  "Яна",
  "Василь",
  "Антон",
  "Олена",
];

const vowels = ["А", "Е", "Є", "И", "І", "Ї", "О", "У", "Ю", "Я"];

// 2.1

let conditionallyFilteredNames = [];
userNames2.forEach((name) => {
  if (vowels.includes(name[0])) {
    conditionallyFilteredNames.push(name);
  }
});

// 2.2

console.log(conditionallyFilteredNames);

let filteredNames = userNames2.filter((letter) => {
  return vowels.includes(letter[0]);
});

console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']

// 3

const currentMaxValue = 4589;
let reverseMaxValue = +currentMaxValue.toString().split("").reverse().join("");

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'

// 4

const resultsArray = [1, 2, [3, [4]]];
let newResultArray = resultsArray.flat(Infinity);
let productOfArray = newResultArray.reduce((accumulator, item) => {
  return accumulator * item;
});

console.log(productOfArray); // 24
