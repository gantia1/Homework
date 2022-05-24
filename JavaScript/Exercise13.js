
function prime(x) {
    for (let i = 0; i <= x; i++) {
        let y = 0;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                y = 1;
            }
        }
        if (i > 1 && y === 0) {
            console.log(i);
        }
    }
}

console.log(prime(50));