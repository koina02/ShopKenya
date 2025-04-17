document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("productsContainer");
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");

  let products = [];

  fetch("products.json")
    .then(res => res.json())
    .then(data => {
      products = data;
      displayProducts(products);
    });

  function displayProducts(items) {
    container.innerHTML = "";
    if (items.length === 0) {
      container.innerHTML = "<p>No products found.</p>";
      return;
    }
    items.forEach(product => {
      container.innerHTML += `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}" />
          <h3>${product.name}</h3>
          <p>KES ${product.price}</p>
          <button>Add to Cart</button>
        </div>
      `;
    });
  }

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    displayProducts(filtered);
  });

  categoryFilter.addEventListener("change", () => {
    const category = categoryFilter.value;
    if (category === "All") {
      displayProducts(products);
    } else {
      const filtered = products.filter(p => p.category === category);
      displayProducts(filtered);
    }
  });
});
