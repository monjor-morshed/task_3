class GameRules {
  constructor(moves) {
    this.moves = moves;
  }

  determineWinner(playerMove, computerMove) {
    if (playerMove === computerMove) {
      return "draw";
    }

    const winningMoves = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };

    if (winningMoves[playerMove] === computerMove) {
      return "player";
    } else {
      return "computer";
    }
  }
}

export { GameRules };
