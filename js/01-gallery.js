import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");


const previewGalleryList = galleryItems.map( ({preview, original, description}) => {
    
 return `<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`
}).join("");

console.log(previewGalleryList);

galleryContainer.insertAdjacentHTML("beforeend", previewGalleryList)


// import * as basicLightbox from 'basiclightbox'

// const instance = basicLightbox.create(`
//     <img src="${galleryItems[0].original}" width="800" height="600">
// `)

// instance.show()



console.log(galleryItems);


