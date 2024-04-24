document.addEventListener('DOMContentLoaded', function() {
    const arrowButton = document.getElementById('arrowButton');
    const squareContainer = document.querySelector('.text-container');
  
    if (arrowButton && squareContainer) {
      arrowButton.addEventListener('click', () => {
        const containerBottom = $(squareContainer).offset().top + $(squareContainer).outerHeight(true);
        $("html, body").animate({ scrollTop: containerBottom }, "slow");
        
        // Change the display property of the text container to block
        squareContainer.style.display = 'block';
      });
    } else {
      console.error("One or more elements not found.");
    }
  });