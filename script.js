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


let firstdefault = "img/4DFWD 4 RUNNING SHOES/1.avif";
let firsthover = "img/4DFWD 4 RUNNING SHOES/2.avif";
let seconddefault = "img/Kaptir 3.0 Shoes/1.avif";
let secondhover = "img/Kaptir 3.0 Shoes/2.avif";
let thirddefault = "img/Ultraboost 5X Shoes/1.avif";
let thirdhover = "img/Ultraboost 5X Shoes/2.avif";
let fourthdefault = "img/Terrex Winter High Rain.Rdy Cold.Rdy Boots/1.avif";
let fourthhover = "img/Terrex Winter High Rain.Rdy Cold.Rdy Boots/2.avif";
let fifthdefault = "img/Terrex Hydro Lace Boots/1.avif";
let fifthhover = "img/Terrex Hydro Lace Boots/2.avif";
let sixthdefault = "img/Terrex Winter Leather Mid Cut/1.avif";
let sixthhover = "img/Terrex Winter Leather Mid Cut/2.avif";
let seventhdefault = "img/Adifom IIInfinity Mules/1.avif";
let seventhhover = "img/Adifom IIInfinity Mules/2.avif";
let eighthdefault = "img/Adilette Clogs/1.avif";~
let eighthhover = "img/Adilette Clogs/2.avif";
let ninthdefault = "img/Adifom Stan Smith Mule Shoes/1.avif";
let ninthhover = "img/Adifom Stan Smith Mule Shoes/2.avif";



[firstimage, secondimage, thirdimage, fourthimage, fifthimage, sixthimage, seventhimage, eighthimage, ninthimage].forEach(container => {
    container.style.transition = "background-image 0.5s ease";
});

firstimage.addEventListener("mouseenter", () => {
    firstimage.style.backgroundImage = `url('${firsthover}')`;
});
firstimage.addEventListener("mouseleave", () => {
    firstimage.style.backgroundImage = `url('${firstdefault}')`;
});

secondimage.addEventListener("mouseenter", () => {
    secondimage.style.backgroundImage = `url('${secondhover}')`;
});
secondimage.addEventListener("mouseleave", () => {
    secondimage.style.backgroundImage = `url('${seconddefault}')`;
});

thirdimage.addEventListener("mouseenter", () => {
    thirdimage.style.backgroundImage = `url('${thirdhover}')`;
});
thirdimage.addEventListener("mouseleave", () => {
    thirdimage.style.backgroundImage = `url('${thirddefault}')`;
});

fourthimage.addEventListener("mouseenter", () => {
    fourthimage.style.backgroundImage = `url('${fourthhover}')`;
});

fourthimage.addEventListener("mouseleave", () => {
    fourthimage.style.backgroundImage = `url('${fourthdefault}')`;
});
fifthimage.addEventListener("mouseenter", () => {
    fifthimage.style.backgroundImage = `url('${fifthhover}')`;
});

fifthimage.addEventListener("mouseleave", () => {
    fifthimage.style.backgroundImage = `url('${fifthdefault}')`;
});

sixthimage.addEventListener("mouseenter", () => {
    sixthimage.style.backgroundImage = `url('${sixthhover}')`;
});

sixthimage.addEventListener("mouseleave", () => {
    sixthimage.style.backgroundImage = `url('${sixthdefault}')`;
});

seventhimage.addEventListener("mouseenter", () => {
    seventhimage.style.backgroundImage = `url('${seventhhover}')`;
});
seventhimage.addEventListener("mouseleave", () => {
    seventhimage.style.backgroundImage = `url('${seventhdefault}')`;
});

eighthimage.addEventListener("mouseenter", () => {
    eighthimage.style.backgroundImage = `url('${eighthhover}')`;
});
eighthimage.addEventListener("mouseleave", () => {
    eighthimage.style.backgroundImage = `url('${eighthdefault}')`;
});
ninthimage.addEventListener("mouseenter", () => {
    ninthimage.style.backgroundImage = `url('${ninthhover}')`;
});
ninthimage.addEventListener("mouseleave", () => {
    ninthimage.style.backgroundImage = `url('${ninthdefault}')`;
});

*/

document.addEventListener("DOMContentLoaded", function () {
    fetch('products-men.json')
        .then(response => response.json())
        .then(data => {
            let productList = document.querySelector('#product-list .cards');

            // Loop through products and generate HTML
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

            // Add hover effect to the images
            const imgConElements = document.querySelectorAll('.img-con');
            imgConElements.forEach(el => {
                el.addEventListener("mouseenter", () => {
                    el.style.backgroundImage = `url('${el.dataset.hover}')`;
                });
                el.addEventListener("mouseleave", () => {
                    el.style.backgroundImage = `url('${el.dataset.default}')`;
                });
            });

            // Add event listeners for the "Add to Cart" buttons
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

// Function to show the popup with a message
function showpopup(message) {
    let popup = document.getElementById("popup");
    let popupcontent = document.querySelector(".popup-content p");
    popupcontent.textContent = message;
    popup.classList.add("show"); // Show the popup
}

// Close popup on clicking OK button
let okbtn = document.getElementById("ok-btn");
okbtn.addEventListener("click", () => {
    let popup = document.getElementById("popup");
    popup.classList.remove("show"); // Hide the popup
});




let image = [
    "img/fashion-5515135_1920.jpg",
    "img/pexels-atomlaborblog-1153838.jpg",
    "img/eirc-shi-p5DVOM05WNs-unsplash.jpg"
];

let text = [
    "Vintage Combat Boots", 
    "Running Shoes", 
    "Luxury Cap-Toes"
];


let currentindex = 0;

let nextbtn = document.getElementById("next");
let prevbtn = document.getElementById("prev");
let imageslider = document.getElementById("image-slider");
let textval = document.getElementById("textval");
let popup = document.getElementById("popup");
let popupcontent = document.querySelector(".popup-content p");

function showpopup(message) {
    popupcontent.textContent = message;
    popup.classList.add("show");
}

okbtn.addEventListener("click", () => {
    popup.classList.remove("show");
});

function updateimagetxt(direction = "next") {
    let slide = direction === "next" ? "translateX(100%)" : "translateX(-100%)";
    let reset = direction === "next" ? "translateX(-100%)" : "translateX(100%)";


    imageslider.style.transform = slide;
    textval.style.transform = slide;

    setTimeout(() => {
        imageslider.src = image[currentindex];
        textval.textContent = text[currentindex];

        imageslider.style.transition = "none";
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

prevbtn.addEventListener("click", () => {
    currentindex = (currentindex > 0) ? currentindex - 1 : image.length - 1;
    updateimagetxt("prev");
});

nextbtn.addEventListener("click", () => {
    currentindex = (currentindex < image.length - 1) ? currentindex + 1 : 0;
    updateimagetxt("next");
});

setInterval(() => {
    currentindex = (currentindex < image.length - 1) ? currentindex + 1 : 0;
    updateimagetxt("next");
}, 3000);

updateimagetxt();


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

function menwomenpage() {
    const gender = document.getElementById("gender").value;
    if (gender === "Men") {
        window.location.href = "index.html";
    } else if (gender === "Women") {
        window.location.href = "index2.html";
    }
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