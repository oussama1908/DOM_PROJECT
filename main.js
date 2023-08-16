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

    clickableElement.addEventListener('click', function () {
        // Toggle the position of the hidden list
        if (hiddenList.style.right === '-400px' || hiddenList.style.right === '') {
            hiddenList.style.right = '0';
        } else {
            hiddenList.style.right = '-400px';
        }
    });
});


/* moving items too  the canvass */

