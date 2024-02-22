import * as post from "../api/getOne.js";
import * as parse from "../parse/parse.js";
import * as modal from "../events/modal.js";

const postTemplate = `
<h2></h2>
<div class="post_content">
  <div class="post_text">
    <p></p>
  </div>
</div>
`;
// add title

// the renderSinglePost expects a specific structure .

// header.
// img.
// paragraph.

export async function renderSinglePost(data) {
  const contentDiv = document.getElementById("blog_post");
  const article = document.createElement("article");
  article.innerHTML = postTemplate;
  article.classList.add("section_post", "article_margin");

  const title = article.querySelector("h2");
  const paragraph = article.querySelector("p");
  const imgContainer = article.querySelector(".post_content");

  title.textContent = data[0].textContent;
  paragraph.textContent = data[1].textContent;
  data[2].className = "post_image-container";
  imgContainer.append(data[2]);
  contentDiv.append(article);

  const img = article.querySelector("img");
  modal.setupModal(img);
}

// split blogpost up in arrays of 3 elements
function splitAndRender(blogPost) {
  const subArraySize = 3;

  for (let i = 0; i < blogPost.length; i += subArraySize) {
    const subArray = blogPost.slice(i, i + subArraySize);
    renderSinglePost(subArray);
  }
}

export async function fetchAndParsedHTML() {
  const blogPost = await post.getApiId();
  const parsed = parse.parseHTML(blogPost.content.rendered);
  const contentArray = Array.from(parsed.children);
  splitAndRender(contentArray);
}
