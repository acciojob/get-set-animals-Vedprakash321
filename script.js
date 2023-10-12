class Animal {
    constructor(species) {
        this._species = species;
    }

    get species() {
        return this._species;
    }

    makeSound(sound) {
        console.log(`The ${this.species} makes a sound`);
    }
}

class Cat extends Animal {
    constructor() {
        super('Siamese');
    }

    purr() {
        super.makeSound('purr');
    }
}

class Dog extends Animal {
    constructor() {
        super('Golden Retriever');
    }

    bark() {
        super.makeSound('woof');
    }
}

// Example usage:
const cat = new Cat();
cat.purr(); // Outputs: The Siamese makes a purr sound

const dog = new Dog();
dog.bark(); // Outputs: The Golden Retriever makes a woof sound
