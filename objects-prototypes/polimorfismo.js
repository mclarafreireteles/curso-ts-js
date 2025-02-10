function Account(agency, account, balance){
    this.agency = agency
    this.account = account
    this.balance = balance
}

Account.prototype.withdraw = function(value) {
    if (this.balance < value) {
        this.getBalance()
        console.log("Insuficient balance")
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

function CurrentAccount(agency, account, balance, limit) {
    Account.call(this)
    this.limit = limit
}

CurrentAccount.prototype = Object.create(Account.prototype)
CurrentAccount.prototype.constructor = CurrentAccount

CurrentAccount.prototype.withdraw = function(value) {
    if ((this.balance + this.balance) < value) {
        this.getBalance()
        console.log("Insuficient balance")
        return;
    }

    this.balance -= value
    this.getBalance()
}

const CC = new CurrentAccount(123, 1, 1000, 100)