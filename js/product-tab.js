const productTabList = document.querySelector('.product-tab-list');
const productTabItemList = productTabList.querySelectorAll('li');

function getElementHeight(className) {
  const element = document.querySelector(className);
  const elementRect = element.getBoundingClientRect();
  const elementHeight = elementRect.height;

  return elementHeight;
}

function InactiveAllTabItems() {
  productTabItemList.forEach((item) => {
    item.classList.remove('is-active');
  });
}

function makeSelectedTabItemActive(tabItem) {
  InactiveAllTabItems();
  tabItem.classList.toggle('is-active');
}

function showMatchedSection(event) {
  const target = event.target;
  const tabItem = target.parentNode;

  if (tabItem.matches('.is-active')) return;

  makeSelectedTabItemActive(tabItem);
}

productTabList.addEventListener('click', showMatchedSection);
