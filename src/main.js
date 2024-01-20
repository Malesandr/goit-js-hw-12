import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";
import axios from 'axios';

const apiKey = '41862655-84ddc1d5da0620d7ed5964b7a';

const form = document.querySelector('.form');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');
const btnLoadMore = document.querySelector('.btn-load-more');
// const inputSearch = document.querySelector('.input-search');

const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
});

btnLoadMore.style.display = 'none';
loader.style.display = 'none';

let currentPage = 1;
let cardHeight = 0;


form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const searchQuery = event.currentTarget.elements.query.value.trim();
    
    currentPage = 1;

    try {
        const { hits, totalHits } = await getImages(searchQuery, currentPage);

        if (hits.length === 0) {
            gallery.innerHTML = "";
            iziToast.error({ position: 'topRight', message: 'Sorry, there are no images matching your search query. Please try again!' });
            return;
        }
        
        gallery.innerHTML = "";
        
        const markup = hits.map((hit) => {
            
            return `<li class="gallery-item">
                <a class="gallery-link" href="${hit.largeImageURL}">
                    <img
                        class="gallery-image"
                        src="${hit.webformatURL}"
                        alt="${hit.tags}"
                    />
                    <ul class="list">
                    <li><p class='list-item'>💗Likes<span>${hit.likes}</span></p></li>
                    <li><p class='list-item'>👁️Views<span>${hit.views}</span></p></li>
                    <li><p class='list-item'>💬Comments<span>${hit.comments}</span></p></li>
                    <li><p class='list-item'>💌Downloads<span>${hit.downloads}</span></p></li>
                    </ul>
                </a>
            </li>`;
        }).join("");

        gallery.insertAdjacentHTML(`beforeend`, markup);
        const oneImage = document.querySelector(".gallery-item");


        if (oneImage) {
            cardHeight = oneImage.getBoundingClientRect().height;
        }
        lightbox.refresh();

        if (totalHits <= 40) {
            btnLoadMore.style.display = 'none';
        } else {
            btnLoadMore.style.display = 'block';
        }

    } catch (error) {
        iziToast.error({ position: 'topRight', message: 'Sorry, there are no images matching your search query. Please try again!' });
    }
});


btnLoadMore.addEventListener('click', async () => {
    
    currentPage++;

    loader.style.display = "block"

    try {
        const searchQuery = form.elements.query.value.trim();
        const result = await getImages(searchQuery, currentPage);

        const markup = result.hits.map((hit) => {
            return `<li class="gallery-item">
                <a class="gallery-link" href="${hit.largeImageURL}">
                    <img
                        class="gallery-image"
                        src="${hit.webformatURL}"
                        alt="${hit.tags}"
                    />
                    <ul class="list">
                    <li><p class='list-item'>💗Likes<span>${hit.likes}</span></p></li>
                    <li><p class='list-item'>👁️Views<span>${hit.views}</span></p></li>
                    <li><p class='list-item'>💬Comments<span>${hit.comments}</span></p></li>
                    <li><p class='list-item'>💌Downloads<span>${hit.downloads}</span></p></li>
                    </ul>
                </a>
            </li>`;
        }).join("");

        gallery.insertAdjacentHTML(`beforeend`, markup);
        lightbox.refresh();


        if (result.totalHits <= currentPage * 40) { 
            iziToast.info({
                title: '',
                message: 'We are sorry, but you have reached the end of search results.',
            });
            btnLoadMore.style.display = 'none';
        }    
        window.scrollBy({
            top: cardHeight * 2,
            behavior: 'smooth'
        });
    } catch (error) {
        iziToast.error({ position: 'topRight', message: 'Sorry, there are no images matching your search query. Please try again!' });
    }
});


form.reset();

currentQuery = param;
page = 1;

async function getImages(param, page) {
    loader.style.display = 'block';

    try {
        const response = await axios.get(`https://pixabay.com/api/?key=${apiKey}&q=${param}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`);
        return {
            hits: response.data.hits,
            totalHits: response.data.totalHits
        };
    } catch (error) {
        showError();
    } finally {
        loader.style.display = 'none';
        
    }
}