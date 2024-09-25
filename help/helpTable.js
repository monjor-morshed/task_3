import AsciiTable from "ascii-table";

class HelpTable {
  static displayHelp = (moves, rules) => {
    let table = new AsciiTable("Help Table");
    table.setHeading("v PC/User >", ...moves);

    moves.forEach((move) => {
      let results = moves.map((opponentMove) => {
        const result = rules.winner(move, opponentMove);
        return result === "Win" ? "Win" : result === "Draw" ? "Draw" : "Lose";
      });
      table.addRow(move, ...results);
    });

    console.log(table.toString());
  };
}

export default HelpTable;
