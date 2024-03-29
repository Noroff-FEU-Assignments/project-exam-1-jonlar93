import * as hamburger from "./events/navigation.js";
import * as validateForm from "./events/formValidate.js";
import * as carusellScroll from "./events/carusellScroll.js";
import * as carusell from "./renderHtml/renderCarusell.js";
import * as renderPost from "./renderHtml/renderPost.js";
import * as blogPosts from "./renderHtml/renderBlogPage.js";
import * as sorted from "./parse/sortApi.js";

switch (location.pathname) {
  case "/index.html":
  case "/index":
  case "/":
    sorted.fetchAndSort();
    carusell.fetchAndRender();
    carusellScroll.setupCarousel();
    break;

  case "/blogs.html":
  case "/blogs":
    blogPosts.fetchAndRenderBlogPosts();
    break;

  case "/contact":
  case "/contact.html":
    validateForm.addEventListeners();
    break;

  case "/htmlposts/index.html":
  case "/htmlposts/":
  case "/htmlposts":
    renderPost.fetchAndParsedHTML();
    break;
}
