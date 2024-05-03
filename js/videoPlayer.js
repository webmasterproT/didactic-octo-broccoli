document.addEventListener('DOMContentLoaded', function() {
    const videoPlayer = document.getElementById('videoPlayer');
    const videoList = document.getElementById('videoList');
    const videoDescription = document.getElementById('videoDescription');

    function playVideo(videoSrc, description) {
        if (videoPlayer) {
            videoPlayer.src = videoSrc;
            videoPlayer.play();
            videoDescription.textContent = description;
        }
    }

    if (videoList) {
        videoList.addEventListener('click', function(event) {
            const target = event.target;
            if (target && target.tagName === 'LI') {
                const videoSrc = target.getAttribute('data-video-src');
                const description = target.getAttribute('data-description');
                playVideo(videoSrc, description);
            }
        });
    }

    videoPlayer.addEventListener('ended', function() {
        videoDescription.textContent = 'Select another video to play.';
    });
});

function initVideoPlayer() {
    // Placeholder for any additional initialization code required for video player
}

// Call the initialization function if needed
initVideoPlayer();