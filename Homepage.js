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

function showMessege(){
    let messege = " You are now in the Home Page, Welcome!";
    sessionStorage.setItem("welcomeMessege",messege);
    let getmsg = sessionStorage.getItem("welcomeMessege");
    document.getElementById("welcomeMsg").innerText= getmsg;
}
window.addEventListener('beforeunload', ()=>{
    sessionStorage.removeItem("welcomeMsg");
})