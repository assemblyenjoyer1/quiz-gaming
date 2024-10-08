const easyQuestions = [
    {
        "question": "What does HTML stand for?",
        "options": ["A) Hypertext Markup Language", "B) Home Tool Markup Language", "C) Hyperlinks and Text Markup Language", "D) Hyperlinking Text Markup Language"],
        "answer": "A"
    },
    {
        "question": "What is the correct way to create a function in JavaScript?",
        "options": ["A) function = myFunction()", "B) function:myFunction()", "C) function myFunction()", "D) create myFunction()"],
        "answer": "C"
    },
    {
        "question": "Which of these is a front-end language?",
        "options": ["A) Python", "B) Java", "C) HTML", "D) C++"],
        "answer": "C"
    },
];

const mediumQuestions = [
    {
        "question": "Which method is used to convert JSON data to a JavaScript object?",
        "options": ["A) JSON.parse()", "B) JSON.stringify()", "C) JSON.objectify()", "D) JSON.convert()"],
        "answer": "A"
    },
    {
        "question": "In CSS, what does 'position: absolute;' do?",
        "options": ["A) Positions the element relative to its parent", "B) Positions the element relative to the viewport", "C) Removes the element from the document flow", "D) Centers the element on the page"],
        "answer": "B"
    },
    {
        "question": "What does the 'this' keyword refer to in JavaScript?",
        "options": ["A) The current object", "B) The global object", "C) The parent object", "D) The DOM element"],
        "answer": "A"
    },
];

const hardQuestions = [
    {
        "question": "What is the primary purpose of a version control system?",
        "options": ["A) To compile code", "B) To track changes in code", "C) To deploy applications", "D) To write documentation"],
        "answer": "B"
    },
    {
        "question": "Which programming language is primarily used for Android app development?",
        "options": ["A) Java", "B) Python", "C) Swift", "D) Ruby"],
        "answer": "A"
    },
    {
        "question": "What does SQL stand for?",
        "options": ["A) Structured Query Language", "B) Simple Query Language", "C) Secure Query Language", "D) Server Query Language"],
        "answer": "A"
    },
    {
        "question": "Which of the following is a common Agile methodology?",
        "options": ["A) Waterfall", "B) Scrum", "C) V-Model", "D) Spiral"],
        "answer": "B"
    },
    {
        "question": "In object-oriented programming, what is 'inheritance'?",
        "options": ["A) A way to reuse code by inheriting properties and methods from another class", "B) A method of data encapsulation", "C) A process to create new objects", "D) A technique for hiding data"],
        "answer": "A"
    },
    {
        "question": "What does IDE stand for in software development?",
        "options": ["A) Integrated Development Environment", "B) Independent Debugging Environment", "C) Integrated Deployment Environment", "D) Independent Development Engine"],
        "answer": "A"
    },
    {
        "question": "Which design pattern provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation?",
        "options": ["A) Singleton", "B) Factory", "C) Observer", "D) Iterator"],
        "answer": "D"
    },
    {
        "question": "What does HTTP stand for?",
        "options": ["A) Hypertext Transfer Protocol", "B) High Transmission Text Protocol", "C) Hyper Transmission Text Protocol", "D) High Transfer Text Protocol"],
        "answer": "A"
    },
    {
        "question": "Which command is used to create a new Git branch?",
        "options": ["A) git checkout", "B) git branch", "C) git merge", "D) git commit"],
        "answer": "B"
    },
    {
        "question": "Which of the following is not a valid HTTP method?",
        "options": ["A) GET", "B) POST", "C) PUT", "D) SEND"],
        "answer": "D"
    },
    {
        "question": "What is the purpose of a constructor in object-oriented programming?",
        "options": ["A) To define methods", "B) To initialize objects", "C) To create classes", "D) To delete objects"],
        "answer": "B"
    },
    {
        "question": "In databases, what does 'ACID' stand for?",
        "options": ["A) Atomicity, Consistency, Isolation, Durability", "B) Accuracy, Consistency, Integrity, Durability", "C) Atomicity, Consistency, Integrity, Durability", "D) Accuracy, Consistency, Isolation, Durability"],
        "answer": "A"
    },
    {
        "question": "Which of the following is a NoSQL database?",
        "options": ["A) MySQL", "B) MongoDB", "C) PostgreSQL", "D) OracleDB"],
        "answer": "B"
    },
    {
        "question": "Which CSS property is used to change the text color of an element?",
        "options": ["A) font-color", "B) text-color", "C) color", "D) font-style"],
        "answer": "C"
    },
    {
        "question": "What is the main advantage of using a framework in software development?",
        "options": ["A) Reduces the need for documentation", "B) Provides a pre-built structure to speed up development", "C) Ensures the code is error-free", "D) Eliminates the need for debugging"],
        "answer": "B"
    },
    {
        "question": "In Python, what does the 'len()' function do?",
        "options": ["A) Returns the type of a variable", "B) Returns the length of an object", "C) Returns the index of an item", "D) Returns the value of an item"],
        "answer": "B"
    },
    {
        "question": "Which of the following is a front-end JavaScript framework?",
        "options": ["A) Django", "B) Flask", "C) Angular", "D) Spring"],
        "answer": "C"
    },
    {
        "question": "Which of these is a widely-used version control system?",
        "options": ["A) Git", "B) Jenkins", "C) Docker", "D) Kubernetes"],
        "answer": "A"
    },
    {
        "question": "In relational databases, what is a 'foreign key'?",
        "options": ["A) A unique identifier for each record", "B) A key used to link two tables together", "C) A key that ensures no duplicate values", "D) A key used to encrypt data"],
        "answer": "B"
    },
    {
        "question": "What is the purpose of the 'responsive design' in web development?",
        "options": ["A) To ensure the website works on all devices and screen sizes", "B) To improve website speed", "C) To enhance website security", "D) To make the website visually appealing"],
        "answer": "A"
    },
];

