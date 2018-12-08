class Spider extends LivingCreature {
    constructor(x, y, index) {
        super(x,y,index);
        this.x = x;
        this.y = y;
        this.index = index;
        this.directions = [
            [this.x, this.y - 5],
            [this.x - 1, this.y - 4],
            [this.x + 1, this.y - 4],
            [this.x - 2, this.y - 3],
            [this.x, this.y - 3],
            [this.x + 2, this.y - 3],
            [this.x - 3, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 3, this.y - 2],
            [this.x - 4, this.y - 1],
            [this.x - 2, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x + 4, this.y - 1],
            [this.x - 5, this.y],
            [this.x - 3, this.y],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x + 3, this.y],
            [this.x + 5, this.y],
            [this.x - 4, this.y + 1],
            [this.x - 2, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x + 4, this.y + 1],
            [this.x - 3, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 3, this.y + 2],
            [this.x - 2, this.y + 3],
            [this.x, this.y + 3],
            [this.x + 2, this.y + 3],
            [this.x - 1, this.y + 4],
            [this.x + 1, this.y + 4],
            [this.x, this.y + 5],
        ];
    }
    chooseCell(num) {
        return super.chooseCell(num);
    }
    nerkel(){
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                matrix[y][x] = 7;

            }

        }
    }
    eat() {
        

        var newCell = random(this.chooseCell(4));

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = 0;

            console.log("eat");

        }
    }
}