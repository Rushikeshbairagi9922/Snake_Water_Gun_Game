//Thgis is Is A Snake, Water & Gun Game
// In this game we use a conditional statements to build a logic for game output and we also use Comparison ANd Logical Operators to validate the operation
// and use alert , confirm & Prompt as per required

alert("Let's Play A Sanke, Water & Gun Game ");
let words = ["S", "W", "G"]; // length is 3
let Game = true || false;

while (Game) {
  // run again and again
  let player = prompt("Choose in Between Sanke(S) or Water(W) or Gun(G) : ");
  let Computer = words[Math.floor(Math.random() * words.length)];

  if (player == Computer) {
    alert("Game Drow");
  } else if (player == "W" && Computer == "S") {
    alert("Congratulations..! You Won ");
  } else if (player == "S" && Computer == "W") {
    alert("Sorry You Lost... Better Luck Next Time ");
  } else if (player == "W" && Computer == "G") {
    alert("Congratulations..! You Won ");
  } else if (player == "G" && Computer == "W") {
    alert("Sorry You Lost... Better Luck Next Time ");
  } else if (player == "S" && Computer == "G") {
    alert("Sorry You Lost... Better Luck Next Time ");
  } else if (player == "G" && Computer == "S") {
    alert("Congratulations..! You Won ");
  }

  Game = confirm("Do you Want To Play Again ?"); // to close the game
}
