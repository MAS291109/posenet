noseX = 0;
noseY = 0;
rightWristX =0;
leftWristX =0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 400);
    canvas.position(560,110);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#7adede');
    document.getElementById("square_side").innerHTML = "Width And Height of a square will be = "+difference + "px";
    fill("#50de92");
    stroke("#000000");
    square(noseX, noseY, difference);
}

function modelLoaded(){
    console.log("PoseNet Is Working");
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX -" + noseX + "noseY =" +noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        console.log("rightWristX =" + rightWristX + "leftWristX =" + leftWristX);
        difference = floor(leftWristX - rightWristX);
        console.log(difference);

    }
}