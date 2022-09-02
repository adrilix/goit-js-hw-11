import NewsApi from './catch-folder';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {appendHitsMarkup} from './create-markup';

const instance = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 150 });

export const refs = {
    searchForm: document.querySelector('.search-form'),
    hitsContainer: document.querySelector('.gallery'),
    moreBtn: document.querySelector('.load-more'),
}
const newsApi = new NewsApi();

refs.searchForm.addEventListener('submit', onSearch);
refs.moreBtn.addEventListener('click', moreSearch);


async function onSearch (e) {
    e.preventDefault();
    clearHitsContainer();
    newsApi.word = e.currentTarget.elements.searchQuery.value;
    newsApi.resetPage();

    try {
        const fetchResult = await newsApi.fetchArticles()
            
            if(fetchResult.data.totalHits === 0){
                Notify.failure("Sorry, there are no images matching your search query. Please try again.");
                return;
            };
            appendHitsMarkup(fetchResult.data.hits);
            instance.refresh();
            refs.moreBtn.classList.remove('is-hidden');
        } 
    catch(error){
        console.log(error);
    }
}

async function moreSearch (e) {
    newsApi.incrementPage();
    try {
        const fetchResult = await newsApi.fetchArticles()
        appendHitsMarkup(fetchResult.data.hits);
        instance.refresh();
        console.log(fetchResult.data.hits.length);
        console.log(newsApi.per_page);
            if(fetchResult.data.totalHits<=newsApi.per_page*newsApi.page){
                refs.moreBtn.classList.add('is-hidden');
                Notify.info("We're sorry, but you've reached the end of search results.");
                return;
            }
        } 
    catch(error){
        console.log(error);
    }
}

function clearHitsContainer () {
    refs.hitsContainer.innerHTML='';
}