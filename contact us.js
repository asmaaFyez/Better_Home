document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var responseMessage = document.getElementById('responseMessage');

    // Placeholder for form submission logic
    // You can implement AJAX here to send the form data to a server

    responseMessage.innerHTML = 'Thank you, ' + name + '! Your message has been sent.';
    responseMessage.classList.add('alert', 'alert-success');
});
