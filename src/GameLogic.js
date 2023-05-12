export const EMPTY = 0;
export const PLAYER_X = 1;
export const PLAYER_O = 2;

const lines = [
  [[0, 0], [0, 1], [0, 2]],
  [[1, 0], [1, 1], [1, 2]],
  [[2, 0], [2, 1], [2, 2]],
  [[0, 0], [1, 0], [2, 0]],
  [[0, 1], [1, 1], [2, 1]],
  [[0, 2], [1, 2], [2, 2]],
  [[0, 0], [1, 1], [2, 2]],
  [[0, 2], [1, 1], [2, 0]],
];

export const checkWinner = (board) => {
  for (const line of lines) {
    const [a, b, c] = line;
    if (
      board[a[0]][a[1]] !== EMPTY &&
      board[a[0]][a[1]] === board[b[0]][b[1]] &&
      board[a[0]][a[1]] === board[c[0]][c[1]]
    ) {
      return board[a[0]][a[1]];
    }
  }
  return EMPTY;
};

export const makeMove = (board, row, col, player) => {
  if (board[row][col] === EMPTY) {
    board[row][col] = player;
    return true;
  }
  return false;
};

const isBoardFull = (board) => {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] === EMPTY) {
        return false;
      }
    }
  }
  return true;
};

const minimax = (board, depth, maximizingPlayer) => {
  const winner = checkWinner(board);
  if (winner !== EMPTY) {
    return winner === PLAYER_X ? -1 : 1;
  }

  if (isBoardFull(board)) {
    return 0;
  }

  let bestScore;
  const nextPlayer = maximizingPlayer ? PLAYER_O : PLAYER_X;

  if (maximizingPlayer) {
    bestScore = -Infinity;
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (board[row][col] === EMPTY) {
          board[row][col] = PLAYER_O;
          const score = minimax(board, depth + 1, false);
          board[row][col] = EMPTY;
          bestScore = Math.max(bestScore, score);
        }
      }
    }
  } else {
    bestScore = Infinity;
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (board[row][col] === EMPTY) {
          board[row][col] = PLAYER_X;
          const score = minimax(board, depth + 1, true);
          board[row][col] = EMPTY;
          bestScore = Math.min(bestScore, score);
        }
      }
    }
  }

  return bestScore;
};

export const getBestMove = (board) => {
  let bestScore = -Infinity;
  let bestMove = null;

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] === EMPTY) {
        board[row][col] = PLAYER_O;
        const score = minimax(board, 0, false);
        board[row][col] = EMPTY;

        if (score > bestScore) {
          bestScore = score;
          bestMove = {row, col};
        }
      }
    }
  }

  return bestMove;
};

