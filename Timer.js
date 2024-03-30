function startInterval() {
    var timerInput = document.getElementById('timer');
    var intervalSeconds = parseInt(timerInput.value);

    // Check if input is valid
    if (isNaN(intervalSeconds) || intervalSeconds <= 0) {
        alert('Please enter a valid positive number for the interval.');
        return;
    }

    // Convert seconds to milliseconds
    var intervalMilliseconds = intervalSeconds * 1000;