function withTransferMoneySource () {
  this.transferTo = function (amount, sink) {
    this.decreaseBalance(amount);
    sink.transferFrom(amount, this);
    this.log({out: amount, sink: sink.number});
  };
}

function withTransferMoneySink () {
  this.transferFrom = function (amount, source) {
    this.increaseBalance(amount);
    this.log({in: amount, source: source.number});
  };
}

function TransferMoneyContext (amount, sourceAccount, destinationAccount) {
  this.amount = amount;
  this.source = sourceAccount;
  this.sink = destinationAccount;

  withTransferMoneySource.call(this.source);
  withTransferMoneySink.call(this.sink);
}

TransferMoneyContext.prototype.enact = function () {
  this.source.transferTo(10, this.sink);
};

module.exports = TransferMoneyContext;
