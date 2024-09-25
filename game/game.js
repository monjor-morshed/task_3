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
}

export default Game;
