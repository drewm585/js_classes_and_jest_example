const {Animal} = require('../app')

let test_animal = new Animal('Gecko', 'Green');

// Animal tests
test('test_animal name == Gecko', () => {expect(test_animal.GetName()).toBe('Gecko');});
test('test_animal color == Green', () => {expect(test_animal.GetColor()).toBe('Green');});
test('test_animal type == animal', () => {expect(test_animal.GetType()).toBe('animal');});
