import { useState } from "react"
import NewEducation from "./NewEducation"

export default function Capsule({val, setVal}) {
  const [display, setDisplay] = useState(false)

  return (
    <div className="capsule">
      <p className="capsule-name" onClick={() => setDisplay(true)}>{val.school}</p>
      {display && <NewEducation val={val} setVal={setVal} setDisplay={setDisplay} />}
    </div>
  )
}