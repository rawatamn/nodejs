class animal{
 speak(){
console.log("Every animal speak diffrently")
    }

}
class dog extends animal{
    speak(){
        console.log("bark")
    }
}
let dogs=new dog;
dogs.speak()