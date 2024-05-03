document.addEventListener('DOMContentLoaded', function() {
    initAnimation();
    handleRedPillClick();
    handleRabbitHoleHover();
    handleRabbitHoleClick();
    redirectToHomePage();
});

function redirectToHomePage() {
    if (document.referrer && !document.referrer.includes(window.location.hostname)) {
        window.location.href = '/index';
    }
}

// Event listeners for interactive elements
document.getElementById('redPillButton').addEventListener('click', function() {
    window.location.href = '/about.html';
});

document.getElementById('rabbitHoleButton').addEventListener('mouseover', function() {
    this.style.visibility = 'visible';
});

document.getElementById('rabbitHoleButton').addEventListener('click', function() {
    var userChoice = confirm('Is ignorance bliss?');
    if (userChoice) {
        window.location.href = 'https://www.google.com/search?q=bliss';
    } else {
        window.location.href = '/articles/index.html';
    }
});