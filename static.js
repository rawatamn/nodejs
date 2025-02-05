class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Instance method
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  
    // Static method
    static description() {
      return "This is a Person class.";
    }
  }
  
  const person1 = new Person("Alice", 25);
  person1.greet(); // ✅ "Hello, my name is Alice"
  console.log(Person.description()); // ✅ "This is a Person class."
  
  // ❌ person1.description(); // Error: person1.description is not a function
  