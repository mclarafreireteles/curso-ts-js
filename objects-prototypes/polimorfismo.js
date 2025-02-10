function Account(agency, account, balance){
    this.agency = agency
    this.account = account
    this.balance = balance
}

Account.prototype.withdraw = function(value) {
    if (this.balance < value) {
        this.getBalance()
        return;
    }

    this.balance -= value
    this.getBalance()
}
Account.prototype.deposit = function(value) {
    this.balance += value
    this.getBalance()
}
Account.prototype.getBalance = function() {
    console.log(
        `Ag/C: ${this.agency} / ${this.account} Balance: ${this.balance}`
    )
}

const account1 = new Account(11, 22, 1000)

account1.getBalance()
account1.withdraw(10)

