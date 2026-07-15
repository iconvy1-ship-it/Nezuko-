// Function to move to the next screen with smooth transitions
function nextScreen(current) {
    const currentScreen = document.getElementById(`screen-${current}`);
    const nextScreen = document.getElementById(`screen-${current + 1}`);

    currentScreen.style.opacity = '0';
    setTimeout(() => {
        currentScreen.classList.remove('active');
        nextScreen.classList.add('active');
        
        // Timeout to trigger the fade-in effect via CSS
        setTimeout(() => {
            nextScreen.style.opacity = '1';
        }, 50);

        // Specific Logic for Screen 2 (Slow Reveal to take time)
        if(current + 1 === 2) {
            setTimeout(() => { document.querySelector('.delay-1').classList.add('show-text'); }, 2000);
            setTimeout(() => { document.querySelector('.delay-2').classList.add('show-text'); }, 4000);
            setTimeout(() => { document.querySelector('.hidden-btn').style.opacity = '1'; }, 6000);
        }
    }, 1000);
}

// Logic for Interactive Question on Screen 3
function wrongAnswer() {
    const feedback = document.getElementById('feedback-text');
    feedback.style.color = '#ff477e';
    feedback.innerText = "Ahhh, wrong answer! Try again Nezuko! 😤";
    feedback.style.animation = "heartbeat 0.5s";
    setTimeout(() => { feedback.style.animation = "none"; }, 500);
}

function rightAnswer() {
    const feedback = document.getElementById('feedback-text');
    feedback.style.color = '#28a745';
    feedback.innerText = "Yesss! Good girl! 😍";
    document.getElementById('proceed-btn').classList.remove('hidden');
    document.getElementById('proceed-btn').style.display = 'inline-block';
}

// The magical dodging "No" Button on Screen 4
const noBtn = document.getElementById('btn-no');

// For Desktop (hover)
noBtn.addEventListener('mouseover', moveButton);
// For Mobile (touch)
noBtn.addEventListener('touchstart', moveButton);

function moveButton(e) {
    e.preventDefault(); // Prevent clicking
    
    const x = Math.random() * (window.innerWidth - noBtn.clientWidth - 50);
    const y = Math.random() * (window.innerHeight - noBtn.clientHeight - 50);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// Final Screen triggers an explosion of hearts
function finalScreen() {
    nextScreen(4);
    createHeartShower();
}

// Generates background floating hearts automatically
function createHeartShower() {
    const container = document.getElementById('hearts-container');
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerHTML = '❤️';
        
        // Randomize position and size
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's'; // 2s to 5s
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        
        container.appendChild(heart);
        
        // Remove after animation to prevent lag
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300); // New heart every 300ms
}

// Start a slow background heart rain immediately
createHeartShower();
