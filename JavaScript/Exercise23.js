let counter = 0;
function myDate() {
    counter++;
    console.log(counter + '.', new Date());
    if (counter >= 10) {
        clearInterval(interval);
    }
}

const interval = setInterval(myDate, 5000);