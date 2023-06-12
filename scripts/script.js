var numberToGuess = Math.floor(Math.random() * 101);
var attempts = 0;

function guessNumber() {
  var guess = parseInt(prompt("Ingresa un número entre 0 y 100:"));

  if (isNaN(guess)) {
    alert("¡Por favor, ingresa un número válido!");
    return;
  }

  attempts++;

  if (guess < numberToGuess) {
    alert("Intenta con un número más grande.");
    guessNumber();
  } else if (guess > numberToGuess) {
    alert("Intenta con un número más pequeño.");
    guessNumber();
  } else {
    alert("¡Felicitaciones! Adivinaste el número en " + attempts + " intentos.");
  }
}

guessNumber();