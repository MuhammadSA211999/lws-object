// Array er khettre (for in) loop index=> 1,2,3 return kore 
// Object er khettre (for in) loop property return kore

const person = {
    name: 'msa',
    age: 24,
    work: study = () => {
        console.log('cse in mind');

    }
}
// let a = 'age'
// console.log(person[a]);
let a = person['age']
console.log(a);

// console.log(person['age']);
// console.log(person['work']);

const person2 = {
    fname: 'muhammad',
    lname: 'sa',
    age: '24'
}

let fperson = ''

for (let x in person2) {
    // console.log(x); property
    // console.log('value =>', val = person2[x]); value
    const val = person2[x]
    // fperson += ' ' + person2[x]
    fperson += ' ' + val;



}
// console.log(fperson);

const car1 = {
    name: 'lamborgini',
    estd: '1888',
    car2: {
        name: 'bmw',
        estd: '1900'
    }
}
// let c=car1['car2'] // we get full car2 obj 
// car2['name'] //bmw
let x = car1['car2']['name']
console.log(x); // bmw


