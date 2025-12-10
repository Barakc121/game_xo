
const board = [];
export function createboard() {
  for (let i = 0; i < 9; i++) {
    board.push("_");
  }
  return board;
}
// console.log(createboard())

export function callback(index, board, player) {
  if (board[index] === "_") {
    board[index] = player.sign;
  } else console.log("is occupied");
}

export function winner(board) {
  
  if (board[0] === "x" && board[1] === "x" && board[2] === "x") {
    return  'x winner'
  } else if (board[3] === "x" && board[4] === "x" && board[5] === "x") {
    return 'x winner'
  } else if (board[6] === "x" && board[7] === "x" && board[8] === "x") {
    return 'x winner'
  } else if (board[0] === "x" && board[3] === "x" && board[6] === "x") {
    return 'x winner'
  } else if (board[1] === "x" && board[4] === "x" && board[7] === "x") {
    return 'x winner'
  } else if (board[2] === "x" && board[5] === "x" && board[8] === "x") {
    return 'x winner'
  } else if (board[0] === "x" && board[4] === "x" && board[8] === "x") {
    return 'x winner'
  } else if (board[2] === "x" && board[46] === "x" && board[6] === "x") {
    return 'x winner'
  } else if (board[0] === "o" && board[1] === "o" && board[2] === "o") {
    return 'o winner'
  } else if (board[3] === "o" && board[4] === "o" && board[5] === "o") {
    return 'o winner'
  } else if (board[6] === "o" && board[7] === "o" && board[8] === "o") {
    return 'o winner'
  } else if (board[0] === "o" && board[3] === "o" && board[6] === "o") {
    return 'o winner'
  } else if (board[1] === "o" && board[4] === "o" && board[7] === "o") {
    return 'o winner'
  } else if (board[2] === "o" && board[5] === "o" && board[8] === "o") {
    return 'o winner'
  } else if (board[0] === "o" && board[4] === "o" && board[8] === "o") {
    return 'o winner'
  } else if (board[2] === "o" && board[4] === "o" && board[6] === "o") {
    return 'o winner'
  }
  return "youre loser"
}

export function inRange(p){
    if(p<0 && p>8){
    console.log("the index not in range")
    }
}



const x=createboard()
callback(0,x,{name:'d',sign:'x'})
callback(4,x,{name:'d',sign:'x'})
callback(8,x,{name:'d',sign:'x'})

console.log(x)
console.log(winner(x))
// console.log(x)
