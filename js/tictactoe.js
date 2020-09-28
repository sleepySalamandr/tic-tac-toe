// on click number 1 put x in square
// listen to event in each square
// on click number 2 put o in square
// findIndex of x and find index of o and x. If x has three in row, player x wins. If o has three in a row  in a row play o wins.

const player1 = "x"
const player2 = "o"

const winning = {
  horizontal1: [1, 2, 3],
  horizontal2: [4, 5, 6],
  horizontal3: [7, 8, 9],

  vertical1: [1, 4, 7],
  vertical2: [2, 5, 8],
  vertical3: [3, 6, 9],

  diagonal1: [1, 5, 7],
  diagonal2: [3, 5, 7]
}

const game = {
  playerOne: [],
  playerTwo: [],
}


$(document).ready(function(){

let clickCounter = 0;

const clicks = function(e) {

  clickCounter ++

  let locationClassName = $(event.target).attr('class')
  console.log(locationClassName)


  if (clickCounter % 2 === 0) {
    console.log(player1)
    $(this.locationClassName).text(player1)

    game.playerOne.push(parseInt($(event.target).attr("id"))) // pushes the number of the box to the array
    console.log($(event.target).attr("id"))
    console.log("Player One")
    console.log(game.playerOne)


  } else {
    console.log(player2)
    game.playerTwo.push(parseInt($(event.target).attr("id")))
    console.log("Player two")
    console.log(game.playerTwo)
  }

  // finds if wins
  for ( let property in winning) {

  if (winning[property].every(r => game.playerOne.includes(r))) {
    console.log('Player one wins');
  } else if (winning[property].every(r => game.playerTwo.includes(r))) {
    console.log('Player two wins')
  }
}

}

$(".board-container").on("click", clicks)
console.log(game.playerOne)


// if top x 3  text includes x or player 1 - player1 wins

// const found = game.playerOne.some(winning =>)










// $(".square.top.left").on("click", function () {
//   console.log("box clicked")
//   if (clickCounter % 2 === 0) {
//     text = "x"
//     $(".square.top.left").text(text)
//     console.log(text)
//   } else {
//     // put o in box that was clicked
//     text = "o"
//     $(".square.top.left").text(text)
//     console.log(text)
//   }
// })

// $(".square.top.left").on("click", clicks)






// const displayXO = function (e) {
//   if (clickCounter % 2 === 0) {
//     // put x in box that was clicked
//     locationClassName.html("x")
//     console.log("working")
//   } else {
//     // put o in box that was clicked
//   }
// }
// on click populate the box that was clicked with an x if it is odd number of clicks or o if it is even number of clicks.
// could use a click counter or


});
