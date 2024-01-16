"use strict";

class Human {
  #religion;
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  intro = () =>
    console.log(
      `My name is ${this.name}. I am ${this.age} years old. I am ${this.gender}.`
    );

  findWhatIsHisReligion = (value) => {
    this.#religion(value);
  };
}

class Student extends Human {
  #exams;
  constructor(name, age, gender, hobby, specialisation, friend) {
    super(name, age, gender);
    this.type = "Student";
    this.hobby = hobby;
    this.specialisation = specialisation;
    this.friend = friend;
  }
  study = () => {
    console.log(`I am a ${this.type}. I am styding ${this.specialisation}.`);
  };
  haveFun = () => {
    console.log(`I like ${this.hobby}.`);
  };
  haveFriend = () => {
    console.log(`I have friend, his name is ${this.friend}.`);
  };
  passedExams = () => {
    this.#exams;
  };
}

const Peter = new Student("Peter", "24", "Male", "Skydiving", "Economy", "Bob");
Peter.intro();
Peter.study();
Peter.haveFun();
Peter.haveFriend();

class Artist extends Human {
  #galery;
  constructor(name, age, gender, style, exhibition, amoutOfWorks) {
    super(name, age, gender);
    this.type = "Artist";
    this.style = style;
    this.exhibition = exhibition;
    this.amoutOfWorks = amoutOfWorks;
  }
  artistStyle = () => {
    console.log(`I am a ${this.type}, I create ${this.style}.`);
  };
  artistAmoutOfWorks = () => {
    console.log(`I created ${this.amoutOfWorks} works this year.`);
  };
  amoutOfExhibitions = () => {
    console.log(`I had ${this.exhibition} exhibitions this year.`);
  };
  exhibitionGalery = () => {
    this.#galery;
  };
}

const Paul = new Artist("Paul", "25", "Male", "Paintings", "10", "3");
Paul.intro();
Paul.artistStyle();
Paul.artistAmoutOfWorks();
Paul.amoutOfExhibitions();

class Professional extends Human {
  #salary;
  constructor(name, age, gender, degree, major) {
    super(name, age, gender);
    this.degree = degree;
    this.major = major;
  }
  degreeIntro = () => {
    console.log(`I have ${this.degree} degree.`);
  };
  majorIntro = () => {
    console.log(`My major is ${this.major}.`);
  };
  yearlySalary = () => {
    this.#salary;
  };
}

class Worker extends Professional {
  #adress;
  constructor(name, age, gender, degree, major, responsibilities, company) {
    super(name, age, gender, degree, major);
    this.type = "Worker";
    this.responsibilities = responsibilities;
    this.company = company;
  }

  companyIntro() {
    `I am a ${this.type} for ${this.company}.`;
  }

  workResponsibilities = () => {
    `I am responsible for ${this.responsibilities}.`;
  };
  personalAdress = () => {
    this.#adress;
  };
}

const Helena = new Worker(
  "Helena",
  "32",
  "Female",
  "Masters",
  "Data Science",
  "Human Resources",
  "Sony Corporation"
);
Helena.intro();
Helena.degreeIntro();
Helena.majorIntro();

class Manager extends Professional {
  #dream;
  constructor(name, age, gender, degree, major, iq, levelOfSeniority) {
    super(name, age, gender, degree, major);
    this.type = "Manager";
    this.iq = iq;
    this.levelOfSeniority = levelOfSeniority;
  }
  iqTest = () => {
    console.log(`My iq test result is ${this.iq}.`);
  };
  levelOfSeniorityIntro = () => {
    console.log(
      `My seniority level in the company is ${this.levelOfSeniority}.`
    );
  };
  secretDream = () => {
    this.#dream;
  };
}

const Alan = new Manager("Alan", "40", "Male", "PhD", "Low", "98", "CTO");
Alan.intro();
Alan.degreeIntro();
Alan.iqTest();
Alan.levelOfSeniorityIntro();
