const correctAns = ["B", "D", "B", "A"];
const form = document.querySelector(".quiz-form");
const label = document.querySelectorAll(".quiz-form__ans");
const result = document.querySelector(".quiz__heading");

document.querySelector(".sub-btn").addEventListener("click", (e) => {
  e.preventDefault();

  let score = 0;
  const userAns = [
    form.q1,
    form.q2,
    form.q3,
    form.q4,
  ];

  //check ans
  userAns.forEach((ans, i) => {
    if (ans.value === correctAns[i]) {
      score += 25;
      for (let i = 0; i < 4; i++) {
        const isChecked = ans[i].checked;
        if (isChecked) {
          ans[i].parentElement.classList.add("correct");
        }
      }
    } else {
      for (let i = 0; i < 4; i++) {
        const isChecked = ans[i].checked;
        if (isChecked) {
          ans[i].parentElement.classList.add("wrong");
        }
      }
    }
  });
  document.getElementById('q12').parentElement.classList.add("correct");
  document.getElementById('q24').parentElement.classList.add("correct");
  document.getElementById('q32').parentElement.classList.add("correct");
  document.getElementById('q41').parentElement.classList.add("correct");

  result.style.display = "block";
  let output = 0;
  const timer = setInterval(() => {
    result.querySelector(".result").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 25);
if(score ==0){
  document.querySelector('.para-0').textContent = "It's high time that you visit and experience the exotic dreamland!";
}else if(score==25){
  document.querySelector('.para-0').textContent = "Ace it the next time by visiting the signature of excellence!";
}
else if(score==50){
  document.querySelector('.para-0').textContent = "Crack it the next time by visiting the land of endless discoveries!";
}else if(score==75){
  document.querySelector('.para-0').textContent = "Perfect it the next time by visiting the dreamland of all seasons!";
}
else if(score==100){
  document.querySelector('.para-0').textContent = "Amazing! Mysuru awaits your visit";
}
});
