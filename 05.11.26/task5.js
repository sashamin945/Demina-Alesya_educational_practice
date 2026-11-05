document.querySelector("#regular").addEventListener("click", function(event) {
    console.log("Обычная функция. Элемент:", event.currentTarget);
});

document.querySelector("#arrow").addEventListener("click", (event) => {
    console.log("Стрелочная функция. Элемент:", event.currentTarget);
});

//Обычная функция: this ссылается на элемент, который вызвал событие
//Стрелочная функция: не имеет своего this, поэтому берет его из внешнего контекста

