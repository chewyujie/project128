score = 0;
song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function preload()
{
    song = loadSound("music.mp3");
}

function setup ()
{
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet (video,modelLoaded);
    poseNet.on ('pose',gotPoses);
}
function modelLoaded()
{
    console.log('poseNet Is Initialized');
}
function draw()
{
    image(video,0,0,600,500);
    border_color("#FF0000");
    color("#FF0000");
}
function play()
{
    song.play();
}
function gotPoses()
    if (results.lenght >0)

    console.log(results);
    scoreLeftWrist = results[0].pose.keypoints[9].score;

    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX = " + leftWristX + "leftWristY = " +leftWristY);
    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("rightWristX = " + rightWristX + "rightWristY = " +rightWristY);
}