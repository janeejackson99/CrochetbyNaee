let cart = [];

function scrollToShop() {
  document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
}

function addToCart(item, price) {
  cart.push({ item, price });
  alert(item + " added to cart 🧶");
}

function checkout() {
  let total = cart.reduce((sum, i) => sum + i.price, 0);
  alert("Your total is $" + total + "\nNext step: real payment setup");
}

function login(e) {
  e.preventDefault();
  alert("Login system coming soon 🔐");
}

function sendMessage(e) {
  e.preventDefault();
  alert("Message sent! 💌");
}