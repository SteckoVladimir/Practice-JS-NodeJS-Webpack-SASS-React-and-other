// Wrapper

const withDefaultValue = (target, defaultValue = 0) => {
 return new Proxy(target, {
   get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue),
 });
}

const position = withDefaultValue({
  x: 24,
  y: 42,
},
 0
)
console.log(position)

// Hidden properties

const withHiddenProps = (target, prefix = '_') => {
 return new Proxy(target, {
  has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
  ownKeys: obj => Reflect.ownKeys(obj)
   .filter(p => !p.startsWith(prefix)),
  get: (obj, prop, receiver) => (prop in receiver) ? obj[prop] : void 0 
 })
}

const data = withHiddenProps({
 name: 'Vladimir',
 age: 35,
 job: 'Frontend',
 _uid: 'security'
})

// Optimization 

const userData = [
  { id: 1, name: "Vladimir", job: "Frontend", age: 35 },
  { id: 2, name: "Nataliya", job: "UI", age: 30 },
  { id: 3, name: "Alexander", job: "Freelance", age: 34 },
  { id: 4, name: "Alina", job: "Manager", age: 34 },
];

const IndexArray = new Proxy(Array, {
 construct(target, [args]) {
  const index = {}
  args.forEach(item => index[item.id] = item)
  return new Proxy(new target(...args), {
   get(arr, prop) {
    switch (prop) {
     case 'push': return item => {
      index[item.id] = item
      arr[prop].call(arr, item)
     }
     case 'findById': return id => index[id]
     default:
      return arr[prop]
    }
   }
  })
 }
})

const users = new IndexArray([
  { id: 1, name: "Vladimir", job: "Frontend", age: 35 },
  { id: 2, name: "Nataliya", job: "UI", age: 30 },
  { id: 3, name: "Alexander", job: "Freelance", age: 34 },
  { id: 4, name: "Alina", job: "Manager", age: 34 },
]);