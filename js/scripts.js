// BACKEND

// CHARACTER CONSTRUCTOR
function Character (name) {
  this.name = name;
  this.strength = 0;
  this.agility = 0;
  this.intelligence = 0;
  this.charisma = 0;
}

Character.prototype.deathCheck = function () {
  if (this.strength === 0 || this.agility === 0 || this.intelligence === 0 || this.charisma === 0) {
    return true;
  } else {
    return false;
  }
}

// DICE ROLL FUNCTION THAT GENERATES A NUMBER BETWEEN 1-20
var dice = function() {
  var roll = Math.floor((Math.random() *20) +1);
  return roll;
};

var showText = function (target, message, index) {
  var newStr = message.replace('&nbsp;',' ');
  if (index < newStr.length) {
    $(target).append(newStr[index++]);
    setTimeout(function () { showText(target, newStr, index); }, 5);
  } else {
    $(".current-story").show();
    $(".hidden").hide();
  }
}

var showTextStats = function (target, message, index) {
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showTextStats(target, message, index); }, 5);
  } else {
    $(".hidden").hide();
  }
}

var statCheck = function (characterStat, statCheckNumber, characterRoll) {
  if (statCheckNumber > (characterRoll + characterStat)) {
    return false;
  } else {
    return true;
  }
}

// FRONTEND

//WORKING SOLUTION: SEPARATE LISTNER INTO FRONT END? DON'T DELETE
// var displayListener = function(showButtonTrigger) {
//   if (showButtonTrigger === 0) {
//     $(".current-story").show();
//     $(".hidden").hide();
//     console.log("ShowbuttonTriggerAfter" + showButtonTrigger);
//   } else {
//     setTimeout(function () { displayListener(showButtonTrigger); }, 1000);
//     console.log("ShowbuttonTriggerBefore" + showButtonTrigger);
//   }
// }

//INN 1-7//
var storyArray = [[2,3],[4,9],[8,5],[9,6],[8,7],[0,0],[0,0],
//FOREST 8-20//
[10],[11],[19,12],[20,13],[15,18,14,18],[17,18,16,18],[48],[48],[21],[21],[0,0],[40],[29],
//castle 21-58//
[23,22],[24,25],[24,25],[34,24,34,23,34,24,34,24],[27,28],[34,26,34,26,34,26,34,26],[34,27,34,27,34,27,34,27],[39,59],
[26,30,26,31,26,32,26,33],[34,30,34,30,34,30,34,30],[34,31,34,31,34,31,34,31],[34,32,34,32,34,32,34,32],[34,33,34,33,34,33,34,33],
[38,34,36,34,37,34,35,34],[59,39],[59,39],[59,39],[59,39],[59],[42,41],[43,44],[43,44],[53,43,53,43,53,43,53,43],[46,47],
[53,45,53,45,53,45,53,45],[53,46,53,46,53,46,53,46],[58,72],[45,49,45,50,45,51,45,52],[53,49,53,49,53,49,53,49],
[53,50,53,50,53,50,53,50],[53,51,53,51,53,51,53,51],[53,52,53,52,53,52,53,52],[57,53,55,53,56,53,54,53],[72,58],[72,58],
[72,58],[72,58],[72],
//BORF 59-86//
[62,60],[61,62],[0,0],[63,64],[65],[65],[66,67],[68],[68],[69],[70,68],[0,0],[0,0],[74,73],[74,61],[75,76],[77],[77],
[78,79],[80,81],[81],[84,81],[84,82],[83],[84,81],[85,86],[86],[0,0]]

var checkedStatValue = function(buttonClass, character) {
  if (buttonClass.includes("strength")) {
    return character.strength;
  } else if (buttonClass.includes("agility")) {
    return character.agility;
  } else if (buttonClass.includes("charisma")) {
    return character.charisma;
  } else {
    return character.intelligence;
  }
};

var imageCheck = function (currentPage) {
  $("#borfCastle").hide();
  $("#innImage").hide();
  $("#forest").hide();
  $("#throneRoom").hide();
  if (currentPage > 0 && currentPage < 8) {
    $("#innImage").show();
  } else if (currentPage > 7 && currentPage < 21) {
    $("#forest").show();
  } else if (currentPage > 20 && currentPage < 59) {
    $("#borfCastle").show();
  } else {
    $("#throneRoom").show();
  }
}

