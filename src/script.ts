const body: HTMLBodyElement = document.querySelector('body')!;
const toggle: HTMLLabelElement = document.querySelector('.toggle label') as HTMLLabelElement;

const display: HTMLDivElement = document.querySelector('[data-operand]') as HTMLDivElement;
const keys: NodeList = document.querySelectorAll('[data-number]');
// const dataOps: HTMLButtonElement = document.querySelectorAll('[data-operation]');
// const equalButton: HTMLButtonElement = document.querySelector('[data-equals]');
// const deleteButton:HTMLButtonElement = document.querySelector('[data-delete]');

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
        switch (e.target.innerText) {
            case 'RESET':
                display.innerText = "";
                break;
            case 'DEL':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1)
                }
                break;

            case '=':
                try {
                    const evaluation: number = eval(display.innerText);
                    display.innerText = evaluation.toFixed(2)
                } catch (error) {
                    display.innerText = 'Error!'
                }
                break;
            default:
                display.innerText += e.target.innerText
        }

    })
})


document.body.addEventListener('keypress', (e) => {
    console.log(typeof (e.keyCode));
    const numericKeypadKeyCodes: number[] = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 106, 107, 109, 110, 111, 187];
    if (numericKeypadKeyCodes.includes(e.keyCode)) {
        const appendToDisplay = (): void => {
            display.innerText += e.key;
        }
        appendToDisplay()
    } else if(e.keyCode = 187){
        display.innerText = eval(display.innerText)
    }
})



toggle.addEventListener("click", () => {
    // console.log(e.target);

    /**Theme Toggle */
    const darkMode = (): void => {
        //remove light-mode class
        body.classList.remove('light-mode')
        body.classList.remove('alt-dark-mode')
        //add dark-mode class
        body.classList.add('dark-mode')
    }

    const altDarkMode = (): void => {
        //remove light-mode or dark-mode class
        body.classList.remove('light-mode')
        body.classList.remove('dark-mode')
        //add alt-dark-mode class
        body.classList.add('alt-dark-mode')
    }

    const lightMode = (): void => {
        //remove dark-mode or alt-dark-mode class
        body.classList.remove('alt-dark-mode')
        body.classList.remove('dark-mode')
        // add light-mode class
        body.classList.add('light-mode')
    }


    if (body.classList.contains('light-mode')) {
        darkMode()
    }
    else if (body.classList.contains('dark-mode')) {
        altDarkMode()
    } else {
        lightMode()
    }
}
)