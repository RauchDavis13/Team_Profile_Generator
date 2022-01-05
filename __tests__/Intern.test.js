const Intern = require('../lib/Intern');
// const Employee = require('../lib/Employee');

test('tests for an intern object', () => {
  const intern = new Intern();

  expect(typeof(intern)).toBe("object");
  
});

test('tests getSchool via getSchool()', () => {
  const testValue = 'SchoolOfDudeness';
  const intern = new Intern('Dude', 1, 'test@test.com', testValue);

  expect(intern.getSchool()).toBe(testValue);
});

test('tests getRole() should return \"Intern\"', () => {
  const testValue = 'Intern';
  const intern = new Intern('Dude', 1, 'test@test.com', testValue);

  expect(intern.getRole()).toBe(testValue);
});