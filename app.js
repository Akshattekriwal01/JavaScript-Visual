var no_of_input = prompt("Enter a Number Approx between 1 to 7, ") // what if string is sent in?

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var radius = 100;
var startAngle = Math.PI*(3/4);
var endAngle = this.startAngle + (Math.PI/4) ;
var colorEnum = ["red","orange","yellow","blue" , "purple", "magenta" , "pink", ]


for(i=0; i< no_of_input ; i++){
    ctx.beginPath();
    ctx.moveTo(350, 350);
    ctx.arc(350,350,radius,startAngle,endAngle)
    ctx.fillStyle= colorEnum[i];
    ctx.fill();
    this.radius = radius +  20 ;
    startAngle = startAngle+ (Math.PI/4);
    endAngle = startAngle + (Math.PI/4) ;
}
