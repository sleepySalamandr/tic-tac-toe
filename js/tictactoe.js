// on click number 1 put x in square
// listen to event in each square
// on click number 2 put o in square
// findIndex of x and find index of o and x. If x has three in row, player x wins. If o has three in a row  in a row play o wins.

const player1 = "x"
const player2 = "o"

const game = {
  playerOne: [],
  playerTwo: []
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
    game.playerOne.push(player1)
    console.log(game.playerOne)


  } else {
    // put o in box that was clicked
    console.log(player2)
    game.playerTwo.push(player2)
    console.log(game.playerTwo)
  }

}

$(".board-container").on("click", clicks)

// if top x 3  text includes x or player 1 - player1 wins





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
