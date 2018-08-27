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

// WHEN THE NAME BUTTON IS CLICKED:
  $("button#nameButton").click(function(){
    $("#createName").hide();
    $("#createStats").show();
    var characterName = $(".nameInput").val();
    $("#characterName").text(characterName);
    var newCharacter = new Character (characterName)
    console.log(newCharacter);
    // for (i=0;i<4;i++){
    //   if (i == 0){
    $("#rollText").text("Roll for Strength.")
        console.log("hi");

      var i = 0

// WHEN THE ROLL DICE BUTTON IS CLICKED:
      $("button#diceRollButton").click(function(){
        if (i == 0){
          newCharacter.strength = dice();
          $("#statResultDisplay").show();
          $("#strengthStat").text(newCharacter.strength)
          $("#statResultDisplay").text("Your character's strength is " + newCharacter.strength + ".")
          $("#rollText").text("Roll for agility.")
        } else if (i == 1){
          newCharacter.agility = dice();

          $("#agilityStat").text(newCharacter.agility)
          $("#statResultDisplay").text("Your character's agility is " + newCharacter.agility + ".")
          $("#rollText").text("Roll for intelligence.")

        } else if (i == 2){
          newCharacter.intelligence = dice();
          $("#intelligenceStat").text(newCharacter.intelligence)
          $("#statResultDisplay").text("Your character's intelligence is " + newCharacter.intelligence + ".")
          $("#rollText").text("Roll for charisma.")
        } else if (i == 3){
          newCharacter.charisma = dice();
          $("#charismaStat").text(newCharacter.charisma)
          $("#statResultDisplay").text("Your character's charisma is " + newCharacter.charisma + ".")
          $("#rollText").text("Your journey is about to begin...")
        }
        i ++;
    });
  });
});
