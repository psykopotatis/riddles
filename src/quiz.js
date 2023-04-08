fetch('/src/json/riddles_01.json')
    .then(response => response.json())
    .then(data => {
        const quiz = document.getElementById('quiz');
        data.forEach(question => {
            const questionDiv = document.createElement('div');
            questionDiv.innerHTML = `<h2>${question.question}</h2><p>${question.answer}</p>`;
            quiz.appendChild(questionDiv);
        });
    })
    .catch(error => console.error(error));
