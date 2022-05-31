class Point {
    #x;
    #y;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    get x() {
        return this.#x;
    }
    get y() {
        return this.#y;
    }

    distance(x1, y1) {
        this.#x = x1;
        this.#y = y1;
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    toString(a, b) {
        this.#x = a.toString();
        this.#y = b.toString();
        return `Point (${this.x}, ${this.y})`;
    }
}

const coordinate = new Point();

console.log(coordinate.distance(7, 4));

console.log(coordinate.toString(5, 10));
