import { useState } from "react"
import Capsule from "./Capsule"

export default function ExperienceList({vals, setVals}) {
  const [display, setDisplay] = useState(false);
  const [cancelField, setCancelField] = useState(false);
  const maxId =vals.length > 0 ? Math.max(...vals.map(item => item.id)): 1;

  return (
    <div className="experience-list">
      {vals.map(val => <Capsule key={val.id} index={vals.indexOf(val)} vals={vals} val={val} setVals={setVals} display={display} setDisplay={setDisplay} cancelField={{cancelField, setCancelField}} />)}
      {display || <button className="add-btn" onClick={()=>{
          setCancelField(true);
          setDisplay(true);
          setVals([...vals, {
            id: isNaN(maxId) ? 1 : maxId + 1,
            company: "",
            position: "",
            startdate: "",
            enddate: "",
            location: "",
            description: "",
            display: true
           }]);
        }} >+ Experience</button>}
    </div>
  )
}