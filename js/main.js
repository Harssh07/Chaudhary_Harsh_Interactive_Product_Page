const hamburgeramburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const toggleThemeButton = document.getElementById('toggleTheme');
const bodyElement = document.body;

toggleThemeButton.addEventListener('click', function() {
if (bodyElement.classList.contains('light-theme')) {
    bodyElement.classList.remove('light-theme');
} else {
    bodyElement.classList.add('light-theme');
}
});


function changeImage(Goairpop, color) {
    const imagePath = `images/GOAirPopRoseCover.webp`; 
    const earbudImage = document.getElementById('model-1');
    earbudImage.src = images/GOAirPopRoseCover.webp;
  }
  


