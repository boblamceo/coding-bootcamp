export default (board, symbol = 'o') => {
    if (!board) {
        return null;
    }
    return board.every((row, index) => row[index] === symbol);
};
