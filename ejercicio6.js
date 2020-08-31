const notaMinima = 4;

function aproboCursada(cursada){
    return cursada.every(aproboExamen);
    }

const aproboExamen = (element) => element >= notaMinima;

function quienesAprueban(alumnos){
    return alumnos.filter(aproboCursada);
}

console.log(quienesAprueban([[8,6,2,4],[10,8,5,5],[1,7,4,2],[10,8,9,9]]));

