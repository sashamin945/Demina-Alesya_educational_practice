const mainTitle = document.getElementById('main-title');
console.log("Заголовок:", mainTitle);

const descriptions = document.getElementsByClassName('description');
console.log("Абзацы:", descriptions);

const listItems = document.getElementsByTagName('li');
console.log("Элементы списка:", listItems);

const container = document.querySelector('#container');
console.log("Контейнер:", container);

const allLi = document.querySelectorAll('ul li');
console.log("Все li через querySelectorAll:", allLi);