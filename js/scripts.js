// BACKEND
newCharacter = [];

// CHARACTER CONSTRUCTOR
function Character (name) {
  this.name = name;
  this.strength = 0;
  this.agility = 0;
  this.intelligence = 0;
  this.charisma = 0;
}

// DICE ROLL FUNCTION THAT GENERATES A NUMBER BETWEEN 1-20
var dice = function() {
  var roll = Math.floor((Math.random() *20) +1);
  return roll;
};


// FRONTEND
$(document).ready(function(){

  var newCharacter = new Character($(".nameInput"));

  $("button#nameButton").click(function(){

  });

 $("button#diceRollButton").last().click(function(){
   $("stengthStat").text()

 });


});
