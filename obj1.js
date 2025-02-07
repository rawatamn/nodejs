const person = {
    name: "John",
    age: 30,
    isStudent: false,
    greet: function() {
      console.log("Hello, my name is " + this.name);
    }
  };
  
  console.log(person.name); 
  person.greet();
  