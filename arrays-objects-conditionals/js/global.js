window.addEventListener("load", function() {
    //Arrays
    var color1 = "yellow";
    var color2 = "red";
    var color3 = "#ffffff";

    var colorList = [
        "yellow", //0
        "red", //1
        "#fffff" //2
    ];

    var secondItem = colorList[1];


  

    //Objects
    
    var car = {
        "make" : "toyota",
        "model" : "camry",
        "color" : "#ffffff",
        "doors" : 4
    };

    var car2 = {
        "make" : "ford",
        "model" : "econoline",
        "color" : "gray",
        "doors" : 2
    };


    if(window.scrollY > 100) {
        //do something here
    } else if (window.scrollY > 500) {
        //do another thing
    } else {
        //do something else
    }


    if(car.model === "toyota") {
        //do something with toyotas
    } else if(car.model === "ford") {
        //do something with fords
    } else {
        
    }

});

