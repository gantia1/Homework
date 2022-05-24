const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

let words = text.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase();
}

console.log(words.join(""));


