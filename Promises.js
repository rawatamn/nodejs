let checkEven = new Promise((resolve, reject) => {
    let number = 5;
    if (number % 2 === 0) resolve("The number is even!");
    else reject("The number is odd!");
});
checkEven
    .then((message) => console.log(message),
(error)=>console.error(error)) 

