


//https://www.codewizardshq.com/javascript-games/



function startGame() {
    gameCanvas.start();
}

let canvasWidth = 600;
let canvasHeight = 400;

let gameCanvas = {
    canvas: document.createElement("canvas"),
    start: function() {
        this.canvas.width = canvasWidth;
        this.canvas.height = canvasHeight;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}

