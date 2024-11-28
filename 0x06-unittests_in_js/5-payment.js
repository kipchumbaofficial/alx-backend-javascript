// Send Payment
const Utils = require('./utils');

module.exports = function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const rslt = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${rslt}`);
  return rslt;
}

