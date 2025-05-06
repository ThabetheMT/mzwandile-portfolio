document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const form = event.target;
    const formMessage = document.getElementById('form-message');
    
    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            formMessage.textContent = 'Your message has been sent successfully!';
            formMessage.classList.add('success');
            formMessage.classList.remove('error');
            form.reset();
        } else {
            throw new Error('Failed to send message');
        }
    } catch (error) {
        formMessage.textContent = 'Failed to send message. Please try again later.';
        formMessage.classList.add('error');
        formMessage.classList.remove('success');
    }
});