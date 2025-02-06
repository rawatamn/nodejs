function createuser(username,score){
this.username=username;
this.score=score;
}
createuser.prototype.increment=function(){
    this.score++;
    console.log(this.score)
    console.log(this.username)
}
const person= new createuser("aman",81)
person.increment()
console.log(createuser.__proto__)