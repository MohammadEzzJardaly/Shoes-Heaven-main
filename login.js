function toggleMenue(){
  let nav = document.getElementById("navMenu");
  nav.classList.toggle("active");
}

let login = document.getElementById("login");
login.onclick = (e) => {
  e.preventDefault();
  let usernameAddress = document.getElementById("username").value;
  let passwordAddress = document.getElementById("password").value;
  let getUser = localStorage.getItem("Username");
  let getPass = localStorage.getItem("Password");
  if (usernameAddress == "" && passwordAddress == "") {
    swal("Input field has no value");
  } else {
    if (usernameAddress == getUser && passwordAddress == getPass) {
      swal(`Login successfull, hi ${usernameAddress}`);
    } else {
      swal("Something is wrong");
    }
  }
}