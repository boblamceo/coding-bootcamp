export default (board: string[][], symbol: string = 'o'): boolean => {
  if (!board) {
    return null
  }

  return board.every((row, index) => row[index] === symbol)
}
