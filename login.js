let isToggled = false;
function toggleMenue(){
    if(isToggled){
        document.getElementById('navMenu').style.right = '-200%';
        isToggled = false;
    }else{
        document.getElementById('navMenu').style.right = '0';
        isToggled = true;
    }

    const header = document.querySelector('header');
    const navMenu = document.querySelector('#navMenu');
    const nav = document.querySelector('.navig');
    header.classList.toggle('active');
    nav.classList.toggle('active');
    navMenu.classList.toggle('active');
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