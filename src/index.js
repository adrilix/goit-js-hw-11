import NewsApi from './catch-folder'

const refs = {
    searchForm: document.querySelector('.search-form'),
    articlesContainer: document.querySelector('.gallery'),
    moreBtn: document.querySelector('.load-more'),
}
const newsApi = new NewsApi();

refs.searchForm.addEventListener('submit', onSearch);
refs.moreBtn.addEventListener('click', moreSearch);

function onSearch (e) {
    e.preventDefault();

    newsApi.word = e.currentTarget.elements.searchQuery.value;
    newsApi.resetPage();
    newsApi.fetchArticles().then(hits => console.log(hits));
}

function moreSearch (e) {
    newsApi.fetchArticles().then(hits => console.log(hits));

}