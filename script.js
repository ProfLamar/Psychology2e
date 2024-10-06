document.addEventListener('DOMContentLoaded', () => {
    const questionText = document.getElementById('question-text');
    const startBtn = document.getElementById('start-btn');
    const choiceButtons = Array.from(document.querySelectorAll('#choices button'));
    const scoreText = document.getElementById('score-text');
    let currentQuestionIndex = 0;
    let score = 0;
    let totalTries = 0; // Track total questions answered

    // Questions array, now including explanations
    const questions = [
        {
            question: "What is the absolute threshold?",
            choices: [
                "The minimum stimulus needed to detect something 50% of the time",
                "The smallest detectable difference between two stimuli",
                "The process by which sensory receptors receive input",
                "The process of interpreting sensory information"
            ],
            correctAnswer: 0,
            explanation: "The absolute threshold is the minimum level of stimulus energy needed for a person to detect it 50% of the time."
        },
        {
            question: "Which part of the eye is responsible for color vision?",
            choices: [
                "Rods",
                "Cones",
                "Lens",
                "Cornea"
            ],
            correctAnswer: 1,
            explanation: "Cones are photoreceptors in the retina responsible for color vision and visual sharpness, especially in bright light."
        },
        {
            question: "What does REM stand for in REM sleep?",
            choices: [
                "Rapid Energy Movement",
                "Rest Every Minute",
                "Rapid Eye Movement",
                "Relaxed Eye Motion"
            ],
            correctAnswer: 2,
            explanation: "REM stands for Rapid Eye Movement. This is the stage of sleep where vivid dreaming often occurs."
        },
        {
            question: "Which sense is primarily responsible for detecting airborne molecules?",
            choices: [
                "Hearing",
                "Touch",
                "Smell",
                "Taste"
            ],
            correctAnswer: 2,
            explanation: "Smell (olfaction) is the sense that detects airborne molecules using receptors in the nasal cavity."
        },
        {
            question: "What is the difference threshold?",
            choices: [
                "The minimum stimulus needed to detect a stimulus 50% of the time",
                "The smallest detectable difference between two stimuli",
                "The minimum time needed to react to a stimulus",
                "The point at which all sensory input becomes indistinguishable"
            ],
            correctAnswer: 1,
            explanation: "The difference threshold (also called the just noticeable difference) is the smallest difference in stimuli that a person can detect."
        }
        // Add more questions with explanations as needed...
    ];

    // Start the quiz
    startBtn.addEventListener('click', startQuiz);

    function startQuiz() {
        startBtn.style.display = 'none'; // Hide the start button
        currentQuestionIndex = 0;
        score = 0;
        totalTries = 0; // Reset total tries at the start
        scoreText.innerText = `Score: ${score} out of ${totalTries}`;
        displayQuestion();
    }

    // Display the current question
    function displayQuestion() {
        if (currentQuestionIndex < questions.length) {
            const currentQuestion = questions[currentQuestionIndex];
            questionText.innerText = currentQuestion.question;

            choiceButtons.forEach((button, index) => {
                button.style.display = 'block'; // Show buttons
                button.innerText = currentQuestion.choices[index];
                button.onclick = () => checkAnswer(index);
            });
        } else {
            endQuiz();
        }
    }

    // Check if the chosen answer is correct and give feedback
    function checkAnswer(selectedIndex) {
        const currentQuestion = questions[currentQuestionIndex];
        totalTries++; // Increment total tries after each question

        if (selectedIndex === currentQuestion.correctAnswer) {
            score++; // Increment score if the answer is correct
            alert(`Correct! ${currentQuestion.explanation}`); // Correct answer feedback
        } else {
            alert(`Incorrect. ${currentQuestion.explanation}`); // Incorrect answer feedback
        }

        currentQuestionIndex++;
        scoreText.innerText = `Score: ${score} out of ${totalTries}`; // Update score display
        displayQuestion();
    }

    // End the quiz
    function endQuiz() {
        questionText.innerText = `Quiz Over! Your final score is ${score} out of ${totalTries}.`;
        choiceButtons.forEach(button => button.style.display = 'none'); // Hide buttons
        startBtn.style.display = 'block'; // Show the start button for restarting
        startBtn.innerText = "Restart Quiz";
    }
});
