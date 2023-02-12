// Array er khettre (for in) loop index=> 1,2,3 return kore 
// Object er khettre (for in) loop property return kore

const person = {
    name: 'msa',
    age: 24,
    work: function () {
        console.log('cse in mind for game');

    },
    work2: study = () => {
        console.log('cse in mind');
    },
    work3: () => {
        console.log('cse in mind for game');

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


// OBJECTS METHODS 
let person3 = {
    name: 'sa',
    age: '24',
    eat: function () {
        console.log((this.name + ' ' + 'is ' + this.age + ' years old').toLowerCase());
    },
}

person3.study = () => {
    console.log(('is Muhammad SA').toUpperCase());
}

// console.log(person3['eat']());
// console.log(person3['study']());

//OBJECT ACCESSORIES AND COMPUTED PROPERTIES
const person4 = {
    fname: 'muhammad',
    lname: 'sa',
    get fullName() {
        // ekhane fullName function hocce get accessor
        return this.fname + ' ' + this.lname
        // ekhane return kora fullName hocce computed property
    }
}
console.log(person.fullName);

const person5 = {
    fname: 'muhammad',
    lname: 'sa',
    coun: '',
    set fullName(counName) {
        // ekhane fullName function hocce set accessor
        // set theke return kora zay na
        this.coun = counName
        // ekhane person5 er coun name set kora hocce ebong eta computed property
    }
}
console.log(person5.fullName = 'bd');






