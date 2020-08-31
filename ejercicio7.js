function hayAlgunoNegativo(x){
    return x.some(esNegativo);
    }

const esNegativo = element => element < 0;

console.log(hayAlgunoNegativo([1,2,3]));
console.log(hayAlgunoNegativo([1,-1,1]));

