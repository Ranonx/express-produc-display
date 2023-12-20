/** @format */

// Listen for the scroll event on the window
window.addEventListener('scroll', function () {
  // Get the current scroll position
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;

  // Set the opacity based on the scroll position
  var opacity = scrollPosition > 0 ? 0.45 : 0.75;

  // Apply the opacity to the back button
  var backButton = document.querySelector('.back-button');
  if (backButton) {
    backButton.style.opacity = opacity;
  }
});
