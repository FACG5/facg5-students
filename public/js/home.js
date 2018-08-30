const logout = document.getElementById("logoutButton");
logout.addEventListener("click", e => {
  fetch("/logout", {
    method: "GET",
    credentials: "same-origin"
  })
    .then(result => result.json())
    .then(result => {
      if (result.err) return swal(result.err, " ", "error");
      else {
        swal(result.message, " ", "success").then(value => {
          window.location = "/login";
        });
      }
    });
});
