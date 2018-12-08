class Fly extends LivingCreature {
    constructor(x, y, index) {
        super(x,y,index);
        this.acted = false;
        this.energy = 50;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y - 1]
        ];

    }
    chooseCell(num) {
        return super.chooseCell(num);
    }

    mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(0));

        if (newCell && this.multiply >= 12) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = new Fly(newX, newY, 4);
            this.multiply = 0;
            this.energy = 0;
        }
    }


    move() {
        if (this.acted == false) {
            var newCell = random(this.chooseCell(random([0, 7])));

            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];

                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;

                this.x = newX;
                this.y = newY;
            }
            this.energy--;
            if (this.energy <= 0) {
                this.die();
            }
            this.acted = true;

        }

    }
    die() {
        matrix[this.y][this.x] = 0;

    }
}