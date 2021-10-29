console.log("Hellow! I'm Honest!")

let currentTemp = document.getElementById("highTemp").innerHTML;
let windSpeed = document.getElementById("windSpeed").innerHTML;
let windChillTemp = document.getElementById("windChillTemp").innerHTML;

windChillTemp = Math.floor(35.74 + (0.6215*currentTemp) - (35.75*Math.pow(windSpeed,0.16)) + (0.4275*currentTemp*Math.pow(windSpeed,0.16)))

console.log(windChillTemp)

