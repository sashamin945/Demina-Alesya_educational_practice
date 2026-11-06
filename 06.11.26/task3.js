const urls = [
    'https://wttr.in/Moscow?format=j1',
    'https://wttr.in/London?format=j1',
    'https://wttr.in/Paris?format=j1'
];

const city = ['Москва', 'Лондон', 'Париж'];

const promises = urls.map(url => {
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error(`Ошибка при запросе к ${url}`);
        }
        return response.json();
    });
});


Promise.all(promises)
    .then(results => {
        console.log("Все данные успешно получены!");
        
        results.forEach((data, index) => {
            const current = data.current_condition[0];
            const temp = current.temp_C;
            
            console.log(`Температура в ${city[index]}: ${temp}°C`);
        });
    })
    .catch(error => {
        console.error("Произошла ошибка:", error.message);
    });


//Все данные успешно получены!
//Температура в Москва: 2°C
//Температура в Лондон: 8°C
//Температура в Париж: 7°C