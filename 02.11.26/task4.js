let link = document.querySelector("#link");

let hrefValue = link.getAttribute("href");
console.log("Исходный href:", hrefValue); 

link.setAttribute("href", "https://yandex.ru");
console.log("Новый href:", link.getAttribute("href"));

let hasTarget = link.hasAttribute("target");
console.log("Есть ли атрибут target?:", hasTarget); 

link.removeAttribute("href");
console.log("href после удаления:", link.getAttribute("href"));
