const people = [
  { name: "Vladimir", age: 35, budget: 70000 },
  { name: "Nataliya", age: 30, budget: 50000 },
  { name: "Alexander", age: 3, budget: 5000 },
  { name: "Alina", age: 34, budget: 15000 },
  { name: "Vladislav", age: 14, budget: 14000 },
];

// for (let i = 0; i < people.length; i++) {
//  console.log(people[i]);
// }

// for (let person of people) {
//  console.log(person);
// }

// forEach
// people.forEach(function (person, index, pArr) {
//  console.log(person);
//  console.log(index);
//  console.log(pArr);
// })   //сокращаем...:

// people.forEach(person => console.log(person))


// Map
// const newPeople = people.map(person => {
//  return `${person.name} (${person.age})`
//  //person.name;   //  мы можем изменять обьеты people или что-то изм записываю в новую переменную
// })
// console.log(newPeople)


// Filter
// const adults = [];
// for (let i = 0; i < people.length; i++) {
//  if (people[i].age >= 18) adults.push(people[i]);
// }
// console.log(adults)

// const adults = people.filter(person => person.age >= 18);
// console.log(adults);


// Reduce
// let amount = 0
// for (let i = 0; i < people.length; i++) {
//  amount += people[i].budget;
//  }
// console.log(amount)

// let amount = people.reduce((total, person) => total + person.budget, 0)
// console.log(amount);

// Find
const vladimir = people.find(person => person.name === 'Vladimir');
console.log(vladimir);


// FindIndex
const vladimirIndex = people.findIndex((person) => person.name === "Vladimir");
console.log(vladimirIndex);


//===================  example

const newPeople = people
 .filter(person => person.budget > 10000)
 .map(person => {
  return {
   info: `${person.name} (${person.age})`,
   budget: person.budget,
  }
 })
console.log(newPeople)

const newPeopleAmount = people
 .filter((person) => person.budget > 10000)
 .map((person) => {
    return {
      info: `${person.name} (${person.age})`,
      budget: person.budget,
    };
 })
 .reduce((total, person) => total + person.budget, 0)  // +++
console.log(newPeopleAmount);
 
