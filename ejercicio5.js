const notaMinima = 4;

function aproboCursada(cursada){
    return cursada.every(aproboExamen);
    }

const aproboExamen = (element) => element >= notaMinima;

console.log(aproboCursada([8,6,2,4]));
console.log(aproboCursada([10,8,5,5]));