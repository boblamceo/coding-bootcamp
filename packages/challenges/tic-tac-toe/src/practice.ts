import detectBoxSize from './detectBoxSize'

// prettier-ignore
const board = [
  ['ñ', 'ñ', 'x'],
  ['ñ', 'ñ', 'o'],
  ['x', 'x', 'ñ']
]

console.table(board)

console.log('detectBoxSize(board)', detectBoxSize(board))
// function detectWin(board: string[][]): boolean {
//   const ñ1 = board[0][0]
//   const ñ2 = board[1][1]
//   const ñ3 = board[2][2]
//   const isWin = ñ1 === 'ñ' && ñ2 === 'ñ' && ñ3 === 'ñ'
//
//   return isWin
// }

console.log('detectWin(board)', detectWin(board))

// for (var i = 0; i < board.length; i++) {
//   const currentRow = board[i]
//
//   for (var j = 0; j < currentRow.length; j++) {
//     // const currentColumn = currentRow[j]
//     // console.info('currentColumn', currentColumn)
//
//     console.info('board[i][j]', board[i][j])
//     console.info('i', i)
//     console.info('j', j)
//   }
// }

// for (var column = 0; column < board.length; column++) {
//   const columnItems = []
//
//   for (let row = 0; row < board[0].length; row++) {
//     columnItems.push(board[row][column])
//   }
//
//   const detectThreeInAColumn = columnItems.every(item => item === 'ñ')
//   console.info('detectThreeInAColumn', detectThreeInAColumn)
// }

// const secondRow = board[1]
// const resultForRow = secondRow.every(cell => cell === 'o')
// console.info('secondRow', secondRow)
// console.info('resultForRow', resultForRow)
//
// const firstColumnFirstRowItem = board[0][0]
// const firstColumnSecondRowItem = board[1][0]
// const firstColumnThirdRowItem = board[2][0]
//
// console.info('first item in first row', firstColumnFirstRowItem)
// console.info('first item in second row', firstColumnSecondRowItem)
// console.info('first item in third row', firstColumnThirdRowItem)
//
// const secondColumnFirstRowItem = board[0][1]
// const secondColumnSecondRowItem = board[1][1]
// const secondColumnThirdRowItem = board[2][1]
//
// console.info('second item in first row', secondColumnFirstRowItem)
// console.info('second item in second row', secondColumnSecondRowItem)
// console.info('second item in third row', secondColumnThirdRowItem)
//
// const thirdColumnFirstRowItem = board[0][2]
// const thirdColumnSecondRowItem = board[1][2]
// const thirdColumnThirdRowItem = board[2][2]
//
// console.info('third item in first row', thirdColumnFirstRowItem)
// console.info('third item in second row', thirdColumnSecondRowItem)
// console.info('third item in third row', thirdColumnThirdRowItem)

// const resultForColumn = secondColumn.every(item => item === 'ñ')
// console.info('board 1, 0', board[1][0])
// console.info('board 1, 1', board[1][1])
// console.info('board 1, 2', board[1][2])
