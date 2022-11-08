/* eslint-disable require-jsdoc */
/* Crea un archivo JS que contenga las siguientes líneas
- Una función sin parámetros que devuelva siempre "true"
- Una función asíncrona que utilice un setTimeout y pase por consola
    un "Hola soy una promesa" 5 segundos después de haberse ejecutado
- Una función generadora de índices pares automáticos */


function verdadero() {
    return true;
}


function* generaID(stop) {
    let id = 0;
    while (id < stop) {
        if (stop < 0) {
            return;
        }
        id++;
        if (id % 2 == 0) {
            yield id;
        }
    }
}

const gen = generaID(20);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

function saludar(saludo) {
    console.log(saludo);
}

function espera(cb, saludo) {
    setTimeout(cb, 5000, saludo);
}

espera(saludar, 'Hola, soy una promesa');

// console.log(verdadero());
// console.log(espera(saludar, 'Hola, soy una promesa'));
