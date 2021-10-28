const imagesArray = document.querySelectorAll("[data-src]");

//optional parameters being set fo the IntersectionalObserver
const imgOptions = {
  threshold:0, 
  rootMargin: "0px 0px -250px 0px"
};


function preloadImage (IMG) {
  const SRC=IMG.getAttribute("data-src");
   IMG.removeAttribute("data-src");
  if (!SRC) {
    return;
  }
  // IMG.src = SRC; 
  IMG.setAttribute('src',SRC)
}

//first check to see if Intersectional Observer is supported
if('IntersectionObserver' in window) {
  const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }
      else {
        preloadImage(entry.target);
        imgObserver.unobserve(entry.target);
      }
    });
  }, imgOptions);
  
  //loop through each img and check status and load if necessary
  imagesArray.forEach(image => {
    imgObserver.observe(image);
  });
}
else { //jsut load All images normally if not supported
  imagesArray.forEach(image => {
    preloadImage(image)
  });
}