var checkedStatName = function(buttonClass, character) {
  if (buttonClass.includes("strength")) {
    return "strength";
  } else if (buttonClass.includes("agility")) {
    return "agility";
  } else if (buttonClass.includes("charisma")) {
    return "charisma";
  } else {
    return "intelligence";
  }
};

var lowerStat = function(buttonClass, statValue, character) {
  if (buttonClass.includes("strength")) {
    if (character.strength > 1 && character.strength < 5) {
      character.strength = 1;
    } else if (character.strength === 1) {
      character.strength = 0;
    } else {
      character.strength = (statValue - 4);
    }
    $("#strengthStat").text(character.strength);
  } else if (buttonClass.includes("agility")) {
    if (character.agility > 1 && character.agility < 5) {
      character.agility = 1;
    } else if (character.agility === 1) {
      character.agility = 0;
    } else {
      character.agility = (statValue - 4);
    }
    $("#agilityStat").text(character.agility);
  } else if (buttonClass.includes("charisma")) {
    if (character.charisma > 1 && character.charisma < 5) {
      character.charisma = 1;
    } else if (character.charisma === 1) {
      character.charisma = 0;
    } else {
      character.charisma = (statValue - 4);
    }
    $("#charismaStat").text(character.charisma);
  } else {
    if (character.intelligence > 1 && character.intelligence < 5) {
      character.intelligence = 1;
    } else if (character.intelligence === 1) {
      character.intelligence = 0;
    } else {
      character.intelligence = (statValue - 4);
    }
    $("#intelligenceStat").text(character.intelligence);
  }
};

var raiseStat = function(buttonClass, statValue, character) {
  if (buttonClass.includes("strength")) {
    character.strength = (statValue + 2);
    $("#strengthStat").text(character.strength);
  } else if (buttonClass.includes("agility")) {
    character.agility = (statValue + 2);
    $("#agilityStat").text(character.agility);
  } else if (buttonClass.includes("charisma")) {
    character.charisma = (statValue + 2);
    $("#charismaStat").text(character.charisma);
  } else {
    character.intelligence = (statValue + 2);
    $("#intelligenceStat").text(character.intelligence);
  }
};

