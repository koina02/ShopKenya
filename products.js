document.addEventListener('DOMContentLoaded', () => {
  fetch('products.json')
    .then(response => response.json())
    .then(products => {
      const productList = document.getElementById('product-list');
      products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
          <img src="${product.image}" alt="${product.name}" class="product-image">
          <h3>${product.name}</h3>
          <p><strong>KES ${product.price}</strong></p>
          <p>${product.description}</p>
          <p class="product-meta">
            <span>Category: ${product.category}</span><br>
            <span>Store: ${product.store}</span>
          </p>
        `;

        productList.appendChild(productCard);
      });
    })
    .catch(error => {
      console.error('Error loading products:', error);
      document.getElementById('product-list').innerHTML = "<p>Failed to load products.</p>";
    });
});
