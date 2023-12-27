// Creating an object
const myObject = {
  name: 'John',
  age: 25,
  city: 'New York',

  // Method getInfo that prints object properties
  getInfo: function () {
    // Printing information about the object
    console.log("Object information:");

    // Iterating through all object properties and their values
    for (const key in this) {
      if (this.hasOwnProperty(key) && typeof this[key] !== 'function') {
        console.log(`${key}: ${this[key]}`);
      }
    }
  },
};

// Printing information about the object
myObject.getInfo();

// Adding a new property to the object
myObject.newProperty = 'New property!';

// Printing information about the object after adding a new property
myObject.getInfo();
