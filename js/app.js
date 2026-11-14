// Ejercicio 1  --Declare variables para almacenar
let nombre1 = "Juan";
let edad1 = 20;
let estatura = 1.75;
let activo = true;
console.log(nombre1);
console.log(edad1);

// Ejercicio 1  -- Solicitar al usuario su nombre, edad, carrera y promedio, luego mostrarlo en consola.

let nombreEstudiante = "David";
let edad2 = 29;
let carrera = "sistemas";
let promedio = 85 ;
console.log(nombreEstudiante);
console.log(edad2);
console.log(carrera);
console.log(promedio);



// ejemplo


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
    console.log("el valor de i es: "+ i);
}


// ejercicio 8

let contador=1;

while(contador<=5){
    console.log(contador);
    contador++;
}

//ejercicio 9 -- mostrar los numeros de 20 al 1 utilizando while

let contadorUno = 20;

while (contadorUno >= 1) {
    console.log(contadorUno);
    contadorUno--;
}

// ejercicio 10 --  solicitar una contraseña, mientras la contraseña no sea 1234 seguir solicitando

let contraseña = prompt("Ingrese la contraseña:");

while (contraseña !== "1234") {
    contraseña = prompt("Contraseña incorrecta. Intente nuevamente:");
}

console.log("¡Contraseña correcta! Bienvenido.");

/**
 * parte 9 Funciones sin parametros
 *      EJEMPLOS
 * 
 * javascript
 *  function saludar(){
 * console.log("Bienvenido al sistema");
 * }
 * saludar();
 */

// ejercicio 11 -- Crear una función llamada: 

function mostrarUniversidad() {
    console.log("Universidad Autónoma Gabriel René Moreno");
}
mostrarUniversidad();

/*      Parte 10. Funciones con Parámetros 
Ejemplo 
JavaScript 
function saludar(nombre){ 
console.log("Hola " + nombre); 
} 
saludar("Juan"); */

//EJERCICIO 12 -- Crear una función llamada: mostrarNombre que reciba un parámetro llamado nombre y muestre en consola el mensaje "Hola, [nombre]".

function mostrarNombre(nombre) {
    console.log("Hola, " + nombre);
}
mostrarNombre("Juan");



// EJERCICIO 13 -- Crear una función llamada: sumar que reciba dos parámetros llamados a y b, y devuelva la suma de ambos.

function sumar(a, b) {
    let resultado = a + b;
    console.log("Resultado: " + resultado);
}

let numero1 = Number(prompt("Ingrese el primer número:"));
let numero2 = Number(prompt("Ingrese el segundo número:"));

sumar(numero1, numero2);

/**
 * Parte 11. Funciones con Retorno 
Ejemplo 
JavaScript 
function multiplicar(a,b){ 
return a*b; 
} 
let resultado = multiplicar(3,4); 
console.log(resultado); 
 */

/** EJERCICIO 14 --
 * Crear una función: 
JavaScript 
calcularArea(base,altura) 
que retorne el área de un triángulo. 
Fórmula: 
(base × altura) / 2 
 */

function calcularArea(base, altura) {
    return (base * altura) / 2;
}
let resultado = calcularArea(5, 8);
console.log(resultado);

/**
 * Parte 12. Ejercicio Integrador Tipo Examen 
Ejercicio 15 
Solicitar la cantidad de estudiantes. 
Luego: 
1. Pedir las notas. 
2. Determinar si aprobaron o reprobaron. 
3. Contar aprobados. 
4. Contar reprobados. 
5. Utilizar una función para evaluar cada nota. 
Salida Esperada 
Aprobados: 8 
Reprobados: 2 
Pista 
JavaScript 
function evaluarNota(nota){ 
} 
let aprobados = 0; 
let reprobados = 0; 
let cantidad = Number(prompt("Cantidad de estudiantes")); 
for(let i=1; i<=cantidad; i++){ 
}
 * 
 */

function evaluarNota(nota) {
    if (nota >= 51) {
        return true;
    } else {
        return false;
    }
}
let aprobados = 0;
let reprobados = 0;
let cantidad = Number(prompt("Cantidad de estudiantes"));
for (let i = 1; i <= cantidad; i++) {
    let nota = Number(prompt("Ingrese la nota del estudiante " + i));
    if (evaluarNota(nota)) {
        aprobados++;
    } else {
        reprobados++;
    }
}
console.log("Aprobados: " + aprobados);
console.log("Reprobados: " + reprobados);

