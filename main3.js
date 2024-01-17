const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const specialChars = "!@#$%^&*()_+{};~?,./";

//const generateBtn = document.querySelector("#generate");

//CHECK ME console.log(symbols[1]);

//A function called generatePass (all the code below will be inside this function

function generatePass() {
  //You are going to need a few items below to make this project work(please look these up on W3schools if you have questions):

  //get the length value of your first input, something like this:

  //get value from input

  let length = parseInt(document.getElementById("length").value);
  let useUpperCase = document.querySelector("#uppercase").checked;
  let useNumber = document.getElementById("number").checked;
  let useSymbols = document.getElementById("symbols").checked;
  //let usePhrases = document.getElementById("phrases").checked;
  let Password = "";
  let charSet = "";

  //use an if statement to check if uppercase, number or symbols is true, then add charset to the correct letters (+= upperChars)

  //get the charset and add it (+=) to the lower case letter variable above. (you will do this for the uppercase, numbers and symbol characters too later down the line.

  //charSet += lowerCase;

  if (!useUpperCase || !useNumber || !useSymbols) {
    charSet += lowerChars;
  }

  if (useUpperCase) {
    charSet += upperChars;
    charSet += lowerChars;
  }

  if (useNumber) {
    charSet += numberChars;
  }

  if (useSymbols) {
    charSet += specialChars;
  }

  //Create a loop, set the length of the loop to your length variable above.
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charSet.length);

    //Now inside your loop set the Password variable to add your charset[randomindex];

    Password += charSet[randomIndex];
  }
  //finally outside of your loop, use a queryselector to set the value of password equal to your Password variable that you wrote above in the loop.

  document.getElementById("password").value = Password;
  //console.log(Password.length);
}

document.getElementById("generate").addEventListener("click", generatePass);
