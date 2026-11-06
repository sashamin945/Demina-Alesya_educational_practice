async function getWeather() {
    try {
        const response = await fetch('https://wttr.in/Moscow?format=j1');
        
        if (!response.ok) {
            throw new Error('Ошибка: ' + response.status);
        }

        const data = await response.json();
        console.log(data);
        
    } catch (error) {
        console.error("Что-то пошло не так:", error);
    }
}

getWeather();

//Что выводит:
//{current_condition: Array(1), nearest_area: Array(1), request: Array(1), weather: Array(3)}
