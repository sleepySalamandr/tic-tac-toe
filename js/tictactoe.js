// on click number 1 put x in square
// listen to event in each square
// on click number 2 put o in square
// findIndex of x and find index of o and x. If x has three in row, player x wins. If o has three in a row  in a row play o wins.

$(document).ready(function(){

let clickCounter = 0;

const clicks = function(e) {
  clickCounter ++
  console.log(clickCounter)
  console.log(event.target.className)
  locationClassName = event.target.className
  if (clickCounter % 2 === 0) {
    text = "x"
    $(event.target.className).text(text)
    $(event.target.className).attr("text", "x")
    $(".locationClassName").text("a")

    console.log(text)
  } else {
    // put o in box that was clicked
    text = "o"
    console.log(text)
  }

}

$(".board-container").on("click", clicks)

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
