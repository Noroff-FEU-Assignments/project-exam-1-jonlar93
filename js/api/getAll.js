import * as constants from "./const.js"

export async function getApi() {
        const response = await fetch(constants.postLink);
        const results = await response.json();
        return results;
}