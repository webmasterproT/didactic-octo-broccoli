document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedbackForm');

    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const topicSuggestion = document.getElementById('topicSuggestion').value;
        const viewerEmail = document.getElementById('viewerEmail').value;
        const viewerPhone = document.getElementById('viewerPhone').value;
        const personalInfo = {
            name: document.getElementById('viewerName').value,
            birthday: document.getElementById('viewerBirthday').value,
            location: document.getElementById('viewerLocation').value,
            company: document.getElementById('viewerCompany').value,
            interests: document.getElementById('viewerInterests').value,
            demographics: document.getElementById('viewerDemographics').value,
            additionalInfo: document.getElementById('viewerAdditionalInfo').value
        };

        // Validate the feedback form data
        if (!validateFeedbackForm(topicSuggestion, viewerEmail, viewerPhone, personalInfo)) {
            alert('Please fill in the required fields correctly.');
            return;
        }

        // Prepare the data to be sent to the server
        const feedbackData = {
            topicSuggestion,
            viewerEmail,
            viewerPhone,
            personalInfo,
            articleViewed: FEEDBACK_SUBMITTED
        };

        // Send the feedback data to the server
        fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(feedbackData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Thank you for your feedback!');
                feedbackForm.reset();
            } else {
                alert('There was an issue submitting your feedback. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while sending your feedback.');
        });
    });
});

function validateFeedbackForm(topicSuggestion, viewerEmail, viewerPhone, personalInfo) {
    // Implement validation logic here
    // For example, check if email is valid, if topic suggestion is not empty, etc.
    // This is a placeholder for actual validation logic
    return topicSuggestion.trim() !== '' && viewerEmail.trim() !== '';
}