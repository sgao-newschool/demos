window.addEventListener("load", function() {
    var image = document.getElementById('image-container');
    var mouse = document.getElementById('mouse');
    var cat = document.getElementById('cat');

    var button = document.getElementById('button');
    var clicksContainer = document.getElementById('clicks');

    var currentImage = 'cat';

    var currentNumberOfClicks = 0;

    //showImage function
    // show either the cat or the mouse
    function showImage() {
        if(currentImage === 'mouse') {
            mouse.style.opacity = 1;
            cat.style.opacity = 0;
        } else {
            cat.style.opacity = 1;
            mouse.style.opacity = 0;
        }
    }

    //follow function
    //take the image container and position it where the cursor is
    function follow(e) {
        
        var x = e.x;
        var y = e.y;

        image.style.left = x + 'px';
        image.style.top = y + 'px';
    }
    
    //count function
    //count the number of times the button is clicked
    function count() {
        console.log('before adding new click',  currentNumberOfClicks);

        currentNumberOfClicks = currentNumberOfClicks + 1;

        console.log('after adding new click',  currentNumberOfClicks);

        clicksContainer.textContent = currentNumberOfClicks;
    }

    document.body.addEventListener('mousemove', follow);
    button.addEventListener('click', count);

    showImage();

    setInterval(function() {
        if(currentImage === 'mouse') {
            currentImage = 'cat';
        } else {
            currentImage = 'mouse';
        }

        showImage();
    }, 3000);

});

