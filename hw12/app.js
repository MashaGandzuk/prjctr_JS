// 1

console.log("start"); // Виконується першою за ланцюжком викликів

const promise1 = new Promise((resolve, reject) => {
  console.log(1); // Функція-виконавець виконується ще до того як Promise constructor поверне сворений об'єкт

  resolve(2); // Видасть результат 2. Коли функція-виконавець успішно завершить свою роботу
  // викликається resolve з результатом value.
});

// Функція споживач .then - викликається коли promise1 успішно виконався і отримує результат 2
promise1.then((res) => {
  console.log(res);
});

// Promise1 спеціальний об'єкт JavaScript, який використовується для написання та обробки асинхронного коду.
// Поки він чекає виконання, виконуєтся console.log("end");

console.log("end");

// Результат виконання
// start
// 1
// end
// 2

// 2

Promise.resolve(1) // Promise constructor отримує resolve результат 1
  .then((x) => x + 1) // в .then потрапляє value 1 (x) і додається 1 (x+1)
  .then((x) => {
    throw new Error("My Error"); // throw new Error кидає помилку на значення x
  })
  .catch(() => 1) // .catch ловить помилку з throw new Error i повертає 1
  .then((x) => x + 1) // до х додається 1
  .then((x) => console.log(x)) // консоль повертає (x+1) x = 2
  .catch(console.error); // помилки немає, не було throw new Error і .catch не зловив її, якби вона була

// Результат виконання
// 2

// 3

const promise = new Promise((res) => res(2)); // Promise функція-виконавець віддає результат 2
promise
  .then((v) => {
    // .then отпримує 2 і виконує операцію v * 2
    console.log(v);
    return v * 2;
  })
  .then((v) => {
    // .then отпримує 4 і виконує операцію v * 2
    console.log(v);
    return v * 2;
  })
  .finally((v) => {
    // Обробник finally не приймає аргументів.
    // finally не призначено для обробки результату промісу.
    // це місце для загального очищення, незалежно від результату.
    console.log(v);
    return v * 2;
  })
  .then((v) => {
    // Результат який повертає promise, передається через finally наступному then. .then отримує 8
    console.log(v);
  });

// Результат виконання
// 2
// 4
// undefined
// 8
