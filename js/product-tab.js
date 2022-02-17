const productTabList = document.querySelector('.product-tab-list');
const productTabItemList = productTabList.querySelectorAll('li');

const TOP_HEADER_MOBILE = 50 + 40 + 40;
const TOP_HEADER_DESKTOP = 80 + 50 + 54;
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
      ? TOP_HEADER_DESKTOP
      : TOP_HEADER_MOBILE);

  window.scrollBy({
    top: scrollAmount,
    behavior: 'smooth',
  });
}

productTabList.addEventListener('click', activeTabItem);
productTabList.addEventListener('click', scrollToTabPanel);

const tabPanelIdList = [
  'product-spec',
  'product-inquiry',
  'product-review',
  'product-shipment',
  'product-recommendation',
];

let tabPanelPosition = {};

const tabPanelList = tabPanelIdList.map((tabPanelId) => {
  return document.querySelector(`#${tabPanelId}`);
});

function detectTabPanelPosition() {
  tabPanelList.forEach((tabPanel) => {
    const id = tabPanel.id;
    const position = window.scrollY + tabPanel.getBoundingClientRect().top;

    tabPanelPosition[id] = position;
  });
}

window.addEventListener('load', detectTabPanelPosition);
window.addEventListener('resize', detectTabPanelPosition);
