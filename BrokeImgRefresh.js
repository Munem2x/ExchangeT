// Function to check if element is loaded correctly
    function isElementLoaded() {
        var tdElement = $('#myform td');
        if (tdElement.length > 0) {
            var imgElements = tdElement.find('img');
            // Check if there are exactly 4 images
            if (imgElements.length === 4) {
                // Check if all images are loaded
                var allLoaded = true;
                imgElements.each(function() {
                    if (!this.complete || typeof this.naturalWidth === "undefined" || this.naturalWidth === 0) {
                        allLoaded = false;
                        return false; // Break out of the loop
                    }
                });
                return allLoaded;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    // Function to refresh the page
    function refreshPage() {
        location.reload();
    }