import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector("ul.gallery");

const previewGalleryList = galleryItems.map( ({preview, original, description}) => {
    
 return `<li><a class="gallery__item" href="${original}">
 <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}"/>
</a></li>`
}).join("");

galleryContainer.insertAdjacentHTML("beforeend", previewGalleryList);

galleryContainer.addEventListener("click", clickToImg);

function clickToImg (event) {
    event.preventDefault()
  if(event.target.nodeName !== "IMG") {
    return;
  }
};

const lightbox = new SimpleLightbox('.gallery__item', 
{captionsData: "alt", captionDelay: 250,});