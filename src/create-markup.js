import {refs} from "./index"

export function appendHitsMarkup (hits) {
    const markupPage = hits.map(({webformatURL,largeImageURL,tags,likes,views,comments,downloads})=>{
        return `<div class="photo-card">
    <a class="list" href="${largeImageURL}">
    <img src="${webformatURL}" alt="${tags}" loading="lazy" width=275 height=188/>
    <div class="info">
        <p class="info-item">
            <b>Likes</b>
            <br/>${likes}
        </p>
        <p class="info-item">
            <b>Views</b>
            <br/>${views}
        </p>
        <p class="info-item">
            <b>Comments</b>
            <br/>${comments}
        </p>
        <p class="info-item">
            <b>Downloads</b>
            <br/>${downloads}
        </p>
    </div>
    </a>
    </div>`
    })

    refs.hitsContainer.insertAdjacentHTML('beforeend', markupPage.join(''));
}

