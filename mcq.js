let time = 30;
const timer = setInterval(() => {
  document.getElementById("timer").innerText = "Time: " + time;
  time--;
  if (time < 0) {
    clearInterval(timer);
    submitQuiz();
  }
}, 1000);

function submitQuiz() {
  clearInterval(timer);
  let score = 0;

  if (document.querySelector('input[name="q1"]:checked')?.value === "b") score++;
  if (document.querySelector('input[name="q2"]:checked')?.value === "a") score++;

  document.getElementById("result").innerText = "Your Score: " + score;

  saveProgress(score);
  updateLeaderboard(score);
}

function updateLeaderboard(score) {
  let lb = JSON.parse(localStorage.getItem("leaderboard")) || [];
  lb.push({ score, date: new Date().toLocaleString() });
  lb.sort((a,b)=>b.score-a.score);
  localStorage.setItem("leaderboard", JSON.stringify(lb.slice(0,5)));
}

function filterCategory(cat) {
  document.querySelectorAll(".card").forEach(c => {
    c.style.display =
      cat === "all" || c.dataset.category === cat ? "block" : "none";
  });
}
