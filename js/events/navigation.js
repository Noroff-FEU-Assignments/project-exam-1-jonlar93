export function toggleNav() {
  const nav = document.getElementById("navTop");

  nav.style.display = nav.style.display === "block" ? "none" : "block";
}

export function hamburgerButton() {
  const hamburger = document.getElementById("hamburger");

  hamburger.addEventListener("click", toggleNav); // Pass `toggleNav` directly.
}

hamburgerButton();
