const canvas = document.getElementById("draw");
const ctx = canvas.getContext("2d");
// ctx.moveTo(0, 0);
// ctx.lineTo(600, 600);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(300, 300, 280, 10, 2 * Math.PI);
// ctx.stroke();

// ctx.fillStyle = "rgb(200,0, 0)";
// ctx.fillRect(10,10,150,150);
// ctx.strokeRect(5,5,250,250);

// ctx.fillStyle = "rgba(0,0,200,.5)";
// ctx.fillRect(80,80, 150, 150);
// ctx.clearRect(90, 90, 30, 30 );

// ctx.fillRect(325, 25, 100, 100);
// ctx.clearRect(345, 45, 60, 60);
// ctx.strokeRect(350, 50, 50, 50);

// ctx.beginPath();
// ctx.moveTo(345, 160);
// ctx.lineTo(365, 185);
// ctx.lineTo(365, 135);
// ctx.closePath();
// ctx.stroke();


//smiley
// ctx.beginPath();
// ctx.arc(75, 75, 50, 0, Math.PI *2, true); // outer circle
// ctx.moveTo(110,75);
// ctx.arc(75, 75, 35, 0, Math.PI , false); // mouth (clockwise)
// ctx.closePath(); //  open smile
// ctx.moveTo(65, 65);
// ctx.arc(60, 65, 5, 0, Math.PI *2, true); // left eye
// ctx.moveTo(95, 65);
// ctx.arc(90, 65, 5, 0, Math.PI *2, true); // right eye
// ctx.stroke();
// ctx.arc()

// ctx.beginPath();
// ctx.moveTo(25, 25);
// ctx.lineTo(105, 25);
// ctx.lineTo(25, 105);
// ctx.fill();

// ctx.moveTo(125, 125);
// ctx.lineTo(125, 45);
// ctx.lineTo(45, 125);
// ctx.closePath();
// ctx.stroke();


// ctx.arc(50, 50, 20, 0, Math.PI * 1.5, true);
// ctx.stroke();


// kvadratura kruga uz Path2D objekat konstruktor
// const rectangle = new Path2D ();
// rectangle.rect(65, 100, 70, 70);

// const circle = new Path2D();
// circle.arc(100, 135, 50, 0 , Math.PI*2);

// ctx.fillStyle = "red";
// ctx.strokeStyle = "blue"
// ctx.stroke(circle);
// ctx.fill(rectangle);

for( let i= 0; i<6; i++) {
    for(let j=0; j<6; j++){
        
        ctx.fillStyle=  "rgba(" + Math.floor(255 - 42.5 * i) + ", " + Math.floor(255 -42.5 *j) + "," + Math.floor(255 -42.5 *j) + "," +( i+(i/2))/10 + ")";
        ctx.fillRect(i*25, j*25, 25, 25);
        // ctx.globalAlpha = 0.8;
        ctx.strokeStyle = "rgb(" + Math.floor(255 - 42.5 * i) + ", " + Math.floor(255 -42.5 *j) + "," + Math.floor(255 -42.5 *j) + ")";
        ctx.strokeRect(i*25, j*25, 25, 25)
        ctx.lineWidth = 8;
        // ctx.lineJoin = "miter"
    }
}
