import runGame from '../index.js';

const gameDescription = 'Responde "yes" si el número dado es primo. De lo contrario, responde "no".';

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getRoundData = () => {
  const randomNumber = getRandomNumber();

  return {
    question: randomNumber,
    correctAnswer: isPrime(randomNumber) ? 'yes' : 'no',
  };
};

const runPrimeGame = () => {
  runGame(gameDescription, getRoundData);
};

export default runPrimeGame;