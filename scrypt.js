const canvas = document.getElementById("draw");
const ctx = canvas.getContext("2d");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth= 2;
// ctx.globalCompositeOperation = "exclusion";

// let increment = true;


let isDrawing = false;
let lastX = 0;
let lastY = 0;

// let hue =0;

function draw (e) {
    if(!isDrawing) return;  //stop the function from running when mouse is not down
    // ctx.strokeStyle = "hsl(" + hue + ", 100% , 50%)";
    // hue++;
    // ctx.lineWidth= hue;
   
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    // if (hue === 360) {hue = 0};
    // increment ? ctx.lineWidth++ : ctx.lineWidth--;
    // if(ctx.lineWidth > 100 ||ctx.lineWidth < 3 ) increment=!increment; 
    
}
canvas.addEventListener("mousedown", (e) =>{ 
    isDrawing=true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
    drawSquare();
    drawCircle();
    drawHalfCircle ();       
});
canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mouseup", () => isDrawing=false);
// canvas.addEventListener("mouseout", () => isDrawing = false);

// Canvas size setup
let canvasWidth = document.getElementById("canvas-width");
let canvasHeight = document.getElementById("canvas-height");
let confirmSize = document.getElementById("confirm-size");

function changeCanvasWidth () {
    canvasWidth.value = document.getElementById("canvas-width").value;
}
function changeCanvasHeight () {
    canvasHeight.value = document.getElementById("canvas-height").value;
}

function changeCanvasSize () {
    canvas.width =canvasWidth.value; 
    canvas.height = canvasHeight.value; 
    canvasWidth.value= "";
    canvasHeight.value= "";
}

canvasWidth.addEventListener("change", changeCanvasWidth);
canvasHeight.addEventListener("change", changeCanvasHeight);
confirmSize.addEventListener("click", changeCanvasSize);


// Line size setup

const thin = document.getElementById("thin");
const medium = document.getElementById("medium");
const thick = document.getElementById("thick");
const custom = document.getElementById("line-weight");


thin.addEventListener("click", lineSizeThin);
medium.addEventListener("click", lineSizeMedium);
thick.addEventListener("click", lineSizeThick);
custom.addEventListener("change", customLineWeight)

function lineSizeThin () {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 2; 
    // changeFillColor (); 
    // ctx.stroke();  
}
function lineSizeMedium () {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 5;
    // changeFillColor ();
    // ctx.stroke();  
}
function lineSizeThick () {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 10;
    // changeFillColor ();
    // ctx.stroke();  
}
function customLineWeight (e) {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = e.target.value;
    // changeFillColor ();
    // ctx.stroke();  
}


// Line color setup
let lineColor = document.getElementById("line-color");
function changeLineColor () {
    if (lineColor.value) {
        ctx.strokeStyle = lineColor.value;
        // ctx.stroke();
    }    
}
lineColor.addEventListener("change", changeLineColor);

// Fill color setup
let fillColor = document.getElementById("fill-color");
function changeFillColor () {
    if (fillColor.value) {
        ctx.fillStyle = fillColor.value;        
        // ctx.fill();
        // ctx.stroke();
    }
}
fillColor.addEventListener("change", changeFillColor);

// Line join
const bevel = document.getElementById("bevel");
const roundJoin = document.getElementById("round-join");
const miter = document.getElementById("miter");

function changeJoin (e) {    
    ctx.lineJoin = e.target.value;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fill();
    ctx.stroke();
}
bevel.addEventListener("click", changeJoin);
roundJoin.addEventListener("click", changeJoin);
miter.addEventListener("click", changeJoin);

// Line cap 
const butt = document.getElementById("butt");
const roundCap = document.getElementById("round-cap");
const square = document.getElementById("square");

function changeCap (e) {
    console.log(e.target.value);
    ctx.lineCap = e.target.value;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fill();
    ctx.stroke();
}
butt.addEventListener("click", changeCap);
roundCap.addEventListener("click", changeCap);
square.addEventListener("click", changeCap);


//Predefined shapes

// Square
const squareWidth = document.getElementById("square-width");
const squareHeight = document.getElementById("square-height");
const squareReady = document.getElementById("square-ready");

function drawSquare () {
    if (!isDrawing) return;
    ctx.rect(lastX, lastY, squareWidth.value, squareHeight.value); 
       
    ctx.stroke();    
} 

//Circle
const circleRadius = document.getElementById("circle-radius");

function drawCircle () {
    if(!isDrawing) return;
    ctx.beginPath();
    // ctx.moveTo(lastX, lastY);
    // ctx.lineTo(lastX, lastY);
    ctx.arc(lastX, lastY, circleRadius.value, 0, Math.PI *2);
    //  ctx.fill();
    ctx.stroke();
}

// Half circle
const halfCircleRadius = document.getElementById("half-circle-radius");
const upDown = document.getElementById("up-down");
let flip = false;
function drawHalfCircle () {
    if(!isDrawing) return;
    ctx.beginPath();
    // ctx.moveTo(lastX, lastY);
    // ctx.lineTo(lastX, lastY);
    ctx.arc(lastX, lastY, halfCircleRadius.value, 0, Math.PI ,flip );
    ctx.closePath();
     
    ctx.stroke();
}
function flipHalfCircle () {
    flip= !flip;
}
upDown.addEventListener("click", flipHalfCircle);

//navbar

const sizeAndStyleBtn = document.getElementById("sizeAndStyle");
const predefinedShapesBtn = document.getElementById("predefinedShapes");
const specialEffectsBtn = document.getElementById("specialEffects");
const sizeAndStyleClass = document.querySelector(".sizeAndStyle");
const predefinedShapesClass = document.querySelector(".predefinedShapes");
const specialEffectsClass = document.querySelector(".specialEffects");
sizeAndStyleBtn.addEventListener("click", ()=> sizeAndStyleClass.style.display ==="" ? sizeAndStyleClass.style.display ="block" : sizeAndStyleClass.style.display = "");
predefinedShapesBtn.addEventListener("click", ()=> predefinedShapesClass.style.display ==="" ? predefinedShapesClass.style.display ="block" : predefinedShapesClass.style.display = "");
specialEffectsBtn.addEventListener("click", ()=> specialEffectsClass.style.display ==="" ? specialEffectsClass.style.display ="block" : specialEffectsClass.style.display = "");

//effects

const effects = document.getElementsByClassName("effect");
function addEffect (e) {
    ctx.globalCompositeOperation=e.target.innerHTML.toLowerCase();
    console.log(ctx.globalCompositeOperation)
}
for (let i =0; i<effects.length; i++) {
    effects[i].addEventListener("click", addEffect);
}

// for (let effect in effects) {
//     console.log(effects[effect]);
//     // effects[effect].addEventListener("click", addEffect);
// }



// ctx.rect(100, 100, 200, 200);
// ctx.stroke();
// // ctx.fillStyle = "green";
// // ctx.fillRect(100, 100, 200, 200)

// ctx.arc(300,100, 50, 0, Math.PI *2 );
// ctx.stroke();


