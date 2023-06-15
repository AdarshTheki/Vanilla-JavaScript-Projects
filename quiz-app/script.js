// Declare the Data of the Quiz-App
const quizData = [
  {
    question: "How old is Adarsh",
    a: "20",
    b: "22",
    c: "25",
    d: "28",
    correct: "c",
  },
  {
    question: "What is the Most used Programming Language in 2019?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "Javascript",
    correct: "a",
  },
  {
    question: "What is the Most currently used Programming Language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "Javascript",
    correct: "d",
  },
  {
    question: "Who is the President of US",
    a: "Obama",
    b: "Donald",
    c: "Ivan",
    d: "Mikhail",
    correct: "a",
  },
  {
    question: "What does HTML stands for ?",
    a: "Hypertext Markup Language",
    b: "Hyper Marker Language",
    c: "Hyper text Markup Language",
    d: "Hypertext Marker text Language",
    correct: "a",
  },
];

const answerEl = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0,
  score = 0;

// call the function of loadQuiz()
loadQuiz();

function loadQuiz() {
  deSelectAnswer();

  const currentQuizData = quizData[currentQuiz];
  questionEl.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;
  answerEl.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deSelectAnswer() {
  answerEl.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} Question.</h2> <button onClick="location.reload()">Go Back</button> `;
    }
  }
});
