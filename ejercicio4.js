function algunoEsPar(x){
    return x.some(esPar);
    }

const esPar = (element) => element % 2 ===0;

console.log(algunoEsPar([1,2,3]));
console.log(algunoEsPar([1,1,1]));
