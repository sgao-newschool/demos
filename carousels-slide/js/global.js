window.addEventListener("load", function() {
    var carouselSlides = document.querySelectorAll('.carousel-slide');
    var carouselList = document.getElementById('carousel-list');
    var currentSlide = 0;
    var total = carouselSlides.length;
    var nextBtn = document.querySelector('#next-btn');
    var prevBtn = document.getElementById('prev-btn');

    function showNextSlide() {
        if(currentSlide === total - 1) {
            currentSlide = 0;
        } else {
            currentSlide++;
        }
        carouselList.style.transform = 'translateX(-' + currentSlide * 100+ '%)';
    }

    function showPrevSlide() {
        if(currentSlide === 0) {
            currentSlide = total - 1;
        } else {
            currentSlide--;
        }
        carouselList.style.transform = 'translateX(-' + currentSlide * 100+ '%)';
    }

    nextBtn.addEventListener('click', showNextSlide);
    prevBtn.addEventListener('click', showPrevSlide);

});

