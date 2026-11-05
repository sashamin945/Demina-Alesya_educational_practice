const title = document.querySelector("#title");
const description = document.querySelector("#description");
const changeBtn = document.querySelector("#change");

changeBtn.addEventListener("click", function() {
    title.textContent = "Добро пожаловать!";
    description.textContent = "Мы изучаем JavaScript и DOM";
});