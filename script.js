document.addEventListener('DOMContentLoaded', () => {
    const questionText = document.getElementById('question-text');
    const startBtn = document.getElementById('start-btn');
    const choiceButtons = Array.from(document.querySelectorAll('#choices button'));
    const scoreText = document.getElementById('score-text');
    let currentQuestionIndex = 0;
    let score = 0;

    // Expanded questions array with more questions from Chapter 4, 5, and 6
    const questions = [
        // Chapter 4: Sensation and Perception
        {
            question: "What is the absolute threshold?",
            choices: [
                "The minimum stimulus needed to detect something 50% of the time",
                "The smallest detectable difference between two stimuli",
                "The process by which sensory receptors receive input",
                "The process of interpreting sensory information"
            ],
            correctAnswer: 0
        },
        {
            question: "Which part of the eye is responsible for color vision?",
            choices: [
                "Rods",
                "Cones",
                "Lens",
                "Cornea"
            ],
            correctAnswer: 1
        },
        {
            question: "What does REM stand for in REM sleep?",
            choices: [
                "Rapid Energy Movement",
                "Rest Every Minute",
                "Rapid Eye Movement",
                "Relaxed Eye Motion"
            ],
            correctAnswer: 2
        },
        {
            question: "Which sense is primarily responsible for detecting airborne molecules?",
            choices: [
                "Hearing",
                "Touch",
                "Smell",
                "Taste"
            ],
            correctAnswer: 2
        },
        {
            question: "What is the difference threshold?",
            choices: [
                "The minimum stimulus needed to detect a stimulus 50% of the time",
                "The smallest detectable difference between two stimuli",
                "The minimum time needed to react to a stimulus",
                "The point at which all sensory input becomes indistinguishable"
            ],
            correctAnswer: 1
        },
        {
            question: "The sense of taste is also known as:",
            choices: [
                "Olfaction",
                "Gustation",
                "Somatosensation",
                "Audition"
            ],
            correctAnswer: 1
        },
        {
            question: "Which photoreceptor is responsible for low-light vision?",
            choices: [
                "Rods",
                "Cones",
                "Iris",
                "Pupil"
            ],
            correctAnswer: 0
        },
        {
            question: "The phenomenon where sensory receptors become less responsive to constant stimuli is called:",
            choices: [
                "Transduction",
                "Perception",
                "Sensory Adaptation",
                "Threshold Adaptation"
            ],
            correctAnswer: 2
        },
        {
            question: "Which of the following is not one of the five basic tastes?",
            choices: [
                "Sweet",
                "Sour",
                "Salty",
                "Spicy"
            ],
            correctAnswer: 3
        },
        // Chapter 5: States of Consciousness
        {
            question: "During which stage of sleep do we experience vivid dreams?",
            choices: [
                "NREM Stage 1",
                "NREM Stage 2",
                "NREM Stage 3",
                "REM"
            ],
            correctAnswer: 3
        },
        {
            question: "What is the circadian rhythm?",
            choices: [
                "The body's internal clock regulating sleep-wake cycles",
                "A rhythm caused by external sounds",
                "A method to fall asleep faster",
                "A term describing irregular sleep patterns"
            ],
            correctAnswer: 0
        },
        {
            question: "What is sleep apnea?",
            choices: [
                "A disorder where breathing repeatedly stops during sleep",
                "A disorder characterized by uncontrollable sleep attacks",
                "A light form of snoring",
                "A deep sleep where no dreams occur"
            ],
            correctAnswer: 0
        },
        {
            question: "Which drug is classified as a depressant?",
            choices: [
                "Cocaine",
                "Alcohol",
                "Nicotine",
                "LSD"
            ],
            correctAnswer: 1
        },
        {
            question: "Which sleep disorder involves an irresistible urge to fall asleep during waking hours?",
            choices: [
                "Narcolepsy",
                "Insomnia",
                "Sleepwalking",
                "Sleep apnea"
            ],
            correctAnswer: 0
        },
        {
            question: "In which stage of sleep are you least likely to wake up?",
            choices: [
                "NREM Stage 1",
                "REM",
                "NREM Stage 3",
                "Awake but drowsy"
            ],
            correctAnswer: 2
        },
        {
            question: "Which of the following is a characteristic of REM sleep?",
            choices: [
                "Body temperature decreases",
                "Eyes move rapidly",
                "Heart rate slows down",
                "Muscles tense up"
            ],
            correctAnswer: 1
        },
        {
            question: "What type of brain waves are associated with deep sleep?",
            choices: [
                "Beta waves",
                "Alpha waves",
                "Delta waves",
                "Gamma waves"
            ],
            correctAnswer: 2
        },
        {
            question: "Which class of drugs alters sensory perception and causes hallucinations?",
            choices: [
                "Depressants",
                "Stimulants",
                "Hallucinogens",
                "Opioids"
            ],
            correctAnswer: 2
        },
        // Chapter 6: Learning
        {
            question: "In classical conditioning, the stimulus that naturally brings about a response without conditioning is called the:",
            choices: [
                "Conditioned Stimulus",
                "Unconditioned Stimulus",
                "Conditioned Response",
                "Neutral Stimulus"
            ],
            correctAnswer: 1
        },
        {
            question: "Who is known for his work on operant conditioning and reinforcement?",
            choices: [
                "Ivan Pavlov",
                "Sigmund Freud",
                "B.F. Skinner",
                "John Watson"
            ],
            correctAnswer: 2
        },
        {
            question: "Which term describes learning that occurs by observing others?",
            choices: [
                "Observational learning",
                "Classical conditioning",
                "Operant conditioning",
                "Latent learning"
            ],
            correctAnswer: 0
        },
        {
            question: "Which of the following is an example of positive reinforcement?",
            choices: [
                "Removing a toy when a child misbehaves",
                "Giving a dog a treat when it sits",
                "Taking painkillers to relieve pain",
                "Giving a child extra chores for bad behavior"
            ],
            correctAnswer: 1
        },
        {
            question: "What is the term for the reduction of a conditioned response after the conditioned stimulus is repeatedly presented without the unconditioned stimulus?",
            choices: [
                "Spontaneous recovery",
                "Extinction",
                "Stimulus generalization",
                "Acquisition"
            ],
            correctAnswer: 1
        },
        {
            question: "Which experiment is most associated with classical conditioning?",
            choices: [
                "Bobo doll experiment",
                "Skinner box experiment",
                "Little Albert experiment",
                "Pavlov's dogs experiment"
            ],
            correctAnswer: 3
        },
        {
            question: "Which type of reinforcement schedule provides a reward after an unpredictable number of responses?",
            choices: [
                "Fixed ratio",
                "Variable ratio",
                "Fixed interval",
                "Variable interval"
            ],
            correctAnswer: 1
        },
        {
            question: "In operant conditioning, what is a negative punishment?",
            choices: [
                "Adding a punishment for a behavior",
                "Removing a pleasant stimulus after a behavior",
                "Removing an unpleasant stimulus after a behavior",
                "Adding a reward after a behavior"
            ],
            correctAnswer: 1
        }
    ];

    // Start the quiz
    startBtn.addEventListener('click', startQuiz);

    function startQuiz() {
        startBtn.style.display = 'none'; // Hide the start button
        currentQuestionIndex = 0;
        score = 0;
        scoreText.innerText = `Score: ${score}`;
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

    // Check if the chosen answer is correct
    function checkAnswer(selectedIndex) {
        const currentQuestion = questions[currentQuestionIndex];
        if (selectedIndex === currentQuestion.correctAnswer) {
            score++;
            alert("Correct!");
        } else {
            alert("Incorrect.");
        }

        currentQuestionIndex++;
        scoreText.innerText = `Score: ${score}`;
        displayQuestion();
    }

    // End the quiz
    function endQuiz() {
        questionText.innerText = `Quiz Over! Your final score is ${score} out of ${questions.length}.`;
        choiceButtons.forEach(button => button.style.display = 'none'); // Hide buttons
        startBtn.style.display = 'block'; // Show the start button for restarting
        startBtn.innerText = "Restart Quiz";
    }
});
