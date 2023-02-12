// function multiply(a, b, c) {
//     return a * b * c
// }

// let totalMul = multiply(5, 6, 7)
// console.log(totalMul);

// LETS TRY CURRYING 
function multiply(a) {
    return function (b) {
        return function (c) {
            return a * b * c
        }
    }
}

// const total = multiply(5)(6)(7)
// console.log(multiply(5)(6)(7));
// console.log(total);

const step1 = multiply(5)
// multiply fn ekti fn return kore zeti step1 pai
console.dir(step1);
const step2 = step1(6)
// step1 fn ekti fn return kore zeti step2 pai
console.dir(step2);
const step3 = step2(7)
// step2 fn ekti fn zeti call korle total multiply(5.6.7) pai
console.log(step3);


// CURRYING WITH CLOSURE
function discount(disc) {
    return (price) => {
        return price - price * disc
    }
}

const tenPercentDisc = discount(.1)
const coustomer1D = tenPercentDisc(6000)
console.log(coustomer1D);
const twentyParcent = discount(.2)
const coustomer2D = twentyParcent(1220)
console.log(coustomer2D);








