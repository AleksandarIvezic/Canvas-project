const canvas = document.getElementById("draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth= 2;
ctx.globalCompositeOperation = "exclusion";

let increment = true;


let isDrawing = false;
let lastX = 0;
let lastY = 0;

let hue =0;

function draw (e) {
    if(!isDrawing) return;  //stop the function from running when mouse is not down
    ctx.strokeStyle = "hsl(" + hue + ", 100% , 50%)";
    hue++;
    // ctx.lineWidth= hue;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    if (hue === 360) {hue = 0};
    increment ? ctx.lineWidth++ : ctx.lineWidth--;
    if(ctx.lineWidth > 100 ||ctx.lineWidth < 3 ) increment=!increment; 
    
}
canvas.addEventListener("mousedown", (e) =>{ 
    isDrawing=true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mouseup", () => isDrawing=false);
canvas.addEventListener("mouseout", () => isDrawing = false);

