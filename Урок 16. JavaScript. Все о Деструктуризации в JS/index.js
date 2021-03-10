function calcValues(a, b) {
 return [
  a + b,
  a - b, //undefined,
  a * b,
  a / b,
 ]
}
// const result = calcValues(27, 14)
const [sum, sub = 'вычитание - subtraction', mult, ...rest] = calcValues(27, 14);


// const sum = result[0]
// const sub = result[1]
// const [sum, sub] = result 

// console.log(sum, mult, rest, sub)

//  ====   Objects   =====

const person = {
 name: 'Vladimir',
 age: 35,
 job: 'Fronend',
 address: {
  country: 'Ukraine',
  city: 'Dnepr'
 }
}

// const { name: firstName = 'без имени',
//  age,
//  car = "Dewoo Lanos",
//  address: {
//   city: homeTown, country, }
// } = person;

// const {name, ...info} = person

// console.log(name, info)


function logPerson({name: firstName = 'Nataliya', age}) {
 console.log(firstName + ' ' + age)
}

logPerson(person)