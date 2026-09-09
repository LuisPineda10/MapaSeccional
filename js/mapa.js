
const map = L.map('map').setView(
    [23.6345,-102.5528],
    5
);

L.tileLayer(
'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
{
maxZoom:19,
attribution:'© OpenStreetMap'
}
).addTo(map);


// MARCADOR DE PRUEBA

const marcadorCDMX = L.marker(
[19.4326,-99.1332]
).addTo(map);

marcadorCDMX.bindPopup(`
<b>Ciudad de México</b><br>
Lista Nominal: 7,800,000<br>
Secciones: 5,500<br>
Comités: 4,300
`);


// BOTONES

document.getElementById("btnComites")
.addEventListener("click",()=>{
alert("Modo Comités");
});


document.getElementById("btnLista")
.addEventListener("click",()=>{
alert("Modo Lista Nominal");
});


document.getElementById("btnSecciones")
.addEventListener("click",()=>{
alert("Modo Secciones");
});


document.getElementById("btnDistritos")
.addEventListener("click",()=>{
alert("Modo Distritos");
});
