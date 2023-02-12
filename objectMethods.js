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
console.log(fperson);

