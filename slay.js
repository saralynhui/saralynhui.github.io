document.addEventListener('DOMContentLoaded', function() {
    var pinkBoxes = document.querySelectorAll('.pink-box');

    function showVisibleOrEarlyBoxes() {
        var triggerOffset = window.innerHeight * 0.8; // Adjust this percentage as needed

        pinkBoxes.forEach(function(box) {
            var boxTop = box.getBoundingClientRect().top;
            if (boxTop < triggerOffset) {
                box.classList.add('visible');
            }
        });
    }

    // Initial check when page loads
    showVisibleOrEarlyBoxes();

    // Event listener for scroll events to check visibility
    window.addEventListener('scroll', showVisibleOrEarlyBoxes);
});

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.p_img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    let currentIndex = 0;

    // Convert NodeList to Array for easier handling
    const imgArray = Array.from(images);

    // Open lightbox on image click
    imgArray.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentIndex = index;
            openLightbox();
        });
    });

    function openLightbox() {
        lightbox.style.display = 'flex';
        lightboxImg.src = imgArray[currentIndex].src;
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
    }

    function changeSlide(step) {
        currentIndex += step;
        if (currentIndex < 0) currentIndex = imgArray.length - 1;
        if (currentIndex >= imgArray.length) currentIndex = 0;
        lightboxImg.src = imgArray[currentIndex].src;
    }

    // Close when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // Expose globally for inline onclicks
    window.closeLightbox = closeLightbox;
    window.changeSlide = changeSlide;
});

document.addEventListener('keydown', function(e) {
    if (lightbox.style.display === 'flex') {
        if (e.key === 'ArrowRight') {
            changeSlide(1);
        } else if (e.key === 'ArrowLeft') {
            changeSlide(-1);
        } else if (e.key === 'Escape') {
            closeLightbox();
        }
    }
});
