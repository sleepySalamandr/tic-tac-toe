// The winning combinations, correpsonds to squares id's.
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

// Records the id of the clicked location - the id is a number.
const clickedLocations = []

// Records players score across multiple games
const wins = {
  playerOne: 0,
  playerTwo: 0
}

// Records players choices and winning message
playerOne = {
  choices: [],
  winnerAlert: `Player 1 Wins!`,
};

playerTwo = {
  choices: [],
  winnerAlert: `Player 2 Wins!`,
};

// Number of clicks
let clickCounter = 0;

const findWinner = function() {

// For every key in object "winning"
  for ( let keys in winning) {


    if (clickCounter >= 9) {
      $(".winnerAlert").html(`It's a draw!`);

// If players choice array includes every value in key's array
  } else if ( winning[keys].every( numberOfSquare => playerOne.choices.includes( numberOfSquare ))) {
      wins.playerOne = wins.playerOne + 1;

      $(".winnerAlert").text(`${playerOne.winnerAlert}`);
      $(".player1-score").html(`Player 1: <br/> ${wins.playerOne}`);
      $('.board-container').addClass("disable-click");

    return;

  } else if ( winning[keys].every( numberOfSquare => playerTwo.choices.includes( numberOfSquare ))) {
    wins.playerTwo = wins.playerTwo + 1

      $(".winnerAlert").text(`${playerTwo.winnerAlert}`);
      $(".player2-score").html(`Player 2: <br/> ${wins.playerTwo}`);
      $('.board-container').addClass("disable-click");

    return;
  }
}
}
