function x(){
    let a=7;
  return  function y(){
        console.log(a);
   }
   
}
let z=x()
console.log(z())
z()