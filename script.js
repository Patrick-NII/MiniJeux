// Générez un nombre aléatoire entre 1 et 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
    
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');

let numberOfTries = 0;

guessButton.addEventListener('click', () => {
  const userGuess = parseInt(guessInput.value);
  numberOfTries++;
  
  if (userGuess === randomNumber) {
    message.textContent = `Bravo ! Vous avez deviné le nombre en ${numberOfTries} essais.`;
  } else if (userGuess < randomNumber) {
    message.textContent = 'Le nombre est plus grand. Essayez encore.';
  } else {
    message.textContent = 'Le nombre est plus petit. Essayez encore.';
  }
});

