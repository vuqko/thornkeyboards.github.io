let products = [
  { name: "Red Switch Keyboard", price: 80, trending: 5, age: 1 },
  { name: "Blue Switch Keyboard", price: 60, trending: 8, age: 3 },
  { name: "RGB Pro Keyboard", price: 120, trending: 10, age: 0 }
];

function render(list) {
  let container = document.getElementById("products");
  container.innerHTML = "";

  list.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <p>$${p.price}</p>
      </div>
    `;
  });
}

function sortProducts(type) {
  let sorted = [...products];

  if (type === "low") sorted.sort((a,b) => a.price - b.price);
  if (type === "high") sorted.sort((a,b) => b.price - a.price);
  if (type === "trending") sorted.sort((a,b) => b.trending - a.trending);
  if (type === "newest") sorted.sort((a,b) => a.age - b.age);

  render(sorted);
}

render(products);
