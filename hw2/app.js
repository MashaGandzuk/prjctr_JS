"use strict";

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("ЛолКек");
  } else if (i % 3 === 0) {
    console.log("Лол");
  } else if (i % 5 === 0) {
    console.log("Кек");
  } else console.log(i);
}

const value1 = +prompt("Введіть число", "");

if (isNaN(value1) || typeof value1 !== "number") {
  console.log("Таке чуство шо Бог десь наказує нас за шось");
} else {
  for (let j = 1; j < value1; j++) {
    if (j % 2 === 0) {
      console.log(j);
    }
  }
}

const value2 = 10;
let n = 1;
if (typeof value2 !== "number") {
  console.log("Таке чуство шо Бог десь наказує нас за шось");
} else {
  while (n < value2) {
    if (n % 2 === 0) {
      console.log(n);
    }
    n++;
  }
}