let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];
let userRating = 0;

document.addEventListener('DOMContentLoaded', () => {
    const difficultyButtons = document.querySelectorAll('.difficulty-btn');
    
    difficultyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const difficulty = button.getAttribute('data-difficulty');
            selectDifficulty(difficulty);
        });
    });
});

function selectDifficulty(difficulty) {
    switch(difficulty) {
        case 'easy':
            selectedQuestions = easyQuestions;
            break;
        case 'medium':
            selectedQuestions = mediumQuestions;
            break;
        case 'hard':
            selectedQuestions = hardQuestions;
            break;
    }
    document.getElementById('difficulty-selection').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('total-questions').textContent = selectedQuestions.length;
    displayQuestion();
}

function displayQuestion() {
    const questionData = selectedQuestions[currentQuestionIndex];
    document.getElementById('question').textContent = questionData.question;

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    questionData.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => checkAnswer(index));
        optionsContainer.appendChild(optionElement);
    });

    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
}

function checkAnswer(selectedIndex) {
    const questionData = selectedQuestions[currentQuestionIndex];
    const selectedOption = questionData.options[selectedIndex];

    const feedbackMessage = document.getElementById('feedback-message');
    const feedbackPanel = document.getElementById('feedback-panel');

    if (selectedOption[0] === questionData.answer) {
        score++;
        feedbackMessage.textContent = "Correct! Great job, you're on the right track!";
    } else {
        feedbackMessage.textContent = `Oops, that's not quite right. The correct answer was ${questionData.answer}.`;
    }

    feedbackPanel.classList.add('show');
}

document.getElementById('next-button').addEventListener('click', () => {
    document.getElementById('feedback-panel').classList.remove('show');
    currentQuestionIndex++;
    
    if (currentQuestionIndex < selectedQuestions.length) {
        displayQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    document.getElementById('quiz-container').innerHTML = `
        <h1>Quiz Completed!</h1>
        <p>Your final score is ${score}/${selectedQuestions.length}.</p>
        <p>${getFeedback(score, selectedQuestions.length)}</p>
    `;

    document.getElementById('feedback-form').classList.remove('hidden');
}

document.querySelectorAll('#star-rating .star').forEach(star => {
    star.addEventListener('click', () => {
        userRating = parseInt(star.getAttribute('data-value'));
        document.querySelectorAll('#star-rating .star').forEach(s => {
            s.classList.toggle('selected', parseInt(s.getAttribute('data-value')) <= userRating);
        });
    });
});

document.getElementById('submit-feedback').addEventListener('click', () => {
    if (userRating > 0) {
        const feedbackText = `User Rating: ${userRating}\nScore: ${score}/${selectedQuestions.length}\n\n`;
        
        const blob = new Blob([feedbackText], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'feedback.txt';
        link.click();
        
        document.getElementById('feedback-form').classList.add('hidden');
    } else {
        alert('Please select a rating before submitting.');
    }
});

function getFeedback(score, totalQuestions) {
    if (score === totalQuestions) {
        return "Outstanding! You're well-prepared for the exam. Keep up the great work!";
    } else if (score > totalQuestions / 2) {
        return "Good job! You have a solid understanding, just a little more practice and you'll ace the exam.";
    } else {
        return "Don't be discouraged! Keep studying and you'll get there. Every mistake is a step closer to success.";
    }
}