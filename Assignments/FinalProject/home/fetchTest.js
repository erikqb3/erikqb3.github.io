stop = false;
counter = 0;
let randNumb;
while (stop == false) {
  randNumb = Math.floor(Math.random() * 11)
  counter++;
  console.log(counter, randNumb);
  if (counter == 10) {
    stop = true;
  }
}

for (i=0; i<counter; i++) {
  
}