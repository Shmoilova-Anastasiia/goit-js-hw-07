import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');

const makeGallery = galleryItems.map((element) =>{

    const itemGalleryEl = `<a class="gallery__item" href="${element.original}">
        <img
          class="gallery__image"
          src="${element.preview}"
          alt="${element.description}"
        />
      </a>`
    return itemGalleryEl
    }).join('')
    
        galleryEl.innerHTML = makeGallery;

        galleryEl.addEventListener('click', event => {
            event.preventDefault();
            if (event.target.nodeName !== 'IMG'){
              return
            }
            
            let modal = new SimpleLightbox('.gallery__item', {
                captionsData:'alt',
                captionPosition: 'bottom',
                captionDelay:250,
            });
          
            
          })
          
