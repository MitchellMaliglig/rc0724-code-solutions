/* global expect, banMethods, takeRight */

describe('takeRight(array, count)', function () {
  beforeEach(function () {
    expect(takeRight).to.be.a('function');
    banMethods(takeRight, 'shift', 'pop', 'splice');
  });

  it('takes the last 2 elements of ["foo", "bar", "baz", "qux"]', function () {
    const input = Object.freeze(['foo', 'bar', 'baz', 'qux']);
    const output = takeRight(input, 2);
    expect(output).to.deep.equal(['baz', 'qux']);
  });

  it('takes the last element of [1, 2, 3, 4, 5]', function () {
    const input = Object.freeze([1, 2, 3, 4, 5]);
    const output = takeRight(input, 1);
    expect(output).to.deep.equal([5]);
  });

  it('takes undefined elements', function () {
    const input = Object.freeze([undefined, undefined, undefined]);
    const output = takeRight(input, 2);
    expect(output).to.deep.equal([undefined, undefined]);
  });

  it('takes the last 3 elements of [false, true, false, true]', function () {
    const input = Object.freeze([false, true, false, true]);
    const output = takeRight(input, 3);
    expect(output).to.deep.equal([true, false, true]);
  });

  it('takes the last 7 elements of [] (empty array)', function () {
    const input = Object.freeze([]);
    const output = takeRight(input, 7);
    expect(output).to.deep.equal([]);
  });

  it('takes the last 5 elements of [4, 5, 6, 7]', function () {
    const input = Object.freeze([4, 5, 6, 7]);
    const output = takeRight(input, 5);
    expect(output).to.deep.equal([4, 5, 6, 7]);
  });
});
