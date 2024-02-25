import * as constants from "./const.js";

export async function getApi() {
  const response = await fetch(constants.postLink);
  if (response.ok) {
    return await response.json();
  }
  throw new Error("failed to fetch");
}
