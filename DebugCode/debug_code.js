function performOperation(op) {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById("input1").value);
    let num2 = parseInt(document.getElementById("input2").value);
    // check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
    // perform the operation
        let result = "" 
        if (op == "m") {
            result = multiply(num1, num2);
        } else if (op == "a") {
            result = add(num1, num2);
        } else if (op == "d") {
            result = divide(num1, num2);
        }
        // display result
        displayResult(result);
    } else {
        debugger;
        displayResult("Please enter valid numbers");
    }
}

function multiply(a, b) {
    // introduce a debugger statement to pause execuation
    debugger;
    // multiply the numbers
    return a * b;
}

function add(a, b) {
    debugger;
    return a + b;

}
function divide(a, b) {
    debugger;
    return a / b;
}

function displayResult(result) {
    // display the result in the paragrapth element
    const resultElement = document.getElementById("result");
    resultElement.textContent = `The result is: ${result}`;
}
