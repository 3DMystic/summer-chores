function mowYard(name, callback) {
    setTimeout(() => {
        console.log(`${name} is mowed the yard.`);
        callback();
    }, 2000);
}

function weedEat(name, callback) {
    setTimeout(() => {
        console.log(`${name} finished using the weed eater.`);
        callback();
    }, 1500);
}

function trimHedges(name, callback) {
    setTimeout(() => {
        console.log(`${name} finished trimming the hedges.`);
        callback();
    }, 1000);
}

function collectWood(name, callback) {
    setTimeout(() => {
        console.log(`${name} finished collecting wood.`);
        callback();
    }, 2500);
}

function waterGarden(name, callback) {
    setTimeout(() => {
        console.log(`${name} finished watering he garden.`);
        callback();
    }, 500);
}

function doSummerChores(name) {
    mowYard(name, () => {
        weedEat(name, () => {
            trimHedges(name, () => {
                collectWood(name, () => {
                    waterGarden(name, () => {
                        console.log(`${name} finished all their chores!`);
                    });
                });
            });
        });
    })
};

doSummerChores('Miya')