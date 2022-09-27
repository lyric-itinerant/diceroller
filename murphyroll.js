/* Murphy version: 
science roll 16 dice, 8/9/10 are successes, 9s and 10s reroll
and it's rote every time */

let dicepool, successes, rolldie, nines, tens, currentdie, totalrolls, totalsuccesses;
    dicepool=16;
    successes=0;
    totalsuccesses=0;
    nines=0;
    tens=0;
    //HEYYOU: Change totalrolls to the number of times you want to roll
    totalrolls=3;

    //this rolls dice and records successes and nines and tens for later rerolling
    //0s represent tens, like on a d10
    function rollthembones(dicepool) {
        for (let i=0; i < dicepool; i++) {
        
            currentdie=Math.floor(Math.random() * 10); //random integer between 0 and 9
            if (currentdie == 0) {
            successes++
            tens++
            println("rolled a " +currentdie);
            } 
            else if (currentdie == 9){
            successes++
            nines++
            println("rolled a " +currentdie);
            }
            else if
            (currentdie == 8 ){
            successes++
            println("rolled a " +currentdie);
            }
        }
    }

// rote action allows one reroll of non-success dice before rerolling the nines and tens
function roteaction() {
        let rotereroll;
        rotereroll = dicepool - successes;
        println("rotereroll: " + rotereroll + " dice");
        rollthembones(rotereroll)
    }

// reroll nines only
function ninesexplode() {
        while(nines > 0){
            let reroll = nines;
            nines = 0;
            rollthembones(reroll);
        }
}

// reroll tens only
function tensexplode() {
        while(tens > 0){
            let reroll = tens;
            tens = 0;
            rollthembones(reroll);
        }
}

//rolls based on totalrolls input
function singleroll(totalrolls) {
    println("Total Rolls: " + totalrolls);
    while (totalrolls > 0) { 
        println("dicepool: " + dicepool + " dice");
    
        println("rollthembones:");
        rollthembones(dicepool);  //rolls the dice
        roteaction(); //rote action
        
        println("dice explosion time");
        tensexplode(); //tens explode
        ninesexplode(); //nines explode
        println("roll successes: " + successes);
        println("");
        
        totalsuccesses+=successes;
        successes=0;
        nines=0;
        tens=0;
        totalrolls = totalrolls-1
    }
}

singleroll(totalrolls);
println("Total Successes: " + totalsuccesses);
