const citiesRussia = ["Moscow", "St Petersburg", "Kazan", "Novosibirsk"];
const citiesUerope = ["Berlin", "Praga", "Parish"];

const citiesRussiaWithPopulation = {
  Moscow: 20,
  StPetersburg: 8,
  Kazan: 5,
  Novosibirsk: 3
};

const citiesUeropeWithPopulation = {
  Moscow: 26,
  Berlin: 18,
  Praga: 12,
  Parish: 6,
};

// Spread

// console.log(...citiesRussia)

// const allCities = [...citiesRussia, 'Washinkton', ...citiesUerope];
// const newAllCities = citiesUerope.concat(citiesRussia);

// console.log(newAllCities);

// console.log({ ...citiesRussiaWithPopulation })  //  !!!!!!
// console.log({ ...citiesRussiaWithPopulation, ...citiesUeropeWithPopulation }); 


// ====   Practice   =====

// const numbers = [5, 37, 42, 17];
// console.log(Math.max(5, 37, 42, 17));
// console.log(Math.max(...numbers));

// Old scool:
// console.log(Math.max.apply(null, numbers));

// const divs = document.querySelectorAll('div')
// console.log(divs.map())  - error becouse  divs not a array 

// const nodes = [...divs]
// console.log(nodes, Array.isArray(nodes))
// console.log(divs, Array.isArray(divs))

// ====   Rest   ====

function sum(a, b, ...rest) {
 return a + b + rest.reduce((a, i) => a + i, 0);
}
const numbers = [5, 37, 42, 17, 25];

// console.log(sum(...numbers)); // !!! Spred

// const a = numbers[0];
// const b = numbers[1];

// const [a, b, ...other] = numbers;
// console.log(a, b, other);


const person = {
 name: 'Vladimir',
 age: 35,
 city: 'Dnepr',
 country: 'Ukraine'
}

const { name, age, ...address } = person;
console.log(name, age, address)