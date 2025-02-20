let currentIndex = 0;  
const container = document.querySelector('.carrossel-container');
const items = document.querySelectorAll('.carrossel-item');
const totalItems = items.length;  
const itemWidth = 250 + 20;  
const intervalTime = 3000;  


function moveSlide(step) {
    currentIndex += step;

    
    if (currentIndex >= totalItems) {
        currentIndex = 0;  
    } else if (currentIndex < 0) {
        currentIndex = totalItems - 1;  
    }

    updateCarousel();  
}


function updateCarousel() {
    const offset = -currentIndex * itemWidth;  
    container.style.transform = `translateX(${offset}px)`; 
}


function autoSlide() {
    moveSlide(1);  
}

setInterval(autoSlide, intervalTime); 


const modal = document.querySelector(".modal");
const modalImg = modal.querySelector("img");
const closeModal = modal.querySelector(".close");


const carrosselImages = document.querySelectorAll('.carrossel-item');


carrosselImages.forEach(image => {
    image.addEventListener("click", function() {
        modal.style.display = "flex";  
        modalImg.src = this.src;  
    });
});


closeModal.addEventListener("click", function() {
    modal.style.display = "none";  
});


modal.addEventListener("click", function(e) {
    if (e.target === modal) {
        modal.style.display = "none";  
    }
});


document.addEventListener("DOMContentLoaded", updateCarousel);






