document.addEventListener('DOMContentLoaded', () => {
  fetch('products.json')
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.json();
    })
    .then(products => {
      const productList = document.getElementById('product-list');
      if (!productList) return; // Prevents script from running on pages without #product-list

      productList.innerHTML = ''; // Clear existing content if any

      products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        const {
          name = 'Unnamed Product',
          price = 'N/A',
          image = 'assets/images/placeholder.jpg',
          description = 'No description available.',
          category = 'Uncategorized',
          store = 'Unknown Store'
        } = product;

        productCard.innerHTML = `
          <img src="${image}" alt="${name}" class="product-image">
          <h3>${name}</h3>
          <p><strong>KES ${price}</strong></p>
          <p>${description}</p>
          <p class="product-meta">
            <span>Category: ${category}</span><br>
            <span>Store: ${store}</span>
          </p>
        `;

        productList.appendChild(productCard);
      });
    })
    .catch(error => {
      console.error('Error loading products:', error);
      const productList = document.getElementById('product-list');
      if (productList) {
        productList.innerHTML = "<p>🚫 Failed to load products. Please try again later.</p>";
      }
    });
});
