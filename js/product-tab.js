const productTabList = document.querySelector('.product-tab-list');
const productTabItemList = productTabList.querySelectorAll('li');

function activeTabItem(event) {
  const target = event.target;
  const tabItem = target.parentNode;

  if (tabItem.matches('.is-active')) return;

  productTabItemList.forEach((item) => {
    item.classList.remove('is-active');
  });

  tabItem.classList.toggle('is-active');
}

productTabList.addEventListener('click', activeTabItem);
