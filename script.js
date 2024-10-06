document.addEventListener('DOMContentLoaded', () => {
    const questionText = document.getElementById('question-text');
    const startBtn = document.getElementById('start-btn');
    const choiceButtons = Array.from(document.querySelectorAll('#choices button'));
    const scoreText = document.getElementById('score-text');
    const feedbackText = document.getElementById('feedback-text'); // Feedback area for displaying the result
    let currentQuestionIndex = 0;
    let score = 0;
    let totalTries = 0;

    // Expanded questions array with explanations
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
            explanation: "REM stands for Rapid Eye Movement, a stage of sleep where vivid dreaming occurs."
        }
        // You can add more questions here...
    ];

    // Start the quiz
    startBtn.addEventListener('click', startQuiz);

    function startQuiz() {
        startBtn.style.display = 'none'; // Hide the start button
        currentQuestionIndex = 0;
        score = 0;
        totalTries = 0; // Reset total tries at the start
        scoreText.innerText = `Score: ${score} out of ${totalTries}`;
        feedbackText.style.display = 'none'; // Hide feedback text initially
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

        // Display feedback based on the player's answer
        if (selectedIndex === currentQuestion.correctAnswer) {
            score++; // Increment score if the answer is correct
            feedbackText.innerText = `Correct! ${currentQuestion.explanation}`;
            feedbackText.style.color = 'green'; // Set feedback text to green for correct answer
        } else {
            feedbackText.innerText = `Incorrect. ${currentQuestion.explanation}`;
            feedbackText.style.color = 'red'; // Set feedback text to red for incorrect answer
        }

        feedbackText.style.display = 'block'; // Show the feedback text
        currentQuestionIndex++;
        scoreText.innerText = `Score: ${score} out of ${totalTries}`; // Update score display
        displayQuestion();
    }

    // End the quiz
    function endQuiz() {
        questionText.innerText = `Quiz Over! Your final score is ${score} out of ${totalTries}.`;
        choiceButtons.forEach(button => button.style.display = 'none'); // Hide buttons
        feedbackText.style.display = 'none'; // Hide feedback text at the end
        startBtn.style.display = 'block'; // Show the start button for restarting
        startBtn.innerText = "Restart Quiz";
    }
});
