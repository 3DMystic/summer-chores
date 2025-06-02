function mowYard(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve (`${name} mowed the yard.`);
    }, 2000)});
}

function weedEat(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve (`${name} finished using the weed eater.`);
    }, 1500);
    })
}

function trimHedges(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve (`${name} finished trimming the hedges.`);
    }, 1000);
    })
}

function collectWood(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve (`${name} finished collecting wood.`);
    }, 2500);
    })
}

function waterGarden(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve (`${name} finished watering he garden.`);
    }, 500);
    })
}

function doSummerChores(name) {
    return mowYard(name)
        .then(value => {
            console.log(value);
            return weedEat(name);
        })
        .then(value => {
            console.log(value);
            return trimHedges(name);
        })
        .then(value => {
            console.log(value);
            return collectWood(name);
        })
        .then(value => {
            console.log(value);
            return waterGarden(name);
        })
        .then((value) => {
            console.log(value);
            console.log(`${name} finished all their chores!`)
        })
        .catch(error => {
            console.error('An error occurred:', error);
        });
};

doSummerChores('Miya')