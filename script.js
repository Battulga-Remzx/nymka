const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Rome",
        correct: "c"
    },
    {
        question: "What is the largest planet in our solar system?",
        a: "Earth",
        b: "Jupiter",
        c: "Mars",
        d: "Saturn",
        correct: "b"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        a: "Oxygen",
        b: "Gold",
        c: "Osmium",
        d: "Hydrogen",
        correct: "a"
    },
    {
        question: "How many continents are there?",
        a: "5",
        b: "6",
        c: "7",
        d: "8",
        correct: "c"
    },
    {
        question: "What is the capital city of Australia?",
        a: "Sydney",
        b: "Canberra",
        c: "Melbourne",
        d: "Perth",
        correct: "b"
    },
    {
        question: "What year did World War II end?",
        a: "1945",
        b: "1939",
        c: "1941",
        d: "1944",
        correct: "a"
    },
    {
        question: "Who painted the Mona Lisa?",
        a: "Vincent van Gogh",
        b: "Claude Monet",
        c: "Leonardo da Vinci",
        d: "Pablo Picasso",
        correct: "c"
    },
    {
        question: "What is the smallest prime number?",
        a: "1",
        b: "2",
        c: "3",
        d: "5",
        correct: "b"
    },
    {
        question: "Which planet is known as the Red Planet?",
        a: "Venus",
        b: "Saturn",
        c: "Mars",
        d: "Jupiter",
        correct: "c"
    },
    {
        question: "What is the largest ocean on Earth?",
        a: "Atlantic Ocean",
        b: "Indian Ocean",
        c: "Arctic Ocean",
        d: "Pacific Ocean",
        correct: "d"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuiz() {
    const quiz = document.getElementById('quiz');
    const currentQuizData = quizData[currentQuestion];

    quiz.innerHTML = `
        <h2>${currentQuizData.question}</h2>
        <div>
            <input type="radio" id="a" name="answer" value="a">
            <label for="a">${currentQuizData.a}</label>
        </div>
        <div>
            <input type="radio" id="b" name="answer" value="b">
            <label for="b">${currentQuizData.b}</label>
        </div>
        <div>
            <input type="radio" id="c" name="answer" value="c">
            <label for="c">${currentQuizData.c}</label>
        </div>
        <div>
            <input type="radio" id="d" name="answer" value="d">
            <label for="d">${currentQuizData.d}</label>
        </div>
    `;
}

function getSelectedAnswer() {
    const answers = document.getElementsByName('answer');
    let selectedAnswer;
    answers.forEach(answer => {
        if (answer.checked) {
            selectedAnswer = answer.value;
        }
    });
    return selectedAnswer;
}

function showResult() {
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('score').textContent = score;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('quiz').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');
    loadQuiz();
}

document.getElementById('next').addEventListener('click', () => {
    const selectedAnswer = getSelectedAnswer();
    if (selectedAnswer) {
        if (selectedAnswer === quizData[currentQuestion].correct) {
            score += 10;
        }

        currentQuestion++;

        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            showResult();
        }
    } else {
        alert("Please select an answer.");
    }
});

loadQuiz();
