var trainbox = document.getElementById('trainbox')
var busbox = document.getElementById('busbox')
var trainradio = document.getElementById('trainradio')
var busradio = document.getElementById('busradio')
var trainmode = document.getElementById('trainmode')
var busmode = document.getElementById('busmode')

var trainselector = document.getElementById('trainmodelist')
var busselector = document.getElementById('busmodelist')

var selectedMOT /* mode of transport */ = null
var gMOT = null; /* bus or train, basically*/
var SoM = null; /* stops or miles, depending on what it is*/

var stopsbox = document.getElementById('stopsbox')
var milesbox = document.getElementById('milesbox')

var stops = document.getElementById('stops')
var miles = document.getElementById('miles')

var costDisplayNumber = document.getElementById('costDisplayNumber')

var cost = 0;

function display() {
    console.log(cost)
    costDisplayNumber.innerHTML = cost;
}

var costDictionary = {
    "VTA Local Infrequent" : 25,
    "VTA Local Frequent" : 40,
    "VTA Rapid Infrequent" : 60,
    "VTA Rapid Frequent" : 80,
    "SamTrans" : 25,
    "AC Transit" : 25,
    "DB Express" : 25,
    "ACE Shuttle" : 25,
    "Marguerite" : 35,
    "MVgo" : 25,
    "MVCS" : 25,
    "ACE Shuttle" : 25,

    "VTA" : 40,
    "Caltrain - local" : 150,
    "Caltrain - limited" : 180,
    "Caltrain - Baby Bullet" : 210,
    "ACE" : 140,
    "Amtrak" : 140
}


function checkClick(){
    if (trainradio.checked == true){
        trainbox.classList.remove("hidden")
    } else {
        trainbox.classList.add("hidden")
    }

    if (busradio.checked == true){
        busbox.classList.remove("hidden")
    } else {
        busbox.classList.add("hidden")
    }

    display()
}

function selected(){
    if (trainradio.checked==true){
        selectedMOT = trainselector.value
        gMOT = "train"
        milesbox.classList.remove("visible")
        milesbox.classList.add("hidden")
        stopsbox.classList.remove("visible")
        stopsbox.classList.add("hidden")
    } else {
        selectedMOT = busselector.value
        gMOT = "bus"
        stopsbox.classList.remove("visible")
        stopsbox.classList.add("hidden")
        milesbox.classList.remove("visible")
        milesbox.classList.add("hidden")
    }
    
    if (gMOT == "bus"){
        milesbox.classList.remove("hidden")
        milesbox.classList.add("visible")
    } else {
        stopsbox.classList.remove("hidden")
        stopsbox.classList.add("visible")
    }

    display()
}

function typed(){
    if (trainradio.checked==true){
        SoM = stops.value
    } else {
        SoM = miles.value
    }

    cost = costDictionary[selectedMOT] * SoM
    
    display()
}

checkClick()

document.addEventListener("click", checkClick)

/*  function modeButton(){
    if (((trainradio.checked==true)||(busradio.checked=true))&&(trainmode=="ACE")){
        console.log("yes")
    }
} */