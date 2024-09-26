import { Game } from "./game/game.js";
const main = () => {
  const moves = process.argv.slice(2);
  if (
    moves.length < 3 ||
    moves.length % 2 === 0 ||
    new Set(moves).size !== moves.length
  ) {
    console.error(
      "Please provide an odd number of unique. Moves greater than or equal to 3."
    );
    console.error("Exp: node index.js rock paper scissors");
    process.exit(1);
  }

  const game = new Game(moves);
  game.start();
};

main();
