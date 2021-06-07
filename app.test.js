const multiply = require('./app');

console.log(multiply)
describe("Filter function", () => {
test('multiply 1 * 2 to equal 2', () => {
  expect(multiply("1","2")).toBe("2");
})

test('to be a string', () => {
  expect(typeof multiply("1","2")).toBe('string');
})
test('to not be null',()=>{
    expect(multiply("1","2")).not.toBeNull();
})

})
