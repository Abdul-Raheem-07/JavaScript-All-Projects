const shapes = document.querySelectorAll('.shape');
const message = document.getElementById('message');
const playAgainBtn = document.getElementById('playAgain');
const scoreDisplay = document.getElementById('score');

let score = 0;
let answer = 0;
let running = true;

function generateNewGame() {
  running = true;
  message.textContent = '';
  playAgainBtn.style.display = 'none';

  let shapeNumbers = [];

  shapes.forEach(shape => {
    const num = Math.floor(Math.random() * 100) + 1;
    shape.textContent = num;
    shape.dataset.number = num;
    shape.classList.remove('correct', 'wrong');
    shape.style.pointerEvents = 'auto';
    shapeNumbers.push(num);
  });

  answer = shapeNumbers[Math.floor(Math.random() * shapeNumbers.length)];
  console.log("🧠 New answer is:", answer);
}

shapes.forEach(shape => {
  shape.addEventListener('click', () => {
    if (!running) return;

    const guessedNum = Number(shape.dataset.number);

    if (guessedNum === answer) {
      shape.classList.add('correct');
      message.textContent = `🎉 Correct! ${guessedNum} is the right number.`;
      running = false;

      // Increase score
      score += 3;
      scoreDisplay.textContent = `Score: ${score}`;

      // Disable all shapes
      shapes.forEach(s => s.style.pointerEvents = 'none');

      // Show Play Again button
      playAgainBtn.style.display = 'inline-block';
    } else if (guessedNum < answer) {
      shape.classList.add('wrong');
      message.textContent = `📉 ${guessedNum} is too low. Try again.`;
    } else {
      shape.classList.add('wrong');
      message.textContent = `📈 ${guessedNum} is too high. Try again.`;
    }
  });
});

playAgainBtn.addEventListener('click', generateNewGame);

// Start first game
generateNewGame();
