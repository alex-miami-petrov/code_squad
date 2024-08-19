export function createMarkupReviews(arr) {
  return arr
    .map(
      ({ author, avatar_url, review }) =>
        `<li class="swiper-slide rev-item">
          <dir class="rev-card">
          <img
              class="rev-image"
              src="${avatar_url}"
              alt="photo ${author}"
              width="344"
            /> 
            <h3 class="rev-author">${author}</h3>
            <p class="rev-review">${review}</p>
          </dir>
        </li>`
    )
    .join('');
}
