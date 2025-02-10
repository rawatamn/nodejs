//list the firstname of student whose age is more than 30
const users=[
  {firstName:"john",lastName:"Biden",age:26},
  {firstName:"jimmy",lastName:"Cob",age:75},
  {firstName:"Sam",lastName:"Lewis",age:50},
  {firstName:"Ronald",lastName:"Mathew",age:26},  
];
const outputs=users.filter((x)=>
  x.age>30
).map((x)=>x.firstName)
console.log(outputs)