// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
return (valueInDollar / 1.29) * 127.9;
// let valueInYen = valueInEuro * 127.9; 
}
console.log(fromDollarToYen(15));

const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))
module.exports = { sum, fromEuroToDollar, fromDollarToYen };
