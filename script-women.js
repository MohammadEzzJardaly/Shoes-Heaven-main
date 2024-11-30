    /*
    let firstimage = document.getElementById("first");
    let secondimage = document.getElementById("second");
    let thirdimage = document.getElementById("third");
    let fourthimage = document.getElementById("fourth");
    let fifthimage = document.getElementById("fifth");
    let sixthimage = document.getElementById("sixth");
    let seventhimage = document.getElementById("seventh");
    let eighthimage = document.getElementById("eighth");
    let ninthimage = document.getElementById("ninth");

    document.getElementById("first").style.backgroundImage = "url('img/falcon shoes/1.webp')";
    document.getElementById("second").style.backgroundImage = "url('img/4DFWD 4 RUNNING SHOES - women/1.avif')";
    document.getElementById("third").style.backgroundImage = "url('img/harden shoes/1.avif')";
    document.getElementById("fourth").style.backgroundImage = "url('img/McCartney x Terrex Hiking Boots/1.avif')";
    document.getElementById("fifth").style.backgroundImage = "url('img/Adifom Superstar Winter Boot Shoes/1.avif')";
    document.getElementById("sixth").style.backgroundImage = "url('img/Codechaos Boot Spikeless Golf Shoes/1.avif')";
    document.getElementById("seventh").style.backgroundImage = "url('img/Rivalry Mule Shoes/1.png')";
    document.getElementById("eighth").style.backgroundImage = "url('img/Adilette Platform Clogs/1.avif')";
    document.getElementById("ninth").style.backgroundImage = "url('img/Stella McCartney Clogs/1.avif')";
    */

    document.addEventListener("DOMContentLoaded", () => {
        fetch('products-women.json') // Updated to fetch products-women.json
            .then(response => response.json())
            .then(data => {
                let productList = document.querySelector('#product-list .cards');
                productList.innerHTML = ''; // Clear existing content
    
                data.forEach((product) => {
                    let encodedDefaultSrc = encodeURI(product.imageSrc);
                    let encodedHoverSrc = encodeURI(product.hoverSrc);
    
                    let productHTML = `
                        <div class="card">
                            <div class="img-con" 
                                 data-default="${encodedDefaultSrc}" 
                                 data-hover="${encodedHoverSrc}" 
                                 style="background-image: url('${encodedDefaultSrc}'); transition: background-image 0.5s ease;"></div>
                            <p>${product.itemName}</p>
                            <p>${product.price}</p>
                            <button class="add-to-cart-btn" 
                                    data-name="${product.itemName}" 
                                    data-price="${product.dataPrice}" 
                                    data-image="${product.imageSrc}">
                                Add to cart
                            </button>
                        </div>
                    `;
                    productList.innerHTML += productHTML;
                });
    
                const imgConElements = document.querySelectorAll('.img-con');
                imgConElements.forEach(el => {
                    el.addEventListener("mouseenter", () => {
                        el.style.backgroundImage = `url('${el.dataset.hover}')`;
                    });
                    el.addEventListener("mouseleave", () => {
                        el.style.backgroundImage = `url('${el.dataset.default}')`;
                    });
                });
    
                const addtocart = document.querySelectorAll(".add-to-cart-btn");
                addtocart.forEach(button => {
                    button.addEventListener("click", () => {
                        const productdetails = {
                            imageSrc: button.getAttribute("data-image"),
                            brand: "Adidas",
                            itemName: button.getAttribute("data-name"),
                            price: `$${button.getAttribute("data-price")}`,
                            quantity: 1,
                            total: `$${button.getAttribute("data-price")}`
                        };
    
                        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
                        let existingproduct = cartItems.find(item => item.itemName === productdetails.itemName);
    
                        if (existingproduct) {
                            showpopup(`"${productdetails.itemName}" is already in the cart. You can change the quantity in the cart page.`);
                        } else {
                            cartItems.push(productdetails);
                            localStorage.setItem("cartItems", JSON.stringify(cartItems));
                            showpopup(`"${productdetails.itemName}" has been added to the cart.`);
                        }
                    });
                });
            })
            .catch(error => {
                console.error('Error fetching the product data:', error);
            });
    });
    

    /*
    let firstdefault = "img/falcon shoes/1.webp";
    let firsthover = "img/falcon shoes/2.webp";
    let seconddefault = "img/4DFWD 4 RUNNING SHOES - women/1.avif";
    let secondhover = "img/4DFWD 4 RUNNING SHOES - women/2.avif";
    let thirddefault = "img/harden shoes/1.avif";
    let thirdhover = "img/harden shoes/2.avif";

    [firstimage, secondimage, thirdimage].forEach(container => {
        if (container) {
            container.style.transition = "background-image 1s ease";
        }
    });

    firstimage?.addEventListener("mouseenter", () => {
        firstimage.style.backgroundImage = `url('${firsthover}')`;
    });
    firstimage?.addEventListener("mouseleave", () => {
        firstimage.style.backgroundImage = `url('${firstdefault}')`;
    });

    secondimage?.addEventListener("mouseenter", () => {
        secondimage.style.backgroundImage = `url('${secondhover}')`;
    });
    secondimage?.addEventListener("mouseleave", () => {
        secondimage.style.backgroundImage = `url('${seconddefault}')`;
    });

    thirdimage?.addEventListener("mouseenter", () => {
        thirdimage.style.backgroundImage = `url('${thirdhover}')`;
    });
    thirdimage?.addEventListener("mouseleave", () => {
        thirdimage.style.backgroundImage = `url('${thirddefault}')`;
    });
});
*/
function menwomenpage(){
    const gender = document.getElementById("gender").value;
    if(gender === "Men"){
        window.location.href = "index.html";
    }
    else if(gender === "Women"){
        window.location.href = "index2.html";
    }
}

