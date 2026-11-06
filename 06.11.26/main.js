function checkWeather(temperatura) {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if (temperatura > 0) {
                resolve("Тепло!");
            } else {
                reject(new Error("Холодно!"));
            }
        }, 1000);
        
    });
}

console.log("Запрос погоды (5 градусов)");
checkWeather(5)
    .then((result) => {
        console.log("Результат:", result);
    })
    .catch((error) => {
        console.error("Ошибка:", error.message);
    });


console.log("Запрос погоды (-5 градусов)");
checkWeather(-5)
    .then((result) => {
        console.log("Результат:", result);
    })
    .catch((error) => {
        console.error("Ошибка:", error.message);
    });