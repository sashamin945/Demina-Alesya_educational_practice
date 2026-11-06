const urls = [
    'https://wttr.in/Moscow?format=j1',
    'https://wttr.in/Paris?format=j1',
    'https://wttr:inn/Moscow?format=j1'
];

const city = ['Москва', 'Париж', 'Сломанный город'];

const promises = urls.map(url => {
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
        }
        return response.json();
    });
});

Promise.allSettled(promises)
    .then(results => {
        console.log("Все запросы завершены. Результат:");
        
        results.forEach((result, index) => {
            
            if (result.status === 'fulfilled') {
                const current = result.value.current_condition[0];
                const temp = current.temp_C;
                console.log(` ${city[index]}: Температура ${temp}°C`);
                
            } else if (result.status === 'rejected') {
                console.log(` ${city[index]}: Ошибка — ${result.reason.message}`);
            }
            
        });
    });

//Все запросы завершены. Результат:
//Москва: Температура 2°C
//Париж: Температура 7°C
//Сломанный город: Ошибка — Failed to execute 'fetch' on 'Window': Failed to parse URL from https://wttr:inn/Moscow?format=j1
