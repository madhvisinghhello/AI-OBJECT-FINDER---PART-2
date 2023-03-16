status="";

function setup(){
    canvas=createCanvas(400, 260);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
}

function modelLoaded(){
    console.log('modelLoaded');
    status=true;
}

function draw(){
    image(video,0,0,400,260)
}
