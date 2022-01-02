const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
  const employee = new Employee('Dude');

  expect(employee.name).toBe('Dude');
  expect(employee.email).toBe('');
  expect(employee.gitHubUser).toBe('');
  expect(employee.employeeType).toBe('');
})