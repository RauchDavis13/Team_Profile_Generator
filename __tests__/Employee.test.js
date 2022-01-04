const Employee = require('../lib/Employee.js');

test('tests for an employee object', () => {
  const employee = new Employee();

  expect(typeof(employee)).toBe("object");
  
});

test('tests name via constructor arguments', () => {
  const name = 'Dude';
  const employee = new Employee(name);

  expect(employee.name).toBe(name);
});

test('tests id via constructor arguments', () => {
  const testValue = 1234;
  const employee = new Employee("Dude", testValue);

  expect(employee.id).toBe(testValue);
});

test('tests email via constructor arguments', () => {
  const testValue = 'test@test.com';
  const employee = new Employee('Dude', 1, testValue);

  expect(employee.email).toBe(testValue);
});


test('tests getName via getName()', () => {
  const testValue = 'Dude';
  const employee = new Employee(testValue);

  expect(employee.getName()).toBe(testValue);
});

test('tests getId via getId()', () => {
  const testValue = 1234;
  const employee = new Employee('Dude', testValue);

  expect(employee.getId()).toBe(testValue);
});

test('tests getEmail via getEmail()', () => {
  const testValue = 'test@test.com';
  const employee = new Employee('Dude', 1, testValue);


  expect(employee.getEmail()).toBe(testValue);
});

test('can getRole() should return \"Employee\"', () => {
  const testValue = 'Employee';
  const employee = new Employee('Dude', 1, 'test@test.com');

  expect(employee.getRole()).toBe(testValue);
});

