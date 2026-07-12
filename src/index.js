import readlineSync from 'readline-sync';
import greeting from './cli.js';

const runGame = (gameDescription, getRoundData) => {
  const name = greeting();

  console.log(gameDescription);

  for (let i = 0; i < 3; i += 1) {
    const { question, correctAnswer } = getRoundData();

    console.log(`Pregunta: ${question}`);

    const answer = readlineSync.question('Tu respuesta: ');

    if (answer === correctAnswer) {
      console.log('¡Correcto!');
    } else {
      console.log(`'${answer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
      console.log(`¡Intentémoslo de nuevo, ${name}!`);
      return;
    }
  }

  console.log(`¡Felicidades, ${name}!`);
};

export default runGame;