const quiz = document.getElementById('quiz');
const questionDiv = document.getElementById('question');
const showAnswerButton = document.getElementById('show-answer');

let currentQuestionIndex = 0;
let questions;

fetch('/src/json/riddles_02.json')
  .then(response => response.json())
  .then(data => {
    questions = data;
    showQuestion();
  })
  .catch(error => console.error(error));

function showQuestion() {
  const question = questions[currentQuestionIndex];
  questionDiv.innerHTML = `<h2>${question.question}</h2>`;
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

