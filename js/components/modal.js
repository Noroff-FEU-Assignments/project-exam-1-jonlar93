import * as modalSetup from "../events/modal.js";

const modalTemplate = `
<button class="close_modal">&#x2715;
</button>
<img src=""/>
`;

export function renderModal(img) {
  const modal = document.createElement("dialog");
  modal.className = "modal";
  modal.innerHTML = modalTemplate;

  const image = modal.querySelector("img");
  image.src = img.src;
  image.alt = img.alt;
  document.body.append(modal);
  modal.showModal();

  modalSetup.setupModalListener();
}
