var assert = require('power-assert').customize({ output: { maxDepth: 0 }});
var func   = require('../question/how-many-words');

describe('how-many-words', function () {

  it('is a function', function () {
    assert.deepEqual(typeof func, 'function', 'how-many-words.js is a function');
  });

  it('parse a sentence', function () {
    var actual   = func('Hello, nice to meet you!');
    var expected = {
      charactors: 18,
      words: 5
    };
    assert.deepEqual(actual, expected, 'case 1');
  });

  it('parse a sentence', function () {
    var actual   = func("Don't code today what you can't debug tomorrow");
    var expected = {
      charactors: 37,
      words: 8
    };
    assert.deepEqual(actual, expected, 'case 2');
  });
});