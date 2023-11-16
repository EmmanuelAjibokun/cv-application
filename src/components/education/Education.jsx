import NewEducation from "./NewEducation"
import education from '../../assets/education.png'
import caret from '../../assets/caret.png'
import './education.css'

import { useState } from "react"

export default function Education({val, setVal}) {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="container">
      <div className="dropdown_header" onClick={() => setIsActive(!isActive)} >
        <img src={education} alt="graduation hat icon" className="education" />
        <h2>Education</h2>
        <img src={caret} alt="caret dropdown icon" className="caret" />
      </div>
      {isActive && <NewEducation val={val} setVal={setVal} />}
    </div>
  )
}