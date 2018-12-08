var matrix = [];
var n = 50;
var m = 50;
var side = 15;

// var matrix = [
//     [0, 1, 0, 0, 4],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0]
// ];

function setup() {
    frameRate(1);
    createCanvas(m * side, n * side);
    background('gray');

    for (var y = 0; y < n; y++) {
        matrix[y] = [];
        for (var x = 0; x < m; x++) {
            matrix[y][x] = random([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 4]);
        }
        // console.log(matrix[y]);
    }

    matrix[Math.floor(random(matrix.length))][Math.floor(random(matrix[0].length))] = 5;
    matrix[Math.floor(random(matrix.length))][Math.floor(random(matrix[0].length))] = 5;
    matrix[Math.floor(random(matrix.length))][Math.floor(random(matrix[0].length))] = 5;

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                matrix[y][x] = new Grass(x, y, 1);
            }
            else if (matrix[y][x] == 2) {
                matrix[y][x] = new GrassEater(x, y, 2);

            }
            else if (matrix[y][x] == 3) {
                matrix[y][x] = new Predator(x, y, 3);
            }
            else if (matrix[y][x] == 4) {
                matrix[y][x] = new Fly(x, y, 4);
            }
            else if (matrix[y][x] == 5) {
                matrix[y][x] = new Spider(x, y, 5);
                matrix[y][x].nerkel();

            }

        }
    }

    console.log(matrix);

}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x].index == 1) {
                matrix[y][x].mul();
            }
            else if (matrix[y][x].index == 2) {
                matrix[y][x].eat();
            }
            else if (matrix[y][x].index == 3) {
                matrix[y][x].eat();
            }
            if (matrix[y][x].index == 4) {
                matrix[y][x].move();
            }
            else if (matrix[y][x].index == 5) {
                matrix[y][x].eat();
            }

        }
    }


    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            var obj = matrix[y][x];

            if (obj.index == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (obj.index == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;
            }
            else if (obj.index == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;
            }
            if (obj.index == 4) {
                fill("black");
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;
            }
            else if (obj.index == 5) {
                fill("#636363");
                rect(x * side, y * side, side, side);
            }
            else if (obj == 7) {
                fill("#45403F");
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
        }
    }
}

