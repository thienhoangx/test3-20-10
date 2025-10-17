function showMainPage() {
  const overlay = document.getElementById('overlay');
  const mainContent = document.getElementById('mainContent');

  overlay.style.opacity = '0';
  mainContent.classList.remove('blurred');

  setTimeout(() => {
    overlay.style.display = 'none';
  }, 500); // Match the transition duration in SCSS
}

function showFlowerPage() {
  const mainContent = document.getElementById('mainContent');
  const flowerPage = document.getElementById('flowerPage');

  mainContent.style.display = 'none';
  flowerPage.style.display = 'flex';
}
