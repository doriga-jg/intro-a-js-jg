/*========================================
FUNCIONES SIN PARÁMETROS
========================================*/

//Declaramos la función
function saludo(){

    console.log("saludo, hola");    //Tarea de la función

}

//Ejecutamos la función
saludo();

/*========================================
FUNCIONES CON PARÁMETROS
========================================*/

function operacion(digito1, digito2){

    var resultado = digito1 + digito2;
    console.log("resultado", resultado);

}

operacion(5, 7);
operacion(10, 5);

/*========================================
FUNCIONES CON RETORNO SIN PARÁMETROS
========================================*/

function retorno1(){

    var numero = 5;
    return numero;

}

console.log("El valor de la funcion retorno1 es:", retorno1());

/*========================================
FUNCIONES CON RETORNO CON PARÁMETROS
========================================*/

function retorno2(numero){

    return numero;

}

console.log("El valor de la funcion retorno2 es:", retorno2(10));