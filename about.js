let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let extra = document.getElementById("additionaltxt");
let extra2 = document.getElementById("additionaltxt2");
let extra3 = document.getElementById("additionaltxt3");

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

btn.addEventListener("click", function(){
    extra.classList.toggle("visible");
    if (extra.classList.contains("visible")) {
        btn.style.backgroundColor = "rgba(175, 98, 53, 0.5)";
        btn.innerHTML = "See less";
        extra.style.display = "flex"
    } else {
        btn.style.backgroundColor = "rgb(175, 98, 53)";
        extra.style.display = "none"
        btn.innerHTML = "See more"
    }
})


btn2.addEventListener("click", function(){
    extra2.classList.toggle("visible");
    if (extra2.classList.contains("visible")) {
        btn2.style.backgroundColor = "rgba(175, 98, 53, 0.5)";
        btn2.innerHTML = "See less";
        extra2.style.display = "flex"
        
    } else {
        btn2.style.backgroundColor = "rgb(175, 98, 53)";
        extra2.style.display = "none"
        btn2.innerHTML = "See more"
    }
})


btn3.addEventListener("click", function(){
    extra3.classList.toggle("visible");
    if (extra3.classList.contains("visible")) {
        btn3.style.backgroundColor = "rgba(175, 98, 53, 0.5)";
        btn3.innerHTML = "See less";
        extra3.style.display = "flex"
    } else {
        btn3.style.backgroundColor = "rgb(175, 98, 53)";
        extra3.style.display = "none"
        btn3.innerHTML = "See more"
    }
})


document.addEventListener("DOMContentLoaded", function () {
    let divs = document.getElementsByTagName("div")

    let handleScroll = () => {
      divs.forEach(div => {
        let rect = div.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          div.style.opacity = 1;
          div.style.transition = "1s";
        } else {
          div.style.opacity = 0;
        }
      });
    
    };

    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
  });

  let header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 250) { 
        header.classList.add('scrolled'); 
        header.style.transition = "0.5s"
    } else {
        header.classList.remove('scrolled'); 
    }
});

document.querySelector('.marquee-text').textContent = 
"Step into style, comfort, and quality! At Shoe Haven, we bring you the perfect pair for every journey. Your feet deserve the best!";
