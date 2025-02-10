const cartItems = [
    { product: "Laptop", price: 60000 },
    { product: "Mouse", price: 3000 },
    { product: "Keyboard", price: 7000 }
];
const totalPrice=cartItems.reduce((total,item)=>
    total+=item.price,0
)
console.log(totalPrice)