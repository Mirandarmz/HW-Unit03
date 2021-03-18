// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Generate arrays with elements that will be used to make the password
var lett=["A","B","C","D","E","F","G","H","I","J","K","L","M","O","P","Q","R","S","T","U","V",];
var specialCar=['!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','>','<','=','?','@','[',']','^','-','{','}','|'];
var lett=["A","B","C","D","E","F","G","H","I","J","K","L","M","O","P","Q","R","S","T","U","V",];

//function that generates and returns password
function generatePassword(){
  var password=""; //we initialize the variable password that will laster be used to concatenate the elements
  var numbCar=window.prompt("How many characters would you like your pasword to have?");

  if(numbCar<8){//if the number of characters selected is smaller than 8, it will ask to introduce the value again
    window.alert("Password must be at least 8 characters");
    numbCar=window.prompt("How many characters would you like your pasword to have?");
  }

  //saving in a variable which elements does the user want to be contained in the password, all booleans
  var containSpecialCar=window.confirm("Click OK if you want password to have special characters");
  var containNumCar=window.confirm("Click OK if you want password to have numeric characters");
  var containLowCase=window.confirm("Click OK if you want password to have lower case characters");

  //declaration of variables that will be used inside the while loop
  var randomUpCase;
  var randomLowCase;
  var randomSpecialCar;
  var randomNumber;
  var i=0;

  //while loop that generates password depending on the elements that the user indicated they wanted to be included
  while(i<numbCar){

    if(containSpecialCar){
      randomSpecialCar=Math.floor(Math.random()*specialCar.length);//we use random numbers to acces the indexes for the password to be as arbitrary as possible 
      password=password.concat(specialCar[randomSpecialCar]);
      i++;
      if(i==numbCar){
        break; //the break was introduced since there were cases in which in a same while loop, more than 1 character was added to the password and it ended up with a lenght larger to the one the user wanted
      }
    }

    if(containLowCase){
      randomLowCase=Math.floor(Math.random()*lett.length);
      password=password.concat(lett[randomLowCase].toLowerCase());
      i++;
      if(i==numbCar){
        break;
      }
    }

    if(containNumCar){
      randomNumber=Math.floor(Math.random()*10);
      password=password.concat(randomNumber);
      i++;
      if(i==numbCar){
        break;
      }
    }

    randomUpCase=Math.floor(Math.random()*lett.length)//The upper case is not in an if since they are always included, they do not depend on the user's choice 
    password=password.concat(lett[randomUpCase]);
    i++;

  }
  
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
