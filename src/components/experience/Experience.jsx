import NewExperience from "./NewExperience"
import caret from '../../assets/caret.png'
import briefcase from '../../assets/briefcase.png'

import '../education/education.css'

import { useState } from "react"

export default function Experience () {
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
        }} 
      >
        <img src={briefcase} alt="graduation hat icon" className="education" />
        <h2>Experience</h2>
        <img src={caret} alt="caret dropdown icon" className="caret" style={style} />
      </div>
      {isActive && <NewExperience />}
    </div>
  )
}