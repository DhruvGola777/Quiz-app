const btn = document.getElementById("next-btn");
const currentquestion = document.getElementsByClassName("question")[0];
const option = document.querySelectorAll(".buttons");

const questions = [
  {
    question: "Question 1: Which is the largest animal on this planet?",
    options: ["Shark", "Blue Whale", "Elephant", "Giraffe"],
    answers: "Blue Whale"
  },
  {
    question: "Question 2: Which is the biggest planet in our solar system?",
    options: ["Venus", "Jupiter", "Earth", "Mars"],
    answers: "Jupiter"
  },
  {
    question: "Question 3: How many seasons are there in a year?",
    options: ["Summer", "Winter", "Autumn", "All of these"],
    answers: "All of these"
  },
  {
    question: "Question 4: How many months are there in a year?",
    options: ["10", "8", "12", "7"],
    answers: "12"
  },
  {
    question:"Question 5:How many planets are there in our solar system?",
    options:["8","9","10","7"],
    answers:"8"
  }
];

let score = 0;
let currentquestionindex = 0;
function loadQuestion() {
  let q = questions[currentquestionindex];
  currentquestion.textContent = q.question;
  option.forEach((btn, i) => {
    btn.textContent = q.options[i];
    btn.style.backgroundColor = "";
    btn.disabled = false; 
  });
}
option.forEach((btn) => {
  btn.addEventListener("click", () => {
    let q = questions[currentquestionindex];
    if (btn.textContent === q.answers) {
      btn.style.backgroundColor = "lightgreen";
      score++;
      option.forEach(o => (o.disabled = true));
    } else {
      btn.style.backgroundColor = "lightcoral";
    
      option.forEach(o => {
        if (o.textContent === q.answers) {
          o.style.backgroundColor = "lightgreen";
        }
      });
    }
    
    option.forEach(o => (o.disabled = true));
  });
});

btn.addEventListener("click", () => {
  currentquestionindex++;
  if (currentquestionindex < questions.length) {
    loadQuestion();
  } else {
    currentquestion.textContent = `Quiz Finished!Your Score: ${score}/${questions.length}.Thanks For Participating`;
    option.forEach(o => (o.style.display = "none"));
    btn.style.display = "none";
  }
});
loadQuestion();
