const groceries = [
    { name: "Milk", price: 200 },
    { name: "Rice", price: 800 },
    { name: "Oil", price: 1200 },
    { name: "Bread", price: 150 }
];
const newPrice=groceries.filter(item=>item.price>500)
.map(item=>({...item,price:item.price*.9}))
.reduce((total,item)=>total+=item.price,0)
console.log(newPrice)