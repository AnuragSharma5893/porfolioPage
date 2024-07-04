document.addEventListener('DOMContentLoaded', function() {
    emailjs.init('your_user_id'); // Replace 'your_user_id' with your actual EmailJS user ID

    const contactForm = document.getElementById('contact-form');
    const statusDiv = document.getElementById('status');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        const templateParams = {
            name: name,
            email: email,
            message: message
        };

        emailjs.send('your_service_id', 'your_template_id', templateParams)
            .then(function(response) {
                statusDiv.innerHTML = 'Message sent successfully!';
                statusDiv.style.color = 'green';
                contactForm.reset();
            }, function(error) {
                statusDiv.innerHTML = 'Failed to send message. Please try again later.';
                statusDiv.style.color = 'red';
            });
    });

    // Add JavaScript functionality for social media links
    const socialLinks = document.querySelectorAll('#contact ul li a');
    socialLinks.forEach(link => {
        link.addEventListener('click', function() {
            alert(`You are being redirected to ${link.innerText}.`);
        });
    });
});
