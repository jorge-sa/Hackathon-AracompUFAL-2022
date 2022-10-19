import './App.css';
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import recicleBin from "./data/recicle-bin.json"
import materials from "./data/materials.json"
import { geoJSON } from 'leaflet';

function App() {
 const [selects,setSelects]=useState();
 {materials.find(mat=>(selects=== mat.name))}

  return (
    //<MyMap/>,
    <main>
    <label>Selecione o material </label>
    <select value ={selects} onChange={e=>setSelects(e.target.value)}>
    
    <option value="Lapis">Lapis</option>
    <option value="Caneta">Caneta</option>
    <option value="Caderno">Caderno</option>
    <option value="Caixa de Sapato">Caixa de Sapato</option>
    <option value="Teclado">Teclado</option>
    </select>
    
    <h1 id="mapTitle"> Locais com Coleta Seletiva</h1>
    
    
    <MapContainer ClassName="leaflet-container" center={[-9.701426, -36.688151]} zoom={30} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    {materials.map((mat,index)=> 
    {
      if (mat.name === selects) {
        return <div id ="mat">
        <h1>{mat.type}</h1>
        </div>
      }  
      }
      
      
      )
    }

      {recicleBin.map(bin=>( 
        <Marker 
        key = {bin.id}
        position={[bin.gps.latitude, bin.gps.longitude]}>
       </Marker>
      ))}

    </MapContainer>

  </main>

  )
}

export default App;
