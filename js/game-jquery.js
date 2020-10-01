$(document).ready(function(){


const gameFunction = function(e) {

// Naughts and crosses img
  let cross = $('<img>').attr("src", "css/img/x-64.png");
  let naught = $('<img>').attr("src", "css/img/naught.png");

  clickCounter ++;

// Class of square clicked, converted from string to className
    let clickedLocationString = $(event.target).attr('class');
    let clickedLocationClassName = "." + clickedLocationString.split(" ").join(".");


// Display naught or cross / pushes the number (id) of the box to the players object / pushes the clicked location to an array containing all clicked locations
    if (clickCounter % 2 === 0) {

      playerTwo.choices.push(parseInt($(event.target).attr("id")));

        $(clickedLocationClassName).append(naught).html(naught);
        clickedLocations.push(clickedLocationClassName);

    } else {

      playerOne.choices.push(parseInt($(event.target).attr("id")));

        clickedLocations.push(clickedLocationClassName);
        $(clickedLocationClassName).append(cross).html(cross);

  };

// Play again button - resets the board
  const playAgain = function (e) {

// Resets arrays
      playerOne.choices = [];
      playerTwo.choices = [];
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
  $('.reset').on("click", playAgain);

findWinner();

};
$(".board-container").on("click", gameFunction);

// Make harder button -  makes the board-container spin
const harder = function(e) {

    $(".board-container").addClass("harder");

}
$("#harder").on("click", harder);

});
