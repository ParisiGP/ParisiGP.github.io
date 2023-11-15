function GetButtonValue(buttonValue_) {
    var buttonValue = buttonValue_;
    var Display = document.getElementById("resultado");
    var Valor;

const isOperator = ["+", "-", "*", "/"].includes(buttonValue);

const lastCharIsOperator = ["+", "-", "*", "/"].includes(Display.value.slice(-1));


if (Display.value === "" && isOperator) {
 
} else if (lastCharIsOperator && isOperator) {

} else if (buttonValue === "=" && Display.value !== "") {
    console.log(Display.value);
    Valor = eval(Display.value);
    console.log(Valor);
    Display.value = Valor;
} else if (buttonValue === "C") {
    Display.value = "";
} else {
    Display.value += buttonValue;
}
}

