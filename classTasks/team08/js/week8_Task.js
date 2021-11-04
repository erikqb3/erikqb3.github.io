function fetchJoke () {
  try{
    const url = "https://icanhazdadjoke.com";
    fetch(url, {
      method:'GET',
      headers: {'Accept': 'application/json'}
    })
      .then(response => response.json())
      .then(data => displayJoke(data));
  }
  
  catch(e) {
    console.log(e);
}
}

function displayJoke (data) {
  let joke = data.joke;
  div = document.getElementById("joke")
  div.innerHTML = joke
 
  if (joke.length < 50) {
    div.style.fontSize = "3em";
  } 
  else if ((joke.length >=50) && (joke.length<= 150)) {
    div.style.fontSize = "2em";
  }
  else if ((joke.length > 150) && (joke.length <=200)) {
    div.style.fontSize = "1.5sem"
  }
  else {
    div.style.fontSize = "1sem"
  }

}

window.onclick = function(event) {
  fetchJoke()
}
