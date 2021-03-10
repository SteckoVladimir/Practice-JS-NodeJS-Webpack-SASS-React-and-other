// function createCalcFunction(n) {
//  return function () {
//   console.log(1000 * n)
//  }
// }

// const calc = createCalcFunction(42)
// calc()

// function createIncrementor(n) {
//  return function (num) {
//   return n + num;
//  }
// }

// const addOne = createIncrementor(1);
// const addTen = createIncrementor(10);

// console.log(addOne(10))
// console.log(addOne(42));

// console.log(addTen(10));
// console.log(addTen(42));

function urlGenerator(domain) {
 return function (url) {
  return `https://${url}.${domain}`
 }
}

const comUrl = urlGenerator(`com`);
const ruUrl = urlGenerator(`ru`);
const netUrl = urlGenerator(`net`);

console.log(comUrl(`google`));
console.log(ruUrl(`rambler`));
console.log(netUrl(`warcraft`));

// ==========================================



function logPerson() {
 console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = {name: 'Alexander', age: 25, job: 'Frontend'}
const person2 = {name: "Elena", age: 23, job: "SMM"}

function bind(context, fn) {
  return function (...args) {
    fn.apply(context, args);
  };
}

bind(person1, logPerson)()
bind(person2, logPerson)()

