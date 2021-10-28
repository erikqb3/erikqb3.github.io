(function() {
    // Initialize Intersection Observer. The argument passed here is the callback
    // function that should be run when the observer is triggered.
    var observer = new IntersectionObserver(onIntersect);
    // Observe every element with the "data-lazy-load" attribute for it to
    // intersect the screen.
    document.querySelectorAll('[data-lazy-load]').forEach(function(img) {
      observer.observe(img);
    });
  
    // This is the callback function when the observer is triggered. entries is an
    // array of all observable elements for which the function was triggered, and
    // observer is our observer instance.
    function onIntersect(entries, observer) {
      // Step through each entry in the entries array ...
      entries.forEach(function(entry) {
        // Don't do anything if the element has already been processed or if it
        // isn't currently intersecting. The Intersection Observer also fires when
        // an element leaves the viewport, which is why we need this check.
        if (entry.target.getAttribute('data-processed') || !entry.isIntersecting) return true;
        // Set the images source to the value of the "data-source" attribute. This
        // is why we were storing the source we ultimately want to load in a data
        // attribute.
        entry.target.setAttribute('src', entry.target.getAttribute('data-src'));
        // Add a new attribute to the image called "data-processed" and set it to
        // true. We do this so we only process each element a single time and we
        // don't try to reload an image that's already been loaded.
        entry.target.setAttribute('data-processed', true);
      });
    }
  })();



