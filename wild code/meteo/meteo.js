var send = document.getElementsByClassName("btn btn-default");
var result = document.getElementById("result");
send.addEventListener('click', Meteo);

function Meteo() {
    var inputMeteo = document.getElementsByClassName("form-control").value;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "api.openweathermap.org/data/2.5/weather?q=" + inputMeteo + "&units=metric&APPID=e297d575bf5d379a12742eef3be821b8", false);
    xhr.onload = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                result.innerHTML += "Aujourd'hui à " + response.name + 
                result.innerHTML += "Il fait " + Math.floor(response.main.temp) + "°C"
            }
            else 
        }
    }
}