class BankAccount{
    #balance;
    constructor(initialbalance){
        this.#balance=initialbalance
    }
    depositAmount(amount){
        if(isNaN(amount)){
            throw new console.error("amount is not in number");
            
        }
        this.#balance+=amount;
    }
    getBalance() {
        return this.#balance; // Controlled access
      }
}
const amnt=new BankAccount(400);
amnt.depositAmount(300)
console.log(amnt.getBalance())