import axios from "axios";

export default class NewsApi{
    constructor(){
        this.searchWord = '';
        this.page = 1;
        this.per_page = 40;
    }
    
    fetchArticles(){
        const url =
            `https://pixabay.com/api/?key=29627858-41c1c6901e5456b7eb4365fd8&q=${this.searchWord}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${this.per_page}&page=${this.page}`;
        
        return axios.get(url)
    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get word() {
        return this.searchWord;
    }

    set word(newWord) {
        this.searchWord=newWord;
    }
}