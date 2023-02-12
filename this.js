var printPlayerNameFunc = function (obj) {
    obj.printPlayerName = function () {
        console.log(this.name);

    }
}

var sakib = {
    name: "Sakib",
    age: 33
}
var tamim = {
    name: "Tamim",
    age: 37
}

const ss = printPlayerNameFunc(sakib)
// ekhane ss hocce ekti obj zar modde printPlayerName namok ekt fun ace 
sakib.printPlayerName()


printPlayerNameFunc(tamim)
tamim.printPlayerName()

function Person(name, age) {
    return {
        name: name,
        age: age,
        printName: function (name) {
            console.log(this.name);

        },
        father: {
            name: "Ahad",
            printName: function (name) {
                console.log(this.name);

            }
        }
    }
}

const hammad = Person("Hammad", 66)
hammad.printName("Sam")

const atik = Person("Rahim", 23)
atik.father.printName()


//"THIS BY CALL AND APPLY"
var printName = function (v1, v2, v3) {
    console.log(`${this.name} ${v1} ${v2} ${v3}`);
}
var sakib = {
    name: "Sakib",
    age: 33
}

var v1 = "valo"
var v2 = "ragi"
var v3 = "all rounder"


// printName.call(sakib, v1, v2, v3)
// call method array nite pare na , property ek ek kore ney
var v = [v1, v2, v3]
// apply method array nite pare
printName.apply(sakib, v)
