const student1 = { name: 'Ксюша', group: 'ВБ-21' };
const student2 = { name: 'Саша', group: 'ВБ-22' };

function showInfo() {
    console.log(this.name, this.group);
}

student1.showInfo = showInfo;
student2.showInfo = showInfo;

console.log("Вызов как метод");
student1.showInfo();
student2.showInfo();

console.log("Потеря контекста");
const lostContext = student1.showInfo;
lostContext();