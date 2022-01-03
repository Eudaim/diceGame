var player1Dice = Math.floor(Math.random() * 6); 
var player2Dice = Math.floor(Math.random() * 6);
switch(player1Dice)
{
    case 1: 
        break; 
    case 2: 
        break;
    case 3: 
        break;
    case 4: 
        break; 
    case 5: 
        break; 
    case 6: 
        break;
}
switch(player1Dice)
{
    case 1: 
        document.querySelector("#player1").setAttribute("src", "images/dice1.png"); 
        break; 
    case 2: 
    document.querySelector("#player1").setAttribute("src", "images/dice2.png"); 
        break;
    case 3: 
    document.querySelector("#player1").setAttribute("src", "images/dice3.png"); 
        break;
    case 4: 
    document.querySelector("#player1").setAttribute("src", "images/dice4.png"); 
        break; 
    case 5: 
    document.querySelector("#player1").setAttribute("src", "images/dice5.png"); 
        break; 
    case 6: 
    document.querySelector("#player1").setAttribute("src", "images/dice6.png"); 
        break;
}
switch(player2Dice)
{
    case 1: 
        document.querySelector("#player2").setAttribute("src", "images/dice1.png"); 
        break; 
    case 2: 
    document.querySelector("#player2").setAttribute("src", "images/dice2.png"); 
        break;
    case 3: 
    document.querySelector("#player2").setAttribute("src", "images/dice3.png"); 
        break;
    case 4: 
    document.querySelector("#player2").setAttribute("src", "images/dice4.png"); 
        break; 
    case 5: 
    document.querySelector("#player2").setAttribute("src", "images/dice5.png"); 
        break; 
    case 6: 
    document.querySelector("#player2").setAttribute("src", "images/dice6.png"); 
        break;
}

if(player1Dice > player2Dice)
    document.querySelector("h1").textContent = "Player 1 Wins!"; 
else if(player1Dice == player2Dice)
    document.querySelector("h1").textContent = "Draw";
else
    document.querySelector("h1").textContent = "Player 2 Wins!";