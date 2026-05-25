document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById('preloader');
    const splashScreen = document.getElementById('splash-screen');
    const counterElement = document.getElementById('money-counter');
    
    let currentCount = 0;
    const targetCount = 748290; // The final "amount" counted
    const duration = 2500; // 2.5 seconds of counting speed
    const startTime = performance.now();

    // 1. Money Counter Machine Functionality
    function updateCounter(currentTime) {
        const elapsedTime = currentTime - startTime;
        if (elapsedTime < duration) {
            // Progressive mathematical scaling to mimic machine physics slowing down at the end
            const progress = elapsedTime / duration;
            const easeOutQuad = progress * (2 - progress); 
            currentCount = Math.floor(easeOutQuad * targetCount);
            
            // Format number with commas to look like real legal tender currency tracking
            counterElement.textContent = currentCount.toLocaleString();
            
            requestAnimationFrame(updateCounter);
        } else {
            counterElement.textContent = targetCount.toLocaleString();
            endPreloader();
        }
    }

    // Start counter clock
    requestAnimationFrame(updateCounter);

    // 2. Shift from Preloader to Site Splash Action Layer
    function endPreloader() {
        setTimeout(() => {
            // Fade out preloader
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
            
            // Initialize splash page interface
            splashScreen.style.display = 'flex';
            setTimeout(() => {
                splashScreen.style.opacity = '1';
            }, 50);
        }, 400); // Small cinematic pause right after calculation ends
    }
});

// 3. Main Splash Verification Action Layer (From previous step)
document.getElementById('enter-btn').addEventListener('click', function() {
    const splash = document.getElementById('splash-screen');
    const video = document.getElementById('bg-video');

    splash.style.opacity = '0';
    splash.style.visibility = 'hidden';

    video.muted = false;
    video.play().catch(error => {
        console.log("Audio unlock context failed or rejected: ", error);
    });
});
