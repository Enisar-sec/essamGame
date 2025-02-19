var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern  = [];
var userPattern  = [];

function sound(color){
    var audio = new Audio("./sounds/"+color+".mp3");
    audio.play();
}

$(".btn").click(function(){
    sound(this.id);
    this.classList.add("pressed");
    var active = this;
    setTimeout(function(){ active.classList.remove("pressed");}, 100);
    var userChossenColor = this.id
    if(level > 0) {
    userPattern.push(userChossenColor);
    checkAnswer(buttonColors.indexOf(userChossenColor));}
})

var level = 0
function nextsequence(){
 var randomNumber = Math.floor(Math.random()*4)
 var randomChossenColor = buttonColors[randomNumber]
 gamePattern.push(randomChossenColor);
 $("#" + randomChossenColor).addClass("pressed");
 sound(randomChossenColor);
 setTimeout(function(){ $("#" + randomChossenColor).removeClass("pressed");}, 100);
 level++;
 $("h1").text("Level "+level);
}

$("body").keypress(function (){
    if (level === 0 ) {
        nextsequence();
    }
})

function checkAnswer(currentLevel){
    if (gamePattern[gamePattern.length - 1] === buttonColors[currentLevel] && gamePattern.toString() === userPattern.toString() ){
       console.log("sucsses")
       setTimeout(function(){nextsequence()}, 1000);
       console.log(gamePattern);
       console.log(userPattern);
       userPattern = [];
   }

       else if (gamePattern.toString() !== userPattern.toString() ){
        for(var i = 0; i < userPattern.length; i++){
            if (gamePattern[i] !== userPattern[i]){
                $("body").addClass("game-over");
                setTimeout(function(){ $("body").removeClass("game-over");}, 200);
                sound("wrong");
                $("h1").text("Game Over, Press Any Key to Restart");
                level = 0;
                gamePattern  = [];
                userPattern  = [];
            }}}
    }
