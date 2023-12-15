const elementById = document.querySelector("#ser");
console.log(elementById)

const elementByClass = document.querySelector(".wer");
console.log(elementByClass)

const elementByTag = document.querySelector("h2");
console.log(elementByTag)

const elm = document.querySelector('.Old');
const elementInsadeElement = elm.querySelector("h3");
console.log(elementInsadeElement) 


elementById.textContent = "Новый текст";
elementById.setAttribute("ser", "trew");
elementById.style.color = "blue";
elementById.style.backgroundColor = "red";
elementById.classList.add("new-class");
elementById.classList.remove("old-class");