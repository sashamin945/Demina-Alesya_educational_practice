//задание 1
const siteA = ["anna", "ivan", "anna", "petr", "olga"];
const siteB = ["ivan", "anna", "sergey", "olga", "ivan"];

const setA = new Set(siteA);
console.log("1. Set siteA:", setA);

console.log("2. Уникальных в siteA:", setA.size);

console.log("3. Есть ли petr:", setA.has("petr"));

const allVisitors = new Set([...siteA, ...siteB]);
console.log("4. Все посетители (Set):", allVisitors);

const finalArray = [...allVisitors];
console.log("5. Итоговый массив:", finalArray);

//задание 2
const phoneBook = new Map();

phoneBook.set('Ivanov', '+7-900-111-22-33');
phoneBook.set('Petrova', '+7-900-444-55-66');
phoneBook.set('Sidorov', '+7-900-777-88-99');

console.log("Номер Petrova:", phoneBook.get('Petrova'));

phoneBook.delete('Sidorov');

console.log("Размер справочника:", phoneBook.size);
console.log("Остался ли Sidorov:", phoneBook.has('Sidorov'));

const namesArray = [...phoneBook.keys()];
console.log("Массив имен:", namesArray);


console.log("Вывод через forEach:");
phoneBook.forEach(function(phoneNumber, name) {
    console.log(name + ": " + phoneNumber);
});

//задание 3
const students = [
    { name: "Anna", grade: 5 },
    { name: "Ivan", grade: 4 },
    { name: "Anna", grade: 5 },
    { name: "Olga", grade: 5 },
    { name: "Petr", grade: 4 },
    { name: "Ivan", grade: 4 },
];

const uniqueStrings = new Set(students.map(function(student) { 
    return JSON.stringify(student); 
}));
const uniqueStudents = [...uniqueStrings].map(function(str) { 
    return JSON.parse(str); 
});
console.log("1. Уникальные студенты:", uniqueStudents);


const gradeMap = new Map();

students.forEach(function(student) {
    if (!gradeMap.has(student.grade)) {
        gradeMap.set(student.grade, []);
    }
    gradeMap.get(student.grade).push(student.name);
});


console.log("3. Группировка по оценкам:");
gradeMap.forEach(function(namesList, grade) {
    console.log("Оценка " + grade + ": " + namesList.join(", "));
});

//задание 4
function sumTo(n) {
    if (n === 0) {
        return 0;
    }
    return n + sumTo(n - 1);
}

console.log("Задание 4");
console.log("sumTo(1) =", sumTo(1));
console.log("sumTo(3) =", sumTo(3));
console.log("sumTo(5) =", sumTo(5));


//задание 5
function sum(n) {
    if (n === 0) {
        return 0;
    }
    return n + sum(n - 1);
}

console.log("Задание 5");
console.log("sum(4) =", sum(4));


//задание 6 
function power(a, n) {
    if (n === 0) {
        return 1;
    }
    return a * power(a, n - 1);
}

console.log("Задание 6");
console.log("power(2, 0) =", power(2, 0));
console.log("power(2, 3) =", power(2, 3));
console.log("power(3, 2) =", power(3, 2));
console.log("power(5, 3) =", power(5, 3));