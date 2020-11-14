window.addEventListener("load",function() {
    var blueSquares = document.querySelectorAll('.dark-blue');
    
    blueSquares.forEach(function(square) {
        //do something with the individual dark blue square
        square.addEventListener('mouseover', onHoverOverWalls);
    });

    function onHoverOverWalls() {
        //what you want to happen when someone hits the walls
    }

})