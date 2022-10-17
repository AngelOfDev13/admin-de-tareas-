console.log('exito');

let nombre = 25;
let edad = 50
let decimal = 190.89;
let valorlogico = true;
let nulo = null;
let indefinida = undefined;
console.log('nombre');
console.log('edad sin cambiar', edad);
console.log('decimal');
console.log('valorlogico');
console.log('nulo');
console.log('indefinida'); 
edad = true;
console.log('edad cambiada', edad) 
const numero = 700;
const ALGO_QUE_NUNCA_CAMBIA = 3.14;
console.log(numero);

const variable1 = String('es una string')
const decimalString = String(decimal);
console.log(typeof decimal);
console.log(decimalString);

const ejemplo = 'esto es una string';
console.log('que tipo de variable es: ' + ejemplo)
const ejemploNum = 26;
console.log(`que tipo de variable es: ${ejemploNum}`);

const suma = 10 + 10;
const mult = 89 * 67;
const resta = 87 - 67;
const div = 30 / 87;

console.log(suma, mult, resta, div);


function sumita (num1, num2){
    const resultado = num1 + num2;
    return resultado;
}
const resultado = sumita(5, 10);
const resultado2 = sumita(10, 10);
const resultadofinal = sumita(resultado, resultado2);
console.log('resultado', resultadofinal);

// const num1 = prompt('escriba el primer resultado');
// console.log(number(num1));

const nombres = ['gabriel', 'alejandro', 'carolina'];
const [nombre1, nombre2, nombre3] = nombres;
console.log(nombre1, nombre2, nombre3);

const sumitaES6 = (num1, num2) => num1 + num2;

console.log (sumitaES6(10, 890));


