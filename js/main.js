let alive;
let regions;
let iteration;
let visits;
let paused;
let started;
let loopInterval;
let speed;
const MAX_SPEED = 1000;
const MIN_SPEED = 5000;
let selectable;

function init() {
    setTimeout(function (){
        d3.json("resources/position.json",).then(function (data) {
            loadData(data);
            initial(regions);
            drawScenario(regions);
            drawInterface();
            addEventListener();
        });
    }, 0);
}

function start() {
    updateStartResetButton();

    loop();
    loopInterval = setInterval(loop, speed);
    console.log(loopInterval);
}

function loop() {
    if(!paused) {

        iteration++;

        updateArrangement(shuffle(regions));

        if (alive === 0) {
            alert("STATE A CASA!")
            clear();
            init();
        }
    }
}

init();



