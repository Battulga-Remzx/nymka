const quizData = [
    {
        question: "4-ийн 5 дахин их утга юу вэ?",
        a: "20",
        b: "25",
        c: "15",
        d: "10",
        correct: "a"
    },
    {
        question: "90-г 3-аар хуваавал юу гарах вэ?",
        a: "30",
        b: "35",
        c: "40",
        d: "25",
        correct: "a"
    },
    {
        question: "Тэгш өнцөгтийн талбайг хэрхэн тооцох вэ?",
        a: "Сөрөг өнцөг ба уртын хослогдол",
        b: "Өнцгийн нийлбэр",
        c: "Урт ба өргөний үржвэр",
        d: "Диагональ талбай",
        correct: "c"
    },
    {
        question: "12 ба 8-ийн хамгийн том хуваагч юу вэ?",
        a: "4",
        b: "6",
        c: "2",
        d: "8",
        correct: "a"
    },
    {
        question: "10-ын квадрат утга юу вэ?",
        a: "100",
        b: "20",
        c: "10",
        d: "50",
        correct: "a"
    },
    {
        question: "Дунд зэргийн аравт 5-ийг нэмэхэд ямар утга гарах вэ?",
        a: "10",
        b: "15",
        c: "5",
        d: "20",
        correct: "b"
    },
    {
        question: "Бүх тооны хувьд хуваагч нь юу вэ?",
        a: "1",
        b: "0",
        c: "2",
        d: "Тэгш өнцөгт",
        correct: "a"
    },
    {
        question: "Хоёр нөөцийн нийлбэр нь юу вэ?",
        a: "Эхлэх утга",
        b: "Зүүн хүлээлт",
        c: "Өгөгдөл",
        d: "Эцсийн утга",
        correct: "d"
    },
    {
        question: "15-ийг 5-аар хуваавал юу гарах вэ?",
        a: "5",
        b: "3",
        c: "10",
        d: "2",
        correct: "b"
    },
    {
        question: "Үнэгүй диагональ талбайг хэрхэн тооцох вэ?",
        a: "Талбайн урт ба өргөний үржвэр",
        b: "Бүдүүн зүсэлт",
        c: "Тэгш өнцөгт хэмжээ",
        d: "Талбайн үзэгдэл",
        correct: "a"
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
