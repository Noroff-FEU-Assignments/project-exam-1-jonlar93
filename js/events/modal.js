import * as modal from "../components/modal.js";

export function setupModal(img) {
  img.addEventListener("click", () => modal.renderModal(img));
  img.style.cursor = "pointer";
}

export function setupModalListener() {
  const closeButton = document.querySelector(".close_modal");
  document.addEventListener("click", handleClickOutside);
  document.addEventListener("keydown", handleEscapeClick);
  closeButton.addEventListener("click", removeModal);
}

function handleClickOutside(event) {
  if (event.target.classList.contains("modal")) {
    console.log(event);
    removeModal();
  }
}

function handleEscapeClick(event) {
  if (event.key === "Escape") {
    removeModal();
  }
}

function removeModal() {
  const modal = document.querySelector(".modal");
  modal.remove();
  document.removeEventListener("click", handleClickOutside);
  document.removeEventListener("keydown", handleEscapeClick);
}
