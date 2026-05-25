document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById('preloader');
    const counterElement = document.getElementById('money-counter');
    
    let currentCount = 0;
    const targetCount = 684920; // The machine calculation ceiling point
    const executionDuration = 2200; // Complete operations execution window (2.2s)
    const engineStart = performance.now();

    function processMoneyTicker(timestamp) {
        const runtime = timestamp - engineStart;
        
        if (runtime < executionDuration) {
            const linearProgress = runtime / executionDuration;
            // Mechanical ease-out deceleration curve modeling
            const mechanicalBrake = linearProgress * (2 - linearProgress); 
            
            currentCount = Math.floor(mechanicalBrake * targetCount);
            counterElement.textContent = currentCount.toLocaleString();
            
            requestAnimationFrame(processMoneyTicker);
        } else {
            counterElement.textContent = targetCount.toLocaleString();
            executeHandoff();
        }
    }

    // Initialize mechanical rendering loop
    requestAnimationFrame(processMoneyTicker);

    function executeHandoff() {
        setTimeout(() => {
            // Appends your structural state trigger natively
            preloader.classList.add('done');
        }, 300); // Sharp rhythmic beat pause before view reveal
    }
});
