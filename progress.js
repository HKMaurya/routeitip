function saveProgress(score) {
  let p = JSON.parse(localStorage.getItem("progress")) || {
    attempts: 0,
    best: 0
  };
  p.attempts++;
  p.best = Math.max(p.best, score);
  localStorage.setItem("progress", JSON.stringify(p));
}
