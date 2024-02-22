import * as api from "../api/getAll.js";
import * as parse from "../parse/parse.js";

const postTemplate = `
<article class="carusell_card">
  <img src="" alt=""/>
  <div class="carusell_text-wrapper">
    <h3></h3>
    <p></p>
  </div>
</article>
`;

export function createHtmlPost(post) {
  const link = document.createElement("a");
  link.innerHTML = postTemplate;
  link.href = `/htmlPosts/posts.html?id=${post.id}`;
  const img = link.querySelector("img");
  const title = link.querySelector("h3");
  const paragraph = link.querySelector("p");
  // ? ternary operator for sleaker implementation of placeholder img in case of no img from wp
  const imgSrc = post._embedded["wp:featuredmedia"][0].source_url;
  const imgAlt = post._embedded["wp:featuredmedia"][0].alt_text;

  img.src = imgSrc ? imgSrc : "../../images/text-section.jpg";
  img.alt = imgAlt ? imgAlt : "placeholder image";
  title.textContent = post.title.rendered;
  paragraph.textContent = parse.getParsedText(post.excerpt.rendered);
  return link;
}

export async function fetchAndRender() {
  const contentDiv = document.getElementById("carusell");
  const posts = await api.getApi();
  contentDiv.innerHTML = "";
  posts.forEach((element) => {
    const link = createHtmlPost(element);
    contentDiv.append(link);
  });
}
