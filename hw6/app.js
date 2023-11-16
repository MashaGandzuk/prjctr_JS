"use strict";

// 1

function addThemAll(...args) {
  return args.reduce((a, b) => a + b, 0);
}

console.log(addThemAll(2, 4)); // 6
console.log(addThemAll(1, 2, 3, 4)); // 10
console.log(addThemAll(5, 5, 10)); // 20

// 2

function multiply(a) {
  return function (b) {
    return a * b;
  };
}

console.log(multiply(5)(5)); // 25
console.log(multiply(2)(-2)); // -4
console.log(multiply(4)(3)); // 12

// 3

const movies = [
  {
    movieName: "The Thing",
    releaseYear: 1982,
    directedBy: "Carpenter",
    runningTimeInMinutes: 109,
  },
  {
    movieName: "Aliens",
    releaseYear: 1986,
    directedBy: "Cameron",
    runningTimeInMinutes: 137,
  },
  {
    movieName: "Men in Black",
    releaseYear: 1997,
    directedBy: "Sonnenfeld",
    runningTimeInMinutes: 98,
  },
  {
    movieName: "Predator",
    releaseYear: 1987,
    directedBy: "McTiernan",
    runningTimeInMinutes: 107,
  },
];

console.log(movies.sort(byProperty("releaseYear", ">")).slice());
// виведе масив фільмів посортованих по року випуску, від старішого до новішого
console.log(movies.sort(byProperty("runningTimeInMinutes", "<")).slice());
// виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого
console.log(movies.sort(byProperty("movieName", ">")).slice());
// виведе масив фільмів посортованих по назві, в алфавітному порядку

function byProperty(property, direction) {
  const isAsc = direction === ">";

  return function (a, b) {
    if (a[property] > b[property]) {
      return isAsc ? 1 : -1;
    }
    if (a[property] < b[property]) {
      return isAsc ? -1 : 1;
    }
    return 0;
  };
}

// 4

const userNames = [
  "Петро",
  "Емма",
  "Петро",
  "Емма",
  "Марта",
  "Яна",
  "Василь",
  "Антон",
  "Олена",
  "Емма",
];

function filterUnique(array) {
  return [...new Set(array)];
}

console.log(filterUnique(userNames)); // ['Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
