let arr = [12, 5, 8, 7, 15, 4, 20, 1];
const solution=(arr)=> {
  let evenSum = 0;
  let oddindex = 0;
  let producteven = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      evenSum += arr[i];
    }
    if(arr[i]%2==1){
        oddindex++;
    }
      if (i % 2 == 0) {
        producteven = arr[i] * producteven;
      }
  }

  console.log(`even sum is ${evenSum} sum of oddcount is ${oddindex} and product is ${producteven}`)}
  solution(arr);