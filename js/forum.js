document.addEventListener('DOMContentLoaded', function() {
    const forumContainer = document.getElementById('forumContainer');

    function addTopicToForum(topic) {
        const topicElement = document.createElement('div');
        topicElement.classList.add('forum-topic');
        topicElement.innerHTML = `
            <h3>${topic.title}</h3>
            <p>${topic.description}</p>
            <div class="forum-interactions">
                <button onclick="expandTopic('${topic._id}')">Expand</button>
                <button onclick="likeTopic('${topic._id}')">Like</button>
                <button onclick="commentOnTopic('${topic._id}')">Comment</button>
            </div>
        `;
        forumContainer.appendChild(topicElement);
    }

    function expandTopic(topicId) {
        // Logic to expand the topic and show more details or redirect to the topic's page
    }

    function likeTopic(topicId) {
        // Logic to like the topic and update the like count
    }

    function commentOnTopic(topicId) {
        // Logic to post a comment on the topic
    }

    function fetchTrendingTopics() {
        // Fetch trending topics from the server and display them
    }

    function handleNewTopicSubmission() {
        const newTopicForm = document.getElementById('newTopicForm');
        newTopicForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(newTopicForm);
            const newTopic = {
                title: formData.get('title'),
                description: formData.get('description')
            };
            // Logic to submit the new topic to the server
            addTopicToForum(newTopic);
        });
    }

    fetchTrendingTopics();
    handleNewTopicSubmission();
});