class ProductCard extends HTMLElement {
  connectedCallback() {
    const image = this.getAttribute('image');
    const title = this.getAttribute('title');
    const price = this.getAttribute('price');

    this.innerHTML = `
      <div class="productContainer">
        <div class="productImageContainer">
          <img src="${image}" alt="${title}">
        </div>
        <div class="productDescriptionContainer">
          <h3>${title}</h3>
          <p>${price}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('product-card', ProductCard);
