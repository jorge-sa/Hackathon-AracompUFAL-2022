import './App.css';
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import recicleBin from "./data/dados.json"
import materials from "./data/materials.json"
import { geoJSON } from 'leaflet';


function App() {
 const [selects,setSelects]=useState();
 {materials.find(mat=>(selects=== mat.name))}

  return (
  <main class = "bg-green-500 grid justify-items-stretch space-y-5"  >
    
    <h1 class = 'font-white font-normal text-white text-center text-6xl '>RecicleFind </h1>
    <h1 class = 'font-white font-normal text-center ju  text-6xl '>Selecione o material </h1>
    
    <div class ='space-y-10 grid justify-items-stretch'>
    
    <select class  ='font-normal  justify-self-center text-2xl h-13 w-50 rounded'  value ={selects} onChange={e=>setSelects(e.target.value)}>
    <option value="Lapis">Lapis</option>
    <option value="Caneta">Caneta</option>
    <option value="Caderno">Caderno</option>
    <option value="Caixa de Sapato">Caixa de Sapato</option>
    <option value="Teclado">Teclado</option>
    </select>
    
    <h1 class='text-center  text-white italic font-bold text-4xl '>Tipo de Lixeira para o material:</h1>     
    <h1 id = "type" class='font-normal  justify-self-center text-3xl h-16 w-50'>    {materials.map((mat,index)=> {
      if (mat.name === selects) {
        return <div id ="mat">
        <h1>{mat.type}</h1>
        </div>
      }  
      })
    }</h1>
    </div>
    <h1 id="mapTitle" class='justify-self-center text-5xl italic font-bold'> Locais com Coleta Seletiva</h1>
    
    
    <MapContainer class='leaflet-container'  center={[-9.701426, -36.688151]} zoom={30} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
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
