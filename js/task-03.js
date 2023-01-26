const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryImege = document.querySelector('.gallery');
const markup = images
.map((imege) => `<li class="gallery__item"><img src="${imege.url}" width = '400' alt="${imege.alt}"></li>`)
.join('');
console.log(markup)

galleryImege.insertAdjacentHTML('beforeend', markup)

galleryImege.style.display = 'flex';
galleryImege.style.flexWrap = 'column-reverse'
galleryImege.style.listStyle = 'none'
galleryImege.style.gap = '25px'
galleryImege.style.justifyContent = 'center'

