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

var costDictionary = {
    "VTA Local Infrequent" : 25,
    "VTA Local Frequent" : 40,
    "VTA Rapid Infrequent" : 60,
    "VTA Rapid Frequent" : 80,
    "SamTrans" : 235,
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


function radioChanged() {
    console.log("radioChanged");
    milesbox.classList.add("hidden")
    stopsbox.classList.add("hidden")
    busbox.classList.add("hidden")
    trainbox.classList.add("hidden")
    miles.value = ""
    stops.value = ""
    trainselector.value=""
    busselector.value=""
    costDisplayNumber.innerHTML = "---"



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
}

function selected() {
    milesbox.classList.add("hidden")
    stopsbox.classList.add("hidden")
    miles.value = ""
    stops.value = ""
    costDisplayNumber.innerHTML = "---"

    if (trainradio.checked == true){
        stopsbox.classList.remove("hidden")
    } else {
        stopsbox.classList.add("hidden")
    }

    if (busradio.checked == true){
        milesbox.classList.remove("hidden")
    } else {
        milesbox.classList.add("hidden")
    }
}

function typed() {
    if (allFieldsFilled()){
        if (trainradio.checked == true){
            selectedMOT = trainselector.value
            console.log(trainselector.value)
        }
        if (busradio.checked == true){
            selectedMOT = busselector.value
        }

        displayCost()

    }
    else {
        console.log("blah")
    }
}

function allFieldsFilled(){
    if (trainradio.checked || busradio.checked){
        if (!(miles.value=="" && stops.value=="")){
            return true;
        }
    }
    return false;
}

function calculateCost(selectedMOT, multiplier){
    console.log(selectedMOT)
    console.log(multiplier)
    return costDictionary[selectedMOT] * multiplier;
}

function displayCost(){
    if (trainradio.checked==true){
        sm = stops.value
    }
    if (busradio.checked==true){
        sm = miles.value
    }

    costDisplayNumber.innerHTML = calculateCost(selectedMOT, sm)
}

radioChanged()