//complete this code
class Animal {
	constructor(species) {
        this._species = species;
    }

    get species() {
        return this._species;
    }

    makeSound(sound) {
                console.log(`The ${this.species} makes a ${sound} sound`);
	}
}

class Dog extends Animal {
	 purr() {
        this.makeSound('purr');
    }
}

class Cat extends Animal {
	bark() {
        this.makeSound('woof');
    }
}


const cat = new Cat('Siamese');
cat.purr(); // Outputs: The Siamese makes a purr sound

const dog = new Dog('Golden Retriever');
dog.bark(); // Outputs: The Gol




// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
