

// var
  // function scope
  // undefined in case i am accesing variable before declaration

// let
  // block
  // ReferenceError in case i am accesing variable before declaration

// const
  // block
  // ReferenceError in case i am accesing variable before declaration
  // const assign value only once 

// Hoisting
function runApp() {
    console.log(firstName2);
    var firstName = 'Filip'; // String
    var lastName = 'Jerga';

    let firstName2 = 'John';
    const lastName2 = 'Green';

    {
        var fScope = 'Function Scope!';
        let bScope = 'Block Scope';
    }

    function sayHello(fName, lName) {
        console.log(fScope);
        console.log('Hello ' + fName + ' ' + lName);
    }

    sayHello(firstName, lastName);
    sayHello(firstName2, lastName2);
    sayHello("Martha", "Doppler");
}

runApp();

