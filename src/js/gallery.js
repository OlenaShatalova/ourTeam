import { refs } from './refs';
import { getPhotos } from './unsplash-api';
import { createGallery } from './createGallary';
import { showLoader, hideLoader } from './loader';
refs.form.addEventListener('submit', onSubmit);

async function onSubmit(event) {
  event.preventDefault();
  refs.list.innerHTML = '';
  showLoader();
  const searchQuery = event.currentTarget.elements.query.value.trim();
  if (searchQuery === '') {
    return alert('Запит пустий');
  }
  try {
    const response = await getPhotos(searchQuery);
    if (response.results.length === 0) {
      return alert('Bad request');
    }

    refs.list.innerHTML = createGallery(response.results);
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
    event.target.reset();
  }
}
