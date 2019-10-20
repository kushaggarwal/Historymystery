//width and height of the board
width = 7;
height = 5;
info = [
  {
    id: 1,
    date: "20 Jun'89",
    head: "The Tennis Court Oath – June 20, 1789",
    img: "1.webp",
    info: `The Estates General was the general assembly of France. 
    It was divided into three estates: the clergy (First Estate), the nobility (Second Estate) and the rest of the population (Third Estate).
     The Estates General had last met in 1614 but it was summoned by King Louis XVI in May 1789 as the nation was facing a severe financial crisis.
      Each estate had only one vote. Thus, though the Third Estate comprised of more than 98% of the French population, it was usually overruled by the nobility and the clergy. 
      In the lead up to the meeting of the Estates General on May 5, the Third Estate gathered support for equal representation but the negotiation with the other two estates failed. 
      In response, the Third Estate decided to form their own National Assembly. On June 20, 1789, Louis XVI ordered the closure of the Salle des États where the Assembly met. 
      The Third Estate moved to an indoor tennis court where they pledged not to separate until they had given France a constitution. This became known as the Tennis Court Oath.`
  },
  {
    id: 2,
    date: "14 Jul'89",
    head: "The Tennis Court Oath – June 20, 1789",
    img: "1.webp",
    info: `The Estates General was the general assembly of France. 
    It was divided into three estates: the clergy (First Estate), the nobility (Second Estate) and the rest of the population (Third Estate).
     The Estates General had last met in 1614 but it was summoned by King Louis XVI in May 1789 as the nation was facing a severe financial crisis.
      Each estate had only one vote. Thus, though the Third Estate comprised of more than 98% of the French population, it was usually overruled by the nobility and the clergy. 
      In the lead up to the meeting of the Estates General on May 5, the Third Estate gathered support for equal representation but the negotiation with the other two estates failed. 
      In response, the Third Estate decided to form their own National Assembly. On June 20, 1789, Louis XVI ordered the closure of the Salle des États where the Assembly met. 
      The Third Estate moved to an indoor tennis court where they pledged not to separate until they had given France a constitution. This became known as the Tennis Court Oath.`
  },
  {
    id: 3,
    date: "26 Aug'89",
    head: "The Tennis Court Oath – June 20, 1789",
    img: "1.webp",
    info: `The Estates General was the general assembly of France. 
    It was divided into three estates: the clergy (First Estate), the nobility (Second Estate) and the rest of the population (Third Estate).
     The Estates General had last met in 1614 but it was summoned by King Louis XVI in May 1789 as the nation was facing a severe financial crisis.
      Each estate had only one vote. Thus, though the Third Estate comprised of more than 98% of the French population, it was usually overruled by the nobility and the clergy. 
      In the lead up to the meeting of the Estates General on May 5, the Third Estate gathered support for equal representation but the negotiation with the other two estates failed. 
      In response, the Third Estate decided to form their own National Assembly. On June 20, 1789, Louis XVI ordered the closure of the Salle des États where the Assembly met. 
      The Third Estate moved to an indoor tennis court where they pledged not to separate until they had given France a constitution. This became known as the Tennis Court Oath.`
  },
  {
    id: 4,
    date: "5 Oct'89",
    head: "The Tennis Court Oath – June 20, 1789",
    img: "1.webp",
    info: `The Estates General was the general assembly of France. 
    It was divided into three estates: the clergy (First Estate), the nobility (Second Estate) and the rest of the population (Third Estate).
     The Estates General had last met in 1614 but it was summoned by King Louis XVI in May 1789 as the nation was facing a severe financial crisis.
      Each estate had only one vote. Thus, though the Third Estate comprised of more than 98% of the French population, it was usually overruled by the nobility and the clergy. 
      In the lead up to the meeting of the Estates General on May 5, the Third Estate gathered support for equal representation but the negotiation with the other two estates failed. 
      In response, the Third Estate decided to form their own National Assembly. On June 20, 1789, Louis XVI ordered the closure of the Salle des États where the Assembly met. 
      The Third Estate moved to an indoor tennis court where they pledged not to separate until they had given France a constitution. This became known as the Tennis Court Oath.`
  },
  {
    id: 5,
    date: "4 Aug'89",
    head: "The Tennis Court Oath – June 20, 1789",
    img: "1.webp",
    info: `The Estates General was the general assembly of France. 
    It was divided into three estates: the clergy (First Estate), the nobility (Second Estate) and the rest of the population (Third Estate).
     The Estates General had last met in 1614 but it was summoned by King Louis XVI in May 1789 as the nation was facing a severe financial crisis.
      Each estate had only one vote. Thus, though the Third Estate comprised of more than 98% of the French population, it was usually overruled by the nobility and the clergy. 
      In the lead up to the meeting of the Estates General on May 5, the Third Estate gathered support for equal representation but the negotiation with the other two estates failed. 
      In response, the Third Estate decided to form their own National Assembly. On June 20, 1789, Louis XVI ordered the closure of the Salle des États where the Assembly met. 
      The Third Estate moved to an indoor tennis court where they pledged not to separate until they had given France a constitution. This became known as the Tennis Court Oath.`
  }
];
//if the player has won or not
var hasWon = false;
window.rollDice = () => {
  if (hasWon) {
    return;
  }

  let currentPlayer = players[currentPlayerTurn];

  roll = Math.floor(Math.random() * 5 + 1);
  message = `<div class=container>
        <h3>${currentPlayer.name + "  " + "rolled" + " " + roll}</h3>
        </div>`;
  document.getElementById("message").innerHTML = message;
  console.log(currentPlayer.name + ", You rolled", roll); //keeping track of rolls
  //incrementing the position after the roll using the dice value
  if (currentPlayer.position === 0 && roll != 1) {
    //the first turn has to have 1
    currentPlayer.position = 0; //otherwise the position stays as it is
    console.log("Bad luck, you need to roll a 1!"); //logs it that I need a one
  } else {
    //else the # of roll is added to the position of the player
    currentPlayer.position += roll;
    ladders.forEach(ladder => {
      //looping through each ladder
      //if the starting of the ladder is equal to player's position
      if (ladder.start === currentPlayer.position) {
        //print this on the screen

        str = `The Estates General was the general assembly of France. 
    It was divided into three estates: the clergy (First Estate), the nobility (Second Estate) and the rest of the population (Third Estate).
     The Estates General had last met in 1614 but it was summoned by King Louis XVI in May 1789 as the nation was facing a severe financial crisis.
      Each estate had only one vote. Thus, though the Third Estate comprised of more than 98% of the French population, it was usually overruled by the nobility and the clergy. 
      In the lead up to the meeting of the Estates General on May 5, the Third Estate gathered support for equal representation but the negotiation with the other two estates failed. 
      In response, the Third Estate decided to form their own National Assembly. On June 20, 1789, Louis XVI ordered the closure of the Salle des États where the Assembly met. 
      The Third Estate moved to an indoor tennis court where they pledged not to separate until they had given France a constitution. This became known as the Tennis Court Oath.`;
        dt = "The Tennis Court Oath – June 20, 1789";
        img = "1.webp";
        text = `<div style="margin-top:20px" class=container>
        <h2>Quick Read</h2>
        <h3>${dt}</h3>
        
        <p>${str}</p></div>`;

        document.getElementById("text").innerHTML = text;
        currentPlayer.position = ladder.end; //step to the end of the ladder
      }
    });

    //if the curretPlayer has the last position
    if (currentPlayer.position > 99) {
      console.log(currentPlayer.name + " has won!");
      hasWon = true; //hasWon is true = player wins
    }

    //if it is any other position
    if (currentPlayer.position === position) {
      diff = currentPlayer.position - position;
      currentPlayerPosition = position - diff;
    }
  }
  currentPlayerTurn++;
  if (currentPlayerTurn >= players.length) {
    currentPlayerTurn = 0;
  }

  drawBoard();
};

