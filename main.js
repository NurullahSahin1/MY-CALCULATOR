const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const operators = ["%", "*", "/", "-", "+"];
let output = "";

const calculate = (btnValue) => {
    if (btnValue === "=") {
        try {
            output = evaluateExpression(output);
        }
        catch (error) {
            output = "Error"
        }
    }
    else if (btnValue === "AC") {
        output = "0";

    }
    else if (btnValue === "DEL") {
        output = output.toString().slice(0, -100)
    }
    else {
        if (output === "" && operators.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
}


const evaluateExpression = (expressions) => {
    return eval(expressions.replace(/%/g, "/100"));
}

document.addEventListener("keydown", (e) => {
    const key = e.key;

    if (!isNaN(key) || key === ".") {
        calculate(key);

    }

    if (operators.includes(key)) {
        calculate(key);
    }

    if (key === "Enter") {
        calculate("=");
    }
    if (key === "Backspace") {
        calculate("DEL");
    }
    if (key === "Escape") {
        calculate("AC");
    }
});
buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
})