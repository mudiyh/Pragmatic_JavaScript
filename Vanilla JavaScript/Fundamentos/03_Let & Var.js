'use strict'
//Variables let and Var

//Prueba con Var
var Number = 40;
console.log(Number);//40

if(true){
  Number = 50;
  console.log(Number);//50
}
console.log(Number);//50

//Prueba con Let
let Texto = "Sigmundus Esct";
console.log(Text);
//afuera de la condicional la variable Text es -> Sigmundus Esct
if(true){
  let Text = "Find the Argus Aphocraphex";
  console.log(Text);
}
console.log(Text);

console.log("\n***************Var&Let*****************\n");
//Usar let no var
let Greeting = "Empezando aprender JavaScript";


var greeting = "hola estoy manchando tu ventana";
console.log(Greeting);

/*
    el objeto window mapea toda la ventana del navegador   
    Objeto : window
    Es el objeto principal en la jerarquía y contiene 
    las propiedades y métodos para controlar la ventana del navegador. 
    De él dependen todos los demás objetos de la jerarquía
*/
console.log(window);
console.log(window.greeting);
console.log(window.Greeting);

console.log("***********************************************************");
console.log("VAR");
console.log("");

/*
    como se ve en la salida de la console la 
    variable cambia dentro del bloque y afuera
    del bloque tambien desde el momento que cambia 
    la variable fuera o dentro de un bloque conservar
    ese valor
*/
var Gender = "Rock";
console.log("the Music you like : ", Gender);

{
    var Gender = "Reguetton";
    console.log("the Music you like : ", Gender);
}

console.log("the Music you like today : ",Gender);

console.log("***********************************************************");
console.log("LET");

/*
como se ve en la console la variable tipo let
si cambia depenediendo el bloque y cuando no esta fuera
de ese bloque el valor se conserva igual que antes 
y no se ve en el objeto window dejando limpio el objeto
window y es muy buena practica de programacion
*/ 


let gender = "Rock";
console.log("La Musica que te gusta es ", gender);

{
    let gender = "Reguetton";
    console.log("La Musica que te gusta es ", gender);
}

console.log("La Musica que te gusta hoy es",gender);

