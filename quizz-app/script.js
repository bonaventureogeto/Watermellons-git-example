const quizes = [
    {
        q: "What is why?",
        choices: ["A", "B", "C"],
        answer: "A"
    },
     {
        q: "What is this?",
        choices: ["A", "B", "C"],
        answer: "B"
    },
    {
        q: "What is that?",
        choices: ["A", "B", "C"],
        answer: "C"
    }
]

// DOM selection
const quizbox = document.getElementById("quizbox");
const progress = document.getElementById("progress");
const quizText = document.getElementById("quiz-text");
const answers = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const scoretext = document.getElementById("scoretext");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");


// state
let currentIndex = 0;
let score = 0;
let hasAnswered = false;


// render
function renderQuiz() {
    hasAnswered = false;

    feedback.textContent = "";
    answers.innerHTML = "";

    const current = quizes[currentIndex];

    progress.textContent = `Quiz ${currentIndex + 1} of ${quizes.length}`;
    quizText.textContent = current.q;

    current.choices.forEach((choice) => {
        const btn = document.createElement("button");
        btn.textContent = choice

        console.log(btn);

        btn.addEventListener("click", () => {
            if (btn.innerText === current.answer) {
                score += 1;
                feedback.textContent = "Correct!!";
                feedback.style.color = "green";
                scoretext.textContent = `Score: ${score}/${quizes.length}`;
            }
        })

        answers.appendChild(btn);
    })
}

nextBtn.addEventListener("click", () => {
    if (currentIndex < quizes.length - 1) {
        currentIndex += 1;
        renderQuiz();
    }
})

renderQuiz();