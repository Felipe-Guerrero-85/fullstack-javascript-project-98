import readlineSync from 'readline-sync';
import greeting from '../cli.js';

const isEven = (number) => number % 2 === 0;

const runEvenGame = () => {
  const name = greeting();

  console.log('Responde "yes" si el número es par, de lo contrario responde "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    console.log(`Pregunta: ${randomNumber}`);

    const answer = readlineSync.question('Tu respuesta: ');

    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

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

export default runEvenGame;