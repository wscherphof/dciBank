function Account () {
  this.number = null; // hack
	this.balance = 1000; // hack
}
Account.prototype.increaseBalance = function (amount) {
  this.balance += amount;
};
Account.prototype.decreaseBalance = function (amount) {
  this.balance -= amount;
};
Account.prototype.log = function (message) {
  console.log({account: this, message: message});
};

exports.Account = {
  findByNumber: function (number) {
    var account = new Account();
    account.number = number; // hack
    return account;
  }
};
