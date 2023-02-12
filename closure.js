// যখন কোনো একটি function এর local scope থেকে অন্য আরেকটি function রিটার্ন করা হয় এবং রিটার্নকৃত function টি যদি তার parent function এর কোনো ভেরিয়েবল অথবা আরগুমেন্ট নিজের মধ্যে reference হিসাবে স্টোর করে রাখে তখন তাকে আমরা Closure বলি।

// JS এর সাধারণ workflow অনুযায়ী যখন কোনো function এর exicution শেষ হয়ে যায়, তখন তার কোনো অস্তিত্ব থাকে না। কিন্তু Closure তার parent function এর exicution শেষ হবার পরও তার মধ্যকার ডাটা নিজের মধ্যে reference হিসাবে রেখে দেয় যা বাইরে থেকে সরাসরি একসেস করা যায় না তবে function কল করে মডিফাই করা যায়...




// function stopWatch() {
//     let counter = 0
//     return function () {
//         counter++
//         return counter
//     }
// }

// let clock1 = stopWatch()
// let clock2 = stopWatch()
// // console.log(clock1());
// console.log(clock2());


const bank = owner => {
    let balance = 0
    return amount => {
        balance += amount
        return balance
    }
}

const mofizbank = bank('mofiz')
// console.log(mofizbank(208));

// const bank = owner => {
//     let balance = 0
//     return {
//         deposit: amount => {
//             balance += amount
//             return balance
//         },
//         withdraw: amount => {
//             balance -= amount
//             return balance
//         }
//     }
// }

// const mofizbank = bank('mofiz')
// console.log(mofizbank.deposit(800));
// console.log(mofizbank.deposit(1200));

// console.log(mofizbank.withdraw(1200));
// console.log(mofizbank.withdraw(3 * 200));

// const bank = owner => {
//     let balance = 0
//     return {
//         deposit: amount => {
//             balance += amount
//             return balance
//         },
//         withdraw: amount => {
//             balance -= amount
//             return balance
//         }
//     }
// }

// const mybank = bank()
// console.log(mybank.deposit(10));

var num1 = 2
// num1 global variable, ejonno closure na 
var sum = function () {
    var num2 = 3
    // num2 holo direct closure 
    return function () {
        return num1 + num2
    }
}
// console.log(num2); error 
var myFunc = sum()
// console.log(myFunc);
// console.log(myFunc());
const grandFather = 80
function father(fatherProperty) {
    const property = fatherProperty + grandFather
    return function son() {
        const sonProperty = 12
        return sonProperty + property
    }
}

const ami = father(20)
// const my = ami()
// console.log(my);

// function async() {
//     var a = 20

//     // var myFunc=()=>{
//     //     console.log(a);

//     // }
//     // setTimeout(myFunc,4000)

//     setTimeout(() => {
//         console.log(a);
//     }, 4000)

// }
// async()

// 1.যখন কোনো একটি function এর local scope থেকে অন্য আরেকটি function রিটার্ন করা হয় 

// 2.এবং রিটার্নকৃত function টি যদি তার parent function এর কোনো ভেরিয়েবল অথবা আরগুমেন্ট নিজের মধ্যে reference হিসাবে স্টোর করে রাখে 

// 3.তখন তাকে আমরা Closure বলি।

// JS এর সাধারণ waterfall অনুযায়ী যখন কোনো function এর exicution শেষ হয়ে যায়, তখন তার কোনো অস্তিত্ব থাকে না। কিন্তু Closure তার parent function এর exicution শেষ হবার পরও তার মধ্যকার ডাটা নিজের মধ্যে reference হিসাবে রেখে দেয় যা বাইরে থেকে সরাসরি একসেস করা যায় না তবে function কল করে মডিফাই করা যায়...



const tax = 20
function father() {
    let total = 0

    return function son(taka) {
        const price = 10
        total = total + tax + price + taka
        return total
    }
}
const old = father()
console.log(old);

console.log(old(20));
console.log(old(20));
// console.log(total);
console.log(old(20));

console.log(tax);
// console.log(price);





