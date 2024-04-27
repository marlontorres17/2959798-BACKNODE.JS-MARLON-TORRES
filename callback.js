// ejercicio 1

function sumar(a, b, callback) {
    const resultado = a + b;
    callback(resultado);
}

function imprimirResultado(resultado) {
    console.log("El resultado de la suma es: " + resultado);
}

sumar(5, 3, imprimirResultado);


// ejercicio 2

function convertirMayusculas(array, callback) {
    const arrayMayusculas = array.map(item => item.toUpperCase());
    callback(arrayMayusculas);
}

function imprimirArrayMayusculas(arrayMayusculas) {
    console.log("Array en mayúsculas: " + arrayMayusculas);
}

const miArray = ["pepe", "loco", "pep"];
convertirMayusculas(miArray, imprimirArrayMayusculas);