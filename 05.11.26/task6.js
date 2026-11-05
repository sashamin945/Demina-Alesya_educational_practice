const employee = {
    name: "Ян",
    position: "Охотник",
    
    showCard() {
        console.log(`Имя: ${this.name}, Должность: ${this.position}`);
    }
};

console.log("Вызов как метод объекта");
employee.showCard();

console.log("Потеря контекста");
const lostMethod = employee.showCard;
lostMethod();

console.log("Исправление через bind()");
const boundMethod = employee.showCard.bind(employee);
boundMethod();

function showCardInCity(city) {
    console.log(`Сотрудник ${this.name} работает в городе ${city}`);
}

console.log("Вызов через call() и apply()");
showCardInCity.call(employee, "Москва");
showCardInCity.apply(employee, ["Сибирь"]);

const btn = document.querySelector("#actionBtn");

btn.addEventListener("click", function(event) {
    console.log("Обычная функция");
    console.log("this:", this);
    console.log("event.currentTarget:", event.currentTarget);
});

btn.addEventListener("click", (event) => {
    console.log("Стрелочная функция");
    console.log("this:", this);
    console.log("event.currentTarget:", event.currentTarget);
});


//Вызов как метод объекта
//task6.js:6 Имя: Ян, Должность: Охотник
//task6.js:13 Потеря контекста
//task6.js:6 Имя: , Должность: undefined
//task6.js:17 Исправление через bind()
//task6.js:6 Имя: Ян, Должность: Охотник
//task6.js:25 Вызов через call() и apply()
//task6.js:22 Сотрудник Ян работает в городе Москва
//task6.js:22 Сотрудник Ян работает в городе Сибирь
