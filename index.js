window.addEventListener("load", () => {
    const canvas = document.querySelector("#main");
    const context = canvas.getContext("2d");

    //resize
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;


    //variables
    let painting = false;
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
        context.lineWidth = 10;
        context.lineCap = "round";
        context.lineTo(e.offsetX, e.offsetY);
        context.stroke();
        context.beginPath();
        context.moveTo(e.offsetX, e.offsetY);
    }

    //event Listeners
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishPosition);
    canvas.addEventListener("mousemove", draw);
});




