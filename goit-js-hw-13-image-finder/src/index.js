import './styles.css';
import queryImg from './js/apiService';
import imageInfo from './js/imageInfo.hbs';

let page = 1;
let query;

const key = '18756722-3cc55c22d219ddfaf06a08727';

const input = document.querySelector('input');
const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const mainBlock = document.querySelector('.mainblock');

function moreBtnCreate() {
    if (!document.querySelector('.morePhoto')) {
        const moreBtn = document.createElement('button');
        moreBtn.classList.add('morePhoto');
        mainBlock.append(moreBtn);
        moreBtn.textContent = 'Load more...';
    }
}

function renderImages(event) {
    page = 1;
    event.preventDefault();
    gallery.innerHTML = '';
    query = input.value;
    queryImg(query, page, key).then((hits) => {
        const adding = imageInfo(hits);
        gallery.innerHTML = adding;
        moreBtnCreate();
        document.querySelector('.morePhoto').addEventListener('click', renderMoreImages);
        form.reset();
    });
}

function renderMoreImages() {
    page += 1;
    queryImg(query, page, key).then((hits) => {
        const adding = imageInfo(hits);
        gallery.insertAdjacentHTML('beforeend', adding);
        setTimeout(() => {
            window.scrollBy({
                top: document.documentElement.clientHeight - 225,
                behavior: 'smooth'
            });
        }, 500);
    });
    console.log(page);
}

form.addEventListener('submit', renderImages);
