/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
// The "this" keyword Window, or otherwise known as Global, Binding assigns the value of "this" to the window or
// console object. This would mean that whenever a function is contained in the global scope, the value of this
// inside of that function will refer to the window or console object.
* 2. 
// The Implicit Binding holds that, whenever a function is called by a preceding dot, the object before that dot
// is referred to with "this".
* 3. 
// To understand the New Binding, we should understand that JavaScript allows us to create specific objects based
// on shared constructor functions. Whenever a constructor function is used to create a new object (and if it is 
// preceeded by new), then the "this" inside of that function would now refer to the specific instance of the object 
// that is created and returned by the constructor function.
* 4. 
// Lastly, "this" can be explicitly defined through "Explicit Binding". Thus, whenever a call, apply or binding is
// is called on a method, the this will then refer to the value object passed in.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log("*** Principle 1 ***");
function helloWorld() {
    console.log("This is this -> ", this);
}
helloWorld();

// Principle 2

// code example for Implicit Binding
console.log("\n*** Principle 2 ***");

const objectPreceedingDot = {
    name: "Object Preceeding the Dot",
    greetCaller() {
        console.log(`Hi there, my name is ${this.name}`)
    }
}

objectPreceedingDot.greetCaller();

// Principle 3

// code example for New Binding
console.log("\n*** Principle 3 ***");

function Animal(animalName, animalType) {
    this.name = animalName;
    this.type = animalType;
    this.greet = function() {
        return `Hi, my name is ${this.name} and I am of type ${this.type}`;
    }
}

const ray = new Animal("Ray", "Dog");
ray.greet();

// Principle 4
console.log("\n*** Principle 4 ***");

const emma = new Animal("Emma", "Bird");
console.log("\n*** Without Explicit Binding ***");
console.log("ray.greet() => ", ray.greet());
console.log("emma.greet() => ", emma.greet());

console.log("\n*** With Explicit Binding ***");
console.log("ray.greet().call(emma) => ", ray.greet.call(emma));
console.log("emma.greet().apply(ray) => ", emma.greet.apply(ray));


// code example for Explicit Binding