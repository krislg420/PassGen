        /* Prompt the length of password*/

        var passCharLength =
        prompt("Password character limit? Pick between 8 and 128 characters.");
    if (passCharLength > 128 || passCharLength < 8) {
        passCharLength = prompt("Must be between 8 and 128.");
    }
    
    if (passCharLength > 128 || passCharLength < 8) {
        location.reload();
    }
    else {
    
        var upCharacters = confirm("Uppercase letters?")
        var lowCharacters = confirm("Lowercase letters?")
        var numbers= confirm("Numbers?")
        var specCh = confirm("Special Characters?")
      
                 /* this is the function that does the clicking*/
    
        function generatePassword() {
    
            var charList = "";
            
            if (upCharacters) {
                charList = charList + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            }
            if (lowCharacters) {
                charList = charList + "abcdefghijklmnopqrstuvwxyz";
            }
            if (numbers) {
                charList = charList + "0123456789";
            }
            if (specCh) {
                charList = charList + "~!@#$%^&*()";
            }
            
            /* this is in place so that if user doesnt select from the options this will alert */
           
            if (charList == "") {
                alert("You didn't pick from any of the criteria.");
                return;
            }
            var password = "";
            for (var i = 0; i < passCharLength; i++) {
                password += charList[Math.floor(Math.random() * charList.length)];
            }
            document.getElementById('passwordBox').value = password;
        }
    
    
    }