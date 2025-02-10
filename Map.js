const arr=[7,8,5,9]
console.log(arr.map(num=>Math.sqrt(num)))
console.log(arr)
const items=["Apple","Mango","Banana","Cherry"]
const itemWithindex=items.map((item,index,arr)=>{
    return `${item}- at index ${index} with array leangth ${arr.length}`
})
console.log(itemWithindex)