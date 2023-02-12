class Actress {
    constructor(name, age) { //properties
        this.name = name
        this.age = age
    }
    eat() {
        console.log(`${this.name} is playing`);
    }

    get getName() {
        return this.name
    }

    set setName(name) {
        this.name = name
    }
}

const cherry = new Actress("Cherry", 26)
cherry.setName = "Tamim";
console.log(cherry);


