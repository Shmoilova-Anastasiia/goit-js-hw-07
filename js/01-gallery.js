import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');



const makeGallery = galleryItems.map((element) =>{
    const imageEl = document.createElement('img');
    imageEl.classList.add('gallery__image');
    imageEl.setAttribute('src', element.preview);
    imageEl.setAttribute('data-source', element.original);
    imageEl.setAttribute('alt', element.description);
    const itemGallery = document.createElement('div');
    itemGallery.classList.add('.gallery__item');
    const linkGallery = document.createElement('a');
    linkGallery.classList.add('gallery__link');
    linkGallery.setAttribute('href', element.original)
    linkGallery.appendChild(imageEl);
    itemGallery.appendChild(linkGallery);
    galleryEl.appendChild( itemGallery); 
    return galleryEl
  })
    
  

galleryEl.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG'){
      return
    }
    
    const modal = basicLightbox.create(`<img width="1400" height="900" src="${event.target.dataset.source}">`).show();
   
  })

  

console.log(galleryEl)