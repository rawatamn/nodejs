let personPrototype = {
    greet: function () {
        console.log(`Hello, my name is ${this.name} and belongs to ${this.city}`);
    }
};

const person3 = Object.create(personPrototype);
person3.name = "Mike";
person3.city="H.p"
person3.greet();  // Output: Hello, my name is Mike
console.log(person3)

