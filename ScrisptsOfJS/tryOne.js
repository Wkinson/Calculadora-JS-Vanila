/* esta es una de las formas del javaScript para hacer un calculadora, pero pienso que no es una de
la mejor mal por lo que no es optimisable pero eso si funciona 
esta forma lo pense mientas iva aprendiendo. 
*/

// Variable. 
const BtnUno = document.getElementById('uno');
const BtnDos = document.getElementById('dos');
const BtnTres = document.getElementById('tres');
const BtnCuatro = document.getElementById('cuatro');
const BtnCinco = document.getElementById('cinco');
const BtnSeis = document.getElementById('seia');
const BtnSiete = document.getElementById('siete');
const BtnOcho = document.getElementById('ocho');
const BtnNueve = document.getElementById('nueve');
const BtnCero = document.getElementById('cero');

const BtnSuma = document.getElementById('suma');
const BtnResta = document.getElementById('resta');
const BtnMulti = document.getElementById('multi');
const BtnDivi = document.getElementById('divi');
const BtnClear = document.getElementById('clear');
const BtnResult = document.getElementById('igual');

const screenResults = document.getElementById('screenResults');

let num1;
let num2;
let Operator;


// Eventos para los botones de la calculadora.

// # Para los numeros.
BtnCero.onclick = function() {
    screenResults.textContent += '0';
};

BtnUno.onclick = function() {
    screenResults.textContent += '1';
};

BtnDos.onclick = function() {
    screenResults.textContent += '2';
};

BtnTres.onclick = function() {
    screenResults.textContent += '3';
};

BtnCuatro.onclick = function() {
    screenResults.textContent += '4';
};

BtnCinco.onclick = function() {
    screenResults.textContent += '5';
};

BtnSeis.onclick = function() {
    screenResults.textContent += '6';
};

BtnSiete.onclick = function() {
    screenResults.textContent += '7';
};

BtnOcho.onclick = function() {
    screenResults.textContent += '8';
};

BtnNueve.onclick = function() {
    screenResults.textContent += '9';
};

// Para los Operadores

BtnSuma.onclick = function() {
    num1 = screenResults.textContent;
    Operator = "+";
    screenResults.textContent = '';
    
};

BtnResta.onclick = function() {
    num1 = screenResults.textContent;
    Operator = "-";
    screenResults.textContent = '';
    
};

BtnMulti.onclick = function() {
    num1 = screenResults.textContent;
    Operator = "*";
    screenResults.textContent = '';
};

BtnDivi.onclick = function() {
    num1 = screenResults.textContent;
    Operator = "/";
    screenResults.textContent = '';
};

BtnSuma.onclick = function() {
    num1 = screenResults.textContent;
    Operator = "+";
    screenResults.textContent = '';
    
};

BtnClear.onclick = function() {
    let num1 = 0;
    let num2 = 0;
    let Operator = "";
};

BtnResult.onclick = function() {
    num2 = screenResults.textContent;
    let result;

    switch(Operator){
        case "+":
            result = parseFloat(num1) + parseFloat(num2);
            break;
        
        case "-":
            result = parseFloat(num1) - parseFloat(num2);
            break;  
            
        case "*":
            result = parseFloat(num1) * parseFloat(num2);
            break;
            
        case "/":
            result = parseFloat(num1) / parseFloat(num2);
            break; 
    }

    screenResults.textContent = result;
    
};

// no este seguro que sea necesario
// function clear() {
//     screenResults.textContent = '';
// };