//two players
players = [
  { name: "P1", position: 0, color: "gold" },
  { name: "P2", position: 0, color: "#33cc33" }
];

let currentPlayerTurn = 0;

board = [];
let position = 0;
let darkBox = false;

ladders = [
  { id: 1, date: "20 Jun'89", start: 2, end: 22 },

  { id: 2, date: "14 Jul'89", start: 10, end: 20 },
  { id: 3, date: "26 Aug'89", start: 30, end: 70 },
  { id: 4, date: "5 Oct'89", start: 40, end: 12 },
  { id: 6, date: "4 Aug'89", start: 70, end: 83 }
];

for (var y = height; y >= 0; y--) {
  let row = [];

  board.push(row);
  for (var x = 0; x < width; x++) {
    row.push({
      x,
      y,
      occupied: null,
      position,
      color: darkBox ? "#86592d" : "#ffd699"
    });
    darkBox = !darkBox; //next one is not dark box
    position++;
  }
}

boardSize = 100;
drawBoard = () => {
  let boardOnScreen = ``;
  board.forEach(row => {
    row.forEach(square => {
      boardOnScreen += `<div class=square style="top:${square.y *
        boardSize}px; left:${square.x * boardSize}px; background-color:${
        square.color
      }"></div>`;
    });
  });

  players.forEach(player => {
    let square = null;
    board.forEach(row => {
      row.forEach(square => {
        if (square.position === player.position) {
          boardOnScreen += `<div class=player style="top:${square.y *
            boardSize +
            5}px; left:${square.x * boardSize + 5}px;background-color:${
            player.color
          }"></div>`;
        }
      });
    });
  });

  ladders.forEach(ladder => {
    //let start = 0;
    let startPos = { x: 0, y: 0 };
    let endPos = { x: 0, y: 0 };
    let date = ladder.date;
    board.forEach(row => {
      row.forEach(square => {
        if (square.position === ladder.start) {
          startPos.x = square.x * boardSize;
          startPos.y = square.y * boardSize;
        }

        if (square.position === ladder.end) {
          endPos.x = square.x * boardSize;
          endPos.y = square.y * boardSize;
        }
      });
    });

    isLadder = ladder.end > ladder.start;

    //if it is a ladder then it is white, otherwise snake is green
    drawLine({ color: isLadder ? "white" : "green", startPos, endPos, date });
  });
  //get everything on the page
  document.getElementById("board").innerHTML = boardOnScreen;
};

function drawLine({ color, startPos, endPos, date }) {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();

  //ctx.arc(startPos.x + 35, startPos.y + 20, 40, 0, 2 * Math.PI);

  if (color == "white") {
    ctx.font = "15px Comic Sans MS";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(date, startPos.x + 35, startPos.y + 20);
  } else if (color == "green") {
    ctx.font = "15px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText(date, startPos.x + 25, startPos.y + 25);
  }

  //ctx.stroke();

  //
  // var snakeImage = new Image();
  // var ladderImage = new Image();

  // snakeImage.onload = function(){
  //   ctx.save();
  //   ctx.globalCompositeOperation = `source-atop`;
  //   ctx.drawImage(snakeImage,0,0);
  //   ctx.restore()
  // };
  // snakeImage.src = 'snake.png';
}
drawBoard();

var user = JSON.parse(localStorage.getItem("Coins"));
coins = `<h1 style="float:left;margin-left:20px">Coins:${user}</h1>
      <h1 style="float:right;margin-right:20px">Board Game 1</h1>`;
document.getElementById("coins").innerHTML = coins;
