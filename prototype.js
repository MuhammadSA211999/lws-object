// const personMethods = {
//     eat() {
//         console.log("Persion is eating");

//     },
//     play() {
//         console.log("Persion is play");

//     },
//     sleep() {
//         console.log("Persion is sleep");

//     },
// }

// function Person(name, age) {
//     let person = {}
//     person.name = name
//     person.age = age

//     person.eat = personMethods.eat
//     person.play = personMethods.play
//     person.sleep = personMethods.sleep

//     return person
// }

// const sakib = Person("Sakib", 40)
// const Tamim = Person("Tamim", 40)
// console.log(sakib.play);

// function Person(name, age) {
//     const person = Object.create(personMethods)
//     person.name = name
//     person.age = age
//     return person
// }

// const sakib = Person("Sakib", 35)
// console.log(sakib)
// console.log(sakib.play)
// function test() { }
// console.dir(test.prototype);


// PROTOTYPE INHERITANCE 

function Person(name, age) {
    let person = Object.create(Person.prototype)

    person.name = name
    person.age = age

    return person

}

Person.prototype = {
    eat() {
        console.log(`Person is eating`);

    },
    play() {
        console.log(`Person is play`);

    }
}

// const sakib = Person("Sakib", 33)
// console.log(sakib.play);

// const tamim=Person("Tamim",43)


// NEW KEWORD PROTOTYPING 
function PersonWithNew(name, age) {
    // this=Object.create(PersonWithNew.prototype)
    this.name = name
    this.age = age
    // return this 
}

PersonWithNew.prototype = {
    eat() {
        console.log(this.name, "EATING");

    }
}

const sakib = new PersonWithNew("Sakib", 44)
sakib.eat()
const tarek = new PersonWithNew("Tarek", 22)
tarek.eat()