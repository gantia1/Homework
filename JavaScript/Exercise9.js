let arr = [5, 13, 9, -105, 2, 5];

function Max() {
    for (let i = 1; i < arr.length; i++) {
        if (arr[0] < arr[i]) {
            arr[0] = arr[i];
        }
    }
    return arr[0];
}

console.log(Max());