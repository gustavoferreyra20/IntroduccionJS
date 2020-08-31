
function cuantosCumplen(parametro,lista){
    return lista.filter(parametro).length;
}

const esPar = (element) => element % 2 ===0;

console.log(cuantosCumplen(esPar,[1,2,4]));
console.log(cuantosCumplen(esPar,[2,2,4]));