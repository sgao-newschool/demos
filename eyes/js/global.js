window.addEventListener("load", function() {

    //add mouse move listener to the body
    document.body.addEventListener('mousemove', moveEyes);   

    //the function that moves the eyes
    //the "e" is data that is passed from the mousemove event and contains informationa bout the event
    function moveEyes(e) {

        //get both the eyes, both of which have the "eye" class
        var eyes = document.querySelectorAll('.eye');
        
        //for each of our eyes, execute the following function
        eyes.forEach(function(eye) {
            //get the x and y of the eye, based on it's left and top position, and its width and height
            var x = (eye.getBoundingClientRect().left) + (eye.getBoundingClientRect().width / 2);
            var y = (eye.getBoundingClientRect().top) + (eye.getBoundingClientRect().height / 2);
            
            //this is the tricky math part that calculates based on angles and circle radiuses
            var rad = Math.atan2(e.pageX - x, e.pageY - y);
            var rot = (rad * (180 / Math.PI) * -1) + 180;
            
            //set the transform style of the eye
            eye.style.transform = 'rotate(' + rot + 'deg)';
        });
  }

});

