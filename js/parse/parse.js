// parse blog posts
export function parseHTML(htmlString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  return doc.body;
}

// parse exrecpt title
export function getParsedText(htmlString) {
  const parsedString = parseHTML(htmlString);
  return parsedString.textContent;
}
