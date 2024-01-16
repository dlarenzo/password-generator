let specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', ';', '~', '?', ',', '.', '/'];
let num = [0,1,2,3,4,5,6,7,8,9];
let lettersLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let lettersUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const generateBtn = document.querySelector('#generate');
let inputLength = document.querySelector('#length');
let password = document.querySelector('#password');

console.log(specialChar[1]);

generateBtn.addEventListener('click', function generatePass() {
  let length = parseInt(document.querySelector("length").value);


  //get value from inputLinks to an external site.
 
  //getting checked value from inputLinks to an external site.

  //set an empty Password string variable

  //set an empty charSet string variable 
  
  //get the charset and add it (+=) to the lower case letter variable above. (you will do this for the uppercase, numbers and symbol characters too later down the line.
  
  //use an if statement to check if uppercase, number or symbols is true, then add charset to the correct letters (+= upperChars)
  
  //Create a loop, set the length of the loop to your length variable above.
  
  //inside your loop create a variable that sets a random index
  
  let randomIndex = Math.floor(Math.random() * charSet.length);
  
  //Now inside your loop set the Password variable to add your charset[randomindex];
  
  //finally outside of your loop, use a queryselector to set the value of password equal to your Password variable that you wrote above in the loop.
})