$(document).ready(function() {
  $(".container-fluid").hide();
  $("button#playNow").click(function(){
    $(".splash").hide();
    $("#borfCastle").hide();
    $("#innImage").hide();
    $("#forest").hide();
    $("#throneRoom").hide();
    $(".container-fluid").show();
  });

  // WHEN THE NAME BUTTON IS CLICKED:
  $("button#nameButton").click(function(){
    $("#createName").hide();
    $("#createStats").show();
    var characterName = $(".nameInput").val();
    $("#characterName").text(characterName);
    var newCharacter = new Character (characterName)
    $(".characterBar").show();
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

    $("#start").click(function() {
      $("#innImage").show();
      $(".current-story").append($("#1"));
      $(".current-story").hide();
      var timer = showText($(".printText"), $("#1 .hidden").html(), 0);
      $(".startButton").hide();
      $("#createStats").hide();
    });

    var currentPage = 1

    $(".a").click(function(){
      $(".current-story").hide();
      $(".hidden-story").append($("#" + currentPage))
      var aPage = storyArray[currentPage-1][0]
      $(".current-story").append($("#" + aPage))
      currentPage = aPage
      console.log(currentPage)
      $(".printText").empty();
      showText($(".printText"), $("#" + currentPage + " .hidden").html(), 0);
      imageCheck (currentPage);
    })
    $(".b").click(function(){
      $(".current-story").hide();
      $(".hidden-story").append($("#" + currentPage))
      var bPage = storyArray[currentPage-1][1]
      $(".current-story").append($("#" + bPage))
      currentPage = bPage
      console.log(currentPage)
      $(".printText").empty();
      showText($(".printText"), $("#" + currentPage + " .hidden").html(), 0);
      imageCheck (currentPage);
    });
    $(".replay").click(function() {
      location.reload();
    });
    $(".stat").click(function(){
      $(".printText").empty();
      var rollRequired = (parseInt($(this).val()-10))
      var buttonClass = $(this).attr("class");
      var checkedStat = checkedStatValue(buttonClass, newCharacter)
      var statName = checkedStatName(buttonClass, newCharacter)
      showTextStats($(".printText"), 'You need a total of ' + rollRequired + ' ' + statName + ' in order to pass this roll.', 0);
      $(".current-story").hide(); //still showing because showtext waits and shows current story
      $(".testButton").hide();
      $('.testButton').append('<button id="statCheckButton" type="button">Roll!</button>')
      setTimeout(function () { $(".testButton").show(); }, 750);
      $("#statCheckButton").click(function() {
        var currentRoll = dice();
        $(".testButton").empty();
        $(".printText").append("<br>")
        $('.testButton').append('<button id="statRollButton" type="button">Ok</button>')
        showTextStats($(".printText"), 'Your roll was ' + currentRoll + "." + " Your total " + statName + " is " + (currentRoll + checkedStat) + ".", 0);
        $("#statRollButton").click(function() {
          $('.testButton').empty();
          if (buttonClass.includes("option1")){
            $(".hidden-story").append($("#" + currentPage))
            if (statCheck(checkedStat, rollRequired, currentRoll) === true) {
              raiseStat(buttonClass, checkedStat, newCharacter);
              var aPage = storyArray[currentPage-1][0]
            } else {
              lowerStat(buttonClass, checkedStat, newCharacter);
              var aPage = storyArray[currentPage-1][1]
            }
            if (newCharacter.deathCheck() === true) {
              currentPage = storyArray[3][1];
            } else {
              currentPage = aPage;
            }
            $(".current-story").append($("#" + aPage))
            $(".printText").empty();
            showText($(".printText"), $("#" + currentPage + " .hidden").html(), 0);
          }
          if (buttonClass.includes("option2")){
            $(".hidden-story").append($("#" + currentPage))
            if (statCheck(checkedStat, rollRequired, currentRoll) === true) {
              raiseStat(buttonClass, checkedStat, newCharacter);
              var aPage = storyArray[currentPage-1][2]
            } else {
              lowerStat(buttonClass, checkedStat, newCharacter);
              var aPage = storyArray[currentPage-1][3]
            }
            if (newCharacter.deathCheck() === true) {
              currentPage = storyArray[3][1];
            } else {
              currentPage = aPage;
            }
            $(".current-story").append($("#" + aPage))
            $(".printText").empty();
            showText($(".printText"), $("#" + currentPage + " .hidden").html(), 0);
          }
          if (buttonClass.includes("option3")){
            $(".hidden-story").append($("#" + currentPage))
            if (statCheck(checkedStat, rollRequired, currentRoll) === true) {
              raiseStat(buttonClass, checkedStat, newCharacter);
              var aPage = storyArray[currentPage-1][4]
            } else {
              lowerStat(buttonClass, checkedStat, newCharacter);
              var aPage = storyArray[currentPage-1][5]
            }
            if (newCharacter.deathCheck() === true) {
              currentPage = storyArray[3][1];
            } else {
              currentPage = aPage;
            }
            $(".current-story").append($("#" + aPage))
            $(".printText").empty();
            showText($(".printText"), $("#" + currentPage + " .hidden").html(), 0);
          }
          if (buttonClass.includes("option4")){
            $(".hidden-story").append($("#" + currentPage))
            if (statCheck(checkedStat, rollRequired, currentRoll) === true) {
              raiseStat(buttonClass, checkedStat, newCharacter);
              var aPage = storyArray[currentPage-1][6]
            } else {
              lowerStat(buttonClass, checkedStat, newCharacter);
              var aPage = storyArray[currentPage-1][7]
            }
            if (newCharacter.deathCheck() === true) {
              currentPage = storyArray[3][1];
            } else {
              currentPage = aPage;
            }
            $(".current-story").append($("#" + aPage))
            $(".printText").empty();
            showText($(".printText"), $("#" + currentPage + " .hidden").html(), 0);
          }
          imageCheck (currentPage);
        })
      })
    })
  });
});
