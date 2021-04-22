
let gameContainerWidth = $(".game-container").css("width");

$(".game-container").css("height", gameContainerWidth);

let cellSize = parseFloat(gameContainerWidth.slice(0, -2))/7+"px";


$(".column").css("width", cellSize);
$(".cell").css("height", cellSize);

let cellHeight = $(".cell").css("height");
console.log(cellHeight);

for(let i=0; i<7; i++){
    $(".game-container").append(`<div id="column${i}"></div>`);
    $(`#column${i}`).addClass("column");
    for (let j=0; j<7; j++){
        $(`#column${i}`).append(`<div id="cell${i}${j}"></div>`);
        $(`#cell${i}${j}`).addClass("cell");
    }

}
