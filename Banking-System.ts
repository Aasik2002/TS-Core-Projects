class BankAccount {
    public account_holder_name: string;
    readonly account_number: number;
    private balance: number;

    // Constructor
    constructor(account_holder_name: string, account_number: number, balance: number) {
        this.account_holder_name = account_holder_name;
        this.account_number = account_number;
        this.balance = balance;
    }

    // Deposit function
    deposit(account_holder_name: string, amount: number = 20000): void {
        if (this.account_holder_name === account_holder_name) {
            this.balance += amount;
            console.log(`Deposited $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Account holder name does not match.");
        }
    }

    // Withdraw function
    withdraw(account_holder_name: string, amount: number): void {
        if (this.account_holder_name === account_holder_name) {
            if (this.balance >= amount) {
                this.balance -= amount;
                console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
            } else {
                console.log("Insufficient balance.");
            }
        } else {
            console.log("Account holder name does not match.");
        }
    }

    // Check balance function
    checkBalance(account_holder_name: string): number {
        if (this.account_holder_name === account_holder_name) {
            return this.balance;
        } else {
            console.log("Account holder name does not match.");
            return -1;
        }
    }
}


// Create bank accounts
const BankAccount1 = new BankAccount("Ahemed Aasik", 2002209067, 100000);
const BankAccount2 = new BankAccount("Haleem Akmal", 299437490308, 50000);
const BankAccount3 = new BankAccount("Aflal Ahemed", 346474689587, 2000);


// Deposit money
BankAccount1.deposit("Ahemed Aasik", 5000);

// Withdraw money
BankAccount1.withdraw("Ahemed Aasik", 3000);

// Check balance
console.log("Current Balance:", BankAccount1.checkBalance("Ahemed Aasik"));
