const productTabList = document.querySelector('.product-tab-list');
const productTabItemList = productTabList.querySelectorAll('li');

const TOP_HEADER__MOBILE = 50 + 40 + 40;
const TOP_HEADER__DESKTOP = 80 + 50 + 54;
const PADDING__MOBILE = 8;
const PADDING__DESKTOP = 80;
const BREAKPOINT_DESKTOP = 768;

function activeTabItem(event) {
  const target = event.target;
  const tabItem = target.parentNode;

  if (tabItem.matches('.is-active')) return;

  productTabItemList.forEach((item) => {
    item.classList.remove('is-active');
  });

  tabItem.classList.toggle('is-active');
}

function scrollToTabPanel(event) {
  const target = event.target;
  const tabItem = target.parentNode;

  const id = tabItem.getAttribute('aria-labelledby');
  const tabPanel = document.querySelector(`#${id}`);

  const tabPanelTop = tabPanel.getBoundingClientRect().top;
  const scrollAmount =
    tabPanelTop -
    (window.innerWidth >= BREAKPOINT_DESKTOP
      ? TOP_HEADER__DESKTOP
      : TOP_HEADER__MOBILE);

  window.scrollBy({
    top: scrollAmount,
    behavior: 'smooth',
  });
}

productTabList.addEventListener('click', activeTabItem);
productTabList.addEventListener('click', scrollToTabPanel);

const tabPanelIdList = [
  'product-spec',
  'product-review',
  'product-inquiry',
  'product-shipment',
  'product-recommendation',
];

let productTabPanelPosition = {};

const tabPanelList = tabPanelIdList.map((tabPanelId) => {
  return document.querySelector(`#${tabPanelId}`);
});

function detectTabPanelPosition() {
  tabPanelList.forEach((tabPanel) => {
    const id = tabPanel.id;
    const position = window.scrollY + tabPanel.getBoundingClientRect().top;

    productTabPanelPosition[id] = position;
  });
}

window.addEventListener('load', detectTabPanelPosition);
window.addEventListener('resize', detectTabPanelPosition);

let activeTab = null;

function updateProductTabOnScroll() {
  const scrollAmount =
    window.scrollY +
    (window.innerWidth > BREAKPOINT_DESKTOP
      ? TOP_HEADER__DESKTOP + PADDING__DESKTOP
      : TOP_HEADER__MOBILE) +
    PADDING__MOBILE;

  let newActiveTab;
  if (scrollAmount >= productTabPanelPosition['product-recommendation']) {
    newActiveTab = productTabItemList[4];
  } else if (scrollAmount >= productTabPanelPosition['product-shipment']) {
    newActiveTab = productTabItemList[3];
  } else if (scrollAmount >= productTabPanelPosition['product-inquiry']) {
    newActiveTab = productTabItemList[2];
  } else if (scrollAmount >= productTabPanelPosition['product-review']) {
    newActiveTab = productTabItemList[1];
  } else {
    newActiveTab = productTabItemList[0];
  }

  if (newActiveTab === activeTab) return;

  newActiveTab.classList.add('is-active');
  activeTab && activeTab.classList.remove('is-active');
  activeTab = newActiveTab;
}

window.addEventListener('scroll', updateProductTabOnScroll);

// updateProductTabOnScroll에 원래 tabPanelList를 forEach해서 scroll 동작 구현했었다.
// 왜 바꿨냐면, scroll 이벤트 자체가 콜백함수를 계속해서 반복하는데, 콜백함수 안에도 반복문이 있으면 성능이 저하되니까.
