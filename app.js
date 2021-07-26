// Click animation
function clickEffect(e){
    var d=document.createElement("div");
    d.className="clickEffect";
    d.style.top=e.clientY+"px";
    d.style.left=e.clientX+"px";
    document.body.appendChild(d);
    d.addEventListener('animationend', function(){
        d.parentElement.removeChild(d)}.bind(this));
}
document.addEventListener('click', clickEffect);


// JQuery style
const mapElement = $('#map')  
const width = mapElement.attr('width')
const height = mapElement.attr('height')
const messageParagraph = $('#distance')


// variables declaration
var clickCounter = 0
let win = false


// Get random number from 0 to param
function getRandomNumber(param){
    return Math.floor(Math.random() * param)
}


// Calculate distance from click to treasure
function getDistance(point_1, point_2){
    xDiff = point_1[0] - point_2[0]
    yDiff = point_1[1] - point_2[1]
    return Math.sqrt(xDiff * xDiff + yDiff * yDiff)
}

// Print distance and message about suggestion (cold, hot etc.)
function printHint(distance){
    if (distance < 20) {
    return "Yeeeah!";
    } else if (distance < 40) {
    return "Extremely hot";
    } else if (distance < 60) {
    return "Hot";
    } else if (distance < 80) {
    return "Warm";
    } else if (distance < 160) {
    return "Cold";
    } else if (distance < 320) {
    return "Very cold";
    } else {
    return "Just give up! You have no chances...";
    }
}

// Congratulate a winner if he/she made a correct guess
function greetingIfWin(distance, clickConter) {
    if (distance < 20) {
        messageParagraph.append(` You win for ${clickCounter} steps`)
        win = true
    }
}

var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
}

mapElement.click(event => {
    // Event listener
    if (!win){
        clickCounter++
        distance = getDistance([event.offsetX, event.offsetY], [target.x, target.y])
        messageParagraph.text(`${printHint(distance)}`)
        greetingIfWin(distance, clickCounter)
    }
    else {
        messageParagraph.text(`Enough, you are a winner! Best score = ${clickCounter}`)
    }
})