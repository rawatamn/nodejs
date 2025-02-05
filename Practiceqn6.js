let str = "Hello";
let result={}

for (let i = 0; i < str.length; i++) {
    let count=str[i]
if(!result[count]){
    result[count]=0;
}

    result[count]++;

}
console.log(result)