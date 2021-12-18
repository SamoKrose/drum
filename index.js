
var btns = document.querySelectorAll(".drum");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {


    var buttonInnerHTML = this.innerHTML;
    makeSounds(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function(event) {
makeSounds(event.key);
buttonAnimation(event.key);

});

function makeSounds(key) {
  switch (key) {

    case "w": 
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;

    case "a":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

    case "s":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

    case "d":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

    case "j":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;

    case "k":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;

    case "l":
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;

    default: console.log();
    break;
} 

}


//..........................how to add animation to certain object and remove
// in certain time

function buttonAnimation (currentKey){

  var activeButton = document.querySelector("." + currentKey)

  activeButton.classList.add("pressed");
  setTimeout(() => { activeButton.classList.remove("pressed");; }, 100);
}


// it can also be didn't work for me check out later why

// unction buttonAnimation (currentKey){

//   var activeButton = document.querySelector("." + currentKey)

//   activeButton.classList.add("pressed");

//   setTimeout(function() {
//     activeButton.classList.remove("pressed"); 
//   } 100);
//   } 