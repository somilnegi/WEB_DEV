document.addEventListener("DOMContentLoaded", () => {
    
    const startBtn = document.getElementById("start-btn")
    const nextBtn = document.getElementById("next-btn")
    const restartBtn = document.getElementById("restart-btn")
    const quesContainer = document.getElementById("question-container")
    const quesText = document.getElementById("question-text")
    const choicesList = document.getElementById("choices-list")
    const resContainer = document.getElementById("result-container")
    const scoreDisplay = document.getElementById("score")

    const questions = [
        {
            question: "What is the capital of France?",
            choices: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris",
        },
        {
            question: "What planet is known as the Red Planet?",
            choices: ["Mars", "Venus", "Jupiter", "Saturn"],
            answer: "Mars",
        },
        {
            question: "Who wrote 'Hamlet'?",
            choices: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
            answer: "William Shakespeare",
        },
    ]

    let currentQuestionIndex = 0
    let score = 0

    startBtn.addEventListener('click', startQuiz)

    function startQuiz() {
        startBtn.classList.add('hidden')
        resContainer.classList.add('hidden')
        quesContainer.classList.remove('hidden')

        showQuestion()
    }

    function showQuestion() {
        nextBtn.classList.add('hidden')
        quesText.textContent = questions[currentQuestionIndex].question
        choicesList.innerHTML = "" //Clear previous choices
        questions[currentQuestionIndex].choices.forEach(choice => {
            const li = document.createElement('li')
            li.textContent = choice
            li.classList.add('quiz-option');
            li.addEventListener('click', () => {
                document.querySelectorAll('.quiz-option').forEach(option => option.classList.remove('selected'));
                li.classList.add('selected')
                selectAnswer(choice)
            })
            choicesList.appendChild(li)
        })
    }

    function selectAnswer(choice) {
        const correctAnswer = questions[currentQuestionIndex].answer
        if (choice === correctAnswer) {
            score++
        }
        nextBtn.classList.remove('hidden')
    }

    nextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion()
        }
        else {
            showResult()
        }
    })

    function showResult() {
        quesContainer.classList.add('hidden')
        resContainer.classList.remove('hidden')
        scoreDisplay.textContent = `${score} / ${questions.length}`
    }

    restartBtn.addEventListener('click', restartQuiz)

    function restartQuiz() {
        currentQuestionIndex = 0
        score = 0
        resContainer.classList.add('hidden')
        startQuiz()
    }

})