let popup = document.getElementById("popup");
let popupcontent = document.querySelector(".popup-content p");
let okbtn = document.getElementById("ok-btn");

function showpopup(message) {
    popupcontent.textContent = message;
    popup.classList.add("show");
}

okbtn.addEventListener("click", () => {
    popup.classList.remove("show");
});


/*
let popup = document.getElementById("popup");
let popupcontent = document.querySelector(".popup-content p");
let okbtn = document.getElementById("ok-btn");

function showpopup(message) {
    popupcontent.textContent = message;
    popup.classList.add("show");
}

okbtn.addEventListener("click", () => {
    popup.classList.remove("show");
});

let addtocart = document.querySelectorAll(".add-to-cart-btn");

addtocart.forEach(button => {
    button.addEventListener("click", () => {
        const productdetails = {
            imageSrc: button.getAttribute("data-image"),
            brand: "Adidas",
            itemName: button.getAttribute("data-name"),
            price: `$${button.getAttribute("data-price")}`,
            quantity: 1,
            total: `$${button.getAttribute("data-price")}`
        };

        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        let existingproduct = cartItems.find(item => item.itemName === productdetails.itemName); // Updated property name

        if (existingproduct) {
            showpopup(`"${productdetails.itemName}" is already in the cart. You can change the quantity in the cart page.`);
        } else {
            cartItems.push(productdetails);
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            showpopup(`"${productdetails.itemName}" has been added to the cart.`);
        }
    });
});
*/

let image = [
    "img/slider.jpg",
    "img/syd-wachs-ws8XXuc-i_4-unsplash.jpg",
    "img/pexels-mart-production-8801134.jpg"
];

let text = [
    "Running Shoes", 
    "Vintage Combat Boots", 
    "Crocs"
];


let currentindex = 0;

let nextbtn = document.getElementById("next");
let prevbtn = document.getElementById("prev");
let imageslider = document.getElementById("image-slider");
let textval = document.getElementById("textval");

function updateimagetxt(direction = "next") {
    // Determine the slide direction
    let slide = direction === "next" ? "translateX(100%)" : "translateX(-100%)";
    let reset = direction === "next" ? "translateX(-100%)" : "translateX(100%)";

    // Slide out current content
    imageslider.style.transform = slide;
    textval.style.transform = slide;

    setTimeout(() => {
        // Update the image and text after sliding out
        imageslider.src = image[currentindex];
        textval.textContent = text[currentindex];

        // Reset the position and slide in new content
        imageslider.style.transition = "none"; // Temporarily disable transition
        textval.style.transition = "none";
        imageslider.style.transform = reset;
        textval.style.transform = reset;

        setTimeout(() => {
            imageslider.style.transition = "transform 0.2s ease";
            textval.style.transition = "transform 0.2s ease";
            imageslider.style.transform = "translateX(0)";
            textval.style.transform = "translateX(-50%)";
        });
    }, 500);
}


// Event listeners for buttons
prevbtn.addEventListener("click", () => {
    currentindex = (currentindex > 0) ? currentindex - 1 : image.length - 1;
    updateimagetxt("prev");
});

nextbtn.addEventListener("click", () => {
    currentindex = (currentindex < image.length - 1) ? currentindex + 1 : 0;
    updateimagetxt("next");
});

// Automatic cycling every 3 seconds
setInterval(() => {
    currentindex = (currentindex < image.length - 1) ? currentindex + 1 : 0;
    updateimagetxt("next");
}, 3000);

// Initialize the slider
updateimagetxt();


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