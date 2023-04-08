const quiz = document.getElementById('quiz');
const questionDiv = document.getElementById('question');
const showAnswerButton = document.getElementById('show-answer');
const nextQuestionButton = document.getElementById('next-question');

let currentQuestionIndex = 0;
let questions;

fetch('/json/riddles.json')
  .then(response => response.json())
  .then(data => {
    questions = data;
    showQuestion();
  })
  .catch(error => console.error(error));

function showQuestion() {
  const question = questions[currentQuestionIndex];
  questionDiv.innerHTML = `<h2>${question.id}. ${question.question}</h2>`;
  showAnswerButton.style.display = 'block';
}

showAnswerButton.addEventListener('click', () => {
  const answer = questions[currentQuestionIndex].answer;
  const answerDiv = document.createElement('div');
  answerDiv.innerHTML = `<p>${answer}</p>`;
  answerDiv.style.opacity = 0;
  questionDiv.appendChild(answerDiv);
  setTimeout(() => answerDiv.style.opacity = 1, 100);
});

nextQuestionButton.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex >= questions.length) {
    currentQuestionIndex = 0;
  }
  showQuestion();
});
