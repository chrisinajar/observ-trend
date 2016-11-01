var test = require('tape');
var ObservTrend = require('./');
var Value = require('observ');

test('basic', function (t) {
  var value = Value(123);
  var trend = ObservTrend(value);
  t.plan(4);

  t.equals(trend(), 0, 'starts at 0');
  value.set(125);
  t.equals(trend(), 1, '1 when it goes up');
  value.set(124);
  t.equals(trend(), -1, 'negative 1 when it goes down');

  trend(t.pass);
  value.set(2);
});
