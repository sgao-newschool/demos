window.addEventListener("load", function() {

    /*---
    -----
    ----- Data Types
    -----
    ---*/

    //Strings are wrapped with quotation marks
    var string = "I am a string literal";

    //Number - integers: you can do math with these
    var firstNumber = 6;
    var secondNumber = 3;
    var multipliedNumber = firstNumber + secondNumber;

    //Boolean - a true or false value, 
    //often used in comparison to see if a condition is met
    var isItNine = true;

    /*---
    -----
    ----- Demos
    -----
    ---*/


    //demo of passing parameters to functions
    var myText = "My line of text";
    var myText2 = "Cats rule dogs drool";

    var myTextElement = document.getElementById("text");

    //defining the function (with a parameter passed in)
    function updateText(myStr) {
        myStr = myStr + '!!!!';
        myTextElement.textContent = myStr;   
    }
    

    //executing a function
    updateText(myText);


    //demo of rotating cat and mouse moveent
    var cat = document.getElementById("cat");
    var degrees = 0;

    document.body.addEventListener("mousemove", rotate);

    function rotate() {
        degrees = degrees + 10;
        //combing a string and a variable that contains a number
        var newRotation = "rotate(" + degrees + "deg)";

        //updating the style of an element
        cat.style.transform = newRotation;
    };

});

