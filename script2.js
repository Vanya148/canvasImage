var canvas2 = document.getElementById("Canvas2");
var ctx = canvas2.getContext("2d")



function Draw()
{
    var g = 0;
    for(let y = 1; y <= canvas2.height; y++)
    {
        for(let x = 1; x <= canvas2.width; x++)
        {
            ctx.beginPath();
    
            ctx.arc(x, y, 1, 1, Math.PI * 2, false);
            
            
            var color = "hsl(" + ((x ^ y * x) * 100000) + ", 100%, 50%)"
            ctx.fillStyle = color;
            //ctx.fillStyle = "#eb5e28";
            ctx.fill();
            
            ctx.closePath();
            g++;
            //console.log("x: " + x + " y: " + y)
        }
    }
    console.log(g);
}

Draw();
