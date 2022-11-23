// let output = document.querySelector('#display');
// function display(arg) {
//     output.innerText += arg;
// }

let display1 = document.getElementById("display1");

function display(arg) {
    display1.value += arg;
}

function solve() {
    display1.value = eval(display1.value)
}

function clearScreen() {
    display1.value = "";
}

// let btnComma = addEventListener('click',)
// function addEventListener(