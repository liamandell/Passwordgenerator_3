const uppercaseletters='AZXCVBNMLKSJHGDFQWERTYUIOP'
const numbers='1234567890'
const lowercaseletters='azxcvbnmkljshgdfqwertyuiop'
const symbols='~!@#$%^&*_+'
let newpassword=''
let password=''


// these are refrences to the element
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  let passwordlength =prompt('how long do you need your password to be?(number 8-12)')
  if(passwordlength<8||passwordlength>128){
    alert('password must be greater than 8 and less than 128')
    return null
    
  }
  const wantnum=confirm('would you like numbers?')
  const wantsym=confirm('would you like symbols?')
  const wantuppercase=confirm('would you like to use uppercase?')
  const wantlowercase=confirm('would you like to use lowercase?')
  if(wantnum===true){
    newpassword += numbers
  }
  if(wantsym===true){
    newpassword+=symbols
  }

  if(wantuppercase===true){
    newpassword +=uppercaseletters
  }

  if(wantlowercase===true){
    newpassword +=lowercaseletters
  }
  if(!wantnum && !wantsym && !wantuppercase && !wantlowercase){
    alert('select yes or no')
    return null
  }
  for(let i=0;i<passwordlength;i++){
    let chosenpassword=Math.floor(Math.random()* newpassword.length)
    password +=newpassword.charAt(chosenpassword)
   
  console.log(chosenpassword)
  
  }
  return password
  console.log('made by liam andell',passwordlength,wantnum,wantsym,wantuppercase,wantlowercase,
  newpassword)
}

// this will write the password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// this will add event listener to generate button
generateBtn.addEventListener("click", writePassword);
