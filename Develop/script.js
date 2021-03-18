// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var lett=["A","B","C","D","E","F","G","H","I","J","K","L","M","O","P","Q","R","S","T","U","V",];
var specialCar=['!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','>','<','=','?','@','[',']','^','-','{','}','|'];
var lett=["A","B","C","D","E","F","G","H","I","J","K","L","M","O","P","Q","R","S","T","U","V",];

function generatePassword(){
  var password="";
  var numbCar=window.prompt("How many characters would you like your pasword to have?");

  if(numbCar<8){
    window.alert("Password must be at least 8 characters");
    numbCar=window.prompt("How many characters would you like your pasword to have?");
  }

  var containSpecialCar=window.confirm("Click OK if you want password to have special characters");
  var containNumCar=window.confirm("Click OK if you want password to have numeric characters");
  var containLowCase=window.confirm("Click OK if you want password to have lower case characters");

  var randomUpCase;
  var randomLowCase;
  var randomSpecialCar;
  var randomNumber;
  var i=0;

  while(i<=i%numbCar){
    if(containSpecialCar){
      randomSpecialCar=Math.floor(Math.random()*specialCar.length);
      password=password.concat(specialCar[randomSpecialCar]);
      i++;
      console.log(password);
    }
    if(containLowCase){
      randomLowCase=Math.floor(Math.random()*lett.length);
      password=password.concat(lett[randomLowCase].toLowerCase());
      i++;
      console.log(password);
    }
    if(containNumCar){
      randomNumber=Math.floor(Math.random()*10);
      password=password.concat(randomNumber);
      i++;
      console.log(password);
    }

    randomUpCase=Math.floor(Math.random()*lett.length)
    password=password.concat(lett[randomUpCase]);
    i++;
    console.log(password);
  }
  console.log(i);
  console.log(password.length);
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
