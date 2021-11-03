function handleClick () {
  console.log("Hellw World");
  // e.preventDefault();
  return false;
}

function adjustRating(rating) {
  document.getElementById("ratingValue").innerHTML = rating;
}