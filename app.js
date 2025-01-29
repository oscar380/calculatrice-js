const screendisplay = document.querySelector('.screen')
const buttons = document.querySelectorAll('button')
console.log(buttons)

let calculation = []
let accumulativeCalculation

function calculate (button) {
    const value = button.textContent
    if (value ==="CLEAR") {
        calculation = []
        screendisplay.textContent = '.'
    } else if (value === "=") {
        console.log(accumulativeCalculation)
screendisplay.textContent = eval(accumulativeCalculation)
    } else {
        calculation.push(value)
     accumulativeCalculation = calculation.join('')
    screendisplay.textContent = accumulativeCalculation
    }
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))