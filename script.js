document.addEventListener('DOMContentLoaded', () => {
    const questionText = document.getElementById('question-text');
    const startBtn = document.getElementById('start-btn');
    const choiceButtons = Array.from(document.querySelectorAll('#choices button'));
    const scoreText = document.getElementById('score-text');
    let currentQuestionIndex = 0;
    let score = 0;
    let totalTries = 0;

    // Expanded questions array with 30 new questions and explanations
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
            explanation: "The difference threshold is the smallest difference in stimuli that a person can detect."
        },
        {
            question: "The sense of taste is also known as:",
            choices: [
                "Olfaction",
                "Gustation",
                "Somatosensation",
                "Audition"
            ],
            correctAnswer: 1,
            explanation: "Gustation is the sense of taste, which detects sweet, sour, salty, bitter, and umami."
        },
        {
            question: "Which photoreceptor is responsible for low-light vision?",
            choices: [
                "Rods",
                "Cones",
                "Iris",
                "Pupil"
            ],
            correctAnswer: 0,
            explanation: "Rods are photoreceptors in the retina that are highly sensitive to low light and help us see in dim environments."
        },
        {
            question: "The phenomenon where sensory receptors become less responsive to constant stimuli is called:",
            choices: [
                "Transduction",
                "Perception",
                "Sensory Adaptation",
                "Threshold Adaptation"
            ],
            correctAnswer: 2,
            explanation: "Sensory adaptation occurs when sensory receptors become less responsive to constant stimuli, such as tuning out background noise."
        },
        {
            question: "Which of the following is not one of the five basic tastes?",
            choices: [
                "Sweet",
                "Sour",
                "Salty",
                "Spicy"
            ],
            correctAnswer: 3,
            explanation: "Spicy is not considered one of the five basic tastes. The five basic tastes are sweet, sour, salty, bitter, and umami."
        },
        {
            question: "What is the function of the cochlea in hearing?",
            choices: [
                "To detect light entering the eye",
                "To transmit sound vibrations to the brain",
                "To amplify sounds",
                "To help with the sense of balance"
            ],
            correctAnswer: 1,
            explanation: "The cochlea is a spiral-shaped organ in the inner ear that converts sound waves into electrical signals, which are sent to the brain."
        },
        {
            question: "Which type of photoreceptor detects color and fine details in bright light?",
            choices: [
                "Rods",
                "Cones",
                "Pupil",
                "Lens"
            ],
            correctAnswer: 1,
            explanation: "Cones are responsible for detecting color and fine details in bright light conditions."
        },
        {
            question: "Which of the following is part of the vestibular system, which helps with balance?",
            choices: [
                "Olfactory bulb",
                "Semicircular canals",
                "Cochlea",
                "Optic nerve"
            ],
            correctAnswer: 1,
            explanation: "The semicircular canals, located in the inner ear, are part of the vestibular system and help maintain balance and posture."
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
            correctAnswer: 3,
            explanation: "Vivid dreams most commonly occur during REM (Rapid Eye Movement) sleep."
        },
        {
            question: "What is the circadian rhythm?",
            choices: [
                "The body's internal clock regulating sleep-wake cycles",
                "A rhythm caused by external sounds",
                "A method to fall asleep faster",
                "A term describing irregular sleep patterns"
            ],
            correctAnswer: 0,
            explanation: "The circadian rhythm is the body's internal clock, which regulates sleep-wake cycles over a 24-hour period."
        },
        {
            question: "What is sleep apnea?",
            choices: [
                "A disorder where breathing repeatedly stops during sleep",
                "A disorder characterized by uncontrollable sleep attacks",
                "A light form of snoring",
                "A deep sleep where no dreams occur"
            ],
            correctAnswer: 0,
            explanation: "Sleep apnea is a sleep disorder in which breathing repeatedly stops and starts, disrupting sleep."
        },
        {
            question: "Which drug is classified as a depressant?",
            choices: [
                "Cocaine",
                "Alcohol",
                "Nicotine",
                "LSD"
            ],
            correctAnswer: 1,
            explanation: "Alcohol is classified as a depressant because it slows down brain activity and central nervous system functions."
        },
        {
            question: "Which sleep disorder involves an irresistible urge to fall asleep during waking hours?",
            choices: [
                "Narcolepsy",
                "Insomnia",
                "Sleepwalking",
                "Sleep apnea"
            ],
            correctAnswer: 0,
            explanation: "Narcolepsy is a sleep disorder characterized by sudden, uncontrollable episodes of falling asleep during the day."
        },
        {
            question: "In which stage of sleep are you least likely to wake up?",
            choices: [
                "NREM Stage 1",
                "REM",
                "NREM Stage 3",
                "Awake but drowsy"
            ],
            correctAnswer: 2,
            explanation: "NREM Stage 3, also known as deep sleep, is the stage where it's hardest to wake someone up."
        },
        {
            question: "Which of the following is a characteristic of REM sleep?",
            choices: [
                "Body temperature decreases",
                "Eyes move rapidly",
                "Heart rate slows down",
                "Muscles tense up"
            ],
            correctAnswer: 1,
            explanation: "During REM sleep, the eyes move rapidly under the eyelids, and vivid dreams often occur."
        },
        {
            question: "What type of brain waves are associated with deep sleep?",
            choices: [
                "Beta waves",
                "Alpha waves",
                "Delta waves",
                "Gamma waves"
            ],
            correctAnswer: 3,
            explanation: "Delta waves are associated with deep sleep (NREM Stage 3), a stage where the body recovers and restores energy."
        },
        {
            question: "Which class of drugs alters sensory perception and causes hallucinations?",
            choices: [
                "Depressants",
                "Stimulants",
                "Hallucinogens",
                "Opioids"
            ],
            correctAnswer: 2,
            explanation: "Hallucinogens, like LSD, alter sensory perception and can cause hallucinations."
        },
        // Chapter 6: Learning
        {
            question: "In classical conditioning, the stimulus that naturally brings about a response without conditioning is called the:",
            choices: [
                "Conditioned Stimulus",
                "Unconditioned Stimulus",
                "
