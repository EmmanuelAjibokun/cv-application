import { useState } from "react"
import Capsule from "./capsule"

export default function EducationList({val, setVal}) {
  const [display, setDisplay] = useState(false)

  return (
    <div className="education-list">
      <Capsule val={val} setVal={setVal} display={{display, setDisplay}} />
      <button className="add-btn" >+ Education</button>
    </div>
  )
}