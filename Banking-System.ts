class BankAcccount {
    public account_holder_name : string;
    readonly account_number : number;
    private balance : number;

    constructor (ACN:string, AN:number, B:number) {
        this.account_holder_name = ACN;
        this.account_number = AN;
        this.balance = B;
    }

    Deposite(account_holder_name:string, amount:number = 20000) : void {
        if (this.account_holder_name === account_holder_name) {
            this.balance += amount;
            console.log(`Deposited $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Account holder name does not match.");
        }
    }

    withdraw(account_holder_name:string, ammount:number) : void {
        if(this.account_holder_name === account_holder_name) {
            if (this.balance >= ammount) {
                this.balance-=ammount;
            }
            else{                console.log("Insufficient balance.");
            }
    }
} 

   Balance(account_holder_name:string) :number {
        if (this.account_holder_name === account_holder_name) {
            return this.balance;
        } else {
            console.log("Account holder name does not match.");
            return -1; // Return -1 to indicate an error
        }       


}
}
