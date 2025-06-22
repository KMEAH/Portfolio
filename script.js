function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Trigger typing animation on page load
window.onload = function() {
  const name = document.querySelector(".typing-name");
  const job = document.querySelector(".typing-job");
  if (name && job) {
    name.style.animationPlayState = "running";
    job.style.animationPlayState = "running";
  }
};