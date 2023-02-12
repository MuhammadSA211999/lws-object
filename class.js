class Actor {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    eat() {
        console.log(this.name, "Eating");

    }
}

const salman = new Actor("Salman", 33)
salman.eat()

// let a = []
// let v = new Array()
// if (a === v) {
//     console.log("true");
// }
// else {
//     console.log("false");

// }

let persons = new Array()
console.log(Array.prototype);


function Player(name, age) {
    this.name = name
    this.age = age
    // this.playing = function () {
    //     console.log(`${this.name} is playing`);

    // }
}

// Player.prototype = {
//     playing: function () {
//         console.log(`${this.name} is playing`);
//     }
// }

// const mannna = new Player("Manna", 33)

// mannna.playing()
// const khan = new Player("Khan", 36)
// khan.playing()
// console.log(mannna);
// console.log(khan);
var f = function Author() {

}

console.dir(f);

