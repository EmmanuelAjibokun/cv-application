// import NewExperience from "./NewExperience"
import { useRef } from "react"

export default function Capsule({index, val, vals, setVals, display, setDisplay, cancelField}) {
  const temporaryClickedExperienceRef = useRef(val)
  console.log(temporaryClickedExperienceRef.current)
  
  function handleClick() {
    temporaryClickedExperienceRef.current = val;
    console.log("inside handle click", temporaryClickedExperienceRef.current)
    const newVals = [...vals]
    setVals(newVals.map(item => val.id == item.id ? {...item, display: true} : {...item, display: false}))
    setDisplay(true)
  }

  return (
    <div className="capsule">
      {display || <p className="capsule-name" onClick={handleClick}>{val.company}</p>}
      {/* {val.display && display && <NewEducation index={index} val={val} vals={vals} setVals={setVals} setDisplay={setDisplay} temporaryClickedEducation={temporaryClickedEducationRef.current} cancelField={cancelField} />} */}
    </div>
  )
}