import NewEducation from "./NewEducation"

export default function Capsule({index, val, vals, setVals, display}) {

  return (
    <div className="capsule">
      <p className="capsule-name" onClick={() => display.setDisplay(true)}>{val.school}</p>
      {display.display && <NewEducation index={index} val={val} vals={vals} setVals={setVals} setDisplay={display.setDisplay} />}
    </div>
  )
}