let isToggled = false;
function toggleMenue(){
    if(isToggled){
        document.getElementById('navMenu').style.right = '-200%';
        isToggled = false;
    }else{
        document.getElementById('navMenu').style.right = '0';
        isToggled = true;
    }
}


function toggleMenue(){
    let nav = document.getElementById("navMenu");
    nav.classList.toggle("active");
}

function showMessege(){
    let messege = " You are now in the Home Page, Welcome!";
    sessionStorage.setItem("welcomeMessege",messege);
    let getmsg = sessionStorage.getItem("welcomeMessege");
    document.getElementById("welcomeMsg").innerText= getmsg;
}
window.addEventListener('beforeunload', ()=>{
    sessionStorage.removeItem("welcomeMsg");
})