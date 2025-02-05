function add(a){
    return function(b){
        return a+b;
    }
}
const addtwo = add(5)
console.log(addtwo(4))