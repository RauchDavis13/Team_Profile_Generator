const Engineer = require('../lib/Engineer');

test('creates an Employee object', () => {
  const employee = new Employee('Dude');

  expect(employee.name).toBe('Dude');
});