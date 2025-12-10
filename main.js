import input from "analiza-sync";
import { createboard, callback, winner } from "./createboard.js";
import { players } from "./player.js";

const board = createboard();
const playerX = players("Player X", "x");
const playerO = players("Player O", "o");
let current = playerX;

while (true) {
  const index = Number(input(`${current.name} choose 0-8: `));
  if (board[index] === "_") {
    callback(index, board, current);
  } else {
    continue;
  }

  const w = winner(board);
  if (w !== "youre loser") {
    console.log(w);

  }

}
