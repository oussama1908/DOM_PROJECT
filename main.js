// document.addEventListener('DOMContentLoaded', function () {
//     const cartItemCount = document.getElementById('cartItemCount');
//     const cartContent = document.querySelector('.cart-content');
//     const totalPriceElement = document.querySelector('.total-price');

//     let itemCount = 0;

//     // Event listener for "Add to Cart" buttons
//     const addToCartButtons = document.querySelectorAll('.addToCartButton');
//     addToCartButtons.forEach(button => {
//         button.addEventListener('click', event => {
//             const productContainer = button.closest('.thumb-wrapper');
//             const title = productContainer.querySelector('.product-title').textContent;
//             const price = parseFloat(productContainer.querySelector('.item-price').textContent.slice(1)); // Remove '$' and parse as float
//             const imageSrc = productContainer.querySelector('.img-fluid').getAttribute('src');
            
//             // Check if the item is already in the cart
//             if (isItemInCart(title)) {
//                 alert('You have already added this item to the cart.');
//                 return;
//             }
            
//             // Create cart item element
//             const cartItem = createCartItem(title, price, imageSrc);
//             cartContent.appendChild(cartItem);
            
//             // Increment item count
//             itemCount++;
//             cartItemCount.textContent = itemCount;
            
//             // Update total price
//             updateTotalPrice();
//         });
//     });

//     // Event listener for "Remove" buttons
//     cartContent.addEventListener('click', event => {
//         if (event.target.classList.contains('cart-remove')) {
//             event.target.closest('.cart-box').remove();
//             itemCount--;
//             cartItemCount.textContent = itemCount;
//             updateTotalPrice();
//         }
//     });

//     // Helper function to check if an item is already in the cart
//     function isItemInCart(title) {
//         const cartItems = document.querySelectorAll('.cart-product-title');
//         return Array.from(cartItems).some(item => item.textContent === title);
//     }

//     // Helper function to create a cart item element
//     function createCartItem(title, price, imageSrc) {
//         const cartBox = document.createElement('div');
//         cartBox.classList.add('cart-box');
//         cartBox.innerHTML = `
//             <img src="${imageSrc}" alt="" class="cart-img">
//             <div class="detail-box">
//                 <div class="cart-product-title">${title}</div>
//                 <div class="cart-price">$${price.toFixed(2)}</div>
//                 <button class="cart-remove btn btn-danger">Remove</button>
//             </div>`;
//         return cartBox;
//     }

//     // Helper function to update the total price
//     function updateTotalPrice() {
//         const cartBoxes = document.querySelectorAll('.cart-box');
//         let total = 0;
//         cartBoxes.forEach(cartBox => {
//             const price = parseFloat(cartBox.querySelector('.cart-price').textContent.slice(1)); // Remove '$' and parse as float
//             const quantity = parseInt(cartBox.querySelector('.cart-quantity').value);
//             total += price * quantity;
//         });
//         totalPriceElement.textContent = `$${total.toFixed(2)}`;
//     }
// });


$(document).ready(function(){
	$(".wish-icon i").click(function(){
		$(this).toggleClass("fa-heart fa-heart-o");
	});
});	
document.addEventListener('DOMContentLoaded', function () {
    // Get references to all "Add to Cart" buttons and the counter element
    const addToCartButtons = document.querySelectorAll('.addToCartButton');
    const cartItemCount = document.getElementById('cartItemCount');

    // Initialize the counter
    let itemCount = 0;

    // Add click event listeners to all "Add to Cart" buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Increment the counter
            itemCount++;
            
            // Update the counter display
            cartItemCount.textContent = itemCount;
            
        });
    });
});
 


 

/* dcanvass */

document.addEventListener('DOMContentLoaded', function () {
    const clickableElement = document.getElementById('clickable-element');
    const hiddenList = document.querySelector('.hidden-list');
    const close = document.querySelector('.close');

    clickableElement.addEventListener('click', function (event) {
        event.stopPropagation();
        if (hiddenList.style.right === '-400px' || hiddenList.style.right === '') {
            hiddenList.style.right = '0';
        }
    });

    // Close the hiddenList when the close button is clicked
    close.addEventListener('click', function (event) {
        event.stopPropagation();
        hiddenList.style.right = '-400px';
    });


});

/// cart js

if (document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready);
}else{
  ready();
}

function ready()
{
    var removeCartButtons=document.getElementsByClassName('cart-remove')
    
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem)
        
    }
    var quantityInputs= document.getElementsByClassName('cart-quantity')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantitychanged);
    
    }

    // add to cart
    var addCart=document.getElementsByClassName('addToCartButton')
    for (var i=0; i< addCart.length; i++){
        var button=addCart[i]
        button.addEventListener("click",addCartClicked);
        
    }

}

/// quantity changes 


// remove items from card 

function removeCartItem(event){
    var buttonClicked=event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}
//quantity Changes
function quantitychanged(event){
    var input=event.target
    if(isNaN(input.value)|| input.value<= 0) {
        input.value=1;
    }
    updatetotal();
    
}

// add to cart
function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("item-price")[0].innerText;
    // var productImgSrc = productImgElement.getAttribute("src"); // Use getAttribute to retrieve the src attribute
    
    var  productImg = shopProducts.getElementsByClassName("img-fluid")[0].src;  
  addProductToCart(title,price,productImg);
  updatetotal();
}

function addProductToCart(title,price,productImg){
   
    var cartItems=document.getElementsByClassName("cart-content")[0];
    
    var cartItemsNames= cartItems.getElementsByClassName("cart-product-title");
   
    for (var i=0 ; i< cartItemsNames.length ; i++){
        if (cartItemsNames[i].innerText==title){
          alert("you have already add this item to cart");
     return;
    }
 }

    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
var cartBoxContent = `
                     <img src="${productImg}" alt="" class="cart-img">
                     <div class="detail-box">
                     <div class="cart-product-title">${title}</div>
                     <div class="cart-price">${price}</div>

                     <input type="number" value="1" class="cart-quantity">
                     </div>
                     <svg class="cart-remove" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                     fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                      <path
                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                       <path
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" /></svg>`;
cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click',removeCartItem);
cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change',quantitychanged);

}
// // UPDATE TOALE 
function updatetotal(){
    var cartContent= document.getElementsByClassName('cart-content')[0];
    var cartBoxes=cartContent.getElementsByClassName('cart-box');
    var total = 0;
    for (var i=0 ; i< cartBoxes.length ; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var quantity = quantityElement.value;
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        total= total + (price*quantity);
    }
        // console.log("thetotaleis:", total);
        // console.log(quantity);
        
        // console.log(price);
        // if pricess are float
        total=Math.round(total * 100)/100 ;
        document.getElementsByClassName("total-price")[0].innerText="$"+ total;
}