// Находим элементы на странице
const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");
const counter = document.querySelector("#counter");

function updateCounter() {
    counter.textContent = taskList.children.length;
}

addBtn.addEventListener("click", function() {
    const text = taskInput.value.trim();
    
    if (text === "") {
        alert("Напиши задачу!");
        return; 
    }

    const li = document.createElement("li");
    li.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Удалить";
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener("click", function() {
        li.remove();
        updateCounter();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
    updateCounter();
});