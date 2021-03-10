
console.time('timer')

const items = [];
for (let i = 0; i < 100000; i++) {
 items.push({el: i + 1})
}

console.timeEnd('timer')