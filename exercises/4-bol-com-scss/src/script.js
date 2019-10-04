const shoppingCartButton = document.querySelector('.container__icon--shopping-cart');
const shoppingCart = document.querySelector('.cart');

const reviewButton = document.querySelector('.review__header button');
const dialogCloseButtons = document.querySelectorAll('.j-dialog-close');

shoppingCartButton.addEventListener('click', () => {
	shoppingCart.classList.toggle('cart--open');
});

reviewButton.addEventListener('click', () => {
	document.body.classList.add('body--dialog-open');
});

dialogCloseButtons.forEach(b => {
	b.addEventListener('click', () => {
		document.body.classList.remove('body--dialog-open');
	});
});
