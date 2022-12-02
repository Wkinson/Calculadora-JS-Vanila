/* una de la formas de a la calculadora es que esta, esta me recordo el manejo del codigo
(hacerlo mas eficiente) y la importancia de estudia y hacer invertigaciones de JS.
*/

// metodo donde obtiene el valor y lo introduce al screen para la operacion.
function getValue(val) {
    document.getElementById('screenResults').value += val;
}
// metodo donde linpia el Screen
function clearScreenResuls(){
    document.getElementById('screenResults').value = ""; // me pregunto si tambien funcionara con null
}

// este metodo se en cargar de Hacer el calculo gracia al metodo "eval()" de JS
function result() {
    try{
        let step = eval(document.getElementById('screenResults').value);
        document.getElementById('screenResults').value = step;
    }catch(e)
    {
        alert("error, try agaim please Clear");
    }
   
}