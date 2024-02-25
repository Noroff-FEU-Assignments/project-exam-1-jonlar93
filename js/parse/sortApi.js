import * as api from "../api/getAll.js";
import * as renderCategories from "../renderHtml/renderCategories.js";
import * as errorHandling from "../errorHandling/error.js";

export async function fetchAndSort() {
  try {
    const result = await api.getApi();
    const stored = result;

    const location = [];
    const beginner = [];
    const advanced = [];

    stored.forEach((storedPost) => {
      switch (storedPost._embedded["wp:term"][0][0].name) {
        case "locations":
          location.push(storedPost);
          break;

        case "beginner":
          beginner.push(storedPost);
          break;

        case "advanced":
          advanced.push(storedPost);
          break;
      }
    });
    renderCategories.renderCategories([beginner, advanced, location]);
  } catch (error) {
    console.error("Error there was an error rendering content", error);
    errorHandling.handleRenderError(error);
  }
}
