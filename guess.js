var winningButton;
function addbutons()
{
  var numberOfButtons = document.getElementById("text_dificulty").value;
  var numberButtons = parseInt(numberOfButtons);
if (numberButtons <= 0) {
    document.getElementById("status").style.color = "red";
    document.getElementById("status").innerHTML = "Status: Please restart and write another number!";
  } else if (numberButtons == 1) {
    document.getElementById("status").style.color = "red";
    document.getElementById("status").innerHTML = "Status: It's too hard! Please restart!";
  } else {
    winningButton = Math.floor(Math.random() * numberButtons) + 1;
    for (var i = 1; i <= numberButtons; i++) {
      $('#buttons').append(`
        <button type="button" id = "` + i + `" class="btn btn-secondary btn-lg" onclick = "return guessButton(` + i + `);">Button: ` + i + `</button>
      `);
    }
      return false;
  }
}

function guessButton(id) {
  if (id == winningButton) {
    document.getElementById("status").style.color = "green";
    document.getElementById("status").innerHTML = "Status: Winner!!!";
  } else {
    document.getElementById("status").style.color = "red";
    document.getElementById("status").innerHTML = "Status: Loser!!!";
  }
}
function restartGame() {
  location.reload();
}