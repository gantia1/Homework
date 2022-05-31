const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

let result = text
    .replace('dolor', 'xxx')
    .replace('elit', 'xxx')
    .replace('labore', 'xxx')

console.log(result);