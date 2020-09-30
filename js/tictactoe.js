// on click number 1 put x in square
// listen to event in each square
// on click number 2 put o in square
// findIndex of x and find index of o and x. If x has three in row, player x wins. If o has three in a row  in a row play o wins.


const winning = {
  horizontal1: [1, 2, 3],
  horizontal2: [4, 5, 6],
  horizontal3: [7, 8, 9],

  vertical1: [1, 4, 7],
  vertical2: [2, 5, 8],
  vertical3: [3, 6, 9],

  diagonal1: [1, 5, 9],
  diagonal2: [3, 5, 7]
}

const playerChoices = {
  playerOne: [],
  playerTwo: []
}

const clickedLocations = []

const wins = {
  playerOne: 0,
  playerTwo: 0
}


$(document).ready(function(){

let clickCounter = 0;

const clicks = function(e) {
  const player1 = $('<img>').attr("src", "css/img/x1.png");
  const player2 = $('<img>').attr("src", "css/img/naught.png")


  clickCounter ++

  let clickedLocationString = $(event.target).attr('class')
  let clickedLocationClassName = "." + clickedLocationString.split(" ").join(".")
  console.log(clickedLocationClassName)



  if (clickCounter % 2 === 0) {
    console.log(player1)


    playerChoices.playerOne.push(parseInt($(event.target).attr("id"))) // pushes the number of the box to the array
    console.log($(event.target).attr("id"))
    console.log("Player One")
    console.log(playerChoices.playerOne)
    clickedLocations.push(clickedLocationClassName)
    $(clickedLocationClassName).append(player1).html(player1)


  } else {
    console.log(player2)
    playerChoices.playerTwo.push(parseInt($(event.target).attr("id")))
    console.log("Player two")
    console.log(playerChoices.playerTwo)
    clickedLocations.push(clickedLocationClassName)
    $(clickedLocationClassName).append(player2).html(player2)
  }

  // Play again - resets the board
  const reset = function (e) {
    playerChoices.playerOne = []
    playerChoices.playerTwo = []

    $(clickedLocations).each(function(index){
      $(player2).detach()
      $(player1).detach()
      $(".winnerAlert").detach()
    });

    // location.reload()
    console.log("clicked")
  }
  $('.reset').on("click", reset)

  // finds if wins
  for ( let keys in winning) {

  if (winning[keys].every(numberOfSquare => playerChoices.playerOne.includes(numberOfSquare))) {
    wins.playerOne += 1
    $(".winnerAlert").css("display", "visible").text(`Player 1 Wins!`)
    $(".player1-score").html(`Player 1: <br/> ${wins.playerOne}`)
    return;

  } else if (winning[keys].every(numberOfSquare => playerChoices.playerTwo.includes(numberOfSquare))) {
    // window.alert('Player two wins')
    wins.playerTwo += 1
    $(".winnerAlert").css("display", "visible").text(`Player 2 Wins!`)
    $(".player2-score").html(`Player 2: <br/> ${wins.playerTwo}`)
    return;
  }
}



}

$(".board-container").on("click", clicks)
console.log(playerChoices.playerOne)


// if top x 3  text includes x or player 1 - player1 wins

// const found = playerChoices.playerOne.some(winning =>)


const harder = function(e) {
  $(".board-container").addClass("harder")
  console.log("clicked")

}


$("#harder").on("click", harder)



});

// reset playerChoices
// clear html
// record who won
// add a button to finish and then which ever number is higher like player 1; 2, player 2: 5 =- player 2 wins
