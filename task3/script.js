const trafficLightRed = document.querySelector('#trafficLightRed');
const trafficLightYellow = document.querySelector('#trafficLightYellow');
const trafficLightGreen = document.querySelector('#trafficLightGreen');

currentColor = null;

function makeRed() {
    currentColor = 'red';
    trafficLightRed.style.backgroundColor = 'red';
    trafficLightYellow.style.backgroundColor = 'black';
    trafficLightGreen.style.backgroundColor = 'black';
}

function makeYellow() {
    currentColor = 'yellow';
    trafficLightRed.style.backgroundColor = 'black';
    trafficLightYellow.style.backgroundColor = 'yellow';
    trafficLightGreen.style.backgroundColor = 'black';
}

function makeGreen() {
    currentColor = 'green';
    trafficLightRed.style.backgroundColor = 'black';
    trafficLightYellow.style.backgroundColor = 'black';
    trafficLightGreen.style.backgroundColor = 'green';
}

function switchLight() {
    if (currentColor === 'green') {
        makeYellow();
    } else if (currentColor === 'yellow') {
        makeRed();
    } else {
        makeGreen();
    }
}

trafficLightRed.addEventListener('click', switchLight);
trafficLightYellow.addEventListener('click', switchLight);
trafficLightGreen.addEventListener('click', switchLight);


