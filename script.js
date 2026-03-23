let category = "";
let currentQuestion = 0;
let answers = [];

const questions = {
    career: [
        "Do you enjoy solving logical problems?",
        "Do you like working with computers?",
        "Do you prefer creativity over analysis?",
        "Do you like helping people?",
        "Do you enjoy learning new technologies?"
    ],
    movie: [
        "Do you like action scenes?",
        "Do you enjoy emotional stories?",
        "Do you like sci-fi concepts?",
        "Do you prefer comedy?",
        "Do you like thrill and suspense?"
    ],
    food: [
        "Do you like spicy food?",
        "Do you enjoy fast food?",
        "Do you like trying new cuisines?",
        "Do you prefer healthy food?",
        "Do you like sweets?"
    ]
};

function start(selectedCategory) {
    category = selectedCategory;
    currentQuestion = 0;
    answers = [];

    document.getElementById("categoryBox").classList.add("hidden");
    document.getElementById("questionBox").classList.remove("hidden");

    showQuestion();
}

function showQuestion() {
    const q = questions[category][currentQuestion];
    document.getElementById("questionText").innerText = q;
}

function answer(ans) {
    answers.push(ans);
    currentQuestion++;

    if (currentQuestion < questions[category].length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("questionBox").classList.add("hidden");
    document.getElementById("resultBox").classList.remove("hidden");

    const loading = document.getElementById("loading");
    const result = document.getElementById("result");

    loading.innerText = "⏳ Reading your mind...";

    setTimeout(() => {
        loading.innerText = "";

        if (category === "career") {
            if (answers[0] === "yes" && answers[1] === "yes") {
                result.innerText = "💡 You are thinking about becoming a Software Developer!";
            } else if (answers[3] === "yes") {
                result.innerText = "💡 You are thinking about a Doctor or Helper role!";
            } else {
                result.innerText = "💡 You are thinking about a Creative Career!";
            }
        }

        else if (category === "movie") {
            if (answers[0] === "yes" && answers[2] === "yes") {
                result.innerText = "💡 You are thinking about a Sci-Fi Action Movie!";
            } else if (answers[1] === "yes") {
                result.innerText = "💡 You are thinking about a Drama Movie!";
            } else {
                result.innerText = "💡 You are thinking about a Fun Comedy Movie!";
            }
        }

        else if (category === "food") {
            if (answers[0] === "yes") {
                result.innerText = "💡 You are thinking about Spicy Indian Food!";
            } else if (answers[1] === "yes") {
                result.innerText = "💡 You are thinking about Fast Food!";
            } else {
                result.innerText = "💡 You are thinking about Healthy Food!";
            }
        }

    }, 2000);
}
