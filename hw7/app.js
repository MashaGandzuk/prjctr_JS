"use strict";

// 1

let intervalID;
let intervalDelay;

function detonatorTimerInterval(delay) {
  intervalDelay = delay;
  intervalID = setInterval(function () {
    if (intervalDelay > 0) {
      console.log(intervalDelay);
      intervalDelay--;
    } else if (intervalDelay === 0) {
      console.log("BOOM!");
      clearInterval(intervalID);
    }
  }, 1000);
}

detonatorTimerInterval(5);

// 2

function detonatorTimer(delay) {
  if (delay > 0) {
    console.log(delay);
    delay--;
    setTimeout(detonatorTimer, 1000, delay);
  } else if (delay === 0) {
    console.log("BOOM!");
  }
}

detonatorTimer(3);

// 3

let me = {
  name: "Maria",
  homeTown: "Kyiv",
  residency: "Ivano-Frankivsk",
  gender: "female",
  age: 33,
  hobby: "",
  previousCompany: "Omilia",
  currentCompany: "Omniscopy",
  previousOccupation: "marketing specialist",
  currentOccupation: "frontend developer",
  changedOccupationDate: "23 Jul 2022",

  introduce() {
    console.log(`My name is ${this.name}. I am ${this.age} yers old.`);
  },
  describeResidency() {
    console.log(`I moved from ${this.homeTown} to ${this.residency}.`);
  },
  describeOccupation() {
    const timeWorkingForCurrentCompany = Math.round(
      (Date.now() - Date.parse(this.changedOccupationDate)) /
        (24 * 60 * 60 * 1000)
    );
    console.log(
      `I was working as a ${this.previousOccupation} at ${this.previousCompany}. I changed my occupation ${timeWorkingForCurrentCompany} days ago. Now I am a ${this.currentOccupation} at ${this.currentCompany}`
    );
  },
};

me.introduce();
me.describeResidency();
me.describeOccupation();

// 4

let securedSelfIntroduce = me.introduce.bind(me);
let securedDescribeResidency = me.describeResidency.bind(me);
let securedDescribeOccupation = me.describeOccupation.bind(me);

setTimeout(securedSelfIntroduce, 1000);
setTimeout(securedDescribeResidency, 2000);
setTimeout(securedDescribeOccupation, 3000);

// 5

function someFunction(name) {
  console.log(`Hello ${name}`);
}

function slower(func, delay) {
  return function (name) {
    console.log(
      `Chill out, you will get you result in ${delay / 1000} seconds`
    );
    setTimeout(function () {
      func(name);
    }, delay);
  };
}

let slowedSomeFunction = slower(someFunction, 3000);

slowedSomeFunction("Maria");
