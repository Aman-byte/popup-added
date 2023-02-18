// Get all product content elements
const productContents = document.querySelectorAll('.product-content');

// Loop through each product content element
productContents.forEach((productContent) => {
  // Get the product image, name, price, description, and buttons
  const productImage = productContent.querySelector('.product-image');
  const productName = productContent.querySelector('.product-name');
  const productPrice = productContent.querySelector('.product-price');
  const productDescription = productContent.querySelector('.product-description');
  const addToCartBtn = productContent.querySelector('.add-to-cart');
  const buyNowBtn = productContent.querySelector('.buy-now');

  // Add click event listener to each element
  productImage.addEventListener('click', openPopup);
  productName.addEventListener('click', openPopup);
  productPrice.addEventListener('click', openPopup);
productDescription.addEventListener('click', openPopup);
addToCartBtn.addEventListener('click', addToCart);
buyNowBtn.addEventListener('click', buyNow);

// Define functions to open popup, add to cart, and buy now
function openPopup() {
// Create the popup element and its child elements
const popup = document.createElement('div');
const popupImage = document.createElement('img');
const popupName = document.createElement('h2');
const popupPrice = document.createElement('p');
const popupDescription = document.createElement('p');
const popupBtnContainer = document.createElement('div');
const addToCartPopupBtn = document.createElement('button');
const buyNowPopupBtn = document.createElement('button');
const closePopupBtn = document.createElement('button');
  // Set the content and attributes of the child elements
popupImage.src = productImage.src;
popupName.textContent = productName.textContent;
popupPrice.textContent = productPrice.textContent;
popupDescription.textContent = productDescription.textContent;
addToCartPopupBtn.textContent = 'Add to Cart';
buyNowPopupBtn.textContent = 'Buy Now';
closePopupBtn.textContent = 'Close';
closePopupBtn.classList.add('close-btn');

// Append the child elements to the popup element
popup.appendChild(popupImage);
popup.appendChild(popupName);
popup.appendChild(popupPrice);
popup.appendChild(popupDescription);
popupBtnContainer.appendChild(addToCartPopupBtn);
popupBtnContainer.appendChild(buyNowPopupBtn);
popupBtnContainer.appendChild(closePopupBtn);
popup.appendChild(popupBtnContainer);

// Add classes and attributes to the popup element
popup.classList.add('popup');
popup.setAttribute('tabindex', '0');

// Add event listener to close popup button
closePopupBtn.addEventListener('click', () => {
  document.body.removeChild(popup);
});

// Add event listener to overlay to close popup on click outside
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    document.body.removeChild(popup);
  }
});

// Add event listener to close popup on escape key press
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.body.removeChild(popup);
  }
});

// Append the popup element to the body
document.body.appendChild(popup);

}

function addToCart() {
// Add code to add product to cart
console.log('Product added to cart!');
}

function buyNow() {
// Add code to initiate purchase
console.log('Initiating purchase!');
}
});

// Add global event listener to close popup on escape key press
document.addEventListener('keydown', (e) => {
if (e.key === 'Escape') {
const popup = document.querySelector('.popup');
if (popup) {
document.body.removeChild(popup);
}
}
});
