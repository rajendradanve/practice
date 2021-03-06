
//getting smallest size of window to setup game
let gameContainerSize = (window.innerWidth*0.6)<=(window.innerHeighth*0.8) ? (window.innerWidth*0.6) : (window.innerHeight*0.8);
let gameContainerSizeString = gameContainerSize.toString()+"px";
//setting up container width
$(".game-container").css("width", gameContainerSizeString);
$(".game-container").css("height", gameContainerSizeString);

//calculating cell size 
let cellSize = gameContainerSize/7;
let margin = cellSize/20;
let cellSizeString = cellSize.toString() + "px";
let marginString = margin.toString() + "px";

//setting width and height for the column
$(".column").css("width", cellSizeString);
$(".cell").css("width", cellSizeString);
$(".cell").css("height", cellSizeString);
//$(".empty-circle").css("margin", marginString);

for(let i=0; i<7; i++){
    $(".game-container").append(`<div id="column${i}"></div>`);
    $(`#column${i}`).addClass("column");
    for (let j=0; j<7; j++){
        $(`#column${i}`).append(`<div id="cell${i}${j}"><div id="coin${i}${j}" class= "empty-circle"></div></div></div>`);
        if(j==6){
            $(`#cell${i}${j}`).addClass("cell-entry");
        }else{
        $(`#cell${i}${j}`).addClass("cell");
        }
        
    }

}

for(let i=0; i<7; i++){
    $(`#column${i}`).mouseenter(function(){
        $(`#coin${i}6`).removeClass("empty-circle").addClass("red-circle");
    }).mouseleave(function(){
        $(`#coin${i}6`).removeClass("red-circle").addClass("empty-circle");
    })
}

