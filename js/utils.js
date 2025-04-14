/**
 * Preloads images specified by the CSS selector with timeout for faster initial loading
 * @function
 * @param {string} [selector='img'] - CSS selector for target images.
 * @param {number} [timeout=2000] - Maximum time to wait before resolving anyway.
 * @returns {Promise} - Resolves when images are loaded or timeout is reached.
 */
const preloadImages = (selector = 'img', timeout = 2000) => {
    return new Promise((resolve) => {
      // Set a timeout to resolve the promise after the specified time
      // This ensures the site doesn't hang if images take too long
      const timeoutId = setTimeout(() => {
        console.log('Image preloading timed out');
        resolve();
      }, timeout);
      
      // Use imagesLoaded with a completion callback
      imagesLoaded(document.querySelectorAll(selector), { background: true }, () => {
        clearTimeout(timeoutId);
        resolve();
      });
    });
  };
  
  // Exporting utility functions for use in other modules.
  export {
    preloadImages
  };