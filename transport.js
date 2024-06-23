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
    "VTA Local Infrequent" : 100,
    "VTA Local Frequent" : 160,
    "VTA Rapid Infrequent" : 240,
    "VTA Rapid Frequent" : 320,
    "SamsTrans" : 100,
    "AC Transit" : 100,
    "DB Express" : 100,
    "Marguerite" : 140,
    "MVgo" : 100,
    "MVCS" : 100,
    "ACE Shuttle" : 100,

    "VTA - Orange" : 160,
    "VTA - GreenBlue" : 200,
    "Caltrain - local" : 500,
    "Caltrain - limited" : 600,
    "Caltrain - Baby Bullet" : 700,
    "ACE" : 650,
    "Amtrak" : 650
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