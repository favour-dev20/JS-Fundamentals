const languages = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];

let output = languages[0];

for (let i = 1; i < languages.length; i++) {
  output += "\n" + languages[i];
}

console.log(output);