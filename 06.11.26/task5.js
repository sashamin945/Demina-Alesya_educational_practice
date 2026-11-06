function fetchWithTimeout(url, ms) {
    
    const fetchPromise = fetch(url);
    
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Таймаут')), ms);
    });

    return Promise.race([fetchPromise, timeoutPromise]);
}


console.log("Таймаут 100 мс");
fetchWithTimeout('https://wttr.in/Moscow?format=j1', 100)
    .then(response => {
        console.log("Успех! Данные пришли:", response.status);
    })
    .catch(error => {
        console.error("Ошибка:", error.message); 
    });


console.log("Таймаут 5000");
fetchWithTimeout('https://wttr.in/Moscow?format=j1', 5000)
    .then(response => {
        console.log("Успех! Данные пришли:", response.status);
    })
    .catch(error => {
        console.error("Ошибка:", error.message);
    });

//Таймаут 100 мс
//Таймаут 5000
//Успех! Данные пришли: 200