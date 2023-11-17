import { useState } from "react"
import NewEducation from "./NewEducation"

export default function Capsule({val, setVal}) {
  const [display, setDisplay] = useState(false)

  return (
    <div>
      <span className="school-name" onClick={() => setDisplay(true)}>FUTA</span>
      {display && <NewEducation val={val} setVal={setVal} display={{display, setDisplay}} />}
    </div>
  )
}