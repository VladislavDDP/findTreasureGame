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
    return Math.sqrt(Math.pow((point_1[0] - point_2[0]), 2)
                     + Math.pow((point_1[1] - point_2[1]), 2))
}

// Print distance and message about suggestion (cold, hot etc.)
function printResult(){

}

// Congratulate a winner if he/she made a correct guess
function greetingIfWin(distance) {
    if (distance < 20) alert('Win')
}

var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
}

mapElement.click(event => {
    // Event listener
    distance = getDistance([event.offsetX, event.offsetY], [target.x, target.y])
    console.log(distance)
    greetingIfWin(distance)
})