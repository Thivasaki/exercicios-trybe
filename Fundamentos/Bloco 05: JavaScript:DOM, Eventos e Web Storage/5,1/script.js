let emergenciaBackground = document.querySelector(".emergency-tasks");
let naoEmergenciaBackground = document.querySelector(".no-emergency-tasks");
let headerBackgroundColor = document.getElementById("header-container");
let h3BackgroundColor = document.querySelectorAll(".no-emergency-tasks h3");
let h3EmergenciaBackground = document.getElementsByTagName("h3")

emergenciaBackground.style.background = "red";
headerBackgroundColor.style.background = "green";
naoEmergenciaBackground.style.background = "yellow";

for(i = 0; i < h3EmergenciaBackground.length; i += 1){
    h3EmergenciaBackground[i].style.background = "purple"
}
h3BackgroundColor[0].style.background = "black";
h3BackgroundColor[1].style.background = "black";