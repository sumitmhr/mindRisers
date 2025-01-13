

class Bank {
  constructor(bankName) {
    this.bankName = bankName;
  }

  balance = 0;

  deposit(amount) {
    this.balance += amount;
    console.log('Amount Added');
  }
}

const bank = new Bank('NIBL');
bank.deposit(10000);
console.log(bank.balance);
// const bank1 = new Bank('NIC');
// console.log(bank.bankName);
// console.log(bank1.bankName);