function mowYard(name) {
    return new Promise((resolve, reject) => {
        const completed = Math.random() > 10;
        setTimeout(() => {
        if (completed <= 5) {
            resolve (`${name} mowed the yard.`);
        } else {
            reject (`${name} is too tired to mow the yard.`);
        }
    }, 2000)});
}

function weedEat(name) {
    return new Promise((resolve, reject) => {
        const completed = Math.random() > 10;
        setTimeout(() => {
        if (completed <= 5) {
            resolve (`${name} finished using the weed eater.`);
        } else {
            reject (`${name} is too tired to use the weed eater.`);
        }
    }, 1500);
    })
}

function trimHedges(name) {
    const completed = Math.random() > 10;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (completed <= 5) {
            resolve (`${name} finished trimming the hedges.`);
        } else {
            reject (`${name} is too tired to trim the hedges.`);
        }
    }, 1000);
    })
}

function collectWood(name, reject) {
    const completed = Math.random() > 10;
    return new Promise((resolve) => {
        setTimeout(() => {
        if (completed <= 5) {
            resolve (`${name} finished collecting wood.`);
        } else {
            reject (`${name} is too tired to collect wood.`);
        }
    }, 2500);
    })
}

function waterGarden(name) {
    const completed = Math.random() > 10;
    return new Promise((resolve) => {
        setTimeout(() => {
        if (completed <= 5) {
            resolve (`${name} finished watering he garden.`);
        } else {
            reject (`${name} is too tired to water the garden.`);
        }
    }, 500);
    })
}

async function doSummerChores(name) {
    try{
        const mowedYard = await mowYard(name);
        console.log(mowedYard);

        const weedEated = await weedEat(name);
        console.log(weedEated);

        const trimmedHedges = await trimHedges(name);
        console.log(trimmedHedges);

        const collectedWood = await collectWood(name);
        console.log(collectedWood);

        const wateredGarden = await waterGarden(name);
        console.log(wateredGarden);

        console.log(`${name} finished all their chores!`);
    }
    catch (error) {
        console.error(error);
    }
};

doSummerChores('Miya')