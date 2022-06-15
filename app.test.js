const { default: TestRunner } = require('jest-runner');
const stringLength = require('./app');
const reverseString = require('./reverse')
const Calculator = require('./calculator')
const capitalize = require('./capitalize')

test('length of a string', () => {
  expect(stringLength('mobutu')).toEqual(6)
})

test('Length is at least one', () => {
  expect(stringLength('tinga')).toBeGreaterThanOrEqual(1)
})

test('length less or equal to ten', () => {
  expect(stringLength('mobutuuuu')).toBeLessThanOrEqual(10)
})

test('reverse a string', () => {
  expect(reverseString('str')).toEqual('rts')
})

test('addition', () => {
  let con = new Calculator(9,5)
  expect(con.addition()).toBe(14)
})

test('substraction', () => {
  let sub = new Calculator(9,5)
  expect(sub.substraction()).toBe(4)
})

test('Division', () => {
  let div = new Calculator(8,2)
  expect(div.divide()).toBe(4)
})

test('Multiplicatio', () => {
  let mul = new Calculator(9,5)
  expect(mul.multiply()).toBe(45)
})

test('capitalization', ()=> {
  expect(capitalize('mobutu')).toBe('Mobutu')
})