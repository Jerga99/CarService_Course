

function runApp() {
    const firstName = 'Filip'; // String
    const lastName = 'Jerga';

    const firstName2 = 'John';
    const lastName2 = 'Green';

    function sayHello(fName, lName) {
        console.log('Hello ' + fName + ' ' + lName);
    }

    sayHello(firstName, lastName);
    sayHello(firstName2, lastName2);
    sayHello("Martha", "Doppler");
}

runApp();

