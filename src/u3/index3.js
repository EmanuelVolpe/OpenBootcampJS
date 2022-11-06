/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
// mmfactorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for
function factorial10() {
    let element = 1;
    for (let index = 1; index < 11; index++) {
        element *= index;
    }
    return element;
}

// factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while
function factorial10While() {
    let element = 1;
    let contador = 1;
    while (element < 11) {
        contador *= element;
        element++;
    }
    return contador;
}

// factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
function factorial10Break(numero) {
    let element = 1;
    let contador = 1;
    while (element < numero) {
        contador *= element;
        element++;
        if (element > 10) {
            break;
        }
    }
    return contador;
}

console.log(factorial10Break(20));

