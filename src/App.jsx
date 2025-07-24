import { useState } from 'react';
import './App.css'


const generateRandomColor=()=>{
  return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6,'0');
}


function App() {
const [Colors,setColors]=useState(Array.from({length:5},generateRandomColor));


const regenerateColors=()=>{
  setColors(Array.from({length:5},generateRandomColor));
}


const clipToClipboard=(color)=>{
  navigator.clipboard.writeText(color);
  alert(`Copied ${color}`);
}


  return (
   <div className='app'>
   <h1>Color Palette</h1>
   <div className='palette'>
    {
        Colors.map((color,index)=>(
        <div key={index} className='color-block' style={{backgroundColor:color}} onClick={()=>{
          clipToClipboard(color) }}>
          <p>{color}</p>
          </div>
        ))
    }
   </div>
   <button onClick={regenerateColors}>Generate New Palette</button>
   </div>
  )
}

export default App
