// BACKEND

// CHARACTER CONSTRUCTOR

function Character (name, strength, agility, intelligence, charisma) {
  this.name = name;
  this.strength = strength;
  this.agility = agility;
  this.intelligence = intelligence;
  this.charisma = charisma
}


// DICE ROLL FUNCTION THAT GENERATES A NUMBER BETWEEN 1-20
var dice = function() {
  var roll = Math.floor((Math.random() *20) +1);
  return roll;
};


// FRONTEND
$(document).ready(function(){







});
