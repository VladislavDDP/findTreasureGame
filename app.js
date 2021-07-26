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


// Считаем расстояние от точки нажатия до точки выигрыша
function getDistance(){

}

// Выводим дистанцию и сообщение о том, насколько близко было предположение
function printResult(){

}

// Поздравление игрока с победой, в случае правильного ответа
function greetingIfWin() {
    
}

var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
}

mapElement.click(event => {
    // Обработчик событий
})