import * as post from "../api/getAll.js";
import * as parse from "../parse/parse.js";
import * as button from "../components/loadMoreBtn.js";

const postTemplate = `
<a href="">
<img src="" alt="" />
<div class="card_content backdrop_filter-opaque">
  <h2></h2>
  <p></p>
</div>
</a>
`;

function createBlogPost(blogPost) {
  const article = document.createElement("article");
  article.className = "article_card";
  article.innerHTML = postTemplate;

  const link = article.querySelector("a");
  const img = article.querySelector("img");
  const title = article.querySelector("h2");
  const paragraph = article.querySelector("p");

  link.href = `/htmlPosts/?id=${blogPost.id}`;

  const imgSrc = (img.src = blogPost._embedded["wp:featuredmedia"][0].source_url);
  const imgAlt = (img.alt = blogPost._embedded["wp:featuredmedia"][0].alt_text);
  img.src = imgSrc ? imgSrc : "../../images/text-section.jpg";
  img.alt = imgAlt ? imgAlt : "placeholder image";

  title.textContent = blogPost.title.rendered;
  paragraph.textContent = parse.getParsedText(blogPost.excerpt.rendered);
  return article;
}

export async function fetchAndRenderBlogPosts() {
  const contentDiv = document.getElementById("blog_posts");
  const blogPost = await post.getApi();
  console.log(blogPost);
  contentDiv.innerHTML = "";
  blogPost.forEach((blogPost) => {
    const article = createBlogPost(blogPost);
    contentDiv.append(article);
  });
  const loadMoreButton = button.createButton();
  contentDiv.append(loadMoreButton);
}
