import { useState } from "react"
import Capsule from "./capsule"
import NewEducation from "./NewEducation"

export default function EducationList({vals, setVals}) {
  const [display, setDisplay] = useState(false)
  const [displayNewEducation, setDisplayNewEducation] = useState(false)

  return (
    <div className="education-list">
      {vals.map(val => <Capsule key={val.id} index={vals.indexOf(val)} vals={vals} val={val} setVals={setVals} display={display} setDisplay={setDisplay} />)}
      {display || <button className="add-btn" onClick={()=>{
          setDisplay(true);
          setDisplayNewEducation(true);
        }} >+ Education{console.log(vals, display)}</button>}
      {displayNewEducation && <NewEducation index={vals.length} val={vals[length]} vals={vals} setVals={setVals} setDisplay={setDisplay} setDisplayNewEducation={setDisplayNewEducation} />}
    </div>
  )
}