//Initial Conditions
const totalSmurfs = 100;

let strategy = {
    smurfsLightOnOnce: new Array(totalSmurfs).fill(false),
    totalSmurfCount: 1, // 
    isLightOff: true,
    askQuestion: false,
}

console.log(`Strategy--> ${strategy}`);

function simulation() {
    const pickedSmurfs = new Set(); // Villain to find whether he picked all of them once or not
    let i = 0;// just to print iterations

    while (!strategy.askQuestion) {
        const selectedSmurf = pickASmurf(totalSmurfs);
        pickedSmurfs.add(selectedSmurf);
        console.log(`ITERATION ${i} --->  selectedSmurf - ${selectedSmurf}, isLightOff-- ${strategy.isLightOff}, smurfsLightOnOnce--> ${strategy.smurfsLightOnOnce}, totalSmurfCount-- ${strategy.totalSmurfCount}`)
        i++;
        strategy = strategyWhenEnteringRoom(selectedSmurf, strategy); // updating the strategy, whether to ask question or not
        if (strategy.askQuestion) {
            //either kill them all OR free them
            if (canFreeSmurf(pickedSmurfs)) {
                console.log("Freedom Granted");
            }
            else {
                console.log("Sorry, wrong time to ask question, KILLED ALL");
            }
        }
        else {
            console.log("still in prison");
        }
    }
}



function pickASmurf(totalSmurfs) {
    return Math.round(Math.random() * (totalSmurfs - 1) + 1); // if totalSmurfs N, returns any number between 1 to N, assumed minimum value as 1
}



function strategyWhenEnteringRoom(selectedSmurf, strategy) {
    const counterSmurf = 3; //Assuming this, he can only switch off
    if (selectedSmurf != counterSmurf && strategy.isLightOff && !(strategy.smurfsLightOnOnce[selectedSmurf - 1])) {
        strategy.isLightOff = false; // LIGHT IS ON
        strategy.smurfsLightOnOnce[selectedSmurf - 1] = true;
    }
    else if (selectedSmurf == counterSmurf && !strategy.isLightOff) {
        console.log(`inside else if`)
        strategy.isLightOff = true;
        strategy.totalSmurfCount++;
        strategy.smurfsLightOnOnce[counterSmurf - 1];
    }
    strategy.askQuestion = strategy.totalSmurfCount == totalSmurfs ? true : false;
    return strategy;
}



function canFreeSmurf(pickedSmurfs) {
    return (pickedSmurfs.size == totalSmurfs) ? true : false;

}


// INITIATING THE SIMULATION
simulation();