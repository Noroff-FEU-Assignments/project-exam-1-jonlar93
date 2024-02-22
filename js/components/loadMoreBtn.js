export function createButton() {
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "grid_placement-center";
  const button = document.createElement("button");
  button.className = "button_load-more";
  button.textContent = "load more";

  buttonContainer.appendChild(button);
  return buttonContainer;
}
