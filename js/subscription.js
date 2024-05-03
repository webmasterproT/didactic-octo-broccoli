document.addEventListener('DOMContentLoaded', function() {
    const subscribeForm = document.getElementById('subscribeForm');

    subscribeForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = subscribeForm.querySelector('input[type="email"]').value;
        const explanation = subscribeForm.querySelector('textarea[name="explanation"]').value;
        const signupCheck = subscribeForm.querySelector('input[name="signupCheck"]').checked;
        const signupReason = signupCheck ? subscribeForm.querySelector('textarea[name="signupReason"]').value : '';

        if (!validateSubscriptionForm(email, explanation, signupCheck, signupReason)) {
            alert('Please fill in the required fields correctly.');
            return;
        }

        const subscriptionData = {
            email: email,
            explanation: explanation,
            signup: signupCheck,
            signupReason: signupReason
        };

        fetch('/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(subscriptionData),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Subscription request sent successfully!');
                subscribeForm.reset();
            } else {
                alert('There was an error processing your request. Please try again.');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});

function validateSubscriptionForm(email, explanation, signupCheck, signupReason) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);
    const isExplanationValid = explanation.length <= 10000;
    const isSignupReasonValid = !signupCheck || (signupReason.length >= 500 && signupReason.length <= 10000);

    return isValidEmail && isExplanationValid && isSignupReasonValid;
}