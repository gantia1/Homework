const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

/*let x;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 1) {
        x = numbers[i] * numbers[i];
        console.log(x);
    }
}*/

numbers
.filter((num)=>num%2!=0)
.forEach((num)=>console.log(num*num));