import * as hamburger from "./events/navigation.js";
import * as validateForm from "./events/formValidate.js";
import * as carusellScroll from "./events/carusellScroll.js";
import * as carusell from "./renderHtml/renderCarusell.js";
import * as renderPost from "./renderHtml/renderPost.js";
import * as blogPosts from "./renderHtml/renderBlogPage.js";

switch (location.pathname) {
  case "/index.html":
  case "/index":
  case "/":
    try {
      carusell.fetchAndRender();
      carusellScroll.setupCarousel();
    } catch (error) {
      // console.error("Error rendering products:", error);
      // handleRenderError(error);
    }
    break;

  case "/blogs.html":
  case "/blogs":
    try {
      blogPosts.fetchAndRenderBlogPosts();
    } catch (error) {
      // console.error("Error rendering products:", error);
      // handleRenderError(error);
    }
    break;

  case "/contact":
  case "/contact.html":
    try {
      validateForm.handleErrorMessage();
    } catch (error) {
      // console.error("Error rendering products:", error);
      // handleRenderError(error);
    }
    break;

  case "/htmlposts/index.html":
  case "/htmlposts/":
  case "/htmlposts":
    try {
      renderPost.fetchAndParsedHTML();
    } catch (error) {
      // console.error("Error rendering products:", error);
      // handleRenderError(error);
    }
    break;

  default:
    try {
    } catch (error) {
      // console.error("Error rendering trending:", error);
      // handleRenderError(error);
    }
}
