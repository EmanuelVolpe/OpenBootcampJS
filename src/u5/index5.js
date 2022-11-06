/* Crea un archivo JS que contenga las siguientes líneas
- Una variable que contenga tu altura en centímetros (entero)
- Una variable que contenga tu altura en metros (número de coma flotante)
- Una variable que contenga tu peso en kilogramos (número de coma flotante)
- Una variable que contenga tu altura en metros redondeada hacia arriba
- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1"
es igual al máximo valor que se puede obtener en Javascript */


const alturaCentimetros = 170;
const alturaMetros = 1.4;
const peso = 69.9;
const alturaMetrosRedArriba = Math.ceil(alturaMetros);
const pesoRedAbajo = Math.floor(peso);
const esIgual = (Number.MAX_VALUE) + 1 === (Number.MAX_VALUE);


console.log(esIgual);
console.log(typeof esIgual);
