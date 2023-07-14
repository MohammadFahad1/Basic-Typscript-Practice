class BankAccount {
    constructor(public id: number, public name: string, protected _balance: number) {
        //
    }

    // getter
    get balance(): number {
        return this._balance;
    }

    // setter
    set deposit(amount: number) {
        this._balance = this.balance + amount;
    }

    getBalance(): number {
        return this._balance;
    }
    addDeposit(amount: number): number {
        return this._balance = this._balance + amount;
    }
}

class StudentAccount extends BankAccount {
    test() {
        // this.
    }
}

const myAccount = new BankAccount(444, "Persian", 20);
// myAccount.getBalance()
console.log(myAccount.balance)
myAccount.deposit = 10;
console.log(myAccount.balance)
