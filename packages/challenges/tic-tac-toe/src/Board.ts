/*
  const board = new Board()
  board.printBoard()
  board.markCell(1, 1)
*/

const HUMAN_DEFAULT_SYMBOL: string = 'x';
const DEFAULT_CELL_SIZE: number = 3;

export default class Board {
    private board;

    construtor(numberOfRows: number = DEFAULT_CELL_SIZE, numberOfColumns: number = DEFAULT_CELL_SIZE) {
        const row = new Array(numberOfColumns).fill(' ');
        this.board = new Array(numberOfRows).fill([ ...row ]);
    }

    /*
   Make the board appear
   @function
  */
    printBoard() {
        console.info(' --- ');
        this.board.forEach((row) => {
            console.info(`|${row.join('')}|`);
        });
        console.info(' --- ');
    }

    /*
  Mark the x at the place
  @function
*/
    markCell(x: number, y: number, symbol: string = HUMAN_DEFAULT_SYMBOL) {
        const currentBoard = [ ...this.board ];
        currentBoard[x][y] = symbol;
        this.board = currentBoard;
    }

    detectEmptyCells() {
        let positions = [];

        this.board.forEach((row, xIndex) => {
            row.forEach((cell, yIndex) => {
                if (cell === ' ') {
                    positions.push([ xIndex, yIndex ]);
                }
            });
        });

        return positions;
    }

    isCurrentCellOverlap(x: number, y: number) {
        this.board[x][y] !== ' ';
    }

    detectDiagonalWin(symbol: string = 'o'): boolean {
        if (!this.board) {
            return null;
        }

        const isFromLeftToRight = this.board[0][0] === symbol;

        if (isFromLeftToRight) {
            return this.board.every((row, index) => row[index] === symbol);
        }

        return this.board.every((row, index) => {
            const j = row.length - 1 - index;
            const cell = row[j];

            return cell === symbol;
        });
    }

    detectHorizontalWin(symbol: string): boolean {
        for (let i = 0; i < this.board.length; i++) {
            const currentRow = this.board[i];
            const rowWin = currentRow.every((cell) => cell === symbol);

            if (rowWin) {
                return true;
            }
        }

        return false;
    }

    detectVerticalWin(symbol: string): boolean {
        for (var column = 0; column < this.board.length; column++) {
            const columnItems = [];

            for (let row = 0; row < this.board[0].length; row++) {
                columnItems.push(this.board[row][column]);
            }

            const detectThreeInAColumn = columnItems.every((item) => item === symbol);

            if (detectThreeInAColumn) {
                return true;
            }
        }
        return false;
    }

    detectWin(symbol: string = HUMAN_DEFAULT_SYMBOL) {
        // Case 1: horizontal row
        // Case 2: vertical column
        // Case 3: left / right diagonal row

        return [
            this.detectHorizontalWin(symbol),
            this.detectVerticalWin(symbol),
            this.detectDiagonalWin(symbol),
        ].some((result) => result);
    }
}
