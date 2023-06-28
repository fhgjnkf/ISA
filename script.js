// Get user's move 
function getUserMove() {
  var buttons = document.querySelectorAll('.userchoice');
  var move = -1;
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      move = parseInt(button.value);
      endGame(move);
    });
  });
}

// Generate random move for the computer
function getComputerMove() {
  return Math.floor(Math.random() * 3);
}

// Calculate the game result
function calcResult(userMove, compMove) {
  if (userMove === compMove) {
    return 'd'; // Draw
  } else if ((userMove === 0 && compMove === 2) || (userMove === 1 && compMove === 0) || (userMove === 2 && compMove === 1)) {
    return 'w'; // Win
  } else {
    return 'l'; // Lose
  }
}

// Process the game result
function endGame(userMove) {
  var message = document.getElementsByClassName('message')[0];
  var compMove = getComputerMove();
  var result = calcResult(userMove, compMove);
  postScript(userMove, compMove);

  if (result === 'w') {
    message.innerHTML = 'Victory!';
    reset();
  } else if (result === 'd') {
    message.innerHTML = 'Draw!';
    reset();
  } else {
    message.innerHTML = 'Defeat!';
    reset();
  }
}

function reset() {
  document.getElementsByClassName('gamebutton')[0].classList.toggle('hide');
  document.getElementsByClassName('retry')[0].classList.toggle('hide');
  document.getElementById('retry').addEventListener('click', function() {
      location.reload();
  });
  
}


// Update the post-game details
function postScript(userMove, compMove) {
  var list = ['Rock', 'Paper', 'Scissors'];
  var player = document.getElementById('player');
  var computer = document.getElementById('computer');
  var userMoveSpan = document.getElementById('usermove');
  var compMoveSpan = document.getElementById('compmove');

  player.classList.remove('hide');
  computer.classList.remove('hide');

  userMoveSpan.innerHTML = list[userMove];
  compMoveSpan.innerHTML = list[compMove];
}


getUserMove();
