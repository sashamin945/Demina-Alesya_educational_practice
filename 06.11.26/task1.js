async function getWeather() {
    try {
        const response = await fetch('https://wttr.in/Moscow?format=j1');
        
        if (!response.ok) {
            throw new Error('Ошибка: ' + response.status);
        }

        const data = await response.json();
        console.log("Задание 2");
        console.log(data);
        
        const current = data.current_condition[0];
        const temp = current.temp_C;
        const humidity = current.humidity;
        const weatherDesc = current.lang_ru ? current.lang_ru[0].value : current.weatherDesc[0].value;

        console.log("Задание 3");
        console.log(`Температура: ${temp}°C`);
        console.log(`Влажность: ${humidity}%`);
        console.log(`Погода: ${weatherDesc}`);
    } 
    
    catch (error) {
        console.error("Что-то пошло не так:", error);
    }
}

getWeather();

//Что выводит на втором задании:
//{current_condition: Array(1), nearest_area: Array(1), request: Array(1), weather: Array(3)}

//Что выводит на третьем задании:
//Температура: 1°C ; Влажность: 91% ; Погода: Слабый снег
