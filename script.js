var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")


var colorS = "#";
var color = color;
//ball position
//var x = canvas.width / 2;
//var y = canvas.height / 2;

var x = 5;
var y = 5;

//change ball position in frame
var dx = 0.5;
var dy = 0.5;

var ballRadius = 1;
var ti = 0

//paddle
var paddleHeight = 10;
var paddleWidth = 75;
//var paddleX = (canvas.width - paddleWidth) / 2;
var paddleX = -1000;
var paddleY = canvas.height -50;
var paddleSpeed = 2;

var rightPressed = false;
var leftPressed = false;


var startColor = 0;


function Draw()
{
    ti += 1;
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    DrawPaddle();
    DravBall();

    //paddle
    if(rightPressed && paddleX + paddleWidth + paddleSpeed < canvas.width)
    {
        paddleX += paddleSpeed;
    }
    else if(leftPressed && paddleX - paddleSpeed > 0)
    {
        paddleX -= paddleSpeed;
    }

    if(x - ballRadius <= paddleX + paddleWidth && 
       x + ballRadius >= paddleX && 
       y + ballRadius >= paddleY && 
       y - ballRadius <= paddleY + paddleHeight) 
    {
        dy *= -1;
    }

    //ball
    if(x + dx > canvas.width - ballRadius || x + dx < ballRadius)
    {
        dx *= -1;
    }
    if(y + dy > canvas.height - ballRadius || y + dy < ballRadius)
    {
        dy *= -1;
    }
    
    x += dx;
    y += dy;
}

function DrawPaddle()
{
    ctx.beginPath();
    ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
    ctx.fillStyle = "#403d39";
    ctx.fill();
    ctx.closePath();
}

function DravBall()
{
    ctx.beginPath();
    
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2, false);
    
    
    var color = "hsl(" + (x * y) + ", 100%, 50%)"
    ctx.fillStyle = color;
    //ctx.fillStyle = "#eb5e28";
    ctx.fill();
    
    ctx.closePath();
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e)
{
    if(e.keyCode == 39)
    {
        rightPressed = true;
    }
    else if(e.keyCode == 37)
    {
        leftPressed = true;
    }
}

function keyUpHandler(e)
{
    if(e.keyCode == 39)
    {
        rightPressed = false;
    }
    else if(e.keyCode == 37)
    {
        leftPressed = false;
    }
}

setInterval(Draw, 5);
