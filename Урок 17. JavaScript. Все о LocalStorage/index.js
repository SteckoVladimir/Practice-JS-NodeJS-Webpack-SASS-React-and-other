//  LocalStorage - локальное хранилище

// const myNumber = 42;

// localStorage.removeItem("number");
// console.log(localStorage.getItem('number'));
// localStorage.setItem('number', myNumber.toString())
// console.log(localStorage.getItem("number"));

// localStorage.clear()

const object = {
 name: 'Vladimir',
 age: 35
}

// localStorage.setItem('person', JSON.stringify(object))

const raw = localStorage.getItem('person')
const person = JSON.parse(raw);
person.name = 'Nataliya';

// console.log(person);
// ==================
window.addEventListener('storage', event => {
 console.log(event);
})

//  Чем отличается localStorage от "Куки"  -  2 основных отличия.
// -- 1 --   localStorage гараздо больше , он около 5 Гбайт
// -- 2 --   Куки улетают на сервер (это не очень сикьюрно) т.к. сервер может распарсить информацию и может использовать в своих целях,
//                  а localStorage не улетает на сервер!