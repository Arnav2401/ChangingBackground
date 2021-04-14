const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
if (backgroundImg){
    background(backgroundImg)
}
else{
    background("black")
}

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

    //change the data in JSON format
var Rjson = await response.json()
    // write code slice the datetime
var date = Rjson.datetime.slice(11,13)

    // add conditions to change the background images from sunrise to sunset
if (date>=04 && date<=06){
    bg = "sunrise1.png"
}

else if(date>=06 && date<=08){
bg = "sunrise2.png"

}

else if (date>=08 && date<=10){
bg = "sunrise3.png"
}

else if (date>=12 && date<=14){
bg = "sunrise4.png"
}

else if (date>=14 && date<=18){
    bg = "sunrise5.png"
}

else if (date>=18 && date<=19){
    bg = "sunset7.png"
}

else if(date>=19 && date<=20){
bg = "sunset8.png"
}

else if (date>=20 && date<=21){
bg = "sunset9.png"
}

else if (date>=21 && date<=22){
    bg = "sunset10.png"
}

else if (date>=22 && date<=23){
    bg = "sunset11.png"
}

else{
    bg = "sunset12.png"
}










//load the image in backgroundImg variable here
backgroungImg = loadImage(bg)

}
