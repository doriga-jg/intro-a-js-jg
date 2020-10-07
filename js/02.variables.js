/*===================================
LAS VARIABLES
===================================*/

//Variables Numéricas
var numero = 5;
console.log("numero", numero);

//Variables de Texto
var palabra = "palabras";
console.log("palabra", palabra);

//Variables Booleanas
var booleana = true;
console.log("booleana", booleana);

//Variables de tipo Arreglo (Array)
var colores = ["rojo", "amarillo", true, booleana, numero, 6];
console.log("colores", colores[0]);

//Variables de tipo Objeto (object: propiedad y el valor)
var jugo = {ingrediente1:"fresa",
            ingrediente2:"mandarina",
            ingrediente3:"banano"}
console.log("jugo", jugo.ingrediente1);

//Variables DOM ('Modelo de Objetos del Documento')
var caja = document.querySelector("#caja");
console.log("caja", caja);

caja.style.width = "200px";
caja.style.height = "200px";
caja.style.background = "red";

var cajas = document.querySelectorAll(".cajas");
console.log("cajas", cajas);