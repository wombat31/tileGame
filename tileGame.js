//create and object to store tile information
gameMap = {

    1:{
        backgroundColour:"green",
        borders: [
            ["RCNE","RH","RH","RH","RH","RH","RH","RH","RH","RH","RH","RH","RH","RH","RCNE"],
            ["RV","0","0","0","0","0","0","0","0","0","0","0","0","0","RV"],
            ["RV","0","0","0","0","0","0","0","0","0","0","0","0","0","RV"],
            ["RV","0","0","0","0","0","0","0","0","0","0","0","0","0","RV"],
            ["RV","0","0","0","0","0","0","0","0","0","0","0","0","0","RV"],
            ["RV","0","0","0","0","0","0","0","0","0","0","0","0","0","RV"],
            ["RV","0","0","0","0","0","0","0","0","0","0","0","0","0","RV"],
            ["RV","0","0","0","0","0","0","0","0","0","0","0","0","0","RV"],
            ["RV","0","0","0","0","0","0","0","0","0","0","0","0","0","RV"],
            ["RCSW","RH","RH","RH","RH","RH","RH","RH","RH","RH","RH","RH","RH","RH","RCSE"]
            
        ]
    },
    2:{
        backgroundColour:"red"
    }
};
//create a function to render the canvas
function gameRender() {
    var gameCanvas = document.createElement('canvas');
    gameCanvas.id = "gameWindow";
    //append the canvas to the body element
    document.body.appendChild(gameCanvas);
    //apply game elements to the canvas id'gameWindow'
    document.getElementById('gameWindow').style.backgroundColor = gameMap[1]["backgroundColour"];
    tileEdgeRender();

}
//create a function to run through the tile border map and render the edges
function tileEdgeRender(){
    var tileEdges = gameMap[1]["borders"];
    for (x=0; x<15; x++){
        for (y=0; y<10; y++){//this needs looking at
            console.log("x" + tileEdges[x]);
        }
    }
    console.log(tileEdges);
}


gameRender();
console.log(gameMap[1]["backgroundColour"]);
console.log(gameMap[1]["borders"][0][0]);