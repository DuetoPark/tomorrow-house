const orderCTA = document.querySelector('.order-cta');
const orderModal = document.querySelector('.order-form-modal');
const orderModalOverlay = document.querySelector('.overlay');
const [ctaBookmarkButton, ctaBuyButton] = orderCTA.children;

function openOrderModal() {
  orderModal.classList.add('is-open');
  orderModalOverlay.classList.add('is-active');
}

ctaBuyButton.addEventListener('click', openOrderModal);

function closeOrderModal() {
  orderModal.classList.remove('is-open');
  orderModalOverlay.classList.remove('is-active');
}

orderModalOverlay.addEventListener('click', closeOrderModal);
