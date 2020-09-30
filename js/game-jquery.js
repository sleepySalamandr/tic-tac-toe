$(document).ready(function(){


const gameFunction = function(e) {

  // Naughts and crosses img
  let cross = $('<img>').attr("src", "css/img/x1.png");
  let naught = $('<img>').attr("src", "css/img/naught.png")

  clickCounter ++

// Class of square clicked converted from string to className
    let clickedLocationString = $(event.target).attr('class')
    let clickedLocationClassName = "." + clickedLocationString.split(" ").join(".")

// Display naught or cross
    if (clickCounter % 2 === 0) {

      // pushes the number of the box to the array
      playerChoices.playerOne.push(parseInt($(event.target).attr("id")))

      // Display naught or cross
      $(clickedLocationClassName).append(naught).html(naught)


    } else {
      playerChoices.playerTwo.push(parseInt($(event.target).attr("id")))
      $(clickedLocationClassName).append(cross).html(cross)
    }



    if  (clickCounter >= 9) {
    $(".winnerAlert").html(`It's a draw!`)
    }

    // finds if wins
    for ( let keys in winning) {
  if (winning[keys].every(numberOfSquare => playerChoices.playerOne.includes(numberOfSquare))) {
      wins.playerOne = wins.playerOne + 1
      $(".winnerAlert").css("display", "visible").text(`Player 1 Wins!`)
      $(".player1-score").html(`Player 1: <br/> ${wins.playerOne}`)
      return;

    } else if (winning[keys].every(numberOfSquare => playerChoices.playerTwo.includes(numberOfSquare))) {
      // window.alert('Player two wins')
      wins.playerTwo = wins.playerTwo + 1
      $(".winnerAlert").css("display", "visible").text(`Player 2 Wins!`)
      $(".player2-score").html(`Player 2: <br/> ${wins.playerTwo}`)
      return;
    }
  }

  }
  $(".board-container").on("click", gameFunction)


// Play again - resets the board
const playAgain = function (e) {
  playerChoices.playerOne = []
  playerChoices.playerTwo = []
    clickCounter = 0

  $(clickedLocations).each(function(index){
    $(naught).detach()
    $(cross).detach()
    $(".winnerAlert").css("display", "none")

  });

  // location.reload()
  console.log("clicked")
}
$('.reset').on("click", playAgain)




});
