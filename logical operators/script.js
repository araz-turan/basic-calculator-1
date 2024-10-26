var Num1 = Number(prompt('Enter the first number: ', [1]));
var Num2 = Number(prompt('Enter the second number: ',[1]));

var 
    addResult = Num1 + Num2,
    subResult = Num1 - Num2,
    mulResult = Num1 * Num2,
    divResult = Num1 / Num2;

alert(`
    addition: ${addResult},
    subtraction: ${subResult},
    multiplication: ${mulResult},
    division: ${divResult}
    `);