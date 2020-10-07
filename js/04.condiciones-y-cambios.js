/*========================================
CONDICIONES
========================================*/

//IF
var a = 5;
var b = 10;

if(a > b){
    console.log("A es mayor que B");
}
else if(a == b){
    console.log("A es igual que B");
}
else{
    console.log("A no es lo mismo que B, y A es menor que B")
}

//SWITCH
var dia = "lunes";

switch(dia){
    
    case "sabado":
        console.log("voy a estudiar PHP");
    break;
    
    case "martes":
        console.log("voy a estudiar CSS");
    break;

    case "jueves":
        console.log("voy a estudiar HTML");
    break;

    case "domingo":
        console.log("voy a descansar");
    break;

    default: console.log("Voy a estudiar JS")
}