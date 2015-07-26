var assert = require('power-assert');
var func   = require('../question/distinct');

describe('distinct', function () {

  it('is a function', function () {
    assert.deepEqual(typeof func, 'function', 'distinct.js is a function');
  });

  it('parse an array', function () {
    var actual   = func([{
      foo: 46482,
      bar: 99541,
      baz: 2446
    }, {
      baz: 959526,
      foo: 23
    }]);
    var expected = {
      foo: '23468',
      baz: '24569'
    };
    assert.deepEqual(actual, expected, 'case 1');
  });

  it('parse an array', function () {
    var actual   = func([{
      aaa: 'ghsag',
      aaab: 'sjhdhsa',
      abbb: 'sdddkll'
    }, {
      aaab: 'sjkajska',
      aaa: 'ashdjsad'
    }]);
    var expected = {
      aaa: 'adghjs',
      aaab: 'adhjks'
    };
    assert.deepEqual(actual, expected, 'case 2');
  });

  it('parse an array', function () {
    var actual   = func([{
      baz: 'ghsa0',
      foo: '99sa',
      hoge: 'sd2l'
    }, {
      baz: '12',
      aaa: 'ks8'
    }, {
      hoge: '81hd',
      foo: '28jx',
      baz: '239k'
    }]);
    var expected = {
      baz: '01239aghks'
    };
    assert.deepEqual(actual, expected, 'case 3');
  });
});