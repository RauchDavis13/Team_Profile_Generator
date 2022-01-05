const Engineer = require('../lib/Engineer');
// const Employee = require('../lib/Employee');

test('tests for an engineer object', () => {
  const engineer = new Engineer();

  expect(typeof(engineer)).toBe("object");
  
});

test('tests getGitHub via getGitHub()', () => {
  const testValue = 'GithubUser';
  const engineer = new Engineer('Dude', 1, 'test@test.com', testValue);

  expect(engineer.getGitHub()).toBe(testValue);
});

test('tests getRole() should return \"Engineer\"', () => {
  const testValue = 'Engineer';
  const engineer = new Engineer('Dude', 1, 'test@test.com', testValue);

  expect(engineer.getRole()).toBe(testValue);
});