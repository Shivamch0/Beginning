const questions = [
  {
    que: "Which of the following is a markup language?",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "PHP",
    correct: "a",
  },
  {
    que: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    que: "What does CSS stand for?",
    a: "HyperText Markup language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
  },
];

let index = 0;
let total = questions.length;
let right = 0 , wrong = 0;
const queBox = document.getElementById("queBox");
const optionsInputs = document.querySelectorAll(".options");
const loadQuestion = () => {
  if(index === total){
    return endQuiz();
  }
  reset();
  const data = questions[index];
  queBox.innerText = `${index + 1}) ${data.que}`;
  optionsInputs[0].nextElementSibling.innerText = data.a;
  optionsInputs[1].nextElementSibling.innerText = data.b;
  optionsInputs[2].nextElementSibling.innerText = data.c;
  optionsInputs[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
  const data = questions[index];
  const answer = getAnswer();
  if(answer === data.correct){
    right++;
  }else{
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};

const getAnswer = () => {
  let ans;
  optionsInputs.forEach(
    (input) => {
    if (input.checked) {
      ans =  input.value;
    }
  });
  return ans;
};

const reset = () => {
  optionsInputs.forEach(
    (input) => {
      input.checked = false;
    }
  )
}

const endQuiz = () => {
  document.getElementById("box").innerHTML = `
  <h3> Thank you for Playing the Quiz </h3>
  <h2> ${right} / ${total} are correct
  `;
}

loadQuestion();
