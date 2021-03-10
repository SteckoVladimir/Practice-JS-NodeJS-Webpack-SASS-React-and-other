const delay = ms => {
 return new Promise(r => setTimeout(() => r(), ms))
}

const url = "https://jsonplaceholder.typicode.com/todos";

// function fetchTodos() {
//  console.log('FetchTodos started...')
//  return delay(2000)
//    .then(() => fetch(url))
//    .then((response) => response.json());
// }

// fetchTodos()
//  .then(data => {
//   console.log('Data:', data)
//  })
//  .catch(e => console.error(e))


async function fetchAsyncTodos() {
 console.log("FetchTodos started...")
 try {
   await delay(2000);
   const responce = await fetch(url);
   const data = await responce.json();
   console.log("Data:", data);
 } catch (e) {
  console.error(e)
 } finally {

 }
}
fetchAsyncTodos()