
const hamburger = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-menu');
const slideout = document.getElementById("slideout");

// Run once on initial load
checkScreenSize();

// Add event listener for window resizing
window.addEventListener('resize', checkScreenSize);

// Function to be executed at a specific screen size
function executeForSmallScreen() {
    hamburger.style.display = 'flex';
    navMenu.style.display = 'none';
    hamburger.addEventListener('click', () => {
        if (slideout.style.display === 'none') {
            slideout.style.display = 'flex';
        } else {
            slideout.style.display = 'none';
        }})
    }


function executeForLargeScreen() {
    document.body.style.backgroundColor = 'white';
    hamburger.style.display = 'none';
    navMenu.style.display = 'flex';
    navMenu.className = 'bigNav';
    slideout.style.display = 'none';
}

// Function to check screen size and conditionally execute code
function checkScreenSize() {
    if (window.innerWidth <= 600) {
        executeForSmallScreen();
    }
    else {
        executeForLargeScreen();
    }
}
