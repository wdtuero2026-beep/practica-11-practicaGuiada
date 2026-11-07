// Ejercicio 1
let nombre1 = "Juan";
let edad1 = 20;
let estatura = 1.75;
let activo = true;
console.log(nombre1);
console.log(edad1);

// Ejercicio 2

let nombreEstudiante = "David";
let edad2 = 29;
let carrera = "sistemas";
let promedio = 85 ;
console.log(nombreEstudiante);
console.log(edad2);
console.log(carrera);
console.log(promedio);



//Eejrcicio 3


let nombre2 = prompt("ingrese su nombre");
console.log("Bienvnido" + nombre2);


//Ejercicio 
let nombre3 = "david";
let ciudad3 = "Santa Cruz";
let edad3 = 29;
let nombre = prompt("ingrese su nombre");
console.log("Bienvnido" + nombre3);
let ciudad = prompt("ingrese su ciudad");
console.log("Bienvenido a " + ciudad3);
let edad4 = prompt("ingrese su edad");
console.log("Bienvenido" + edad4);

// ejemplo

let edad = Number(prompt("ingrese su edad"));
if(edad >= 18){
    console.log("Eres mayor de edad");
}

// ejercicio 3.1

let numeroUno = Number(prompt("ingrese el primer numero"));
let numeroDos = Number(prompt("ingrese el segundo numero")); 
if(numeroUno == numeroDos){
    console.log("Los numeros son iguales");
}
else if(numeroUno > numeroDos){
    console.log("El primer numero es mayor");
}
else{
    console.log("El segundo numero es mayor");
}


//

let nota1 = Number(prompt("ingrese su nota"));
if(nota1 >= 61){
    console.log("Aprobado");
}
else{
    console.log("Reprobado");
}


// Solicitar la edad al usuario


let edaduno= parseInt(prompt("Ingresa tu edad:"));
if (edaduno >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}


//
let notas = Number(prompt("Ingrese su nota:"));

if (notas >= 90) {
    console.log("Excelente");
}
else if (notas >= 70) {
    console.log("Bueno");
}
else if (notas >= 51) {
    console.log("Regular");
}
else {
    console.log("Reprobado");
}

//

let opcion=Number(prompt("Ingrese una opción"));

switch(opcion){
    case 1:
        console.log("Registrar");
        break;
    case 2:
        console.log("Modificar");
        break;
    default:
        console.log("Opción inválida");
        break;
}


//

let menu=Number(prompt("Ingrese el mes"));

switch(opcion){
    case 1:
        console.log("Enero");
        break;
    case 2:
        console.log("Febrero");
        break;
    case 3:
        console.log("Marzo");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Mayo");
        break;

    default:
        console.log("mes no válido");
        break;
}

// for
for(let i=1; i<=5;i++){
    console.log(el valor de i es: + i);
}