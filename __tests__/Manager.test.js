const Manager = require('../lib/Manager');
// const Employee = require('../lib/Employee');

test('tests for an manager object', () => {
  const manager = new Manager();

  expect(typeof(manager)).toBe("object");
  
});

test('tests getOfficeNum via getOfficeNum()', () => {
  const testValue = 'SchoolOfDudeness';
  const manager = new Manager('Dude', 1, 'test@test.com', testValue);

  expect(manager.getOfficeNum()).toBe(testValue);
});

test('tests getRole() should return \"Manager\"', () => {
  const testValue = 'Manager';
  const manager = new Manager('Dude', 1, 'test@test.com', testValue);

  expect(manager.getRole()).toBe(testValue);
});