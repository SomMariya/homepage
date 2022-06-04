const countryToImgMap = {
  Turkey: [
    './assets/img/turkey1.jpg',
    './assets/img/turkey2.jpg',
    './assets/img/turkey3.jpg',
  ],
  United_Kingdom: [
    './assets/img/united-kingdom1.jpg',
    './assets/img/united-kingdom2.jpg',
    './assets/img/united-kingdom3.jpg',
  ],
  United_Arab_Emirates: [
    './assets/img/united-arab-emirates1.jpg',
    './assets/img/united-arab-emirates2.jpg',
    './assets/img/united-arab-emirates3.jpg',
  ],
  Bulgaria: [
    './assets/img/bulgaria1.jpg',
    './assets/img/bulgaria2.jpg',
    './assets/img/bulgaria3.jpg',
  ],
  Romania: [
    './assets/img/romania1.jpg',
    './assets/img/romania2.jpg',
    './assets/img/romania3.jpg',
  ],
};

function showCountryCarousel(countryName) {
  const [img1, img2, img3] = countryToImgMap[countryName];

  document.querySelector('#carousel__photo-1 img').setAttribute('src', img1);
  document.querySelector('#carousel__photo-2 img').setAttribute('src', img2);
  document.querySelector('#carousel__photo-3 img').setAttribute('src', img3);

  document.querySelectorAll('.hobbies__label').forEach((el) => {
    el.style.color = '#5c5c62';
  });
  document.querySelector(`#hobbies__label__${countryName}`).style.color =
    '#ff9a00';
}
showCountryCarousel('Turkey');
