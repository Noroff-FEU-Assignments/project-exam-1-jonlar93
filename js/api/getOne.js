import * as constants from "./const.js";

export async function getApiId() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");

  const url = constants.baseUrl + "/" + id + "?_embed";
  const response = await fetch(url);
  if (response.ok) {
    return await response.json();
  }
  throw new Error("failed to fetch");
}
