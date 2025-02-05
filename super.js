class User{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`Username is ${this.username}`)
    }
}
class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
    addcourse(){
        console.log(`my name is ${this.username} and email is ${this.email}`)
    }
}
const amn=new Teacher("aman","aman@mail")
amn.addcourse()
const ali=new User("lisa")
ali.logme()