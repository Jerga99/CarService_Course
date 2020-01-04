

function runApp() {
    const brand = 'mercedes';
    const type = 'benz';
    const produceYear = 1995;

    const brand2 = 'mitshubishi';
    const type2 = 'lancer';
    const produceYear2 = 2002;

    // displayCarInfo
    // params: brand, type, year
    function displayCarInfo(brand, type, year) {
        console.log(`${brand} ${type} - ${year}`);
    }

    displayCarInfo(brand, type, produceYear);
    displayCarInfo(brand2, type2, produceYear2);
}

runApp();

