function rechazar(parametro,lista){
    var coinciden = lista.filter(parametro);
    const noCoinciden = element => coinciden.includes(element) == false;
    return lista.filter(noCoinciden);
}

const esPar = element => element % 2 ===0;

console.log(rechazar(esPar,[1,2,4,7]));
