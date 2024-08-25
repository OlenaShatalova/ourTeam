import { refs } from './refs';
import { getPhotos } from './unsplash-api';
import { createGallery } from './createGallary';
import { showLoader, hideLoader } from './loader';

refs.form.addEventListener('submit', onSubmit);
refs.loadMore.addEventListener('click', onclick);
let page = 1;
let searchQuery = null;
async function onSubmit(event) {
  event.preventDefault();
  refs.list.innerHTML = '';
  showLoader();
  page = 1;
  searchQuery = event.currentTarget.elements.query.value.trim();
  if (searchQuery === '') {
    return alert('Запит пустий');
  }
  try {
    const response = await getPhotos(searchQuery, page);
    if (response.results.length === 0) {
      return alert('Bad request');
    }

    refs.list.innerHTML = createGallery(response.results);
    refs.loadMore.classList.remove('is-hidden');
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
    event.target.reset();
  }
}

async function onclick() {
  page += 1;
  showLoader();

  try {
    const response = await getPhotos(searchQuery, page);
    const lastPage = Math.ceil(response.total / 12);
    refs.list.insertAdjacentHTML('beforeend', createGallery(response.results));
    if (lastPage === page) {
      refs.loadMore.classList.add('is-hidden');
      alert('the end');
    }
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
}
