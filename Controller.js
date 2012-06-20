var Model = require('./Model');
var TransferMoneyContext = require('./TransferMoneyContext');

exports.transfer = function (amount, source, destination) {
  var sourceAccount = Model.Account.findByNumber(source);
  var destinationAccount = Model.Account.findByNumber(destination);
  var context = new TransferMoneyContext(amount, sourceAccount, destinationAccount);
  context.enact();
};


