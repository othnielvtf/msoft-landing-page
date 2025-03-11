
        // Wait for the document to be fully loaded
        window.addEventListener('load', function() {
            // Set the end date - October 14, 2025
            const endDate = new Date('2025-10-14T00:00:00').getTime();
            
            // Elements
            const daysElement = document.getElementById('days');
            const hoursElement = document.getElementById('hours');
            const minutesElement = document.getElementById('minutes');
            const secondsElement = document.getElementById('seconds');
            const countdownElement = document.getElementById('countdown');
            
            // Update the countdown every second
            function updateCountdown() {
                // Get current time
                const now = new Date().getTime();
                
                // Calculate remaining time
                const timeRemaining = endDate - now;
                
                if (timeRemaining > 0) {
                    // Calculate days, hours, minutes, seconds
                    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
                    
                    // Update the display with leading zeros
                    daysElement.textContent = String(days).padStart(2, '0');
                    hoursElement.textContent = String(hours).padStart(2, '0');
                    minutesElement.textContent = String(minutes).padStart(2, '0');
                    secondsElement.textContent = String(seconds).padStart(2, '0');
                } else {
                    // Time's up
                    countdownElement.innerHTML = "<div class='text-center w-100'><strong>Windows 10 support has ended!</strong></div>";
                    clearInterval(timerInterval);
                }
            }
            
            // Run once immediately
            updateCountdown();
            
            // Then update every second
            const timerInterval = setInterval(updateCountdown, 1000);
        });
        
        // Initialize AOS (Animate On Scroll)
        AOS.init({
            duration: 1000,    // Animation duration in milliseconds
            once: true,        // Whether animation should happen only once
            offset: 100,      // Offset (in px) from the original trigger point
            easing: 'ease-in-out'
        });
 