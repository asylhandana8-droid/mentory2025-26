const themeBtn = document.getElementById("themeBtn");
const form = document.getElementById("loginForm");
const hint = document.getElementById("formHint");

let alt = false;

themeBtn.addEventListener("click", () => {
  alt = !alt;
  // Просто меняем “акцент” (без сложных тем)
  document.documentElement.style.setProperty("--accent", alt ? "#22c55e" : "#7c5cff");
  themeBtn.textContent = alt ? "Акцент: зелёный" : "Акцент: фиолетовый";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  hint.textContent = "Готово! Форма отправлена (демо-режим).";
  form.reset();
});

