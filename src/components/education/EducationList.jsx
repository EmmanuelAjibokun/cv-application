import { useState } from "react"
import Capsule from "./capsule"

export default function EducationList({vals, setVals}) {
  const [display, setDisplay] = useState(false)

  return (
    <div className="education-list">
      {vals.map(val => <Capsule key={val.id} index={vals.indexOf(val)} vals={vals} val={val} setVals={setVals} display={{display, setDisplay}} />)}
      {display || <button className="add-btn" onClick={()=>setDisplay(true)} >+ Education</button>}
    </div>
  )
}