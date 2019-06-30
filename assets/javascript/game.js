

var log = console.log;
var letters = "abcdefghijklmnopqrstuvwxyz"

var wins = 0;
var losses = 0;

var guessesLeft = 9;

var Guesses = [];
log(Guesses);

function numberGenerator() {
      var randomNumber = Math.floor(Math.random() * letters.length);
      return randomNumber;
}

function letterGenerator() {
    var number = numberGenerator();
    var letter = letters[number];
    return letter;
}


function psychicGame () {

        document.onkeyup = function (event) 
        {   
            var randomLetter = letterGenerator();
            var input = event.key;
            
            log(input);
            if (input === randomLetter)
            {
                wins++;
                Guesses.push(input);
                document.getElementById("wins").innerHTML = "Wins: "+wins; 
                document.getElementById("losses").innerHTML = "Losses: "+losses;  
                document.getElementById("guesses-left").innerHTML = "Guesses Left: "+guessesLeft;
                document.getElementById("guesses-so-far").innerHTML = "Your Guesses so far: "+Guesses;
            }

            if (input !== randomLetter){

                losses++;
                guessesLeft--;
              
                if (losses == 9 && guessesLeft == 0) 
                {
                    wins=0;
                    losses=0;
                    guessesLeft = 9;
                    Guesses = [];

                    document.getElementById("wins").innerHTML = "Wins: "+wins; 
                    document.getElementById("losses").innerHTML = "Losses: "+losses;  
                    document.getElementById("guesses-left").innerHTML = "Guesses Left: "+guessesLeft;
                    document.getElementById("guesses-so-far").innerHTML = "Your Guesses so far: "+Guesses;
                }
               else {
                    Guesses.push(input);
                    document.getElementById("wins").innerHTML = "Wins: "+wins; 
                    document.getElementById("losses").innerHTML = "Losses: "+losses;  
                    document.getElementById("guesses-left").innerHTML = "Guesses Left: "+guessesLeft;
                    document.getElementById("guesses-so-far").innerHTML = "Your Guesses so far: "+Guesses;
               }
            }    
        }
    }


psychicGame();





   

