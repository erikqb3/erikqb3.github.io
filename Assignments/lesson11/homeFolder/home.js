async function myFetch() {
  let response = await fetch("https://byui-cit230.github.io/weather/data/towndata.json")
  if (!response.ok) {
    throw new Error(`HTTP error! status : ${response.status}`);
  }
  return await response.json();
}

myFetch().then((jsonData) => {
  // console.log(jsonData.towns)
  let prestonInfo = jsonData.towns[6];
  let sodaSpringsInfo = jsonData.towns[0];
  let fishHavenInfo = jsonData.towns[2];

  displayTownInfo(prestonInfo);
  displayTownInfo(sodaSpringsInfo);
  displayTownInfo(fishHavenInfo);

})

function displayTownInfo(townInfo) {
  let townInfo_holder = document.createElement('div');
  townInfo_holder.classList.add('info_holder');

  let townName = document.createElement('h1');
  let townMotto = document.createElement('h3');

  let townStats = document.createElement('div');
  townStats.classList.add("stats_holder");

  let townFounded = document.createElement('h6');
  let townPopulation = document.createElement('h6');
  let townRainFall = document.createElement('h6');
  let townImage = document.createElement('img');

  townName.innerHTML = townInfo.name;
  townMotto.innerHTML = townInfo.motto;
  townFounded.innerHTML = `Year Founded: ${townInfo.yearFounded}`;
  townPopulation.innerHTML = `Population: ${townInfo.currentPopulation}`;
  townRainFall.innerHTML = `Average Rain Fall: ${townInfo.averageRainfall}`;
  
  // console.log(townInfo.photo);
  townImage.setAttribute('src',townInfo.photo);



  switch (townInfo.name) {
    case "Preston":
      document.getElementById("preston_card").appendChild(townInfo_holder)
      townInfo_holder.id="preston_info";
      document.getElementById("preston_info").appendChild(townName);
      document.getElementById("preston_info").appendChild(townMotto);
      document.getElementById("preston_info").appendChild(townStats);
      townStats.id="preston_stats"
      document.getElementById("preston_stats").appendChild(townFounded);
      document.getElementById("preston_stats").appendChild(townPopulation);
      document.getElementById("preston_stats").appendChild(townRainFall);
      document.getElementById("preston_card").appendChild(townImage);
      break;
    case "Soda Springs":
      document.getElementById("sodaSprings_card").appendChild(townInfo_holder)
      townInfo_holder.id="sodaSprings_info";
      document.getElementById("sodaSprings_info").appendChild(townName);
      document.getElementById("sodaSprings_info").appendChild(townMotto);
      document.getElementById("sodaSprings_info").appendChild(townStats);
      townStats.id="sodaSprings_stats"
      document.getElementById("sodaSprings_stats").appendChild(townFounded);
      document.getElementById("sodaSprings_stats").appendChild(townPopulation);
      document.getElementById("sodaSprings_stats").appendChild(townRainFall);
      document.getElementById("sodaSprings_card").appendChild(townImage);
      break;
    default:
      document.getElementById("fishHaven_card").appendChild(townInfo_holder)
      townInfo_holder.id="fishHaven_info";
      document.getElementById("fishHaven_info").appendChild(townName);
      document.getElementById("fishHaven_info").appendChild(townMotto);
      document.getElementById("fishHaven_info").appendChild(townStats);
      townStats.id="fishHaven_stats"
      document.getElementById("fishHaven_stats").appendChild(townFounded);
      document.getElementById("fishHaven_stats").appendChild(townPopulation);
      document.getElementById("fishHaven_stats").appendChild(townRainFall);
      document.getElementById("fishHaven_card").appendChild(townImage);
      break;
      

  }
  
}