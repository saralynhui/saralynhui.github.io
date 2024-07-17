document.addEventListener('DOMContentLoaded', function() {
    // Get all elements with the class 'green-box'
    var greenBoxes = document.querySelectorAll('.green-box');

    // Function to add 'visible' class to elements in viewport or earlier
    function showVisibleOrEarlyBoxes() {
        var triggerOffset = window.innerHeight * 0.8; // Adjust this percentage as needed

        greenBoxes.forEach(function(box) {
            var boxTop = box.getBoundingClientRect().top;
            if (boxTop < triggerOffset) {
                box.classList.add('visible');
            }
        });
    }

    // Initial check when page loads
    showVisibleOrEarlyBoxes();

    // Event listener for scroll events to check visibility
    window.addEventListener('scroll', showVisibleOrEarlyBoxes);
});
