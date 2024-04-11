import React, {useState} from 'react';
import './App.css';

function App() {
  const [Hori , setHori]=useState(10);
  const [Veri , setVeri]=useState(10);
  const [Blur , setBlur]=useState(10);
  const [Clr , setClr]=useState('red');
  const [Checkon , setCheckon]=useState(false);
  return (
    

    <div className="App">

      <div className="controls">
        <label>Horizontal Length</label>
        <input type="range"  min="-200" max="200" value={Hori} onChange={(e)=>setHori(e.target.value)} />
        <label>Vertical Length</label>
        <input type="range"  min="-200" max="200" value={Veri} onChange={(e)=>setVeri(e.target.value)} />
        <label>Blur</label>
        <input type="range"  min="-200" max="200" value={Blur} onChange={(e)=>setBlur(e.target.value)} />
        <label>Color </label>
        <input type="color"   value={Clr} onChange={(e)=>setClr(e.target.value)} />
        <div className="switch">
    <label>
      Outline
      <input type="checkbox" checked={Checkon} onChange={()=>setCheckon(!Checkon)}/>
      <span className="lever"></span>
      Inset
    </label>
  </div>
      </div>
      <div className="output">
        <div className="Box" style={{boxShadow: ` ${Checkon?"inset":"" } ${Hori}px ${Veri}px ${Blur}px ${Clr}`}}>
        <p>box-shadow: {Hori}px {Veri}px {Blur}px {Clr}</p>

        </div>
      </div>
    </div>
  );
}

export default App;
