var test = require('tape');
var iadd = require('./interval-add');

test('add', function(t) {
  var r = iadd([-1, 4], [3, 10]);
  t.deepEqual(r, [2, 14]);
  t.end();
});

test('accepts out param', function(t) {
  var out = [0, 0];
  var r = iadd([1, 3], [0, 4], out);

  t.equal(r, out);
  t.deepEqual(r, [1, 7]);
  t.end();
});
