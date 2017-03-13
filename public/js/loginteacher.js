$(document).ready(function() {
  // Getting references to our form and inputs
  var loginForm = $("form.login");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
 
 console.log("teacher login")

  // When the form is submitted, we validate there's an email and password entered


  // pass a hidden variable to know if we are logging in a student or teacher
  // we need to know which table we are looking in for the email/pw a

  loginForm.on("submit", function(event) {
    console.log("teacher login submit")
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
    };

    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    //prepend email with T* to know to check teacher table


  
    loginTeacher("T*"+userData.email, userData.password);
    
    emailInput.val("");
    passwordInput.val("");
  
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
 
 function loginTeacher(email, password) {
    $.post("/api/login/teacher", {
      email: email,
      password: password,

    }).then(function(data) {
      window.location.replace(data);
      // If there's an error, log the error
    }).catch(function(err) {
      console.log(err);
    });
  }


});
