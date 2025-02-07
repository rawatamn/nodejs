function person(name,age){
    this.name=name;
    this.age=age;
    this.greet=function(){
        console.log(`hey my name is ${this.name} and my age is ${this.age}`)
    }
}
const person1=new person("aman",24)
person1.greet()