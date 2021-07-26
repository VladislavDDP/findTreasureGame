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

var clickCounter = 0

// JS style
/*
const mapElement = document.querySelector('#map')  
const width = mapElement.getAttribute('width')
const height = mapElement.getAttribute('height')
*/

// JQuery style
const mapElement = $('#map')  
const width = mapElement.attr('width')
const height = mapElement.attr('height')


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
function printResult(){

}

// Congratulate a winner if he/she made a correct guess
function greetingIfWin(distance, clickConter) {
    if (distance < 20) console.log(`You win for ${clickCounter} steps`)
}

var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
}

mapElement.click(event => {
    // Event listener
    clickCounter++
    distance = getDistance([event.offsetX, event.offsetY], [target.x, target.y])
    console.log(distance)
    greetingIfWin(distance, clickCounter)
})