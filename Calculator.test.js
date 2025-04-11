// Calculator.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Calculator } from './Calculator.js';

test('add positive numbers', () =>
{
    assert.equal(Calculator.add(4, 6), 10);
});

test('add negative numbers', () =>
{
    assert.equal(Calculator.add(-3, -2), -5);
});

test('subtract to negative result', () =>
{
    assert.equal(Calculator.subtract(2, 5), -3);
});

test('subtract zero', () =>
{
    assert.equal(Calculator.subtract(7, 0), 7);
});

test('multiply by zero', () =>
{
    assert.equal(Calculator.multiply(9, 0), 0);
});

test('multiply negative numbers', () =>
{
    assert.equal(Calculator.multiply(-4, -3), 12);
});

test('multiply positive and negative', () =>
{
    assert.equal(Calculator.multiply(5, -2), -10);
});

test('divide positive numbers', () =>
{
    assert.equal(Calculator.divide(10, 2), 5);
});

test('divide by one', () =>
{
    assert.equal(Calculator.divide(8, 1), 8);
});

test('division by zero returns 0', () =>
{
    assert.equal(Calculator.divide(10, 0), 0);
});

test('printHistory outputs correct history', () =>
{

    Calculator.add(1, 2);
    Calculator.subtract(5, 3);
    Calculator.multiply(2, 4);
    Calculator.divide(10, 2);

    let output = '';
    const originalLog = console.log;
    console.log = (str) => { output += str + '\n'; };

    Calculator.printHistory();

    console.log = originalLog;

    assert.match(output, /Operation History:/);
    assert.match(output, /\+ 1, 2 = 3/);
    assert.match(output, /- 5, 3 = 2/);
    assert.match(output, /\* 2, 4 = 8/);
    assert.match(output, /\/ 10, 2 = 5/);
});
