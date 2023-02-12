//THIS IS RAW JS OF CURREY CONVERTER FUNCTION
// DO NOT NEE DTHIS IF YOU USE LOADS_.CURRY

// function curry(func) {
//     return function curried(...args) {
//         if (args.length >= func.length) {
//             return func.apply(this, args)
//         }
//         else {
//             return function (...args2) {
//                 return curried.apply(this, args.concat(args2))
//             }
//         }
//     }
// }


function sum(a, b, c) {
    return a + b + c
}
// RAW CURRY
// let curriedSum = curry(sum)
// console.log(curriedSum(1, 2, 3));
// console.log(curriedSum(1)(2, 3));
// console.log(curriedSum(1)(2)(3));


// LODAS_.CURRY
let curriedSum = _.curry(sum)
console.log(curriedSum(1, 2, 3));
console.log(curriedSum(1)(2, 3));
console.log(curriedSum(1)(2)(3));

function message(date, msg, importance) {
    console.log(`${date.getHours()}:${msg}:${importance}`);
}

const getMsg = _.curry(message)
// getMsg(new Date(), "Hello JS", "Debuging")
// curry te parameter kom hole ekta function return kore 
const inFuncMsg = getMsg(new Date(), "Hello JS")
// console.log(inFuncMsg); // parameter kom howate inFuncMsg ekti fun
inFuncMsg("dufg")

//SIMPLE CURRY FUNCTION with ES6
const multiply = (a) => (b) => (c) => a * b * c;
console.log(multiply(5)(6)(7));


