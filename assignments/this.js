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
function helloWorld() {
    console.log("This is this -> ", this);
}

// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding