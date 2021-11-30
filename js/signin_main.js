function validateEmail(inputText) {
   var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if(inputText.value.match(mailFormat)) {
      document.getElementById("message1").innerText = "";
      return true;
   }
   else {
      document.getElementById("message1").innerHTML = "**Please enter a valid email address!";
      return false;
   }
}
function verifyPassword() {
  var pw = document.getElementById("pass").value;
  //check empty password field
  if(pw == "") {
     document.getElementById("message").innerHTML = "**Fill the password please!";
     return false;
  }

 //minimum password length validation
  if(pw.length < 8) {
     document.getElementById("message").innerHTML = "**Password length must be atleast 5 characters";
     return false;
  }

//maximum length of password validation
  if(pw.length > 15) {
     document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";
     return false;
  }
  else {
     document.getElementById("message").innerText = "";
     return true;
  }
}
function Validate() {
        var password = document.getElementById("pass").value;
        var confirmPassword = document.getElementById("re_pass").value;
        if (password != confirmPassword) {
            document.getElementById("message").innerHTML = "**Passwords Don't Match";
            return false;
        }
        else {
           document.getElementById('message').innerText = "";
            return true;
        }
    }

document.getElementById("login-form").addEventListener("submit",(event)=> {
    event.preventDefault()
})
