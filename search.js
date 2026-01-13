const search = document.getElementById("search");
const items = document.querySelectorAll("#blogList li");

search.addEventListener("keyup", () => {
  const v = search.value.toLowerCase();
  items.forEach(i => {
    i.style.display = i.innerText.toLowerCase().includes(v) ? "" : "none";
  });
});
