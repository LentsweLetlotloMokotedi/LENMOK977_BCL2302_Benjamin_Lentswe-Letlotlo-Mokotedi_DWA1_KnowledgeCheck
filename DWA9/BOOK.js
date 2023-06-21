//BOOK.js
const layout = document.createElement("template");

layout.innerHTML = `
  <dialog class="overlay" data-list-active>
    <div class="overlay__preview">
      <img class="overlay__blur" data-list-blur src=""/>
      <img class="overlay__image" data-list-image src=""/>
    </div>
    <div class="overlay__content">
      <h3 class="overlay__title" data-list-title></h3>
      <div class="overlay__data" data-list-subtitle></div>
      <p class="overlay__data overlay__data_secondary" data-list-description></p>
    </div>
    <div class="overlay__row">
      <button class="overlay__button overlay__button_primary" data-list-close>Close</button>
    </div>
  </dialog>
`;

class BookPreviews extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const matches = JSON.parse(this.getAttribute('matches'));
    const authors = JSON.parse(this.getAttribute('authors'));

    const shadowRoot = this.attachShadow({ mode: 'open' });
    const starting = document.createDocumentFragment();

    for (const { author, id, image, title } of matches.slice(0, BOOKS_PER_PAGE)) {
      const element = document.createElement('button');
      element.classList = 'preview';
      element.setAttribute('data-preview', id);

      const imageElement = document.createElement('img');
      imageElement.classList = 'preview__image';
      imageElement.src = image;
      element.appendChild(imageElement);

      const infoElement = document.createElement('div');
      infoElement.classList = 'preview__info';
      element.appendChild(infoElement);

      const titleElement = document.createElement('h3');
      titleElement.classList = 'preview__title';
      titleElement.textContent = title;
      infoElement.appendChild(titleElement);

      const authorElement = document.createElement('div');
      authorElement.classList = 'preview__author';
      authorElement.textContent = authors[author];
      infoElement.appendChild(authorElement);

      starting.appendChild(element);
    }
    

    shadowRoot.appendChild(starting);
  }
  
}


document.addEventListener('click', (event) => {
  const detailsClose = event.target.closest('[data-list-close]');
  if (detailsClose) {
    const detailsActive = document.querySelector("[data-list-active]");
    if (detailsActive) {
      detailsActive.style.display = "none";
    }
  }
});



customElements.define('book-previews', BookPreviews);

export default BookPreviews;
