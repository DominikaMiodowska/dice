// Losowa pierwsza kostka             musza byc osobno bo inaczej na obu bylaby ta sama liczba oczek czyli to samo img
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png"; // losowe zdjecie z dice1.png - diece6.png


var image1 = document.querySelectorAll("img")[0];     // pierwsze zdjecie [0]

image1.setAttribute("src", randomDiceImage1);      // podstaw src czyli nazwe zdjecia


///Losowa druga kostka
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);   // wybierz drugie zdjecie i podstaw inne losowe


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}
