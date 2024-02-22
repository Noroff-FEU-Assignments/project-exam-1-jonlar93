import { toggleNav, hamburgerButton } from "./events/navigation.js";
import { handleErrorMessage } from "./events/formValidate.js";
import { setupCarousel } from "./events/carusellScroll.js";
import * as api from "./api/getOne.js";
import { fetchAndRender } from "./renderHtml/renderPosts.js";
import * as renderPost from "./renderHtml/renderPost.js";
import * as blogPosts from "./renderHtml/renderBlogPage.js";

console.log(location.pathname);
switch (location.pathname) {
  case "/index.html":
  case "/index":
  case "/":
    try {
      fetchAndRender();
      setupCarousel();
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
      handleErrorMessage();
    } catch (error) {
      // console.error("Error rendering products:", error);
      // handleRenderError(error);
    }
    break;

  case "/htmlPosts/posts.html":
  case "/htmlPosts/posts":
  case "/posts":
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
