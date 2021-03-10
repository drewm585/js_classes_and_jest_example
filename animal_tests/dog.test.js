const {Dog} = require('../app')

let test_dog = new Dog('Mitzie', 'brown', 'short');

// Dog tests
test('test_dog name == Mitzie', () => {expect(test_dog.GetName()).toBe('Mitzie');});
test('test_dog color == brown', () => {expect(test_dog.GetColor()).toBe('brown');});
test('test_dog tail == short', () => {expect(test_dog.GetTail()).toBe('short');});
test('test_dog type == dog', () => {expect(test_dog.GetType()).toBe('dog');});