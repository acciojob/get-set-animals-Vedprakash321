//complete this code
class Animal {
	 constructor(species) {
        this._species = species;
    }

    get species() {
        return this._species;
    }

    makeSound(sound) {
        console.log(sound);
    }

    // set age(age) {
    //     this._age = age;
    // }
}

class Dog extends Animal {
	 constructor(species) {
        super(species);
    }

    bark() {
         this.makeSound("The Golden Retriever makes a sound");
    }
}

class Cat extends Animal {
	constructor(species) {
	    super(species);
    }

   purr() {
         this.makeSound("The Siamese makes a sound");
    }
 }

const cat = new Cat('Cat');
console.log(cat.species); // Outputs: Cat
cat.purr(); // Outputs: purr

const dog = new Dog('Dog');
console.log(dog.species); // Outputs: Dog
dog.bark(); // Outputs: woof


// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
