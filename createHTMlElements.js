/**
 * Create a New HTML Element with custome properties
 * @param {string} tag - the type of element Ex:("div","span","ul",...etc)
 * @param {Object} options - the options for customizing the element
 * @param {string} options.id - the unique identifier for the element (optional)
 * @param {string|string[]} options.classes - the classe or classes for the element (optional)
 * @param {string} options.text - The text content to add inside the element (optional).
 * @return {HTMLElement} - the created element
 * */

// the counter variable is enclosed within the scope of an immediately invoked function expression (IIFE).
// This creates a private scope for counter, and the createHtmlElement function now has access to it.
var createHtmlElement = function () {
  let counter = 1;
  return function (tag, options = {}) {
    let element = document.createElement(tag);

    // set the unique id for the element
    element.id = options.id || `id-${tag}-#-${counter}`;

    // add multiple classes if drovided
    if (options.classes) {
      if (Array.isArray(options.classes)) {
        element.classList.add(...options.classes);
      }
    } else {
      element.classList.add(options.classes);
    }

    //add text context if drovided
    if (options.text) {
      element.textContent = options.text;
    }
    counter += 1;
    return element;
  };
};

export default createHtmlElement();
