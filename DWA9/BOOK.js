const layout= document.createElement("layout");



layout.innerHTML=`
<dialog class="overlay" data-list-active>
<div class="overlay__preview"><img class="overlay__blur" data-list-blur src=""/><img class="overlay__image" data-list-image src=""/></div>
<div class="overlay__content">
  <h3 class="overlay__title" data-list-title></h3>
  <div class="overlay__data" data-list-subtitle></div>
  <p class="overlay__data overlay__data_secondary" data-list-description></p>
</div>

<div class="overlay__row">
  <button class="overlay__button overlay__button_primary" data-list-close>Close</button>
</div>
</dialog>
`





class BookPreviews extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }




  connectedCallback() {
    const matches = JSON.parse(this.getAttribute('matches'));
    const authors = JSON.parse(this.getAttribute('authors'));

    // Create a document fragment to store the book preview elements
    const starting = document.createDocumentFragment();

    // Loop through each book in the matches array, up to a certain number (BOOKS_PER_PAGE)
    for (const { author, id, image, title } of matches.slice(0, BOOKS_PER_PAGE)) {
      // Create a button element for the book preview
      const element = document.createElement('button');
      element.classList = 'preview'; // Add the 'preview' class to the button
      element.setAttribute('data-preview', id); // Set the 'data-preview' attribute to the book's id

      // Create an image element for the book preview
      const imageElement = document.createElement('img');
      imageElement.classList = 'preview__image'; // Add the 'preview__image' class to the image
      imageElement.src = image; // Set the image source to the book's image
      element.appendChild(imageElement); // Append the image element to the button

      // Create a div element for the book info
      const infoElement = document.createElement('div');
      infoElement.classList = 'preview__info'; // Add the 'preview__info' class to the div
      element.appendChild(infoElement); // Append the info div to the button

      // Create an h3 element for the book title
      const titleElement = document.createElement('h3');
      titleElement.classList = 'preview__title'; // Add the 'preview__title' class to the h3
      titleElement.textContent = title; // Set the text content of the h3 to the book's title
      infoElement.appendChild(titleElement); // Append the title element to the info div

      // Create a div element for the author
      const authorElement = document.createElement('div');
      authorElement.classList = 'preview__author'; // Add the 'preview__author' class to the div
      authorElement.textContent = authors[author]; // Set the text content of the div to the book's author
      infoElement.appendChild(authorElement); // Append the author element to the info div

      // Append the book preview element to the starting fragment
      starting.appendChild(element);
    }

    // Append the starting fragment to the shadow DOM
    this.shadowRoot.appendChild(starting);
  }
}

// Define the custom element
customElements.define('book-previews', BookPreviews);