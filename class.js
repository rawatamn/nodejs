class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`Hello, my name is ${this.name} and i am ${this.age} year old`)
    }
}
const person1=new Person("Aman",24)
person1.greet()