const readline = require('readline');

function runQuiz(questions) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  let score = 0;
  let currentIndex = 0;

  const askQuestion = () => {
    const question = questions[currentIndex].question;
    const answers = questions[currentIndex].answers;
    const correctAnswerIndex = questions[currentIndex].correctAnswerIndex;
    console.log(`Question ${currentIndex + 1}: ${question}\n${answers.join('\n')}`);
    rl.question('Enter your answer (number): ', (userAnswer) => {
      if (userAnswer === String(correctAnswerIndex + 1)) {
        console.log('Correct!');
        score++;
      } else {
        console.log('Incorrect.');
      }
      currentIndex++;
      if (currentIndex < questions.length) {
        askQuestion();
      } else {
        console.log(`Quiz complete. Your score is ${score} out of ${questions.length}.`);
        rl.close();
      }
    });
  };

  askQuestion();
}

  const questions = [
    {
      question: 'What is the capital of France?',
      answers: ['Paris', 'London', 'Berlin', 'Madrid'],
      correctAnswerIndex: 0,
    },
    {
      question: 'What is the largest country in the world by land area?',
      answers: ['China', 'United States', 'Russia', 'Canada'],
      correctAnswerIndex: 2,
    },
    {
      question: 'What is the smallest continent by land area?',
      answers: ['North America', 'Europe', 'Australia', 'South America'],
      correctAnswerIndex: 2,
    },
  ];
  
  runQuiz(questions);
  
  