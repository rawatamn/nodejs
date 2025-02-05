class Animal {
    static info() {
      return "Animals are living beings.";
    }
  }
  
  class Dog extends Animal {}
  
  console.log(Dog.info()); //  "Animals are living beings."
  