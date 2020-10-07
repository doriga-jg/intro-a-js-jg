var tiempo = document.querySelector("#tiempo");
var segundos = 0;

/*================================================
SET INTERVAL (Intervalo de Tiempo)
setInterval(function,time)
=================================================*/

var intervalo = setInterval(function(){

    segundos++;
    tiempo.innerHTML = segundos;

},1000)

/*================================================
SET TIMEOUT (Retardo de Tiempo)
setTimeout(function,time)
=================================================*/

setTimeout(function(){

    // alert("Se cumplió el tiempo");
    clearInterval(intervalo);

}, 5000)