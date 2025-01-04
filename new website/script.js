// JavaScript to handle dynamic product details
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('name');
    const productPrice = urlParams.get('price');
    const productImage = urlParams.get('image');

    // Set product details dynamically
    document.getElementById('product-name').innerText = productName;
    document.getElementById('product-description').innerText = `This is a detailed description of ${productName}.`;
    document.getElementById('product-price').innerText = `$${productPrice}`;
    document.getElementById('product-image').src = productImage;
});

// Function to handle order submission (using EmailJS or another service)
function submitOrder() {
    const productName = document.getElementById('product-name').innerText;
    const quantity = document.getElementById('quantity').value;
    const customerEmail = prompt("Please enter your email to receive an order confirmation:");

    if (customerEmail) {
        // Use EmailJS to send the order details
        emailjs.send("service_shr3x3e", "template_q3zq0wv", {
            product_name: productName,
            quantity: quantity,
            customer_email: customerEmail,
            price: document.getElementById('product-price').innerText,
        })
        .then((response) => {
            alert(`Your order for ${quantity} ${productName} has been placed! A confirmation email has been sent.`);
        })
        .catch((error) => {
            alert("Failed to send order: " + error);
        });
    }
}
