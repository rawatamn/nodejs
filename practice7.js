str1="listen"
str2="silent"
if(str1.length!==str2.length){
return false
}
if (str1.split('').sort().join('') === str2.split('').sort().join('')) {
    console.log("strings are equal");
}
else{
    console.log("not equal")
}
