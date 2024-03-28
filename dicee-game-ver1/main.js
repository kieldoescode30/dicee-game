function playDicee () {
  const playerOne = Math.floor(Math.random() * 6) + 1;
  const playerTwo = Math.floor(Math.random() * 6) + 1;

  const p1dot1 = document.getElementById('p1 dot-1');
  const p1dot2 = document.getElementById('p1 dot-2');
  const p1dot3 = document.getElementById('p1 dot-3');
  const p1dot4 = document.getElementById('p1 dot-4');
  const p1dot5 = document.getElementById('p1 dot-5');
  const p1dot6 = document.getElementById('p1 dot-6');
  const p1dot7 = document.getElementById('p1 dot-7');

  const p2dot1 = document.getElementById('p2 dot-1');
  const p2dot2 = document.getElementById('p2 dot-2');
  const p2dot3 = document.getElementById('p2 dot-3');
  const p2dot4 = document.getElementById('p2 dot-4');
  const p2dot5 = document.getElementById('p2 dot-5');
  const p2dot6 = document.getElementById('p2 dot-6');
  const p2dot7 = document.getElementById('p2 dot-7');

  if (playerOne === 1) {
    p1dot1.style.visibility = "hidden";
    p1dot2.style.visibility = "hidden";
    p1dot3.style.visibility = "hidden";
    p1dot4.style.visibility = "visible";
    p1dot5.style.visibility = "hidden";
    p1dot6.style.visibility = "hidden";
    p1dot7.style.visibility = "hidden";
  } else if (playerOne === 2) {
    p1dot1.style.visibility = "visible";
    p1dot2.style.visibility = "hidden";
    p1dot3.style.visibility = "hidden";
    p1dot4.style.visibility = "hidden";
    p1dot5.style.visibility = "hidden";
    p1dot6.style.visibility = "hidden";
    p1dot7.style.visibility = "visible";
  } else if (playerOne === 3) {
    p1dot1.style.visibility = "visible";
    p1dot2.style.visibility = "hidden";
    p1dot3.style.visibility = "hidden";
    p1dot4.style.visibility = "visible";
    p1dot5.style.visibility = "hidden";
    p1dot6.style.visibility = "hidden";
    p1dot7.style.visibility = "visible";
  } else if (playerOne === 4) {
    p1dot1.style.visibility = "visible";
    p1dot2.style.visibility = "visible";
    p1dot3.style.visibility = "hidden";
    p1dot4.style.visibility = "hidden";
    p1dot5.style.visibility = "hidden";
    p1dot6.style.visibility = "visible";
    p1dot7.style.visibility = "visible";
  } else if (playerOne === 5) {
    p1dot1.style.visibility = "visible";
    p1dot2.style.visibility = "visible";
    p1dot3.style.visibility = "hidden";
    p1dot4.style.visibility = "visible";
    p1dot5.style.visibility = "hidden";
    p1dot6.style.visibility = "visible";
    p1dot7.style.visibility = "visible";
  } else if (playerOne === 6) {
    p1dot1.style.visibility = "visible";
    p1dot2.style.visibility = "visible";
    p1dot3.style.visibility = "visible";
    p1dot4.style.visibility = "visible";
    p1dot5.style.visibility = "visible";
    p1dot6.style.visibility = "visible";
    p1dot7.style.visibility = "visible";
  }

  if (playerTwo === 1) {
    p2dot1.style.visibility = "hidden";
    p2dot2.style.visibility = "hidden";
    p2dot3.style.visibility = "hidden";
    p2dot4.style.visibility = "visible";
    p2dot5.style.visibility = "hidden";
    p2dot6.style.visibility = "hidden";
    p2dot7.style.visibility = "hidden";
  } else if (playerTwo === 2) {
    p2dot1.style.visibility = "visible";
    p2dot2.style.visibility = "hidden";
    p2dot3.style.visibility = "hidden";
    p2dot4.style.visibility = "hidden";
    p2dot5.style.visibility = "hidden";
    p2dot6.style.visibility = "hidden";
    p2dot7.style.visibility = "visible";
  } else if (playerTwo === 3) {
    p2dot1.style.visibility = "visible";
    p2dot2.style.visibility = "hidden";
    p2dot3.style.visibility = "hidden";
    p2dot4.style.visibility = "visible";
    p2dot5.style.visibility = "hidden";
    p2dot6.style.visibility = "hidden";
    p2dot7.style.visibility = "visible";
  } else if (playerTwo === 4) {
    p2dot1.style.visibility = "visible";
    p2dot2.style.visibility = "visible";
    p2dot3.style.visibility = "hidden";
    p2dot4.style.visibility = "hidden";
    p2dot5.style.visibility = "hidden";
    p2dot6.style.visibility = "visible";
    p2dot7.style.visibility = "visible";
  } else if (playerTwo === 5) {
    p2dot1.style.visibility = "visible";
    p2dot2.style.visibility = "visible";
    p2dot3.style.visibility = "hidden";
    p2dot4.style.visibility = "visible";
    p2dot5.style.visibility = "hidden";
    p2dot6.style.visibility = "visible";
    p2dot7.style.visibility = "visible";
  } else if (playerTwo === 6) {
    p2dot1.style.visibility = "visible";
    p2dot2.style.visibility = "visible";
    p2dot3.style.visibility = "visible";
    p2dot4.style.visibility = "visible";
    p2dot5.style.visibility = "visible";
    p2dot6.style.visibility = "visible";
    p2dot7.style.visibility = "visible";
  }


  if (playerOne > playerTwo) {
    const p1Win = document.querySelector("h1").innerHTML = "Player 1 Wins! &#128104;";
  } else if (playerOne < playerTwo) {
    const p2Win = document.querySelector("h1").innerHTML = "Player 2 Wins! &#128105;";
  } else {
    const drawText = document.querySelector("h1").innerHTML = "Draw! &#9940;";
  }
}