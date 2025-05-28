
async function loadProducts(page = 1, size = 5) {
  try {
    const res = await fetch(`https://brandstestowy.smallhost.pl/api/random?pageNumber=${page}&pageSize=${size}`);
    const json = await res.json();

    const productList = document.querySelector('.productList');


    productList.innerHTML = '';

    json.data.forEach(item => {
      const card = document.createElement('product-card');
      card.setAttribute('image', item.image);
      card.setAttribute('title', item.text);
      card.setAttribute('price', '€300,00 EUR');
      productList.appendChild(card);
    });
  } catch (error) {
    console.error('Failed to load products:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadProducts();
});
