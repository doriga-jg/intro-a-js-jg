var numeroAleatorio = document.querySelector("#numeroAleatorio");
var numero = 0;

/*================================================
NÚMERO ALEATORIOS

El objeto Math permite realizar tareas matemáticas en los números.
Math.random = devuelve un número aleatorio entre 0 (inclusive) y 1 (exclusivo)

Math.floor = redondea al número menor del decimal
=================================================*/

numero = Math.round(Math.random()*10);
numeroAleatorio.innerHTML = numero;
