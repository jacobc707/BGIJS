searchText = document.getElementById("searchText");
findDiv = document.getElementById("find");

territories = {
  "Stanford Territory": "stanford",
  "Palo Alto Territory": "paloalto",
  "Mountain View Territory": "mountainview",
  "Los Altos Territory": "losaltos",
  "Cupertino Territory": "cupertino",
  "South Sunnyvale Territory": "ssunnyvale",
  "North Sunnyvale Territory": "nsunnyvale",
  "Santa Clara Territory": "santaclara",
  "Central San Jose Territory": "centralsjc",
  "West San Jose Territory": "westsjc",
  "Saratoga Territory": "saratoga",
  "Los Gatos Territory": "losgatos",
  "Campbell Territory": "campbell",
  "Willow Glen Territory": "willowglen",
  "Southeast San Jose Territory": "southeastsjc",
  "Southwest San Jose Territory": "southwestsjc",
};

function updateFind(textEntry) {
  findDiv.innerHTML = ""
  console.log(searchText.value)


  for (let territory in territories) {
    if (territory.toLowerCase().includes(searchText.value)) {

      territoryDiv = document.createElement("div");
      territoryDiv.setAttribute("class", "territory");
      findDiv.appendChild(territoryDiv);

      img = document.createElement("img");
      img.setAttribute("src", "images/territoryOutlines/" + territories[territory]+".png");
      territoryDiv.appendChild(img);

      header = document.createElement("h2");
      header.innerHTML = territory;
      territoryDiv.appendChild(header);
    }
  }
}

updateFind(searchText.value);