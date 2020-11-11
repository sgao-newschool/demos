window.addEventListener("load", function() {
    var droparea = document.getElementById('drop-area');
    var draggable = document.getElementById('draggable');

    droparea.addEventListener('drop', drop);
    droparea.addEventListener('dragover', allowDrop);
    draggable.addEventListener('dragstart', drag);    

    //specifies where the dragged data can be dropped.
    //By default, data/elements cannot be dropped in other elements. To allow a drop, we must prevent the default handling of the element.
    function allowDrop(e) {
      e.preventDefault(); //prevent the default functionality from executing
    }
    
    function drag(e) {
      e.dataTransfer.setData("text", e.target.id);
    }
     
  
    function drop(e) {
      e.preventDefault();
      var data = e.dataTransfer.getData("text");
      e.target.appendChild(document.getElementById(data));
      
      //here you can put what you want to happen after the drop is complete
    }

});

