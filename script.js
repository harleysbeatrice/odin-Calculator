const disp = document.querySelector(".display p");
const numBtns = document.querySelectorAll(".num");
const clearBtn = document.querySelector("#clear");
const clearAllBtn = document.querySelector("#all-clear");
const opBtns = document.querySelectorAll(".op");
const eqBtn = document.querySelector("#eq");

let operator;
let num1;
let num2;

function printNum(num) {
    disp.textContent = disp.textContent + num;
}

function clear() {
    let dispArr = disp.textContent.split("");
    dispArr.pop()
    disp.textContent = dispArr.join("");
}

function clearAll() {
    disp.textContent = "";
    operator = "";
    num1 = null;
    num2 = null;
}

function printOp(op) {
    if (operator === undefined || operator === "") {
        num1 = Number(disp.textContent);
        operator = op;
        disp.textContent = disp.textContent + ` ${op} `;
    } else {
        calculate();
    }
}

function calculate() {
    num2 = Number(disp.textContent.split(` ${operator} `)[1]);
    const result = (operator === "+")? num1 + num2 :
        (operator === "-")? num1 - num2 :
            (operator === "×")? num1 * num2 : num1 / num2;
    disp.textContent = "=" + result.toString();
    operator = "";
    num1=undefined
    num2=undefined
}

numBtns.forEach(btn => btn.addEventListener("click", () => printNum(btn.textContent)));
clearBtn.addEventListener("click", () => clear());
clearAllBtn.addEventListener("click", () => clearAll());
opBtns.forEach(btn => btn.addEventListener("click", () => printOp(btn.textContent)));
eqBtn.addEventListener("click", () => calculate());