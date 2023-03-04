import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');



const makeGallery = galleryItems.map((element) =>{

const itemGalleryEl = `<div class="gallery__item">
  <a class="gallery__link" href="${element.original}">
    <img
      class="gallery__image"
      src="${element.preview}"
      data-source="${element.original}"
      alt="${element.description}"
    />
  </a>
</div>`
return itemGalleryEl
}).join('')


    
  

    galleryEl.innerHTML = makeGallery;
  

galleryEl.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG'){
      return
    }
    
    const modal = basicLightbox.create(`<img width="1400" height="900" src="${event.target.dataset.source}">`);
    modal.show()
    galleryEl.addEventListener('keydown', (event) => {
      if (event.code === "Escape") {
        modal.close();
      }
    });
  })

  

