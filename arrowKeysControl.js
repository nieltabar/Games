var character = document.getElementById("player");

//ARROW KEYS
var change = {
  65: {
    left: "-=1"
  },

  87: {
    jump
  },

  68: {
    left: "+=1"
  },
}

$(document).one("keydown", keyDown)

var going;

function keyDown(e) {
  console.log("down")
  $(document).one("keyup", keyup)
  var animation = change[e.which];
  going = setInterval(keepGoing, 1);

  function keepGoing() {
    if($("#player").position().left >230 && $("#player").position().left < 520 ){
       $("#player").css(animation);
  }else{
    stop_the_game();
    var audio = document.getElementById("Audio2");
    audio.play();
    bullet_down(player);
  }
  }

}

function keyup(e) {
  console.log("up")
  clearInterval(going)
  $(document).one("keydown", keyDown)
}

/*Jump*/
function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },800);
}