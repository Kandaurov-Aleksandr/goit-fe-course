"use strict";

let amount;
const boxes = document.querySelector("#boxes");
const render = document.querySelector('button[data-action="render"]');
const destroy = document.querySelector('button[data-action="destroy"]');
const input = document.querySelector('input[type="number"]');

function randomBgColor() {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const bgColor = `rgb(${x}, ${y}, ${z})`;
    return bgColor;
}

function createBoxes(amount) {
    const width = 30;
    const step = 10;
    const arr = [];
    for (let i = 1; i <= amount; i++) {
        const div = document.createElement("div");
        div.style.width = `${width + i * step}px`;
        div.style.height = `${width + i * step}px`;
        div.style.background = randomBgColor();
        arr.push(div.outerHTML);
    }
    input.value = 0;
    return arr.join("");
}

function destroyBoxes() {
    boxes.innerHTML = "";
    input.value = 0;
}

input.addEventListener("change", () => {
    amount = Number(input.value);
});
render.addEventListener("click", () => {
    boxes.insertAdjacentHTML("afterbegin", `${createBoxes(input.value)}`);
});
destroy.addEventListener("click", destroyBoxes);