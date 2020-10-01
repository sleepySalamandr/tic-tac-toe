$(document).ready(function(){


const gameFunction = function(e) {

// Naughts and crosses img
  let cross = $('<img>').attr("src", "css/img/x-64.png");
  let naught = $('<img>').attr("src", "css/img/naught.png");

  clickCounter ++

// Class of square clicked converted from string to className
    let clickedLocationString = $(event.target).attr('class');
    let clickedLocationClassName = "." + clickedLocationString.split(" ").join(".");


// Display naught or cross / pushes the number (id) of the box to the array / pushes the clikecd location to an array containing all clicked locations
    if (clickCounter % 2 === 0) {

      // playerChoices.playerTwo.push(parseInt($(event.target).attr("id")));
      playerTwo.choices.push(parseInt($(event.target).attr("id")));
      $(clickedLocationClassName).append(naught).html(naught);
      clickedLocations.push(clickedLocationClassName);

    } else {

      // playerChoices.playerOne.push(parseInt($(event.target).attr("id")));
      playerOne.choices.push(parseInt($(event.target).attr("id")));
      clickedLocations.push(clickedLocationClassName);
      $(clickedLocationClassName).append(cross).html(cross);

    };

// Play again button - resets the board
    const playAgain = function (e) {

// Resets arrays
      playerOne.choices = [];
      playerTwo.choices = [];
      // playerChoices.playerOne = [];
      // playerChoices.playerTwo = [];
      clickCounter = 0;

// Resets HTML
      $(".winnerAlert").text(``)
      $(".board-container").removeClass("harder")
      $(".board-container").removeClass("disable-click");

      $(clickedLocations).each( function(index) {
        $(naught).detach();
        $(cross).detach();
      });

  };
    $('.reset').on("click", playAgain)


findWinner()
  }
  $(".board-container").on("click", gameFunction)


  // finds if wins


});
