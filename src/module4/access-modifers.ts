class BankAccount {
    constructor(public id: number, public name: string, protected _balance: number) {
        //
    }

    getBalance() {
        console.log(`My current balance is: ${this._balance}`);
    }
    addDeposit(amount: number) {
        this._balance = this._balance + amount;
    }
}

class StudentAccount extends BankAccount {
    test() {
        this.
    }
}

const myAccount = new BankAccount(444, "Persian", 20);
console.log(myAccount);
