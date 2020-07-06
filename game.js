const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
var started = false;
let level = 0;
let index_of_last = 0;

//play sound
function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    //generate a new random number between 0 and 3
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);


}

// button onclick
$("div[type='button']").click(function () {

    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);

});

// once button is pressed, animate background color
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    window.setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

$(document).keypress(function (e) {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");

        if (userClickedPattern.length === gamePattern.length) {

            setTimeout(function () {
                nextSequence();
            }, 1000);

        }

    } else {

        playSound('wrong');
        $('body').addClass('game-over');
        window.setTimeout(function () {
            $('body').removeClass('game-over');
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart" );
        startOver();

    }

}

function startOver(){
    // resetting parameters
    level =0;
    gamePattern = [];
    started =false;
}