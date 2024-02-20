import * as api from "../api/getAll.js"
import * as parse from "../parse/parse.js"

// function renderPost(post) {
//     if (!post || post.length === 0) {
//         console.log('No posts to render');
//         return; // Early return if no posts
//     }

//     const contentDiv = document.getElementById('carusell');

//     // Create anchor element
//     const link = document.createElement('a');
//     link.href = "/htmlPosts/posts.html";

//     // Create article element
//     const article = document.createElement('article');
//     article.className = 'carusell_card';

//     // Create image element
//     const img = document.createElement('img');
//     img.src = "/images/carousell.jpg";
//     img.alt = "A relevant alt text"; // Added a placeholder for alt text

//     // Create div element for text
//     const textWrapper = document.createElement('div');
//     textWrapper.className = 'carusell_text-wrapper';

//     // Create h3 element
//     const heading = document.createElement('h3');
//     heading.textContent = 'Board Maintenance';

//     // Create paragraph element
//     const paragraph = document.createElement('p');
//     paragraph.textContent = post[0].excerpt.rendered;

//     // Append the elements
//     textWrapper.appendChild(heading);
//     textWrapper.appendChild(paragraph);
//     article.appendChild(img);
//     article.append(paragraph)
//     article.appendChild(textWrapper);
//     link.appendChild(article);
//     contentDiv.appendChild(link);
// }



const postTemplate =
`
<article class="carusell_card">
  <img src="" alt=""/>
  <div class="carusell_text-wrapper">
    <h3></h3>
    <p></p>
  </div>
</article>
`

export function renderHtmlPost(post){
    const contentDiv = document.getElementById('carusell');

    const link = document.createElement("a");
    link.innerHTML = postTemplate;
    link.href = `/htmlPosts/posts.html?id=${post.id}`; 
    const img = link.querySelector("img");
    const title = link.querySelector("h3");
    const paragraph = link.querySelector("p")
    // ? ternary operator for sleaker implementation of placeholder img in case of no img from wp
    const imgSrc = post.embedded?.["wp:featuredmedia"]?.[0]?.source_url;

    img.src = imgSrc ? imgSrc : "../../images/text-section.jpg";
    img.alt = imgSrc ? embedded?.["wp:featuredmedia"]?.[0]?.alt_text : "placeholder image";
    title.textContent = post.title.rendered;
    paragraph.textContent = parse.getParsedText(post.excerpt.rendered);
    contentDiv.append(link)
}


export async function fetchAndRender (){
    try{
        const posts = await api.getApi();
        posts.forEach(element => {
            renderHtmlPost(element);
        });
    }
    catch (error){
        console.error('Fetch error:', error);
    }

};

export function parseHTML(htmlString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    return doc.body;
}
