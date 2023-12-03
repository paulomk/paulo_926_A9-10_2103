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

    //color and clear
    colorSelect.forEach(function(button) {
        button.addEventListener("click", function() {
          let newColor;
          if(this.id == "erase"){ //set erase "color"
            newColor = "white";
            console.log(this.id);
          } else if (this.id == "new"){
            console.log(this.id);
          } else{ //color section
            console.log(getComputedStyle(document.getElementById(this.id)).backgroundColor);
            newColor = getComputedStyle(document.getElementById(this.id)).backgroundColor;
          }
          updateBrushColor(newColor);
        });
    });
    //color
    function updateBrushColor(newColor) {
        brushColor = newColor;
      }
});
