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

// the renderSinglePost expects a specific structure . where every 3 element you put in a post gets rendered into one article. and follow the structure bellow when inputting into wp
// heading.
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
  document.title = "Board Buddy | blog > " + blogPost.title.rendered;

  const heading = document.getElementById("banner_title");
  heading.textContent = blogPost.title.rendered;

  const contentDiv = document.getElementById("blog_post");
  contentDiv.innerHTML = "";
  const parsed = parse.parseHTML(blogPost.content.rendered);
  const contentArray = Array.from(parsed.children);
  splitAndRender(contentArray);

  updateBanner(blogPost);
}

function updateBanner(blogPost) {
  const banner = document.querySelector(".banner_bg-post");
  const imgSrc = blogPost._embedded["wp:featuredmedia"][0].source_url;

  banner.style.backgroundImage = `url(${imgSrc})`;
}
