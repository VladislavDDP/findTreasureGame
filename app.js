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
const showTryCounts = $('#try_counts')


// variables declaration
var clickCounter = 0
var tryCounts = 20
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
    let result = ''
    distance < 20? result = "Yeeeah!" : distance < 60?
    result = "Extremely hot": distance < 80?
    result = "Hot": distance < 160?
    result = "Cold": distance < 320?
    result = "Very cold": result = "Just give up! You have no chances..."
    return result
}

// Congratulate a winner if he/she made a correct guess
function greetingIfWin(distance, clickConter, positinX, positionY) {
    if (distance < 20) {
        messageParagraph.append(` You win for ${clickCounter} steps`)
        win = true
        var d = document.getElementById('yourDivId');
        d.style.position = "absolute";
        d.style.left = positinX - 10 +'px';
        d.style.top = positionY + 60 +'px';       
        d.innerHTML = 'treasure'
    }
}

var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
}

mapElement.click(event => {
    // Event listener
    tryCounts? tryCounts-- : 0
    if (!win && tryCounts){
        clickCounter++
        distance = getDistance([event.offsetX, event.offsetY], [target.x, target.y])
        messageParagraph.text(`${printHint(distance)}`)
        greetingIfWin(distance, clickCounter, target.x, target.y)
    }
    else if (!tryCounts) {
        showTryCounts.text('You are a loser!')
    }
    else {
        messageParagraph.text(`Enough, you are a winner! Best score = ${clickCounter}`)
    }
})