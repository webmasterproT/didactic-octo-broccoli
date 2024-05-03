const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const isTextValid = (text, minLength = 0, maxLength = 10000) => {
    return typeof text === 'string' && text.length >= minLength && text.length <= maxLength;
};

const validateSubscriptionForm = (email, subscriptionReason, signUpReason) => {
    const errors = [];

    if (!isEmailValid(email)) {
        errors.push('Invalid email address.');
    }

    if (subscriptionReason && !isTextValid(subscriptionReason, 0, 10000)) {
        errors.push('Subscription reason must be between 0 and 10,000 characters.');
    }

    if (signUpReason && !isTextValid(signUpReason, 500, 10000)) {
        errors.push('Sign up reason must be between 500 and 10,000 characters.');
    }

    return {
        isValid: errors.length === 0,
        errors
    };
};

const validateFeedbackForm = (relatedTopic, personalInfo) => {
    const errors = [];

    if (relatedTopic && !isTextValid(relatedTopic, 0, 1000)) {
        errors.push('Related topic suggestion must be between 0 and 1,000 characters.');
    }

    if (personalInfo && !isTextValid(personalInfo, 0, 10000)) {
        errors.push('Personal information must be between 0 and 10,000 characters.');
    }

    return {
        isValid: errors.length === 0,
        errors
    };
};

module.exports = {
    validateSubscriptionForm,
    validateFeedbackForm
};