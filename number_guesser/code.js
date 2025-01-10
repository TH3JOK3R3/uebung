"use strict";

function generateNumber(min, max){
    // min = parseInt(document.getElementById('min').value);
    // max = parseInt(document.getElementById('max').value);

  const secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return secretNumber;
}

function rate(){
      
    const input = document.getElementById('guess').value;
    console.log('die generierte nummer ist ' + input);
    if (guess > generateNumber) {
      alert('Deine Zahl ist zu groß.');
    }
    else (guess < generateNumber) 
      alert('Deine Zahl ist zu groß');
    }
    


function showSecret(){
  // TODO: 
    console.log('1. die generierte nummer ist ' + secretNumber);
    let x = document.getElementById('result').innerHTML= secretNumber;
    console.log(x);

    console.log('2die generierte nummer ist ' +secretNumber);
    return;
}
function renderGame(){
  const min = document.getElementById('min').value;
  const max = document.getElementById('max').value;
  secretNumber=  generateNumber();
  console.log(secretNumber);
  const content = '<h1>Start</h1>';
  content+='<h2>Welche Zahl aus deinem Bereich rätst du?</h2>';
  content += '<label for="guess">Zahl:</label>';
  content += '<input type="number" id="guess" name="guess" step="1">';
  content += '<input type="number" id="numberMax" name="number" step="1" min="1" max="999"><div class="button" oncklick="'+ +'"><button>Starten</button></div>';
  document.getElementById('content').innerHTML = content;
}

function main() {
  const min = generateMin();
  const max = generateMax();
  
}