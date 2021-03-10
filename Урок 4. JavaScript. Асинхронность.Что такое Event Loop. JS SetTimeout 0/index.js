console.log('Start');

console.log("Start 2");

function timeout2sec() {
 console.log("timeout2sec");
}

window.setTimeout(function () {
 console.log('Inside timeout, after 2 seconds')
}, 2000)

setTimeout(function () {
  console.log("Inside timeout, after 5 seconds");
}, 5000);

setTimeout(timeout2sec, 2000)

console.log('End')