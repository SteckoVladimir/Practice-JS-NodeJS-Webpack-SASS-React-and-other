const person = Object.create(
  {
    calculateAge() {
      console.log("Age:", new Date().getFullYear() - this.birthYear);
    },
  },
  {
    name: {
      value: "Vladimir",
      enumerable: true, // Отображение ключа, по дефолту стоит false
      writable: true, // изменение значения
      configurable: true, // удалять ключ из обьекта
    },
    birthYear: {
      value: 1986,
      enumerable: false, // по дефолту
      writable: false, // по дефолту
      configurable: false, // по дефолту
    },
    age: {
      get() {
        return new Date().getFullYear() - this.birthYear;
      },
      set(value) {
        document.body.style.background = "red";
        console.log("Set age", value);
      },
    },
  }
);

// person.name ='Maxim'

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log("key", key, person[key]);
  }
}
