document.addEventListener('DOMContentLoaded', function() {
    const podcastPlayer = document.getElementById('podcastPlayer');
    const playButton = podcastPlayer.querySelector('.play-button');
    const pauseButton = podcastPlayer.querySelector('.pause-button');
    const progressBar = podcastPlayer.querySelector('.progress-bar');
    const progress = progressBar.querySelector('.progress');
    const currentTimeElement = podcastPlayer.querySelector('.current-time');
    const durationTimeElement = podcastPlayer.querySelector('.duration-time');
    const audio = new Audio();

    let isPlaying = false;
    let duration = 0;

    function initPodcastPlayer(podcastUrl) {
        audio.src = podcastUrl;
        audio.load();
        audio.addEventListener('loadedmetadata', function() {
            duration = audio.duration;
            durationTimeElement.textContent = formatTime(duration);
        });
    }

    function togglePlayPause() {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        isPlaying = !isPlaying;
        playButton.style.display = isPlaying ? 'none' : 'block';
        pauseButton.style.display = isPlaying ? 'block' : 'none';
    }

    function updateProgress() {
        const currentTime = audio.currentTime;
        const progressPercentage = (currentTime / duration) * 100;
        progress.style.width = `${progressPercentage}%`;
        currentTimeElement.textContent = formatTime(currentTime);
    }

    function setProgress(e) {
        const clickX = e.offsetX;
        const width = this.clientWidth;
        const duration = audio.duration;
        audio.currentTime = (clickX / width) * duration;
    }

    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    playButton.addEventListener('click', togglePlayPause);
    pauseButton.addEventListener('click', togglePlayPause);
    audio.addEventListener('timeupdate', updateProgress);
    progressBar.addEventListener('click', setProgress);
    audio.addEventListener('ended', function() {
        isPlaying = false;
        playButton.style.display = 'block';
        pauseButton.style.display = 'none';
        audio.currentTime = 0;
        updateProgress();
    });

    // Initialize the podcast player with the first podcast URL
    initPodcastPlayer('assets/podcasts/podcast1.mp3');
});