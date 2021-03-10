function hello() {
 console.log('Hello', this)
}

const person = {
 name: 'Vladimir',
 age: 35,
 sayHello: hello,
 sayHelloWindow: hello.bind(document),
 logInfo: function (job, phone) {
  console.group(`${this.name} info:`)
  console.log(`Name is ${this.name}`)
  console.log(`Name is ${this.age}`)
  console.log(`Job is ${job}`)
  console.log(`phone is ${phone}`);
  console.groupEnd()
 }
}

const lena = {
 name: 'Elena',
 age: 23
}
// const fnLenaInfoLog = person.logInfo.bind(lena, "Frontend", "8-999-225-73-25");
// // fnLenaInfoLog('Frontend', '8-999-225-73-25')
// fnLenaInfoLog()

// person.logInfo.bind(lena, "Frontend", "8-999-225-73-25")()
person.logInfo.call(lena, "Frontend", "8-999-225-73-25")
person.logInfo.apply(lena, ["Frontend", "8-999-225-73-25"])

//====================================

const array = [1, 2, 3, 4, 5]

// function multBy(arr, n) {
//  return arr.map(function (i) {
//   return i * n;
//  })
// }
//console.log(multBy(array,5))

Array.prototype.multBy = function (n) {
   return this.map(function (i) {
    return i * n;
   })
}

console.log(array.multBy(20))