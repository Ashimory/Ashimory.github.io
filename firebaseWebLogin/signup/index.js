document.getElementById("sign_up_form").addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("submitted");

    var email = document.getElementById("email_field").value;
    var password = document.getElementById("password_field").value;
    
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorMessage)
      });
} );






  