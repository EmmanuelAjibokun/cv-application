import { useState } from "react"
import Capsule from "./capsule"
// import NewEducation from "./NewEducation"

export default function EducationList({vals, setVals}) {
  const [display, setDisplay] = useState(false)

  return (
    <div className="education-list">
      {vals.map(val => <Capsule key={val.id} index={vals.indexOf(val)} vals={vals} val={val} setVals={setVals} display={display} setDisplay={setDisplay} />)}
      {display || <button className="add-btn" onClick={()=>{
          setDisplay(true);
          setVals([...vals, {
            id: vals[1].id+1,
            school: "",
            degree: "",
            startdate: "",
            enddate: "",
            location: "",
            display: true
           }]);
        }} >+ Education</button>}
      {console.log(vals, display)}
    </div>
  )
}