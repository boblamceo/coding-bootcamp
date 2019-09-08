console.info('Welcome to Tic-tac-toe')

const HUMAN_DEFAULT_SYMBOL = 'x'

const row = [' ', ' ', ' ']
let board = [[...row], [...row], [...row]]

/*
   Make the board appear
   @function
*/
const printBoard = () => {
  console.info(' --- ')
  board.forEach(row => {
    console.info(`|${row.join('')}|`)
  })
  console.info(' --- ')
}

/*
  Mark the x at the place
  @function
*/
const markCell = (x, y, symbol = HUMAN_DEFAULT_SYMBOL) => {
  const currentBoard = [...board]
  currentBoard[x][y] = symbol
  board = currentBoard
}

/*
  Get user's input in command line
  @function
*/
const readUserInput = () =>
  new Promise(resolve => {
    const readline = require('readline')

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })

    rl.question('Where is the place to mark it? (x y) ', userInput => {
      rl.close()
      resolve(userInput)
    })
  })

const detectEmptyCells = () => {
  let positions = []

  board.forEach((row, xIndex) => {
    row.forEach((cell, yIndex) => {
      if (cell === ' ') {
        positions.push([xIndex, yIndex])
      }
    })
  })

  return positions
}

function getRandomIndex(max) {
  return Math.floor(Math.random() * max)
}

const processAiInput = () => {
  // board
  // 1. try not to lose, detect if human has a potential three in a row move
  // if human has, block it, if not,
  // 2. try to win, detect if yourself has a potential three in a row move
  // if yes, place it, if not
  // 3. get a random position which is not occupied by human
  const emptyCells = detectEmptyCells()

  if (emptyCells.length === 0) {
    return false
  }

  const index = getRandomIndex(emptyCells.length - 1)
  const [x, y] = emptyCells[index]

  markCell(x, y, 'o')

  console.log('\nAI:')
  printBoard()

  if (detectWin('o')) {
    console.log('Unfortunately, you lose to the smartest AI!')
    return false
  }

  return true
}

const isCurrentCellOverlap = (x, y) => board[x][y] !== ' '

const detectWin = (symbol = HUMAN_DEFAULT_SYMBOL) => {
  // Case 1: horizontal row
  for (let i = 0; i < board.length; i++) {
    const currentRow = board[i]
    const rowWin = currentRow.every(cell => cell === symbol)

    if (rowWin) {
      return true
    }
  }

  // Case 2: vertical column
  for (var column = 0; column < board.length; column++) {
    const columnItems = []

    for (let row = 0; row < board[0].length; row++) {
      columnItems.push(board[row][column])
    }

    const detectThreeInAColumn = columnItems.every(item => item === symbol)

    if (detectThreeInAColumn) {
      return true
    }
  }

  // Case 3: left diagonal row

  // Case 4: right diagonal row

  return false
}

/*
  Make the game start
  @function
*/
const start = async () => {
  printBoard()

  while (true) {
    const userInput = await readUserInput()
    const userWantsQuit = userInput === 'q'

    if (userWantsQuit) {
      break
    }

    const [x, y] = userInput.trim().split(' ')

    if (!Number.isInteger(+x) || !Number.isInteger(+y)) {
      console.log('You are typing a wrong stuff. Please try again')
      continue
    }

    if (x >= row.length || y >= board.length || x < 0 || y < 0) {
      console.log(
        'You are typing an input outside the size of the board. Please try again'
      )
      continue
    }

    if (isCurrentCellOverlap(x, y)) {
      console.log('The cell already has stuff. Please try again!')
      continue
    }

    markCell(x, y)
    console.log('Human:')
    printBoard()

    if (detectWin('x')) {
      console.log('Congratulations! You win!')
      break
    }

    if (!processAiInput()) {
      break
    }
  }

  // console.log('Draw! Let\'s play again!')
}

start()
