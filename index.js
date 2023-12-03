window.addEventListener("load", () => {
    const canvas = document.querySelector("#main");
    const context = canvas.getContext("2d");
    
    //resize
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;


    //variables
    let painting = false;
    let brushSlider = document.getElementById("slider");
    let brushWidth = brushSlider.value;
    let colorSelect = document.querySelectorAll('.btn.btn-action')
    var brushColor = "black"; //initial color


    function startPosition(e){
        painting = true;
        draw(e);
    }
    function finishPosition(){
        painting = false;
        context.beginPath();
    }
        
    function draw(e){
        if (!painting) return;
        context.lineCap = "round";
        context.lineTo(e.offsetX, e.offsetY);
        //size
        brushSlider = updateBrush();
        context.lineWidth = brushWidth;
        //color
        context.strokeStyle = brushColor;
        context.stroke();
        context.beginPath();
        context.moveTo(e.offsetX, e.offsetY);
    }

    //event Listeners
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishPosition);
    canvas.addEventListener("mousemove", draw);
    
    //brush size
    brushSlider.addEventListener("input", function() {
        brushWidth = this.value;
        updateBrush();
    });
    function updateBrush() {
        return brushWidth;
    }

    //color
    colorSelect.forEach(function(button) {
        button.addEventListener("click", function() {
          var newColor = this.id;
          updateBrushColor(newColor);
        });
    });
    function updateBrushColor(newColor) {
        brushColor = newColor;
      }
});




