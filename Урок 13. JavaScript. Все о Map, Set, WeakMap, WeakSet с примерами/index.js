// const obj = {
//  name: 'Vladimir',
//  age: 35,
//  job: 'Frontend'
// }

// const entries = [
//  ["name", "Vladimir"],
//  ["age", 25],
//  ['job', "Frontend"]
// ];

// console.log(Object.entries(obj))
// console.log(Object.fromEntries(entries));

// const map = new Map(entries);
// console.log(map.get('job'))  // = console.log(obj.job)

// map
//  .set('newFild', 42)
//  .set(obj, 'Value of object')
//  .set(NaN, 'NaN???');
// console.log(map.get(NaN))

// map.delete("job");
// console.log(map.has( "job"));
// console.log(map.size);
// map.clear();
// console.log(map.size);

// ===================

// for (let [key, value] of map.entries()) {
//  console.log(key, value);
// }

// for (let val of map.values()) {
//  console.log(val)
// }

// for (let key of map.keys()) {
//   console.log(key);
// }

// map.forEach((val, key, m) => {
//  console.log(val, key)
// }); 

// =====================

// const array = [...map];
// const array = Array.from(map);

// const mapObj = Object.fromEntries(map.entries())
// console.log(mapObj)

// ============================

// const users = [
//  { name: 'Elena' },
//  { name: 'Vladimir' },
//  { name: 'Grisha'},
// ]

// const visits = new Map()

// visits
//   .set(users[0], new Date())
//   .set(users[1], new Date(new Date().getTime() + 1000 * 60))
//   .set(users[2], new Date(new Date().getTime() + 5000 * 60));
  
// function lastVisit(user) {
//   return visits.get(user)
// }
 
// console.log(lastVisit(users[2]))




// =========  SET   ==========

// const set = new Set([1, 2, 3, 3, 4, 5, 5, 6]);

// set.add(10).add(20).add(30).add(20)

// console.log(set);
// console.log(set.has(30));
// console.log(set.size);
// console.log(set.delete(1));
// console.log(set.size);
// console.log(set.clear());
// console.log(set.size);

// console.log(set.values());
// console.log(set.keys());
// console.log(set.entries());

// for (let key of set) {
//  console.log(key)
// }

// ==============

// function uniqValues(array) {
//  return Array.from(new Set(array))
// }

// console.log(uniqValues([1, 1, 1, 2, 2, 2, 2, 4, 4, 5, 6, 6]))

//  ==============  WEEKMAP =============== от утечки данных НО надо разобраться

let obj = { name: 'weekmap' };

// const arr =[obj]
// obj = null
// console.log(arr)


// const map = new WeakMap( 
//  [obj, 'obj data']
// );
// // get set delete has
// console.log(map.get(obj))


// ======= example WEAKMAP ===== главное, что б ключи были обьектами

// const cache = new WeakMap()

// function cacheUser(user) {
//  if (!cache.has(user)) {
//   cache.set(user, Date.now())
//  }
//  return cache.get(user)
// }

// let lena = { name: 'Elena' };
// let alex = { name: "Alexander" };

// cacheUser(lena);
// cacheUser(alex);

// lena = null;

// console.log(cache.has(lena));
// console.log(cache.has(alex));



// =========   WEAKSET   =========== главное, что б ключи были обьектами

const users = [
 { name: 'Elena' },
 { name: 'Vladimir' },
 { name: 'Grisha'},
]

const visits = new WeakSet()

visits.add(users[0]).add(users[1])

users.splice(1, 1)

console.log(visits.has(users[0]));
console.log(visits.has(users[1]));