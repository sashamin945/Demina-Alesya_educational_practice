let paragraph = document.querySelector("#paragraph");
let skills = document.querySelector("#skills");
let createBtn = document.querySelector("#create");
let deleteBtn = document.querySelector("#delete");

createBtn.addEventListener("click", function() {
    let item1 = document.createElement("li");
    item1.textContent = "HTML";

    let item2 = document.createElement("li");
    item2.textContent = "CSS";

    let item3 = document.createElement("li");
    item3.textContent = "JavaScript";

    skills.append(item1, item2, item3);
    
    createBtn.disabled = true; 
    createBtn.textContent = "Навыки добавлены";
});

deleteBtn.addEventListener("click", function() {
    paragraph.remove();
});