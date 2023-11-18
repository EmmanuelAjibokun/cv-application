import { useState } from "react"
import Capsule from "./capsule"

export default function EducationList({val, setVal}) {
  const [display, setDisplay] = useState(false)

  return (
    <div className="education-list">
      <Capsule val={val} setVal={setVal} display={{display, setDisplay}} />
      {display || <button className="add-btn" onClick={()=>setDisplay(true)} >+ Education</button>}
    </div>
  )
}