import { useState } from "react";



function SingleColorPicker({ color }) {
    // const backgroundColorSquare=`rgb${r} ${g} ${b}`
    const [intensity, setIntensity] = useState(100);
    let bgColor="red";
    if (color === "r") {
        bgColor = `rgb(${intensity},0,0)`
    } else if (color === "g") {
        bgColor = `rgb(0,${intensity},0) `
    } else if (color === "b") {
        bgColor = `rgb(0,0,${intensity})`
    }      
    
  /**
   * Actualizar la variable bgColor en función de la variable color y la variable de estado 'intensity'
   * 
   * Si color="r" -> bgColor = rgb(intensity,0,0)
   * Si color == "g" -> bgColor = rgb(0, intensity, 0)
   * Si color == "b" -> bgColor = rgb(0, 0, intensity)
   */
  
  console.log(color); // "r", "g", "b"
  return (
    <div style={{display:"flex"}}>
      <div
              style={{ width: '50px', height: '50px', border: "2px solid black", border: "2px solid black", margin: "2px", backgroundColor:bgColor }}
              
          ></div>
          <label>{color}:
              <input style={{ width: "100px" }} type="number" min={ 0} max={ 255} value={intensity} onChange={(e)=>setIntensity(e.target.value)}></input>
              
          </label>
    </div>
  );
}
export default SingleColorPicker;
