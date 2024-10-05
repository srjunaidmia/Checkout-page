document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('checkout-form');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Simple validation
        if (validateForm()) {
            // Simulate a form submission
            messageDiv.textContent = 'Thank you for your order!';
            messageDiv.style.color = '#5bc0de'; // Change color to blue for success
            form.reset(); // Optionally reset the form
        } else {
            messageDiv.textContent = 'Please fill out all required fields correctly.';
        }
    });

    function validateForm() {
        const inputs = form.querySelectorAll('input');
        let valid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                valid = false;
            }
        });

        // Example for specific field validation
        const cardNumber = document.getElementById('card-number').value;
        if (!/^\d{16}$/.test(cardNumber)) {
            valid = false;
        }

        return valid;
    }
});
