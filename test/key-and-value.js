var assert = require('power-assert');
var func   = require('../question/key-and-value');

describe('key-and-value', function () {

  it('is a function', function () {
    assert.deepEqual(typeof func, 'function', 'key-and-value.js is a function');
  });

  it('parse an object', function () {
    var actual   = func({});
    var expected = {
      key: 0,
      value: 0
    };
    assert.deepEqual(actual, expected, 'case 1');
  });

  it('parse an object', function () {
    var actual   = func({
      '56a7': 12,
      ce7w6: 100
    });
    var expected = {
      key: 76,
      value: 112
    };
    assert.deepEqual(actual, expected, 'case 2');
  });

  it('parse an object', function () {
    var actual   = func({
      k3kd9: '2%11[',
      j37cn3: {
        k012k: 90
      }
    });
    var expected = {
      key: 64,
      value: 103
    };
    assert.deepEqual(actual, expected, 'case 3');
  });
});