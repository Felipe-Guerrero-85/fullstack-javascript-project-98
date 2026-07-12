import runGame from '../index.js';

const gameDescription = '¿Cuál es el resultado de la expresión?';

const operations = ['+', '-', '*'];

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Operación desconocida: ${operator}`);
  }
};

const getRoundData = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();

  const operator = operations[Math.floor(Math.random() * operations.length)];

  const question = `${number1} ${operator} ${number2}`;

  const correctAnswer = String(calculate(number1, number2, operator));

  return {
    question,
    correctAnswer,
  };
};

const runCalcGame = () => {
  runGame(gameDescription, getRoundData);
};

export default runCalcGame;