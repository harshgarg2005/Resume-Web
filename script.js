document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggle-theme");
  const body = document.body;

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light");
    toggleBtn.textContent = body.classList.contains("light") ? "🌙" : "☀️";
  });
});
