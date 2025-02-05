str1="listen"
str2="silent"
function anagram(){
    if(str1.length!==str2.length){
        return false
    }
    for(let i=0;i<str1.length;i++){
        let chr=str1[i];
        if(!str2.includes(chr)){
return false;
        }
    }
    return true;
}
let result=anagram()
console.log(result?"its anagram":"itsnot")