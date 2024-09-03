const quizData = [
    {
        question: "Layla ямар үүрэгтэй баатар вэ?",
        a: "Marksman",
        b: "Tank",
        c: "Mage",
        d: "Support",
        correct: "a"
    },
    {
        question: "Chou ямар үүрэгтэй баатар вэ?",
        a: "Mage",
        b: "Fighter",
        c: "Tank",
        d: "Marksman",
        correct: "b"
    },
    {
        question: "Minotaur ямар үүрэгтэй баатар вэ?",
        a: "Tank",
        b: "Mage",
        c: "Marksman",
        d: "Support",
        correct: "a"
    },
    {
        question: "Kagura ямар үүрэгтэй баатар вэ?",
        a: "Mage",
        b: "Tank",
        c: "Marksman",
        d: "Assassin",
        correct: "a"
    },
    {
        question: "Leomord ямар үүрэгтэй баатар вэ?",
        a: "Support",
        b: "Marksman",
        c: "Fighter",
        d: "Mage",
        correct: "c"
    },
    {
        question: "Faramis ямар үүрэгтэй баатар вэ?",
        a: "Tank",
        b: "Assassin",
        c: "Mage",
        d: "Marksman",
        correct: "c"
    },
    {
        question: "Angela ямар үүрэгтэй баатар вэ?",
        a: "Mage",
        b: "Tank",
        c: "Support",
        d: "Assassin",
        correct: "c"
    },
    {
        question: "Karrie ямар үүрэгтэй баатар вэ?",
        a: "Marksman",
        b: "Support",
        c: "Tank",
        d: "Mage",
        correct: "a"
    },
    {
        question: "X.Borg ямар үүрэгтэй баатар вэ?",
        a: "Fighter",
        b: "Marksman",
        c: "Mage",
        d: "Assassin",
        correct: "a"
    },
    {
        question: "Selena ямар үүрэгтэй баатар вэ?",
        a: "Marksman",
        b: "Assassin",
        c: "Support",
        d: "Tank",
        correct: "b"
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
