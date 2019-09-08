export default class Board {
  construtor(numberOfRows, numberOfColumns) {
    const row = new Array(numberOfColumns).fill(' ')
    const board = new Array(numberOfRows).fill([...row])
    this.board = board
  }
}
