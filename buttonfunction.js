/**
 * Change the Color of a Button Element when clicking
 * @param {string} className - the Button className
 * @param {string} IdName - the Button Id name
 * @param {string} originalColor - the Original button color
 * @param {string} colorOnClick - the color when clicking
 */
function changeButtonColor(className, IdName, originalColor, colorOnClick) {
  // Initialize the element variable
  let element;

  // Check if className is provided and select the element
  if (className) {
    element = document.querySelector("." + className);
    // If className is not provided, check for IdName
  } else if (IdName) {
    element = document.querySelector("#" + IdName);
  }

  // If an element is found, attach the event listeners
  if (element) {
    // Change color on mouse down
    element.addEventListener("mousedown", function () {
      element.style.backgroundColor = colorOnClick;
    });

    // Revert color on mouse up
    element.addEventListener("mouseup", function () {
      element.style.backgroundColor = originalColor;
    });
  }
}
