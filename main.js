function preload()
{

}
function setup()
{
canvas=createCanvas(300,300)
canvas.center()
video=createCapture(VIDEO)
video.hide()

}
function draw()
{
image(video,50,50,200,200)
fill("red")
circle(30, 30, 50);
circle(270, 30,50 );
circle(30, 270, 50);
circle(270, 270, 50);
fill("green")
rect(60,20,180,20);
rect(60,260,180,20);
rect(20,58,20,180);
rect(260,58,20,180);
}



function take_snapshot()
{
    save("image.png")
}