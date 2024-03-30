function startInterval(intervalSeconds) {
        // Check if input is valid
        if (isNaN(intervalSeconds) || intervalSeconds <= 0) {
            console.error('Invalid interval value.');
            return;
        }

        // Convert seconds to milliseconds
        var intervalMilliseconds = intervalSeconds * 1000;

        // Start the interval
        var intervalId = setInterval(function() {
            // Your interval function logic goes here
            console.log('Interval triggered.');

            // You can access the value of #timer here again if you want

            // Update interval duration based on the decreasing value of #timer
            intervalSeconds = parseInt(document.getElementById('timer').value);
            clearInterval(intervalId); // Clear previous interval
            startInterval(intervalSeconds); // Start new interval with updated duration

        }, intervalMilliseconds);
    }

    // Function to read the interval value from #timer and start the interval
    function loadAndStartInterval() {
        var timerElement = document.getElementById('timer');
        if (!timerElement) {
            console.error('Element with ID "timer" not found.');
            return;
        }

        var intervalSeconds = parseInt(timerElement.value);
        startInterval(intervalSeconds);
    }

    // Call loadAndStartInterval function when the page loads
    window.addEventListener('load', loadAndStartInterval);
