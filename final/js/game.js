const questions = [
    {
        image: "../gameimg1.jpg",
        answers: [
            { text : "Total Eclipse", correct: "true" },
            { text : "Partial Eclipse", correct: "false" },
            { text : "Hybrid Eclipse", correct: "false" },
            { text : "Annular Eclipse", correct: "false" },
        ]
    },

    {
        image: "../gameimg3.jpg",
        answers: [
            { text : "Total Eclipse", correct: "false" },
            { text : "Partial Eclipse", correct: "true" },
            { text : "Hybrid Eclipse", correct: "false" },
            { text : "Annular Eclipse", correct: "false" },
        ]
    },

    {
        image: "../gameimg2.jpg",
        answers: [
            { text : "Total Eclipse", correct: "true" },
            { text : "Partial Eclipse", correct: "false" },
            { text : "Hybrid Eclipse", correct: "false" },
            { text : "Annular Eclipse", correct: "false" },
        ]
    },

    {
        image: "../gameimg5.jpg",
        answers: [
            { text : "Total Eclipse", correct: "false" },
            { text : "Partial Eclipse", correct: "false" },
            { text : "Hybrid Eclipse", correct: "true" },
            { text : "Annular Eclipse", correct: "false" },
        ]
    },

    {
        image: "../gameimg4.jpg",
        answers: [
            { text : "Total Eclipse", correct: "false" },
            { text : "Partial Eclipse", correct: "true" },
            { text : "Hybrid Eclipse", correct: "false" },
            { text : "Annular Eclipse", correct: "false" },
        ]
    },

    {
        image: "../gameimg7.jpg",
        answers: [
            { text : "Total Eclipse", correct: "false" },
            { text : "Partial Eclipse", correct: "false" },
            { text : "Hybrid Eclipse", correct: "false" },
            { text : "Annular Eclipse", correct: "true" },
        ]
    },

    {
        image: "../gameimg6.jpg",
        answers: [
            { text : "Total Eclipse", correct: "false" },
            { text : "Partial Eclipse", correct: "false" },
            { text : "Hybrid Eclipse", correct: "true" },
            { text : "Annular Eclipse", correct: "false" },
        ]
    },

    {
        image: "../gameimg7.jpg",
        answers: [
            { text : "Total Eclipse", correct: "false" },
            { text : "Partial Eclipse", correct: "false" },
            { text : "Hybrid Eclipse", correct: "false" },
            { text : "Annular Eclipse", correct: "true" },
        ]
    },
];

const questionImg = document.querySelector("#question");
const answerbtns = document.querySelector("#answer-button");
const nextbtn = document.querySelector("#next-btn");
let h2 = document.querySelector("h2");


let currentQuestionIdx = 0;
let score = 0;

function startQuiz() {
    currentQuestionIdx = 0;
    score = 0;
    nextbtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIdx];
    // let questionNo = currentQuestionIdx + 1;
    questionImg.setAttribute("src", currentQuestion.image)

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");  //---------------------------------------------------------------------
        answerbtns.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });    
}

function resetState() {
    nextbtn.style.display = "none";
    while(answerbtns.firstChild) {
        answerbtns.removeChild(answerbtns.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerbtns.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextbtn.style.display = "block"; 
}

function showScore() {
    resetState();
    h2.innerHTML = `You scored ${score} out of ${questions.length}`;
    questionImg.setAttribute("src", "");
    nextbtn.innerHTML = "Play Again";
    nextbtn.style.display = "block";
}

function handleNextBtn() {
    currentQuestionIdx++;
    if(currentQuestionIdx < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextbtn.addEventListener("click", () => {
    if(currentQuestionIdx < questions.length) {
        handleNextBtn();
    } else {
        startQuiz();
    }
})

startQuiz();