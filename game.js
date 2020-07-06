const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];


function nextSequence() {

    //generate a new random number between 0 and 3
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

}
