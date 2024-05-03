const User = require('../models/user');

const handleSubscription = async (req, res) => {
    const { email, explanation, signUp, signUpReason } = req.body;

    try {
        // Check if the user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'Email already subscribed.' });
        }

        // Create a new user with the subscription status
        user = new User({
            email,
            explanation,
            signUp,
            signUpReason,
            isSubscribed: true,
            isAdminApproved: signUp ? false : true // If they want to sign up, admin approval is required
        });

        await user.save();

        res.status(201).json({ message: 'Subscription successful.', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error while subscribing.' });
    }
};

const handleSubscriptionApproval = async (req, res) => {
    const { userId } = req.params;

    try {
        // Admin approves the subscription
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        user.isAdminApproved = true;
        await user.save();

        res.status(200).json({ message: 'User subscription approved.', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error while approving subscription.' });
    }
};

module.exports = {
    handleSubscription,
    handleSubscriptionApproval
};