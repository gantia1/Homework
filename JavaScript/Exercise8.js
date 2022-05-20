function Max(x, y) {
    if (x > y) {
        return x;
    } else if (x < y) {
        return y;
    } else {
        return x + " equal to " + y;
    }
}

console.log(Max(1, 9));