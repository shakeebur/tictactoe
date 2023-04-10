# Shakeeb Rahman's Tic-Tac-Toe vs AI Game
This is a simple Tic-Tac-Toe game built using React where you can play against an AI opponent. The AI uses the Minimax algorithm to make its moves, which ensures it's always playing the best possible move, making it a tough competitor.

# How to run the app
Make sure you have Node.js and NPM (Node Package Manager) installed on your computer. You can download them from the official Node.js website.

Open your terminal (or command prompt) and navigate to the directory containing the React app (where the package.json file is located).

Run the following command to install all necessary dependencies:
``npm install`` followed by ``npm start`` and open your browser and go to http://localhost:3000 to view the app.


The Minimax algorithm works by recursively simulating all possible game states resulting from the current player's moves and their opponent's subsequent moves. It assigns a score to each game state based on the outcome (win, loss, or draw) and chooses the move that leads to the highest score for the current player (while minimizing the score for the opponent).

In the context of this Tic-Tac-Toe game, the AI opponent evaluates all possible moves on the board and chooses the one that will result in the best outcome for itself, while minimizing the chances of the human player winning.

## Brief description of the Minimax algorithm
The Minimax algorithm can be summarized in the following steps:

- Start from the current game state and generate all possible moves for the player (AI or human).
- For each move, evaluate the new game state and assign a score based on the outcome (win, loss, or draw).
- If the game state is a terminal state (a win, loss, or draw), return the score.
- If the game state is not a terminal state, continue generating and evaluating game states for the other player, recursively applying the same process.
- The algorithm will choose the move that leads to the maximum score for the current player, while minimizing the score for the opponent (hence the name Minimax).
- By using this algorithm, the AI opponent can predict all possible outcomes of the game and make decisions that ensure the highest probability of winning or drawing.

# How the AI works
The AI in this game uses the Minimax algorithm, a decision-making algorithm used in two-player games like Tic-Tac-Toe. The algorithm calculates the best possible move for the AI by considering all possible moves and their outcomes. It does this by simulating the game, with each player making optimal moves until a terminal state is reached (win, loss, or draw).

Minimax algorithm assigns a score to each game state: a positive score for a win, a negative score for a loss, and zero for a draw. The AI's goal is to maximize its score while minimizing the opponent's score.

In simple terms, the Minimax algorithm predicts future moves and chooses the move that results in the most favorable outcome for the AI, while considering the best possible moves for the human player.
## How to play
- Click the "Start" button to begin the game.
- Take turns with the AI, placing your symbol (X) on the board by clicking an empty cell.
- The AI will automatically make a move (O) after you've made your move.
- The game continues until a player wins (three symbols in a row vertically, horizontally, or diagonally) or the board is full (a draw).
- If you want to replay your last move, click the "Replay" button.
- To start a new game, click the "Start" button again.
- Enjoy playing Tic-Tac-Toe against the AI!
# Credit
- I would credit the Minimax logic to be derived from https://www.geeksforgeeks.org/finding-optimal-move-in-tic-tac-toe-using-minimax-algorithm-in-game-theory/ as they did a grat job explaining it.
- UI design was inspired from https://github.com/Cledersonbc/tic-tac-toe-minimax.


