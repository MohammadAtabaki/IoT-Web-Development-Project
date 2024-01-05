
const hamburger = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-menu');
const slideout = document.getElementById("slideout");
var slogan = document.getElementById("slo");

// Run once on initial load
checkScreenSize();

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
    document.body.style.backgroundColor = 'white';
    hamburger.style.display = 'none';
    navMenu.style.display = 'flex';
    navMenu.className = 'bigNav';
    console.log('big screen')
}



var city_text = document.getElementById('city-text')

//disappearing header scroll effect

document.addEventListener("scroll", ()=> {
    var distanceFromTop = window.scrollY;
    if (distanceFromTop > 80) {
        var slogan = document.getElementById("slo");
        var city = document.getElementById('city');
        slogan.style.display = 'none';
        city.style.display= 'flex';
        if (distanceFromTop > 150) {
          city_text.classList.add("transformed")
    } else {
        city_text.classList.remove("transformed")
    }
        console.log(distanceFromTop)
}   else {
        var slogan = document.getElementById("slo");
        var city = document.getElementById('city');
        console.log(distanceFromTop);
        slogan.style.display = 'block';
        city.style.display = 'none';
}
})

document.addEventListener("scroll", ()=> {
    if (slideout.classList.contains("transformed")) {
        slideout.classList.remove("transformed")
    }
})


//Make homescreen main picture glow

function glow() {
    var pic = document.getElementById('city_pic')
    pic.classList.toggle("transformed")
}

setInterval(glow,1000)


//To do:
//1. Format slide-out nav items.
//2. Add content.
//3. Rename grid container items.
//4. Go bare w the nav bar?
//5. Footer
//6. More javascript features
//7. Add a carousel somewhere in there