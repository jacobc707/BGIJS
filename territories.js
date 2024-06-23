searchText = document.getElementById("searchText");
findDiv = document.getElementById("find");
detailsDiv = document.getElementById("detailsDiv");
detailsDiv.style.zIndex = "-1";
detailsDiv.style.backgroundColor = "rgba(0, 0, 0, 0.0)";

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

function updateFind() {
  findDiv.innerHTML = "";
  console.log(searchText.value);

  for (let territory in territories) {
    if (territory.toLowerCase().includes(searchText.value.toLowerCase())) {
      territoryDiv = document.createElement("div");
      territoryDiv.setAttribute("class", "territory");
      territoryDiv.setAttribute("onclick", "showDetails('" + territory + "')");
      findDiv.appendChild(territoryDiv);

      img = document.createElement("img");
      img.setAttribute(
        "src",
        "images/territoryOutlines/" + territories[territory] + ".png"
      );
      territoryDiv.appendChild(img);
      header = document.createElement("h2");
      header.innerHTML = territory;
      territoryDiv.appendChild(header);
    }
  }
}

function showDetails(detailItemClicked) {
  console.log(detailItemClicked);
  console.log(territories[detailItemClicked]);

  details = document.createElement("div");
  details.setAttribute("class", "details");
  detailsDiv.appendChild(details);

  detailsDiv.style.zIndex = "1";
  detailsDiv.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  

  detailsHead = document.createElement("div");
  detailsHead.setAttribute("class", "detailsHead");
  details.appendChild(detailsHead);

  detailsImg = document.createElement("img");
  detailsImg.setAttribute(
    "src",
    "images/territoryOutlines/" + territories[detailItemClicked] + ".png"
  );
  detailsHead.appendChild(detailsImg);

  detailsHeadHeader = document.createElement("h2");
  detailsHeadHeader.innerHTML = detailItemClicked;
  detailsHead.appendChild(detailsHeadHeader);


  detailsBody = document.createElement("div");
  detailsBody.setAttribute("class", "detailsBody");
  details.appendChild(detailsBody);

  createDetailsBody();

  detailsX = document.createElement("div");
  detailsX.setAttribute("class", "detailsX");
  details.appendChild(detailsX);
  details.setAttribute("onclick", "hideDetails()");
}

function hideDetails() {
  detailsDiv.style.zIndex = "-1";
  detailsDiv.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
  details.remove();
}

updateFind(searchText.value);

function createDetailsBody(){
  detailsInfo = document.createElement("div")
  detailsBAndC = document.createElement("div")

  detailsInfo.setAttribute("class", "detailsInfo")
  detailsInfo.setAttribute("class", "detailsBAndC")

  detailsBody.appendChild(detailsInfo);
  detailsBody.appendChild(detailsBAndC);

  createDetailsInfo();
}

function createDetailsInfo(){
  detailsInfoOrder = [""]
}
