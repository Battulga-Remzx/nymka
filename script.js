const quizData = [
    {
        question: "Монгол улсын нийслэл юу вэ?",
        a: "Москва",
        b: "Улаанбаатар",
        c: "Парис",
        d: "Гонг Конг",
        correct: "b"
    },
    {
        question: "Монгол улс хэдэн аймагтай вэ?",
        a: "22",
        b: "19",
        c: "20",
        d: "21",
        correct: "d"
    },
    {
        question: "Монгол улсын цаг агаар ямар вэ?",
        a: "10",
        b: "-10",
        c: "0",
        d: "алдаа",
        correct: "b"
    },
    {
        question: "Монгол улсын төрийн тэргүүн хэн бэ?",
        a: "5",
        b: "6",
        c: "7",
        d: "8",
        correct: "c"
    },
    {
        question: "Австралийн нийслэл хот юу вэ?",
        a: "Сидни",
        b: "Канберра",
        c: "Мельбурн",
        d: "Перт",
        correct: "b"
    },
    {
        question: "Дэлхийн хоёрдугаар дайн ямар жил дууссан бэ?",
        a: "1945",
        b: "1939",
        c: "1941",
        d: "1944",
        correct: "a"
    },
    {
        question: "Мона Лизаг хэн зурсан бэ?",
        a: "Винсент ван Гог",
        b: "Клод Моне",
        c: "Леонардо да Винчи",
        d: "Пабло Пикассо",
        correct: "c"
    },
    {
        question: "Хамгийн жижиг анхны тоо юу вэ?",
        a: "1",
        b: "2",
        c: "3",
        d: "5",
        correct: "b"
    },
    {
        question: "Улаан гариг гэж нэрлэгддэг планет юу вэ?",
        a: "Венус",
        b: "Сатурн",
        c: "Марс",
        d: "Юпитер",
        correct: "c"
    },
    {
        question: "Дэлхийн хамгийн том далай юу вэ?",
        a: "Атлантын далай",
        b: "Энэтхэгийн далай",
        c: "Арктикийн далай",
        d: "Номхон далай",
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
