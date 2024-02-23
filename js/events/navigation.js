export function toggleNav() {
  const nav = document.getElementById("navTop"); // Access the first `nav` element in the document.

  nav.style.display = nav.style.display === "block" ? "none" : "block";
}

/**
 * Sets up a click event listener on the hamburger button to toggle the navigation menu.
 */
export function hamburgerButton() {
  const hamburger = document.getElementById("hamburger"); // Get the hamburger button element by its ID.

  // Add an event listener to call `toggleNav` when the button is clicked.
  hamburger.addEventListener("click", toggleNav); // Pass `toggleNav` directly.
}

hamburgerButton();
