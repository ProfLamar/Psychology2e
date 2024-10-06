document.addEventListener('DOMContentLoaded', () => {
    const storyText = document.getElementById('story-text');
    const startBtn = document.getElementById('start-btn');
    const choiceButtons = Array.from(document.querySelectorAll('#choices button'));
    const feedbackText = document.getElementById('feedback-text');
    let currentScene = 0;

    // Scenes array, representing different story points in the game
    const scenes = [
        {
            text: "You wake up in the morning feeling groggy. What do you do?",
            choices: [
                { text: "Hit snooze", nextScene: 1 },
                { text: "Get out of bed", nextScene: 2 }
            ]
        },
        {
            text: "You hit snooze and fall back asleep. You start to dream vividly. Why do you dream during this part of sleep?",
            feedback: "This happens during REM sleep, which is associated with vivid dreaming.",
            choices: [
                { text: "Wake up again", nextScene: 2 }
            ]
        },
        {
            text: "You get out of bed and feel groggy. On your way to the bathroom, you stumble. What sensory process is this?",
            feedback: "Sensation refers to detecting stimuli (like light or obstacles), while perception is how you interpret those sensations.",
            choices: [
                { text: "Sensation", nextScene: 3 },
                { text: "Perception", nextScene: 3 }
            ]
        },
        {
            text: "You reach the kitchen and smell coffee brewing. How do you recognize the smell?",
            feedback: "Your sense of smell (olfaction) detects airborne molecules, which are interpreted in your brain based on prior experiences.",
            choices: [
                { text: "Drink coffee", nextScene: 4 },
                { text: "Skip coffee", nextScene: 5 }
            ]
        },
        {
            text: "You drink coffee and feel more awake. You remember that this feeling is caused by caffeine, a stimulant. What does a stimulant do?",
            feedback: "Stimulants increase activity in the brain and central nervous system, making you feel more alert and energetic.",
            choices: [
                { text: "Go for a walk", nextScene: 5 }
            ]
        },
        {
            text: "You decide to skip coffee and go for a walk outside. You hear birds chirping and notice flowers blooming. What kind of learning helps you recognize these sounds?",
            feedback: "Classical conditioning helps you associate certain sounds or sights with prior experiences, like recognizing birds chirping or flowers blooming.",
            choices: [
                { text: "End the adventure", nextScene: null }
            ]
        }
    ];

    // Start the game
    startBtn.addEventListener('click', startGame);

    function startGame() {
        startBtn.style.display = 'none'; // Hide the start button
        feedbackText.style.display = 'none'; // Hide feedback at the start
        currentScene = 0;
        displayScene();
    }

    // Display the current scene
    function displayScene() {
        const scene = scenes[currentScene];

        if (!scene) {
            storyText.innerText = "Your adventure is complete!";
            choiceButtons.forEach(button => button.style.display = 'none');
            return;
        }

        storyText.innerText = scene.text;

        choiceButtons.forEach((button, index) => {
            if (scene.choices[index]) {
                button.style.display = 'block';
                button.innerText = scene.choices[index].text;
                button.onclick = () => chooseOption(scene.choices[index]);
            } else {
                button.style.display = 'none';
            }
        });
    }

    // Choose an option and progress to the next scene
    function chooseOption(choice) {
        if (scenes[currentScene].feedback) {
            feedbackText.innerText = scenes[currentScene].feedback;
            feedbackText.style.display = 'block';
        } else {
            feedbackText.style.display = 'none';
        }

        currentScene = choice.nextScene;
        setTimeout(displayScene, 2000); // Short delay before moving to the next scene
    }
});
