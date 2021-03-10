// const requestUrl = "https://jsonplaceholder.typicode.com/users";

// //===== !!!  Обьект XHR  !!! =====

// // const xhr = new XMLHttpRequest()

// // xhr.open('GET', requestUrl)

// // xhr.responseType = 'json'

// // xhr.onload = () => {
// //  if (xhr.status >= 400) {
// //   console.error(xhr.response);
// //  } else {
// //   console.log(xhr.response);
// //  }
// //  console.log(xhr.response)
// // }

// // xhr.onerror = () => {
// //  console.log(xhr.response)
// // }

// // xhr.send()

// // === with Promises

// function sendRequest(method, url, body = null) {
//  return new Promise((resolve, reject) => {
//   const xhr = new XMLHttpRequest();

//   xhr.open(method, url);

//   xhr.responseType = "json";
//   xhr.setRequestHeader('Content-Type', 'application/json')

//   xhr.onload = () => {
//     if (xhr.status >= 400) {
//       reject(xhr.response);
//     } else {
//       resolve(xhr.response);
//     }
//     console.log(xhr.response);
//   };

//   xhr.onerror = () => {
//     reject(xhr.response);
//   };

//   xhr.send(JSON.stringify(body));
//  })
// }


// const body = {
//   name: "Vladimir",
//   age: 35,
// };

 // sendRequest("GET", requestUrl)
 //   .then((data) => console.log(data))
 //   .catch((err) => console.log(err));


// sendRequest('POST', requestUrl, body)
//  .then((data) => console.log(data))
//  .catch((err) => console.log(err))



 //===== !!!  Обьект Fetch  !!! =====

 const requestUrl = "https://jsonplaceholder.typicode.com/users";

 //===== !!!  Обьект XHR  !!! =====

 // const xhr = new XMLHttpRequest()

 // xhr.open('GET', requestUrl)

 // xhr.responseType = 'json'

 // xhr.onload = () => {
 //  if (xhr.status >= 400) {
 //   console.error(xhr.response);
 //  } else {
 //   console.log(xhr.response);
 //  }
 //  console.log(xhr.response)
 // }

 // xhr.onerror = () => {
 //  console.log(xhr.response)
 // }

 // xhr.send()

 // === with Promises

function sendRequest(method, url, body = null) {
 const headers = {
  'Content-Type': 'application/json'
 }
 
  return fetch(url, {
   method: method,
   body: JSON.stringify(body),
   header: headers
  }).then(response => {
    return response.json()
   })
 }

 // sendRequest('GET', requestUrl)
 //  .then(data => console.log(data))
 // .catch(err => console.log(err))
  
sendRequest('POST', requestUrl, body)
 .then((data) => console.log(data))
 .catch((err) => console.log(err))

 const body = {
   name: "Vladimir",
   age: 35,
 };

 