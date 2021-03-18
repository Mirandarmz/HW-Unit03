// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//function that generates and returns password
function generatePassword(){
  //Generate arrays with elements that will be used to make the password
  var lett=["A","B","C","D","E","F","G","H","I","J","K","L","M","O","P","Q","R","S","T","U","V",];
  var specialCar=['!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','>','<','=','?','@','[',']','^','-','{','}','|'];

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



function generatePassword2(){
  var upCase=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var lowCase=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var specCar=['!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','>','<','=','?','@','[',']','^','-','{','}','|',];
  var numb=['1','2','3','4','5','6','7','8','9'];

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

 
  var random;
  
  if(containSpecialCar && containNumCar && containLowCase){ //si tiene special car y number y low cases
    var allCar=upCase.concat(lowCase,specCar,numb);
    while(password.length<numbCar){
      random=Math.floor(Math.random()*allCar.length);
      password=password.concat(allCar[random]);
    }
  }else{
    if(containSpecialCar && containNumCar){ //si tiene special car y num
      var carAndNumb=upCase.concat(specCar,numb);
      while(password.length<numbCar){
        random=Math.floor(Math.random()*carAndNumb.length);
        password=password.concat(carAndNumb[random]);
      }
    }else{
      if(containSpecialCar && containLowCase){//si tiene special car y low case
        var carAndLow=upCase.concat(lowCase,specCar);
        while(password.length<numbCar){
          random=Math.floor(Math.random()*carAndLow.length);
          password=password.concat(carAndLow[random]);
        } 
      }else{
        if(containLowCase && containNumCar){//si tiene low case y number
          var lowAndNum=upCase.concat(lowCase,numb);
          while(password.length<numbCar){
            random=Math.floor(Math.random()*lowAndNum.length);
            password=password.concat(lowAndNum[random]);
          } 
        }else{
          if(containLowCase){//si solo tiene low case
            while(password.length<numbCar){
              random=Math.floor(Math.random()*upCase.concat(lowCase).length);
              password=password.concat(upCase.concat(lowCase)[random]);
            } 
          }
          else{
            if(containNumCar){ //si solo tiene number
              while(password.length<numbCar){
                random=Math.floor(Math.random()*upCase.concat(numb).length);
                password=password.concat(upCase.concat(num)[random]);
              } 
            }else{
              if(containSpecialCar){ //si solo tiene special car
                while(password.length<numbCar){
                  random=Math.floor(Math.random()*upCase.concat(specCar).length);
                  password=password.concat(upCase.concat(specCar)[random]);
                } 
              }else{ //si no tiene ninguno
                while(password.length<numbCar){
                  random=Math.floor(Math.random()*upCase.length);
                  password=password.concat(upCase[random]);
                } 
              }
            }
          }
        }
      }
    }
  }

  return password;

}

 ,
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
