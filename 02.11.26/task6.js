const styleTag = document.createElement("style");

styleTag.textContent = `
    .text { color: black; }
    .active { color: green; font-weight: bold; }
    .hidden { display: none; }
`;

document.head.appendChild(styleTag);

let message = document.querySelector("#message");

let hasTextClass = message.classList.contains("text");
console.log("Есть ли класс 'text'?", hasTextClass);

message.classList.add("active");
console.log("Добавили класс 'active'");

message.classList.remove("text");
console.log("Удалили класс 'text'");
