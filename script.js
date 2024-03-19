document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('image');
    const image1Src = 'polite cat.png'; // Path to the first image
    const image2Src = 'sadcat.png'; // Path to the second image

    let isImage1 = true; // Flag to track which image is currently displayed

    // Function to toggle between image1 and image2
    function toggleImage() {
        if (isImage1) {
            image.src = image2Src;
        } else {
            image.src = image1Src;
        }
        isImage1 = !isImage1; // Toggle the flag
    }

    // Add click event listener to the image
    image.addEventListener('click', toggleImage);
});
