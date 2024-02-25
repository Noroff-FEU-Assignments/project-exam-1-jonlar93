export function handleRenderError() {
  // Create and render the error message as a paragraph

  const loaderWrappers = document.querySelectorAll(".loader_wrapper");
  loaderWrappers.forEach((loader) => {
    if (loader) {
      const errorMessage = document.createElement("p");
      errorMessage.textContent = "There is a problem with loading your content";
      errorMessage.style.color = "red";
      loader.innerHTML = "";
      loader.appendChild(errorMessage);
    } else {
      console.error("loader not found");
    }
  });
}
