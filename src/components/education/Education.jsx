import NewEducation from "./NewEducation"
import education from '../../assets/education.png'
import caret from '../../assets/caret.png'
import './education.css'
import EducationList from "./EducationList"

import { useState } from "react"
// import {CSSTransition} from "react-transition-group"

export default function Education({val, setVal}) {
  const [isActive, setIsActive] = useState(false);
  const style = {
    transform: isActive ? "rotate(180deg)": "",
    transition: "transfrom 5000ms ease"
  }

  return (
    <div className="container">
      <div className= "dropdown_header"
        onClick={() => {
          setIsActive(!isActive);
        }} >
        <img src={education} alt="graduation hat icon" className="education" />
        <h2>Education</h2>
        <img src={caret} alt="caret dropdown icon" className="caret" style={style} />
      </div>
      <EducationList val={val} setVal={setVal} />
      {isActive && <NewEducation val={val} setVal={setVal} />}
    </div>
  )
}