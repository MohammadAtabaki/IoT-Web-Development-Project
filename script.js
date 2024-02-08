
const hamburger = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-menu');
const slideout = document.getElementById("slideout");


// Run once on initial load
checkScreenSize();
homeMediaToggle();

// Add event listener for window resizing
window.addEventListener('resize', checkScreenSize);

// Function to check screen size and conditionally execute code
function checkScreenSize() {
    if (window.innerWidth <= 1000) {
        executeForSmallScreen();
    }
    else {
        executeForLargeScreen();
    }
}

// Function to be executed below 800px screen
function executeForSmallScreen() {
    hamburger.style.display = 'flex';
    navMenu.style.display = 'none';
    console.log('small screen')
    }

hamburger.addEventListener('click', () => {
    slideout.classList.toggle("transformed");
    if (slogan.style.display === 'block') {
        slogan.style.display = 'none'
    }
    else {
        slogan.style.display = 'block'
    }
});

function executeForLargeScreen() {
    hamburger.style.display = 'none';
    navMenu.style.display = 'flex';
    navMenu.className = 'bigNav';
    console.log('big screen')
}


//disappearing scroll effect

function homeMediaToggle() {
    const cityText = document.getElementById('city-text');
    const slogan = document.getElementById("slo");
    const city = document.getElementById('city');

    document.addEventListener("scroll", () => {
        const distanceFromTop = window.scrollY;

        // Hide slogan and show city
        if (distanceFromTop > 100 && distanceFromTop <= 300) {
            slogan.style.display = 'none';
            city.style.display = 'flex';
            cityText.classList.remove("transformed");
        }
        // Transform city text
        else if (distanceFromTop > 300) {
            cityText.classList.add("transformed");
        }

        // Default state
        else {
            slogan.style.display = 'block';
            city.style.display = 'none';
            cityText.classList.remove("transformed");
        }
    });
}






//Stylistic Effects

//Make homescreen main picture glow

function glow() {
    var pic = document.getElementById('city_pic')
    pic.classList.toggle("transformed")
}

setInterval(glow,1000)

// carousel for about 

//create array with our images and text
document.addEventListener('DOMContentLoaded', (event) => {
    const aboutContent = [
        {
            img: 'https://digitalassets.tesla.com/tesla-contents/image/upload/v1687364879/powerwall-storm-watch-hero-image.jpg',
            heading: "Tesla's Storm Watch",
            text: "Storm Watch is a feature of Tesla's Powerwall that prepares homeowners for grid outages. Relying on internet connectivity, the Powerwall responds to severe weather alerts by allocating available grid and/or solar energy, ensuring the Powerwall get a sufficient charge to power the home during a storm."
            },
        {
            img: 'https://eadn-wc01-11124015.nxedge.io/wp-content/uploads/2021/04/Google-nest-tips-1080x675.jpg',
            heading: 'Google Nest Thermostat',
            text: "Google's Nest Thermostat is a smart home device that regulates temperature, learns your preferences, and saves energy. It features Wi-Fi connectivity, remote control via smartphone app, and compatibility with voice assistants like Google Assistant and Alexa. Its sleek design and intuitive interface make home climate management efficient and convenient."
        },
        {
            img: 'https://www.greenpm.co.uk/sites/default/files/IMG_28168989.jpg',
            heading: 'Footbot Air Quality Monitor',
            text: 'Footboy Air Quality Monitor is a compact device that measures indoor air quality, detecting pollutants like PM2.5, VOCs, and CO2. It provides real-time data, alerts users to unhealthy conditions, and integrates with smartphones for remote monitoring. With its user-friendly design, it helps ensure a healthier living environment.'
        }
        // Add more content as needed
    ];

    let currentContentIndex = 0;

    const aboutImg = document.getElementById('about-img');
    const aboutHeading = document.getElementById('about-heading');
    const aboutText = document.getElementById('about-text');

    setInterval(() => {
        currentContentIndex = (currentContentIndex + 1) % aboutContent.length; // Cycle through the content
        const content = aboutContent[currentContentIndex];
        aboutImg.src = content.img;
        aboutImg.alt = 'About Image ' + (currentContentIndex + 1);
        aboutHeading.textContent = content.heading;
        aboutText.textContent = content.text;
    }, 10000); // Change content every 5 seconds
});
