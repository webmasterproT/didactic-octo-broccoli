const axios = require('axios');

const apiHelpers = {
    redirectToGoogleSearch: function(query) {
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.location.href = searchUrl;
    },

    redirectToArticleSection: function() {
        window.location.href = '/articles';
    },

    fetchArticlesByTopic: async function(topic) {
        try {
            const response = await axios.get(`/articles/${topic}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching articles by topic:', error);
            throw error;
        }
    },

    postSubscription: async function(subscriptionData) {
        try {
            const response = await axios.post('/subscribe', subscriptionData);
            return response.data;
        } catch (error) {
            console.error('Error posting subscription:', error);
            throw error;
        }
    },

    postFeedback: async function(feedbackData) {
        try {
            const response = await axios.post('/feedback', feedbackData);
            return response.data;
        } catch (error) {
            console.error('Error posting feedback:', error);
            throw error;
        }
    },

    notifyArticleViewed: async function(articleId, userData) {
        try {
            const response = await axios.post(`/articles/${articleId}/viewed`, userData);
            return response.data;
        } catch (error) {
            console.error('Error notifying article viewed:', error);
            throw error;
        }
    },

    fetchForumTopics: async function(forumSection) {
        try {
            const response = await axios.get(`/forum/${forumSection}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching forum topics:', error);
            throw error;
        }
    },

    postNewForumTopic: async function(forumSection, topicData) {
        try {
            const response = await axios.post(`/forum/${forumSection}`, topicData);
            return response.data;
        } catch (error) {
            console.error('Error posting new forum topic:', error);
            throw error;
        }
    }
};

module.exports = apiHelpers;