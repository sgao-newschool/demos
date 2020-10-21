window.addEventListener("load", function() {
    function makePageBlue() {
        document.body.style.backgroundColor = "lightblue";
    }
    
    document.getElementById("blue-bg-button").addEventListener("click", makePageBlue);
});

