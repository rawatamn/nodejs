let person = {
    firstName: "amn",
    lastName: "singh",
    rank: 43
};
let userId = "";
let i;
for (i in person) {
    userId += person[i];
   
}
console.log(userId);