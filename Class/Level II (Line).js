class Line {
    #point1;
    #point2;
    constructor(point1, point2) {
        this.#point1 = point1;
        this.#point2 = point2;
    }

    get point1() {
        return this.#point1;
    }
    get point2() {
        return this.#point2;
    }
    // length(point1A, point2A, Point2A, Point2B) {
    //     this.#point1 = point1A - Point2A;
    //     this.#point2 = point2A - Point2B;
    //     return Math.sqrt(this.point1 * this.point1 + this.point2 * this.point2);
    // }
    // toString(a, b) {
    //     this.#point1 = a.toString();
    //     this.#point2 = b.toString();
    //     return `Point (${this.point1}, ${this.point1})`;
    // }

    print() {
        console.log(`Line(Point ${this.#point1}, ${this.#point2})`)
    }

}

