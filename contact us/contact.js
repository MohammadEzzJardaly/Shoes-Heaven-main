let header = document.getElementById('header');
let firstname = document.getElementById('firstname').value.trim();
let lastname = document.getElementById('lastname').value.trim();
let email = document.getElementById('email').value.trim();
let message = document.getElementById('message').value.trim();
let form = document.getElementById('myForm');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) { 
                header.classList.add('scrolled'); 
                header.style.transition = "0.2s"
            } else {
                header.classList.remove('scrolled'); 
            }
        });

        function checkInputs(event){
            alert('Message was sent!'); 
        }


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


        
        document.addEventListener("DOMContentLoaded", function () {
            let sections = document.querySelectorAll('#section');
        
            let handleScroll = () => {
              sections.forEach(section => {
                let rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                  section.style.opacity = 1;
                  section.style.transition = "1s";
                } else {
                  section.style.opacity = 0;
                }
              });
            
            };
        
            
            window.addEventListener('scroll', handleScroll);
            handleScroll(); 
          });




