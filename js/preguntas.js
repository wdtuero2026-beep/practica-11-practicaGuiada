/**
 * 
 * 1. ¿Cuál es la diferencia entre let, const y var?
Son palabras reservadas que se utilizan para declarar variables en JavaScript, pero tienen diferencias en su funcionamiento.

var: permite declarar una variable que puede modificarse y tiene alcance de función.

let: permite declarar variables que pueden cambiar de valor y tiene alcance de bloque.

const: permite declarar variables cuyo valor no puede reasignarse y tiene alcance de bloque.

Ejemplo de código:


javascript
var nombre = "Carlos";
nombre = "Pedro";

let edad = 20;
edad = 25;

const pais = "Bolivia";

console.log(nombre);
console.log(edad);
console.log(pais);
Explicación: En este ejemplo, las variables nombre y edad pueden cambiar su valor, mientras que pais no puede recibir otro valor mediante una reasignación.

2. ¿Para qué sirve prompt()?
La función prompt() sirve para mostrar una ventana emergente que permite al usuario ingresar información mediante el teclado.

El dato ingresado se guarda en una variable y se puede utilizar dentro del programa.

Ejemplo de código:


javascript
let nombre = prompt("¿Cuál es tu nombre?");

console.log("Hola " + nombre);
Explicación: El programa solicita al usuario que escriba su nombre y después muestra un saludo en la consola.

3. ¿Para qué sirve console.log()?
La función console.log() sirve para mostrar información, mensajes o resultados en la consola del navegador o del entorno de programación.

Se utiliza principalmente para comprobar resultados y encontrar errores durante el desarrollo de un programa.

Ejemplo de código:


javascript
let numero1 = 10;
let numero2 = 5;

let resultado = numero1 + numero2;

console.log("El resultado es:");
console.log(resultado);
Explicación: El programa realiza una suma y utiliza console.log() para mostrar el resultado en la consola, que en este caso será 15.

4. ¿Cuál es la diferencia entre == y ===?
Ambos operadores sirven para comparar dos valores, pero funcionan de manera diferente.

== (igualdad): compara los valores y permite convertir sus tipos de datos antes de realizar la comparación.

=== (igualdad estricta): compara tanto el valor como el tipo de dato, sin realizar conversiones automáticas.

Ejemplo de código:


javascript
let numero = 10;
let texto = "10";

console.log(numero == texto);
console.log(numero === texto);
Resultado:


javascript
true
false
Explicación: El operador == devuelve verdadero porque ambos valores representan el número 10. En cambio, === devuelve falso porque uno es un número y el otro es un texto (string).

5. ¿Cuándo utilizar if?
La estructura if se utiliza cuando necesitamos tomar decisiones dentro de un programa, ejecutando determinadas instrucciones dependiendo de si una condición es verdadera o falsa.

También se puede utilizar else y else if para evaluar diferentes situaciones.

Ejemplo de código:


javascript
let edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}
Explicación: El programa verifica si la edad es igual o mayor a 18. Si se cumple la condición, muestra que la persona es mayor de edad; de lo contrario, muestra que es menor de edad.

6. ¿Cuándo utilizar switch?
La estructura switch se utiliza cuando necesitamos evaluar una variable o expresión y compararla con diferentes valores posibles.

Es útil cuando existen varias opciones específicas que queremos evaluar sin escribir muchos if y else if.

Ejemplo de código:


javascript
let dia = 2;

switch (dia) {
    case 1:
        console.log("Lunes");
        break;

    case 2:
        console.log("Martes");
        break;

    case 3:
        console.log("Miércoles");
        break;

    default:
        console.log("Día no válido");
}
Explicación: El programa evalúa el valor de la variable dia. Como su valor es 2, muestra "Martes".

La instrucción break sirve para detener la ejecución del switch y evitar que continúe con los siguientes casos. default se ejecuta cuando ningún caso coincide.

7. ¿Cuál es la diferencia entre for y while?
Ambas estructuras se utilizan para repetir instrucciones varias veces, pero tienen diferencias en su funcionamiento.

for: se utiliza generalmente cuando conocemos la cantidad de veces que queremos repetir una instrucción.

while: se utiliza cuando queremos repetir instrucciones mientras una condición sea verdadera, sin necesidad de conocer previamente cuántas repeticiones habrá.

Ejemplo de código con for:


javascript
for (let i = 1; i <= 5; i++) {
    console.log("Número: " + i);
}
Ejemplo de código con while:


javascript
let i = 1;

while (i <= 5) {
    console.log("Número: " + i);
    i++;
}
Explicación: Ambos programas muestran los números del 1 al 5. La diferencia está en que for reúne la inicialización, condición y actualización en una misma estructura, mientras que while permite escribirlas por separado.

8. ¿Qué es una función?
Una función es un bloque de código que realiza una tarea específica y que puede ejecutarse cada vez que sea necesario.

Las funciones permiten organizar el código, evitar repetir instrucciones y reutilizar partes del programa.

Ejemplo de código:


javascript
function saludar() {
    console.log("Hola, bienvenido a JavaScript");
}

saludar();
Explicación: En este ejemplo se crea una función llamada saludar. Cuando escribimos saludar(), estamos llamando a la función para que ejecute las instrucciones que contiene.

9. ¿Qué es un parámetro?
Un parámetro es una variable que se coloca dentro de los paréntesis al declarar una función y que permite recibir información para trabajar con ella.

Los parámetros hacen que las funciones sean más flexibles porque pueden recibir diferentes datos cada vez que se ejecutan.

Ejemplo de código:


javascript
function saludar(nombre) {
    console.log("Hola " + nombre);
}

saludar("Carlos");
saludar("María");
Explicación: En este ejemplo, nombre es el parámetro de la función. Cuando llamamos a la función, enviamos diferentes valores ("Carlos" y "María"), y la función utiliza esos datos para mostrar los saludos.

10. ¿Qué es un valor de retorno?
Un valor de retorno es el resultado que una función devuelve cuando termina de ejecutarse.

Para devolver un valor se utiliza la palabra reservada return. Este resultado puede guardarse en una variable o utilizarse en otras operaciones.

Ejemplo de código:


javascript
function sumar(a, b) {
    return a + b;
}

let resultado = sumar(10, 5);

console.log(resultado);
Resultado:


javascript
15
Explicación: La función sumar recibe dos parámetros (a y b), realiza la suma y devuelve el resultado mediante return. Después, ese resultado se almacena en la variable resultado y se muestra en la consola.

Resumen general
Concepto

¿Para qué sirve?

let

Declarar variables que pueden cambiar.

const

Declarar variables que no pueden reasignarse.

var

Declarar variables con alcance de función.

prompt()

Solicitar información al usuario.

console.log()

Mostrar información en la consola.

==

Comparar valores permitiendo conversiones de tipo.

===

Comparar valores y tipos de datos.

if

Tomar decisiones según una condición.

switch

Evaluar diferentes opciones.

for

Repetir instrucciones una cantidad determinada de veces.

while

Repetir instrucciones mientras una condición sea verdadera.

Función

Bloque de código reutilizable.

Parámetro

Dato que recibe una función.

return

Devolver un resultado de una función.
 * 
 */