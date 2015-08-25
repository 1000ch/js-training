var assert = require('power-assert').customize({ output: { maxDepth: 0 }});
var func   = require('../question/coke-bonus');

describe('coke-bonus', function () {

  it('is a function', function () {
    assert.deepEqual(typeof func, 'function', 'coke-bonus.js is a function');
  });

  it('return total coke count', function () {
    var actual   = func(4);
    var expected = 5;
    assert.deepEqual(actual, expected, 'case 1');
  });

  it('return total coke count', function () {
    var actual   = func(16);
    var expected = 21;
    assert.deepEqual(actual, expected, 'case 2');
  });

  it('return total coke count', function () {
    var actual   = func(100);
    var expected = 132;
    assert.deepEqual(actual, expected, 'case 2');
  });
});
