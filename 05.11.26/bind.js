const employee = {
    name: 'Дмитрий',
    position: 'Военный',
    showInfo() {
        console.log("Сотрудник:", this.name, "| Должность:", this.position);
    }
};

console.log("1. Обычный вызов");
employee.showInfo();

console.log("2. Потеря контекста");
const lostMethod = employee.showInfo;
lostMethod(); 

console.log("3. Восстановление через bind");
const boundMethod = employee.showInfo.bind(employee);
boundMethod();

console.log("4. Дополнительно: второй сотрудник");
const employee2 = {
    name: 'Лэйн',
    position: 'Криптолог'
};

const annaInfo = employee.showInfo.bind(employee2);
annaInfo();