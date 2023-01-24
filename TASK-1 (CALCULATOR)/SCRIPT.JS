//---------Initialising the display---------
function myclick(a) {
    calculator.display.value += a;
}

//---------Percentage function---------
function percentage() {
    calculator.display.value = (calculator.display.value / 100);
}

//---------Square of number function---------
function square() {
    calculator.display.value = Math.pow(calculator.display.value, 2);
}

//---------Cube of number function---------
function cube() {
    calculator.display.value = Math.pow(calculator.display.value, 3);
}
//---------AC: All Clear function---------
function ac() {
    calculator.display.value = "";
}

//---------Equals to function---------
function equalto() {
    calculator.display.value = eval(calculator.display.value);
}