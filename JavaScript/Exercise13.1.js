function reverse(num) {
    let revNum = 0;
    while (num > 0) {
        revNum = revNum * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return revNum;
}

console.log(reverse(123));
