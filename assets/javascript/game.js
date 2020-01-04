$(document).ready(function() {

    var random = [Math.floor(Math.random() * 101) + 19];
    console.log("Random number: " + random)
    var ranNum1 = [Math.floor(Math.random() * 12) + 1];
    var ranNum2 = [Math.floor(Math.random() * 12) + 1];
    var ranNum3 = [Math.floor(Math.random() * 12) + 1];
    var ranNum4 = [Math.floor(Math.random() * 12) + 1];
    console.log("Red buttom: " + ranNum1)
    console.log("Blue button: " + ranNum2)
    console.log("Yellow button: " + ranNum3)
    console.log("Green button: " + ranNum4)

    $("#ranNum-text").text(random);

    var score = 0;
    var wins = 0;
    var losses = 0;

    $("#wins-text").text("Wins: " + wins);
    $("#losses-text").text("Losses: " + losses);


    function winner() {
        wins++
        $("#wins-text").text("Wins: " + wins);
        reset();
    }

    function loser() {
        losses++
        $("#losses-text").text("Losses: " + losses);
        reset();
    }

    function reset() {
        random = [Math.floor(Math.random() * 101) + 19];
        ranNum1 = [Math.floor(Math.random() * 12) + 1];
        ranNum2 = [Math.floor(Math.random() * 12) + 1];
        ranNum3 = [Math.floor(Math.random() * 12) + 1];
        ranNum4 = [Math.floor(Math.random() * 12) + 1];
        score = 0;
        $("#scoreDisplay").text(score);
        $("#ranNum-text").text(random)
        console.log("Random number: " + random)
        console.log("Red buttom: " + ranNum1)
        console.log("Blue button: " + ranNum2)
        console.log("Yellow button: " + ranNum3)
        console.log("Green button: " + ranNum4)
    }
    


    $("#red").on("click", function() {
        var redVal = parseInt(ranNum1);
        $("#scoreDisplay").text(score += redVal)
        console.log("Current Score: " + score)
            if (score == random) {
                winner();
            }
            else if (score > random) {
                loser();
            }
    })
    $("#blue").on("click", function() {
        var blueVal = parseInt(ranNum2);
        $("#scoreDisplay").text(score += blueVal)
            if (score == random) {
                winner();
            }
            else if (score > random) {
                loser();
            }
    })
    $("#yellow").on("click", function() {
        var yellowVal = parseInt(ranNum3);
        $("#scoreDisplay").text(score += yellowVal)
            if (score == random) {
                winner();
            }
            else if (score > random) {
                loser();
            }
    })
    $("#green").on("click", function() {
        var greenVal = parseInt(ranNum4);
        $("#scoreDisplay").text(score += greenVal)
            if (score == random) {
                winner();
            }
            else if (score > random) {
                loser();
            }
    })

})



// Click button and add button value to score

// If Score === random Number; Add 1 win, reset values

//If Score > random Number, Add 1 Loss
