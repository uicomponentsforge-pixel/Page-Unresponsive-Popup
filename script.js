const overlay = document.getElementById('unresponsive-overlay');
const waitBtn = document.getElementById('wait-btn');
const exitBtn = document.getElementById('exit-btn');

// Trigger on exit intent (mouse leaves the viewport towards top)
document.addEventListener('mouseleave', (e) => {
  if (e.clientY <= 0) {
    overlay.style.display = 'flex';
  }
});

// "Wait" button hides the popup
waitBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

// "Exit Page" button redirects or closes the window
exitBtn.addEventListener('click', () => {
  window.location.href = 'https://www.google.com'; // Change to desired exit URL
});