import NewEducation from "./NewEducation"

export default function Capsule({val, setVal, display}) {

  return (
    <div className="capsule">
      <p className="capsule-name" onClick={() => display.setDisplay(true)}>{val.school}</p>
      {display.display && <NewEducation val={val} setVal={setVal} setDisplay={display.setDisplay} />}
    </div>
  )
}