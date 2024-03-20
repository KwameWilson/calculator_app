"use strict";
const body = document.querySelector('body');
const toggle = document.querySelector('.toggle label');
const display = document.querySelector('[data-operand]');
const keys = document.querySelectorAll('[data-number]');
const dataOps = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const resetButton = document.querySelector('[data-reset]');
// class Calculator {
//     constructor(display) {
//         this.display = display;
//         this.clear()
//     }
//     clear() {
//         this.display = '';
//         this.operation = undefined;
//     }
//     delete() {
//     }
//     appendNumber(number: number) {
//         this.display = number
//     }
//     chooseOperation(operation: symbol) {
//     }
//     compute() {
//     }
//     updateDisplay() {
//         this.display.innerText = this.display;
//     }
// }
// const calculator = new Calculator(display)
Array.from(keys).forEach(key => {
    key.addEventListener('click', (e) => {
        // let target: any = e.target.innerText;
        // console.log(target);
        display.innerText += e.target.innerText;
    });
});
toggle.addEventListener("click", () => {
    // console.log(e.target);
    /**Theme Toggle */
    const darkMode = () => {
        //remove light-mode class
        body.classList.remove('light-mode');
        body.classList.remove('alt-dark-mode');
        //add dark-mode class
        body.classList.add('dark-mode');
    };
    const altDarkMode = () => {
        //remove light-mode or dark-mode class
        body.classList.remove('light-mode');
        body.classList.remove('dark-mode');
        //add alt-dark-mode class
        body.classList.add('alt-dark-mode');
    };
    const lightMode = () => {
        //remove dark-mode or alt-dark-mode class
        body.classList.remove('alt-dark-mode');
        body.classList.remove('dark-mode');
        // add light-mode class
        body.classList.add('light-mode');
    };
    if (body.classList.contains('light-mode')) {
        darkMode();
    }
    else if (body.classList.contains('dark-mode')) {
        altDarkMode();
    }
    else {
        lightMode();
    }
});
// const clearDisplay = (): void => {
//     display.value = '';
// }
// clearDisplay()
// const appendToDisplay = (): void => {
// }
