"use strict";
const body = document.querySelector('body');
const toggle = document.querySelector('.toggle label');
const display = document.querySelector('display');
const keys = document.querySelectorAll('[data-number]');
const Array, from;
(keys).forEach(e => {
    e.addEventListener('click', (e) => {
        let target = e.target;
        console.log(target);
    });
});
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
toggle.addEventListener("click", () => {
    // console.log(e.target);
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
