import './App.css';
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker} from 'react-leaflet';
import recicleBin from "./data/recicle-bin.json"
import materials from "./data/materials.json"
import { geoJSON, icon } from 'leaflet';
import L from "leaflet"
import logo from "./images/logo.png"

var markers = {
  'plastico': new L.icon({ iconUrl: require("./images/mark-red.png"), iconSize: [35, 35] }),
  'papel': new L.icon({ iconUrl: require("./images/mark-blue.png"), iconSize: [35, 35] }),
  'metal': new L.icon({ iconUrl: require("./images/mark-yellow.png"), iconSize: [35, 35] }),
  'vidro': new L.icon({ iconUrl: require("./images/mark-green.png"), iconSize: [35, 35] }),
  'organico': new L.icon({ iconUrl: require("./images/mark-brown.png"), iconSize: [35, 35] }),
  'bateria': new L.icon({ iconUrl: require("./images/mark-orange.png"), iconSize: [35, 35] })
};

function App() {
  const [selects, setSelects] = useState();
  { materials.find(mat => (selects === mat.name)) }

  return (
    <main>
      <body class="rgba(32, 126, 20, 0.493) space-y-5 h-auto" >
        <div class=' grid justify-items-stretch'>
          <img src={logo} class='justify-self-center' />
        </div>
        <h1 class=' font-sans text-center   text-5xl '>Selecione o material </h1>

        <div class='space-y-10 grid justify-items-stretch'>

          <select class='font-normal  justify-self-center text-2xl h-13 w-50 rounded' value={selects} onChange={e => setSelects(e.target.value)}>
            <option value="geral">Geral</option>
            <option value="bateria">Pilha</option>
            <option value="plastico">Caneta</option>
            <option value="papel">Caderno</option>
            <option value="papel">Caixa de Sapato</option>
            <option value="organico">Casca de Banana</option>
            <option value="vidro">51</option>
          </select>

          <h1 class='text-center  font-sans text-5xl h-13 w-50 rounded'>Tipo de Lixeira para o material:</h1>
          <h1 id="type" class='font-normal  justify-self-center text-3xl '>    {
            <div class='rounded bg-white h-50'>{selects}</div>
          }
          </h1>
        </div>
        <h1 id="mapTitle" class='justify-self-center text-5xl italic font-bold'> Locais com Coleta Seletiva</h1>


        <MapContainer class='leaflet-container' center={[-9.701426, -36.688151]} zoom={45} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
            recicleBin.map(bin => {
              if (bin.tipo === selects) {
                return <Marker
                  key={bin.id}
                  position={[bin.gps.latitude, bin.gps.longitude]}
                  icon={markers[bin.tipo]}>
                </Marker>
              }
              if (selects === 'geral') {
                return <Marker
                  key={bin.id}
                  position={[bin.gps.latitude, bin.gps.longitude]}
                  icon={markers[bin.tipo]}>
                </Marker>
              }
            }

            )}



        </MapContainer>
        <h1></h1>
        <h1></h1>
      </body>
     
    </main>

  )
}

export default App;
