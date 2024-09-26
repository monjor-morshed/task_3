import { HMACGenerator } from "../hmac/hmacGenerator.js";
import { GameRules } from "../rules/gameRules.js";
import { HelpTable } from "../help/helpTable.js";
import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Game {
  constructor(moves) {
    this.moves = moves;
    this.rules = new GameRules(moves);
    this.key = HMACGenerator.generateKey();
    this.computerMove = moves[Math.floor(Math.random() * moves.length)];
    this.hmac = HMACGenerator.generateHMAC(this.key, this.computerMove);
  }

  start = () => {
    console.log(`HMAC: ${this.hmac}`);
    this.displayMenu();
    rl.question("Enter your move: ", (input) => this.processInput(input));
  };

  displayMenu = () => {
    console.log("Available moves:");
    this.moves.forEach((move, index) => console.log(`${index + 1} - ${move}`));
    console.log("0 - exit");
    console.log("? - help");
  };

  processInput = (input) => {
    if (input === "0") {
      console.log("Game exited.");
      rl.close();
      return;
    }

    if (input === "?") {
      HelpTable.displayHelp(this.moves, this.rules);
      rl.close();
      return;
    }

    const moveIndex = parseInt(input) - 1;
    if (isNaN(moveIndex) || moveIndex < 0 || moveIndex >= this.moves.length) {
      console.error("Invalid move. Please try again.");
      this.start();
      return;
    }

    const userMove = this.moves[moveIndex];
    console.log(`Your move: ${userMove}`);
    console.log(`Computer move: ${this.computerMove}`);
    const result = this.rules.determineWinner(userMove, this.computerMove);
    console.log(
      result === "Win"
        ? "You win!"
        : result === "Draw"
        ? "It's a tie!"
        : "Computer wins!"
    );
    console.log(`HMAC key: ${this.key.toString("hex")}`);
    rl.close();
  };
}

export { Game };
