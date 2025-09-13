

## Script 1-multi_languages.js

Prints three lines to the console:
- C is fun
- Python is cool
- JavaScript is amazing
Using 'const' and 'console.log(...)'.
## Script 2-arguments.js

Prints a message depending on the number of command-line arguments:
- No arguments → "No argument"
- One argument → "Argument found"
- More than one → "Arguments found"

Uses process.argv and console.log(...).
## Script 3-value_argument.js

Prints the first command-line argument passed to the script:
- No argument → "No argument"
- One argument → prints that argument

Uses process.argv and console.log(...).  
Does not use length or var.
## Script 4-concat.js

Prints two command-line arguments in the format: "arg1 is arg2"
- Two arguments → prints both
- One argument → second is "undefined"
- No arguments → both are "undefined"

Uses process.argv and console.log(...).  
Does not use var.
### 6-multi_languages_loop.js

Prints three programming languages and messages using a loop, with *one console.log* and no if/else statements.

```javascript
const languages = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];

let output = [];

for (let i = 0; i < languages.length; i++) {
  output.push(languages[i]);
}

console.log(output.join('\n'));
### 6-multi_languages_loop.js

Prints three programming languages using a loop and *one console.log* without if/else statements.

```javascript
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