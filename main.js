function draw(){
    image(video , 0 , 0 , 400 , 400);
    circle(10 , 10 , 20)
    circle(390 , 10 , 20)
    circle(10 , 390 , 20)
    circle(390 , 390 , 20)
    fill("lightred")
    rect(0 , 0 , 400 , 10)
    rect(0 , 390 , 400 , 10)
    rect(0 , 0 , 10 , 400)
    rect(390 , 0 , 10 , 400)
    fill("white")
}
function setup(){
    canvas=createCanvas(400 , 400);
    canvas.center()
    video=createCapture(VIDEO);
    video.size(380 , 380)
    video.hide();
}
function TakeSnapshot(){
    save("picture.jpg")
}