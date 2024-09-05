const quizData = [
    {
        question: " Найз чинь таны машины хойно байрлуулсан машинаа гаргах хэрэгтэй болвол та өөрөө хийхээс зайлсхийж түүнд машины түлхүүрээ өгж явуулах уу ?",
        a: "Тийм",
        b: "Үгүй",
        c: "Бусад",
        correct: "a"
    },
    {
        question: "Ус цэвэршүүлэгч доторх ус дууссны дараа та шууд шинэ ус дэлгүүрээс авч хуучинаа сольж тавих уу ?",
        a: "Тийм ",
        b: "Үгүй ",
        c: "Бусад",
        correct: "a"
    },
    {
        question: "Таны үйлчлүүлдэг АТМ машин танай гэрээс нэг километрын зайд байдаг, гэхдээ үүнээс ч илүү ойрхон нь 3%-н үйлчилгээний шимэгдэл авдаг . Та нэмэлт төлбөрийг үл харгалзан хамгийн ойр байрлах АТМ руу очдог уу?",
        a: "Тийм",
        b: "Үгүй",
        c: "Бусад",
        correct: "a"
    },
    {
        question: "Таны шүдний оо дуусчихлаа . Та яах вэ ?",
        a: "Оо-г маш сайн шахаж үлдсэнийг нь гаргана",
        b: " Дэлгүүр орж авна ",
        c: " Бохь зажилна",
        correct: "a"
    },
    {
        question: "Таныг унтаж байхад найз чинь залгаад гэрээ нүүлгэхэд туслалцаа хэрэгтэй байна гэвэл та яаа вэ ? ",
        a: "Түүнд очлоо гэж хэлнэ ",
        b: "Түүнд 20 минутын дараа очно гэхдээ зөвхөн 1 цаг л байж чадна гэж хэлнэ",
        c: "Түүнд завгүй байна гэж хэлчихээд унтна",
        correct: "a"
    },
    {
        question: "Таньд хөгширөлтийг удаашруулдаг туршилтын усыг ууж үзэх санал ирлээ . Гэхдээ та дараагын 2 сар өдөр болгон үүрийн 5 аас сэрж усаа уух ёстой . Та зөвшөөрөх үү ?",
        a: "Тийм ",
        b: "Үгүй",
        c: "Бусад",
        correct: "a"
    },
    {
        question: "Та цагаан хувцсаа өнгөтэй хувцаснааса ялгаж тавьдаг уу ?",
        a: "Тийм ",
        b: "Үгүй ",
        c: "Бусад",
        correct: "a"
    },
    {
        question: "Шатаар явах нь хурдан ч гэсэн лифт хүлээдэг үү ?",
        a: "Тийм ",
        b: "Үгүй ",
        c: "Бусад",
        correct: "a"
    },
    {
        question: "Та бүрэн үйлчилгээтэй шатахуун түгээх газрыг илүүд үздэг үү ? ",
        a: "Тийм ",
        b: "Үгүй ",
        c: "Бусад",
        correct: "a"
    },
    {
        question: "Угаалгын өрөөнд чинь хоосон шампунь-ий сав байгаа юу ? ",
        a: "Тийм ",
        b: "Үгүй",
        c: "Бусад",
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
        <div class="answer-box">
            <input type="radio" id="a" name="answer" value="a">
            <label for="a">${currentQuizData.a}</label>
        </div>
        <div class="answer-box">
            <input type="radio" id="b" name="answer" value="b">
            <label for="b">${currentQuizData.b}</label>
        </div>
        <div class="answer-box">
            <input type="radio" id="c" name="answer" value="c">
            <label for="c">${currentQuizData.c}</label>
        </div>`;

    quiz.classList.remove('fade-out');
    quiz.classList.add('fade-in');
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
    const quiz = document.getElementById('quiz');
    const result = document.getElementById('result');

    quiz.classList.add('fade-out');
    result.classList.remove('hidden');
    result.classList.add('fade-in');

    document.getElementById('score').textContent = score;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    const quiz = document.getElementById('quiz');
    const result = document.getElementById('result');

    quiz.classList.remove('hidden', 'fade-out');
    result.classList.add('hidden', 'fade-out');

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
        alert("Хариултаа сонгоно уу!");
    }
});

loadQuiz();
