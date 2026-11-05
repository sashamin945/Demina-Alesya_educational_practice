const studentCard = document.querySelector("#studentCard");
const studentName = document.querySelector("#studentName");
const changeInfoBtn = document.querySelector("#changeInfoBtn");
const hideCardBtn = document.querySelector("#hideCardBtn");

const newDisciplineInput = document.querySelector("#newDiscipline");
const addDisciplineBtn = document.querySelector("#addDisciplineBtn");
const disciplineList = document.querySelector("#disciplineList");

changeInfoBtn.addEventListener("click", function() {
    studentName.textContent = "Петрова Анна";
});

hideCardBtn.addEventListener("click", function() {
    studentCard.classList.add("hidden");
});

addDisciplineBtn.addEventListener("click", function() {
    const text = newDisciplineInput.value.trim();
    
    if (text !== "") {
        const newLi = document.createElement("li");
        newLi.textContent = text;
        
        disciplineList.append(newLi);
        
        newDisciplineInput.value = "";
    }
});