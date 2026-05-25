document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById('preloader');
    
    // Select BOTH counters (the white back layer and the dark masked layer)
    const counterElements = document.querySelectorAll('.money-counter');
    
    let currentCount = 0;
    const targetCount = 684920; 
    const executionDuration = 2200; 
    const engineStart = performance.now();

    function processMoneyTicker(timestamp) {
        const runtime = timestamp - engineStart;
        
        if (runtime < executionDuration) {
            const linearProgress = runtime / executionDuration;
            const mechanicalBrake = linearProgress * (2 - linearProgress); 
            
            currentCount = Math.floor(mechanicalBrake * targetCount);
            
            // Updates both numbers instantly in tandem
            counterElements.forEach(el => el.textContent = "₩" + currentCount.toLocaleString());
            
            requestAnimationFrame(processMoneyTicker);
        } else {
            counterElements.forEach(el => el.textContent = "₩" + targetCount.toLocaleString());
            executeHandoff();
        }
    }

    requestAnimationFrame(processMoneyTicker);

    function executeHandoff() {
        setTimeout(() => {
            preloader.classList.add('done');
        }, 300); 
    }
});
