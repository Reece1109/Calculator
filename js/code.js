// let output = document.querySelector('#display');
// function display(arg) {
//     output.innerText += arg;
// }

// let operators = doc.querySelectorAll('display1');
// let array = [];

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
function del() {
    display1.value=display1.value.slice(0,-1)
}

function displayComa(anyVal){
    if(!display1.value.includes(".") ) {
        display1.value += anyVal;
    }
}

// operators.forEach(operator => {
//     operators.addEventListener('click', (e) => {
//         arr = [];
//         screen.value += operators.text
//     })
// })


