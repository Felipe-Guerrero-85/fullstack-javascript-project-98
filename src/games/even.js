import runGame from '../index.js';

const gameDescription = 'Responde "yes" si el número es par, de lo contrario responde "no".';

const isEven = (number) => number % 2 === 0;

const getRoundData = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  return {
    question: randomNumber,
    correctAnswer: isEven(randomNumber) ? 'yes' : 'no',
  };
};

const runEvenGame = () => {
  runGame(gameDescription, getRoundData);
};

export default runEvenGame;