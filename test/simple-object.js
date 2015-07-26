var assert = require('power-assert');
var func   = require('../question/simple-object');

describe('simple-object', function () {

  it('is a function', function () {
    assert.deepEqual(typeof func, 'function', 'simple-object.js is a function');
  });

  it('parse an object', function () {
    var actual   = func({
      id: { N: "12" },
      name: { S: "Taro" }
    });
    var expected = {
      id: 12,
      name: "Taro"
    };
    assert.deepEqual(actual, expected, 'case 1');
  });

  it('parse an object', function () {
    var actual   = func({
      users: {
        length: { N: "100" },
        items: [{
          id: { N: "12" },
          name: { S: "Taro" },
        }, {
          id: { N: "15" },
          name: { S: "Tanaka" },
        }]
      }
    });
    var expected = {
      users: {
        length: 100,
        items: [
          { id: 12, name: "Taro" },
          { id: 15, name: "Tanaka" }
        ]
      }
    };
    assert.deepEqual(actual, expected, 'case 2');
  });
});