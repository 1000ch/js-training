var assert = require('power-assert');
var func   = require('../question/parse-timeline');

describe('parse-timeline', function () {

  it('is a function', function () {
    assert.deepEqual(typeof func, 'function', 'parse-timeline.js is a function');
  });

  it('parse a string', function () {
    var actual   = func('001110010000111110');
    var expected = [
      { start: 2, width: 3 },
      { start: 7, width: 1 },
      { start: 12, width: 5 }
    ];
    assert.deepEqual(actual, expected, 'case 1');
  });

  it('parse a string', function () {
    var actual   = func('11100100101011110111101');
    var expected = [
      { start: 0, width: 3 },
      { start: 5, width: 1 },
      { start: 8, width: 1 },
      { start: 10, width: 1 },
      { start: 12, width: 4 },
      { start: 17, width: 4 },
      { start: 22, width: 1 }
    ];
    assert.deepEqual(actual, expected, 'case 2');
  });

  it('parse a string', function () {
    var actual   = func('000000001111000000111111111111111110000000000000000000000000000000000000000111111111111111111111');
    var expected = [
      { start: 8, width: 4 },
      { start: 18, width: 17 },
      { start: 75, width: 21 }
    ];
    assert.deepEqual(actual, expected, 'case 3');
  });

  it('parse a string', function () {
    var actual   = func('111111111111111111111111');
    var expected = [
      { start: 0, width: 24 }
    ];
    assert.deepEqual(actual, expected, 'case 4');
  });

  it('parse a string', function () {
    var actual   = func('1111111111111111111111110000000000000');
    var expected = [
      { start: 0, width: 24 }
    ];
    assert.deepEqual(actual, expected, 'case 5');
  });

  it('parse a string', function () {
    var actual   = func('000000000000000000000000');
    var expected = [];
    assert.deepEqual(actual, expected, 'case 6');
  });
});