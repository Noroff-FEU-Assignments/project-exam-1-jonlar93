import { toggleNav, hamburgerButton } from "./events/navigation.js";
import { handleErrorMessage} from "./events/formValidate.js";
import { setupCarousel } from "./events/carusellScroll.js";
import { fetchAndRender} from "./components/renderPosts.js";
import * as hotJar from "./hotjar/hotJar.js"
import * as api from "./api/getOne.js"

hotJar.hotJar();

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
            api.getApiId();
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





