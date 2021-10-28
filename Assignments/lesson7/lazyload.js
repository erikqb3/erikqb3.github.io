console.log("Hellow! I'm Honest")


const imagesArray = document.querySelectorAll("[data-src]");
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

imagesArray.forEach(image => {
  imgObserver.observe(image);
});