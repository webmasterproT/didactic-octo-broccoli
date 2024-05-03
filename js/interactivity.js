document.addEventListener('DOMContentLoaded', () => {
  const redPillButton = document.getElementById('redPillButton');
  const rabbitHoleButton = document.getElementById('rabbitHoleButton');

  redPillButton.addEventListener('click', handleRedPillClick);
  rabbitHoleButton.addEventListener('mouseover', handleRabbitHoleHover);
  rabbitHoleButton.addEventListener('click', handleRabbitHoleClick);
});

function handleRedPillClick() {
  window.location.href = 'about.html';
}

function handleRabbitHoleHover() {
  rabbitHoleButton.style.visibility = 'visible';
}

function handleRabbitHoleClick() {
  const userChoice = confirm('Is ignorance bliss?');
  if (userChoice) {
    window.location.href = 'https://www.google.com/search?q=bliss';
  } else {
    window.location.href = 'articles/index.html';
  }
}

// Redirect to home page if accessed via search engine
if (document.referrer.includes('google') || document.referrer.includes('bing') || document.referrer.includes('yahoo')) {
  redirectToHomePage();
}

function redirectToHomePage() {
  window.location.href = 'index.html';
}