const gnbSearch = document.querySelector('.gnb-search');
const gnbSearchInput = gnbSearch.querySelector('.form-input');
const gnbSearchHistory = gnbSearch.querySelector('.search-history');
const gnbSearchHistoryList = gnbSearchHistory.querySelector('ol');

const clearButton = gnbSearchHistory.querySelector(
  '.search-history-header button'
);

function closeGnbSearchHistoryOnClickingOutside(event) {
  const target = event.target;
  if (!gnbSearch.contains(target)) {
    gnbSearchHistory.classList.remove('is-active');
    window.removeEventListener('click', closeGnbSearchHistoryOnClickingOutside);
  }
}

function openGnbSearchHistory() {
  if (!gnbSearchHistoryList.innerHTML) return;
  // NOTE: 조건부에는 gnbSearchHistoryList.children.length가 들어와도 된다.

  if (!gnbSearchHistory.matches('.is-active')) {
    window.addEventListener('click', closeGnbSearchHistoryOnClickingOutside);
  }
  gnbSearchHistory.classList.add('is-active');
}

function clearGnbSearchHistoryList() {
  gnbSearchHistoryList.innerHTML = '';
  gnbSearchHistory.classList.remove('is-active');
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory);

clearButton.addEventListener('click', clearGnbSearchHistoryList);
