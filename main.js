console.log(arrowTitle);
/* START CODE UNDER THIS LINE */

const fun = function (x, y) {
  if (x > y) {
    console.log(x);
  }

  return 4;
};

// Alt + Shift + F

//Q2

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 24,
};

person.age = 23;

person.work = { positon: "eng", salary: 54 };

const employees = [
  {
    id: 1,
    name: {
      first: "John",
      last: "Doe",
    },
    position: "Designer",
  },
  {
    id: 2,
    name: {
      first: "Jane",
      last: "Doe",
    },
    position: "Engineer",
  },
];

employees[0].name.first;

//Q3
const createUser = function (firstName, lastName) {
  return { firstName: firstName, lastName: lastName };
};

//Q4
const createCar = function (brand, name, color) {
  return { brand: brand, name: name, color: color };
};

//Q5

const getFullName = function (person) {
  return Object.values(person).join(" ");
};

//Q6
const olderThan = function (personOne, personTwo) {
  if (personOne["age"] > personTwo["age"]) {
    return personOne.name + " is older than " + personTwo.name;
  } else {
    return personTwo.name + " is older than " + personOne.name;
  }
};
//Q7

const isPropertyOf = function (string, object) {
  return object.hasOwnProperty(string);
};

//Q8
const numberOfKeys = function (object) {
  const c = Object.keys(object);

  return c.length;
};

//Q9
const valuesToString = function (object) {
  const g = Object.values(object);

  return g.join(" ");
};
