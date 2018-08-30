var username = document.getElementById("username");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirmPassword");
const loginButton = document.getElementById("loginSubmit");
const logoutButton = document.getElementById("signup");
var passwordErr = document.getElementById("passwordErr");





var checkPw = function() {
  if (password.validity.patternMismatch) {
    displayErr(
      passwordErr,
      "Password must contain at least eight characters, including one letter and one number"
    );
  } else if (password.validity.valueMissing) {
    displayErr(passwordErr, "Please enter a password");
  } else {
    displayErr(passwordErr, "");
    return true;
  }
};

function displayErr(errElem, errMsg) {
  errElem.innerText = errMsg;
}

// email.addEventListener("focusout", checkEmail);
password.addEventListener("focusout", checkPw);

loginButton.addEventListener("click", e => {
  e.preventDefault();
  if (!checkPw()) {
    swal("", "Please Enter Valid username / Password  ! ", "error");
    event.preventDefault();
  } else {
    const userData = {
      username: username.value,
      password: password.value
    };

    fetch("/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userData),
      credentials: "same-origin"
    })
    .then(result=>result.json())
      .then(result => {        
        if(result.err) return  swal(result.err, " ", "error");
        else window.location='/'   
      })


  }
});
