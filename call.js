function greet(name,place){
    console.log(`Hello , ${name} My name is ${this .name} and i am from ${place}`)
}
let person={
    name:"John"
}
greet.apply(person,["Alice","H.p."])
greet.call(person,"Alice","H.p.")
let aman =greet.bind(person,"Aly","H.p.")
aman()