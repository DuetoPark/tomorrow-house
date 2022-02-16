const gnbSearch = document.querySelector('.gnb-search');
const gnbSearchHistory = gnbSearch.querySelector('.search-history');
const gnbSearchInput = gnbSearch.querySelector('.form-input');

function closeGnbSearchHistoryOnClickingOutside(event) {
  const target = event.target;
  if (!gnbSearch.contains(target)) {
    gnbSearchHistory.classList.remove('is-active');
    window.removeEventListener('click', closeGnbSearchHistoryOnClickingOutside);
  }
}

function openGnbSearchHistory() {
  if (!gnbSearchHistory.matches('.is-active')) {
    window.addEventListener('click', closeGnbSearchHistoryOnClickingOutside);
  }
  gnbSearchHistory.classList.add('is-active');
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory);
