let addbtn = document.getElementById("kaptir");

function updateprice() {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    let total = cartItems.reduce((sum, item) => {
        let itemTotal = parseFloat(item.total.slice(1));
        return sum + itemTotal;
    }, 0);

    document.getElementById("total-price").textContent = `$${total.toFixed(2)}`;
}

function saves(product) {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push(product);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    updateprice();
}

function updatequantity(name, quantity, total) {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems = cartItems.map(item => {
        if (item.itemName === name) { // Using "itemName" consistently
            item.quantity = quantity;
            item.total = total;
        }
        return item;
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    updateprice();
}
   


   
function removes(name) {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems = cartItems.filter(item => item.itemName !== name); // Using "itemName"
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    updateprice();
}

function loads() {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.forEach(item => addproduct(item));
    updateprice();
}

addbtn.addEventListener("click", () => {
    const productdetails = {
        imageSrc: "img/Kaptir 3.0 Shoes/1.avif",
        brand: "Adidas",
        itemName: "Kaptir 3.0 Shoes",
        price: "$220.00",
        quantity: 1,
        total: "$220.00"
    };

    let existingproducts = JSON.parse(localStorage.getItem("cartItems")) || [];
    let existingproduct = existingproducts.find(item => item.itemName === productdetails.itemName);

    if (existingproduct) {
        alert(`You can add more quantity for "${productdetails.itemName}" instead of adding it again.`);
    } else {
        addproduct(productdetails);
        saves(productdetails);
    }
});

function addproduct(product) {
    const table = document.querySelector("#table tbody");

    let newrow = document.createElement("tr");
    newrow.classList.add("item");

    newrow.innerHTML = `
        <td class="item-info">
            <img src="${product.imageSrc}" alt="${product.itemName}" class="item-image">
            <div class="item-details">
                <span class="brand">${product.brand}</span><br>
                <span class="item-name">${product.itemName}</span><br>
                <span class="sku"></span>
            </div>
        </td>
        <td class="price" data-price="${parseFloat(product.price.slice(1))}">${product.price}</td>
        <td class="quantity">
            <button class="counter-btn decrease">&#x25BC;</button>
            <span class="quantity-value">${product.quantity}</span>
            <button class="counter-btn increase">&#9650;</button>
            <button class="delete">
                <i class="fa-solid fa-trash"></i>
            </button>
        </td>
        <td class="total">${product.total}</td>
    `;

    table.appendChild(newrow);

    btns(newrow, product);
}

function btns(row, product) {
    let deleteb = row.querySelector(".delete");
    let decreaseb = row.querySelector(".decrease");
    let increaseb = row.querySelector(".increase");
    let quantity = row.querySelector(".quantity-value");
    let price = row.querySelector(".price");
    let totall = row.querySelector(".total");

    let mainprice = parseFloat(price.getAttribute("data-price"));

    function updatetotal() {
        let quantityValue = parseInt(quantity.textContent);
        let total = (mainprice * quantityValue).toFixed(2);
        totall.textContent = `$${total}`;

        updatequantity(product.itemName, quantityValue, `$${total}`);
    }

    increaseb.addEventListener("click", () => {
        quantity.textContent = parseInt(quantity.textContent) + 1;
        updatetotal();
    });

    decreaseb.addEventListener("click", () => {
        let currentquantity = parseInt(quantity.textContent);
        if (currentquantity > 1) {
            quantity.textContent = currentquantity - 1;
            updatetotal();
        }
    });

    deleteb.addEventListener("click", () => {
        row.remove();
        removes(product.itemName);
    });
}

document.addEventListener("DOMContentLoaded", loads);

// Select DOM elements
const checkoutButton = document.getElementById("checkout-btn");
const popup = document.getElementById("popup");
const closeButton = document.querySelector(".close");

// Function to open the popup
const openPopup = () => {
    popup.classList.remove("hidden");
};

// Function to close the popup
const closePopup = () => {
    popup.classList.add("hidden");
};

// Add event listeners
checkoutButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);

// Optionally close the popup when clicking outside the popup content
popup.addEventListener("click", (event) => {
    if (event.target === popup) {
        closePopup();
        alert("Your order has been placed successfully.");
    }
});

let popupalert = document.getElementById("popup-alert"); // Fixed to reference the correct element
let popupcontent = document.querySelector(".popup-content p"); // Assuming this is a <p> inside .popup-content
let okbtn = document.getElementById("ok-btn");

function showpopup(message) {
    popupcontent.textContent = message; // Using the passed message
    popupalert.classList.add("show"); // Corrected reference
}

okbtn.addEventListener("click", () => {
    popupalert.classList.remove("show");
});

let submit = document.getElementById("submit-btn");

submit.addEventListener("click", () => {
    //showpopup("Your order has been placed successfully."); // Passing a message argument

    alert(
        "Your order has been placed successfully."
    );
});
