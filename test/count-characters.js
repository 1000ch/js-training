var assert = require('power-assert');
var func   = require('../question/count-characters');

describe('count-characters', function () {

  it('is a function', function () {
    assert.deepEqual(typeof func, 'function', 'count-characters.js is a function');
  });

  it('counts', function () {
    var actual   = func('abcbacacc');
    var expected = {
      a: 3,
      b: 2,
      c: 4
    };
    assert.deepEqual(actual, expected, 'case 1');
  });

  it('counts', function () {
    var actual   = func('chuWecHwew');
    var expected = {
      c: 2,
      h: 2,
      u: 1,
      w: 3,
      e: 2
    };
    assert.deepEqual(actual, expected, 'case 2');
  });

  it('counts', function () {
    var actual   = func('#ll$[f*re]q');
    var expected = {
      l: 2,
      f: 1,
      r: 1,
      e: 1,
      q: 1
    };
    assert.deepEqual(actual, expected, 'case 3');
  });
});