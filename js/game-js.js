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
const playerChoices = {
  playerOne: [],
  playerTwo: [],
}

const clickedLocations = []

// Records players score across multiple games
const wins = {
  playerOne: 0,
  playerTwo: 0
}

// number of clicks
let clickCounter = 0;
