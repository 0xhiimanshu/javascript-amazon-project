export let cart = JSON.parse(localStorage.getItem("cart")) || [{
  productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity: 1,
}, {
  productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
  quantity: 1,
}];

export function addToCart(addedItemId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (cartItem.productId === addedItemId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: addedItemId,
      quantity: 1,
    });
  }

  saveToStorage();
}

export function removeFromCart(deletedItemId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== deletedItemId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
