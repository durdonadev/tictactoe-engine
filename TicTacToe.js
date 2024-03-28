class TicTacToe {
    constructor(size) {
        this.size = size;
        this.board = [];
        for (let i = 0; i < size; i++) {
            this.board.push(new Array(size).fill(null));
        }
    }

    checkRow(row) {
        const first = this.board[row][0];
        if (!first) return false;
        for (let i = 1; i < this.size; i++) {
            if (this.board[row][i] !== first) return false;
        }
        return first;
    }

    checkColumn(col) {
        const first = this.board[0][col];
        if (!first) return false;
        for (let i = 1; i < this.size; i++) {
            if (this.board[i][col] !== first) return false;
        }
        return first;
    }

    checkDiagonal1() {
        const topLeft = this.board[0][0];
        if (!topLeft) return false;
        for (let i = 1; i < this.size; i++) {
            if (this.board[i][i] !== topLeft) return false;
        }
        return topLeft;
    }

    checkDiagonal2() {
        const topRight = this.board[0][this.size - 1];
        if (!topRight) return false;
        for (let i = 1; i < this.size; i++) {
            if (this.board[i][this.size - 1 - i] !== topRight) return false;
        }
        return topRight;
    }

    calculateWin() {
        // Check rows
        for (let i = 0; i < this.size; i++) {
            const winner = this.checkRow(i);
            if (winner) return winner;
        }

        // Check columns
        for (let i = 0; i < this.size; i++) {
            const winner = this.checkColumn(i);
            if (winner) return winner;
        }

        // Check diagonals
        const firstDiagonalWinner = this.checkDiagonal1();
        if (firstDiagonalWinner) return firstDiagonalWinner;

        const secondDiagonalWinner = this.checkDiagonal2();
        if (secondDiagonalWinner) return secondDiagonalWinner;

        // Check for draw
        const isDraw = this.board.every((row) =>
            row.every((cell) => cell !== null)
        );
        return isDraw ? "Draw" : "Continue";
    }
}

const game = new TicTacToe(5);

game.board = [
    ["X", "O", "X", "X", "O"],
    ["O", "X", "O", "O", "X"],
    ["O", "X", "O", "O", "X"],
    ["O", "X", "O", "O", "X"],
    ["O", "X", "O", "O", "X"]
];

const winner = game.calculateWin();
console.log("Winner:", winner);
