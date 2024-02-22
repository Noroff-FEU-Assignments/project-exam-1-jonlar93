import * as constants from "./const.js";

export async function getApiId() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");

  const url = constants.baseUrl + "/" + id;

  const response = await fetch(url);
  const data = await response.json();

  // console.log(data);

  return data;
}
