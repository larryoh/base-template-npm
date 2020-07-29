
// Use the sqs-core module to access core Squarespace
// functionality, like Lifecycle and ImageLoader. For
// full documentation, go to:
//
// http://github.com/squarespace/squarespace-core

const core = require('@squarespace/core');

window.addEventListener('DOMContentLoaded', function() {

  const images = document.querySelectorAll('img[data-src]');

  for (let i = 0; i < images.length; i++) {
    core.ImageLoader.load(images[i], {
      load: true
    });
  }

});