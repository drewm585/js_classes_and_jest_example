class Animal {
    constructor(name, color) {
      this.name = name;
      this.color = color;
    }
  
    GetName() {
      return this.name;
    }

    GetColor() {
      return this.color;
    }

    GetType() {
      return 'animal';
    }

  }
  
  class Dog extends Animal {
    constructor(name, color, tail) {
      super(name, color); // call the super class constructor and pass in the name parameter
      this.tail = tail;
    }
  
    GetTail() {
      return this.tail;
    }

    GetType() {
      return 'dog';
    }
  }

  // Animal example
  let animal0 = new Animal('Gecko', 'Green');
  // console.log('Begin animal data');
  // console.log(animal0.GetName());
  // console.log(animal0.GetColor());
  // console.log(animal0.GetType());
  // console.log('End animal data');
  
  // Dog example
  let dog0 = new Dog('Mitzie', 'brown', 'short');
  // console.log('Begin dog data');
  // console.log(dog0.GetName());
  // console.log(dog0.GetColor());
  // console.log(dog0.GetType());
  // console.log(dog0.GetTail());
  // console.log('End dog data');

  module.exports = {Animal, Dog}