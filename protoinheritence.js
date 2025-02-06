let obje={
    name:"Aman",
    city:"HP",
    getIntro:function(){
        console.log(this.name+" from "+this.city)
    }
}
let obj2={
    name:"Anmol"
}
obj2.__proto__=obje;
obj2.getIntro()