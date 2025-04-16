console.log("Welcome to ShopKenya - Where Kenyan hustle meets tech!");
// Load Products
document.addEventListener("DOMContentLoaded", () => {
  fetch("data/products.json")
    .then(res => res.json())
    .then(data => renderProducts(data));

  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");

  searchInput?.addEventListener("input", handleFilter);
  categoryFilter?.addEventListener("change", handleFilter);
});

function renderProducts(products) {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  grid.innerHTML = "";
  products.forEach(product => {
    const card = `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>KES ${product.price}</p>
        <a class="btn" href="product.html?id=${product.id}">View</a>
        <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
      </div>`;
    grid.innerHTML += card;
  });
}

function handleFilter() {
  const search = document.getElementById("searchInput")?.value.toLowerCase() || "";
  const category = document.getElementById("categoryFilter")?.value || "";

  fetch("data/products.json")
    .then(res => res.json())
    .then(data => {
      const filtered = data.filter(product => 
        product.name.toLowerCase().includes(search) &&
        (category === "" || product.category === category)
      );
      renderProducts(filtered);
    });
}

function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const exists = cart.find(p => p.id === productId);
  if (!exists) cart.push({ id: productId, qty: 1 });
  else exists.qty++;
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product added to cart!");
}
