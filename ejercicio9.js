function rechazar(parametro,lista){
    return lista.filter(negate(parametro));
}

function negate (predicateFunc) {
    return function () {
        return !predicateFunc.apply(this, arguments);
    };
}

const esPar = element => element % 2 ===0;

console.log(rechazar(esPar,[1,2,4,7]));
