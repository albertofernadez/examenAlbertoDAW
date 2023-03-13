//Insertar datos
document.addEventListener("DOMContentLoaded", function () {
    fetch("https://raw.githubusercontent.com/FRomero999/ExamenDIW2022/main/rutas_arqueologicas.json?")
    .then(response => response.json())
        .then(data => {
            const tabla = document.querySelector("table tbody");
            data.forEach(cliente => {
                const row = tabla.insertRow();
                });
        })
        .catch(error => console.error(error));
});


//Resube los datos
const btnCargar = document.querySelector("#btnAñadir");

btnCargar.addEventListener("click", function () {
    fetch("https://raw.githubusercontent.com/FRomero999/ExamenDIW2022/main/rutas_arqueologicas.json?")
        .then(response => response.json())
        .then(data => {

            const tabla = document.querySelector("table tbody");
            data.forEach(cliente => {
                const row = tabla.insertRow();
            });
        })
        .catch(error => console.log(error));
});


var boton
var lista
var plantilla
var map

const options = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000
}

function test(){
  console.log("test")
}

function test2(){

  navigator.geolocation.getCurrentPosition( 
    (coordenadas)=>{ 
      let nuevo = plantilla.content.cloneNode(true)
      let texto = ""

      texto = texto + coordenadas.coords.latitude +","
      texto = texto + coordenadas.coords.longitude

      nuevo.querySelector("li").title = texto
      nuevo.querySelector("span.lat").innerText = coordenadas.coords.latitude
      nuevo.querySelector("span.long").innerText = coordenadas.coords.longitude
      
      lista.appendChild(nuevo)

      map.setView([coordenadas.coords.latitude, coordenadas.coords.longitude], 18)
      L.marker([coordenadas.coords.latitude, coordenadas.coords.longitude]).addTo(map)
    },
    (err)=>{ console.log(err)},
    options
  )
  console.log("final")

}

window.addEventListener("load", ()=>{
  
  boton = document.querySelector("button")
  lista  = document.querySelector("ul")
  plantilla = document.querySelector("template")

  map = L.map('map').setView([51.505, -0.09], 13)
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map)

  boton.addEventListener("click", (ev)=>{
    console.log(this)
    console.log(ev)
    console.log("click")
    boton.classList.add("rojo")
  })

  boton.addEventListener("click",test2)  
})
