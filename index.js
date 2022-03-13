var checkArray = [];
var a = [];
var level = 1;
var colors = ["blue", "green", "red", "yellow"];
var s = true;
var t = 2000;

$(document).keydown(function() {
  game();
});

$(".btn").click(function() {
  var i = $(this).attr("id");
  makeSound(i);
  a.push(i);
});

function makeSound(key) {
  switch (key) {
    case "blue":
      var blue = new Audio("sounds/blue.mp3");
      blue.play();
      $("#blue").addClass("pressed");
      setTimeout(function() {
        $("#blue").removeClass("pressed");
      }, 100);
      break;

    case "green":
      var green = new Audio("sounds/green.mp3");
      green.play();
      $("#green").addClass("pressed");
      setTimeout(function() {
        $("#green").removeClass("pressed");
      }, 100);
      break;

    case "red":
      var red = new Audio('sounds/red.mp3');
      red.play();
      $("#red").addClass("pressed");
      setTimeout(function() {
        $("#red").removeClass("pressed");
      }, 100);
      break;

    case "yellow":
      var yellow = new Audio('sounds/yellow.mp3');
      yellow.play();
      $("#yellow").addClass("pressed");
      setTimeout(function() {
        $("#yellow").removeClass("pressed");
      }, 100);
      break;

    default:
      console.log(key);
  }
}

function startOver() {
  if(a.length != checkArray.length){
    s = false;
  }
  for(var i = 0; i< checkArray.length; i++){
    if(a[i] != checkArray[i]){
      s = false;
    }
  }
  level++;
  a = [];
  game();
}

function game() {
  $("#level-title").text("level" + " " + level);
  var random = Math.floor(Math.random() * 4);
  makeSound(colors[random]);
  checkArray.push(colors[random]);
  setTimeout(function() {
    if(a[0] != checkArray[0]){
      s = false;
    }
    if (!s) {
      $("body").addClass("game-over");
      var o = new Audio('sounds/wrong.mp3');
      o.play();
      setTimeout(function() {
        $("body").removeClass("game-over");
      }, 100);
      $("#level-title").text("Game Over, Press Any Key to Restart");
      checkArray = [];
      a = []
      level = 1;
      t = 2000;
      s = true;
    } else {
      startOver();
    }
  }, t);
  t = t + 350;
}
