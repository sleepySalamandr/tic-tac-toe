$(document).ready(function(){


const gameFunction = function(e) {

  // Naughts and crosses img
  let cross = $('<img>').attr("src", "css/img/x-64.png");
  let naught = $('<img>').attr("src", "css/img/naught.png")

  clickCounter ++

// Class of square clicked converted from string to className
    let clickedLocationString = $(event.target).attr('class')
    let clickedLocationClassName = "." + clickedLocationString.split(" ").join(".")


// Display naught or cross
    if (clickCounter % 2 === 0) {

      // pushes the number of the box to the array
      playerChoices.playerTwo.push(parseInt($(event.target).attr("id")))

      // Display naught or cross
      clickedLocations.push(clickedLocationClassName)
      $(clickedLocationClassName).append(naught).html(naught)


    } else {
      playerChoices.playerOne.push(parseInt($(event.target).attr("id")))
      clickedLocations.push(clickedLocationClassName)
      $(clickedLocationClassName).append(cross).html(cross)
    }

// Play again - resets the board
    const playAgain = function (e) {
      playerChoices.playerOne = []
      playerChoices.playerTwo = []
      clickCounter = 0

      $(clickedLocations).each(function(index){
        $(naught).detach()
        $(cross).detach()
        $(".winnerAlert").text(``)
        $(".board-container").removeClass("harder")
        $(".board-container").removeClass("disable-click");


      });
    }
    $('.reset').on("click", playAgain)

findWinner()
console.log(clickedLocationClassName)
  }
  $(".board-container").on("click", gameFunction)


  // finds if wins



const harder = function(e) {
  $(".board-container").addClass("harder")
  console.log("clicked")

}


$("#harder").on("click", harder)



});
