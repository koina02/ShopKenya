document.addEventListener("DOMContentLoaded", () => {
  fetch("data/products.json")
    .then(res => res.json())
    .then(data => renderCart(data));
});

function renderCart(products) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cartItems");
  let total = 0;

  container.innerHTML = "";

  cart.forEach(item => {
    const product = products.find(p => p.id === item.id);
    const subtotal = item.qty * product.price;
    total += subtotal;

    container.innerHTML += `
      <div class="cart-item">
        <h3>${product.name}</h3>
        <p>Qty: ${item.qty}</p>
        <p>KES ${subtotal}</p>
        <button onclick="removeItem(${item.id})">Remove</button>
      </div>`;
  });

  document.getElementById("totalPrice").innerText = "KES " + total;
}

function removeItem(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}
