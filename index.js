var Observ = require('observ');

module.exports = observTrend;

function observTrend (otherValue) {
  var value = Observ(0);
  var oldValue = otherValue();

  otherValue(function (newValue) {
    if (newValue === oldValue) {
      return value.set(0);
    } else if (newValue > oldValue) {
      return value.set(1);
    } else if (newValue < oldValue) {
      return value.set(-1);
    }
  });

  return getOrListen;

  function getOrListen () {
    // wrap value to disallow setting
    return value.apply(this, arguments);
  }
}
