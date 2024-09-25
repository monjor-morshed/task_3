class GameRules {
  constructor(moves) {
    this.moves = moves;
  }

  winner = (playerMove, computerMove) => {
    if (playerMove === computerMove) return "Draw";

    const playerIndex = this.moves.indexOf(playerMove);
    const computerIndex = this.moves.indexOf(computerMove);
    const half = Math.floor(this.moves.length / 2);

    if (
      (playerIndex - computerIndex + this.moves.length) % this.moves.length <=
      half
    ) {
      return "Win";
    }
    return "Lose";
  };
}

export default GameRules;
