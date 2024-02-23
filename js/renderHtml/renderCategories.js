export function renderCategories(categories) {
  const categoryElements = document.querySelectorAll("#category_element");

  categoryElements.forEach((categoryElement, index) => {
    categoryElement.innerHTML = "";
    const links = [];
    categories[index].forEach((blogPost) => {
      const anchor = document.createElement("a");
      anchor.textContent = blogPost.title.rendered;
      anchor.href = `/htmlposts/?id=${blogPost.id}`;
      links.push(anchor);
    });
    categoryElement.append(...links);
  });
}
