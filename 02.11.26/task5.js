let inputField = document.querySelector("#username");
let resultParagraph = document.querySelector("#result");

console.log("Изначально в поле:", inputField.value);

inputField.value = "Отличник";

resultParagraph.textContent = "Новое значение: " + inputField.value;

console.log("Значение после изменения:", inputField.value);