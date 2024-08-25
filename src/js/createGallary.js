export function createGallery(array) {
  return array
    .map(
      img => `<li class="gallery__item">
                <img src="${img.urls.small}" alt="${img.alt_description}">
            </li>`
    )
    .join('');
}
