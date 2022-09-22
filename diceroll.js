let dicepool, successes, rolldie, nines, tens, currentdie;
    dicepool=26;
    successes=0;
    nines=0;
    tens=0;

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

    println("dicepool: " + dicepool + " dice");

    println("rollthembones:");
    rollthembones(dicepool);
    
    println("tens: " + tens + " successes: " + successes);
    
    println("rote action:");
    roteaction();
    println("tens: " + tens + " successes: " + successes);
    
    println("tens explode");
    tensexplode();
    
    println("Total successes: " + successes);
