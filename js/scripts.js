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
var storyArray = [[2,3],[4,5],[5,6],[7,5],[9,10],[5,8],[0,0],[0,0]]

$(".container-fluid").hide();
$("button#playNow").click(function(){
$(".splash").hide();
$(".container-fluid").show();
})



// WHEN THE NAME BUTTON IS CLICKED:
  $("button#nameButton").click(function(){
    $("#createName").hide();
    $("#createStats").show();
    var characterName = $(".nameInput").val();
    $("#characterName").text(characterName);
    var newCharacter = new Character (characterName)
    // for (i=0;i<4;i++){
    //   if (i == 0){
    $("#rollText").text("Roll for Strength.")

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
          $("#diceRollButton").hide();
          $(".startButton").show();
        }
        i ++;
    });

    $("#start").click(function(){
      $(".current-story").append($("#1"))
      $(".startButton").hide();
      $("#createStats").hide();
    })

    var currentPage = 1

    $(".a").click(function(){
      $(".hidden-story").append($("#" + currentPage))
      var aPage = storyArray[currentPage-1][0]
      $(".current-story").append($("#" + aPage))
      currentPage = aPage
    })
    $(".b").click(function(){
      $(".hidden-story").append($("#" + currentPage))
      var bPage = storyArray[currentPage-1][1]
      $(".current-story").append($("#" + bPage))
      currentPage = bPage
    })

  });
});
