const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];


function nextSequence() {

    //generate a new random number between 0 and 3
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();

}
