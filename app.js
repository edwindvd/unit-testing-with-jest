// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
console.log(fromEuroToDollar(1));
//  probando la funcion

const fromDollarToYen = function(valueInDollar){
return (valueInDollar / 1.29) * 127.9;
// let valueInYen = valueInEuro * 127.9; 
}
console.log(fromDollarToYen(1)); 
// probando la función

const fromYentoPound = function(valueInYen){
    let valueInPound = (valueInYen / 127.9) * 0.8; 
    return  valueInPound;
}
console.log(fromYentoPound(7));
//  probando la función

const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYentoPound };
