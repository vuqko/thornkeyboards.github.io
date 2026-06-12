let products = [
  { id: 1, name: "RGB Pro", price: 120, type: "hot", desc: "Best gaming keyboard", img: "https://source.unsplash.com/300x300/?keyboard" },
  { id: 2, name: "Blue Click", price: 80, type: "hot", desc: "Clicky switches", img: "https://source.unsplash.com/301x301/?keyboard" },
  { id: 3, name: "Silent Red", price: 70, type: "hot", desc: "Quiet typing", img: "https://source.unsplash.com/302x302/?keyboard" },
  { id: 4, name: "White Minimal", price: 90, type: "hot", desc: "Clean design", img: "https://source.unsplash.com/303x303/?keyboard" },
  { id: 5, name: "Black Pro", price: 110, type: "hot", desc: "Premium build", img: "https://source.unsplash.com/304x304/?keyboard" },
  { id: 6, name: "Starter Board", price: 50, type: "new", desc: "Beginner friendly", img: "https://source.unsplash.com/305x305/?keyboard" },
  { id: 7, name: "RGB Lite", price: 95, type: "new", desc: "Affordable RGB", img: "https://source.unsplash.com/306x306/?keyboard" },
  { id: 8, name: "Pro Max", price: 150, type: "hot", desc: "Top tier build", img: "https://source.unsplash.com/307x307/?keyboard" }
];

function render(list) {
  let grid = document.getElementById("grid");
  grid.innerHTML = "";

  list.forEach(p => {
    grid.innerHTML += `
      <div class="card" onclick="openModal(${p.id})">
        <img src="${p.img}">
        <h4>${p.name}</h4>
        <p>$${p.price}</p>
      </div>
    `;
  });
}

function openModal(id) {
  let p = products.find(x => x.id === id);

  document.getElementById("mName").innerText = p.name;
  document.getElementById("mPrice").innerText = "$" + p.price;
  document.getElementById("mDesc").innerText = p.desc;

  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function toggleMenu() {
  let d = document.getElementById("dropdown");
  d.style.display = d.style.display === "block" ? "none" : "block";
}

function filter(type) {
  if (type === "all") render(products);
  else render(products.filter(p => p.type === type));
  toggleMenu();
}

render(products);
