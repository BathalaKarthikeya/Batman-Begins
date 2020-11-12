const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var drops = [];

var maxDrops = 100;

var umbrella;

var cloud1;
var cloud_img1;

var thunderFrame = 0;
var thunder;
var thunder1;
var thunder2;
var thunder3;
var thunder4;

var rand;

function preload() {
    cloud_img1 = loadImage("gg.jpg");

    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");
}

function setup() {
    createCanvas(400, 700);
    engine = Engine.create();
    world = engine.world;

    for (var i = 0; i < maxDrops; i++) {
        drops.push(new Drops(random(0, 400), random(0, 400)));
    }

    umbrella = new Umbrella(200, 490);

    cloud1 = createSprite(200, 50, 20, 20);
    cloud1.addImage(cloud_img1);
}

function draw() {
    background("black");
    Engine.update(engine);

    rand = Math.round(random(1, 4));
    if (frameCount % 80 === 0) {
        thunderFrame = frameCount;
        thunder = createSprite(random(10, 370), random(150, 250), 10, 10);
        switch (rand) {
            case 1: thunder.addImage(thunder1);
                break;
            case 2: thunder.addImage(thunder2);
                break;
            case 3: thunder.addImage(thunder3);
                break;
            case 4: thunder.addImage(thunder4);
                break;
            default:
                break;
        }
        thunder.scale = random(0.3, 0.6);
    }

    if (thunderFrame + 11 === frameCount && thunder) {
        thunder.destroy();
    }

    if (frameCount % 150) {
        for (var i = 0; i < maxDrops; i++) {
            drops[i].display();
            drops[i].updateY();
        }
    }
    umbrella.display();
    
    drawSprites();
}

