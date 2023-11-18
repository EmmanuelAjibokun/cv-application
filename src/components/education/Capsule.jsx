import NewEducation from "./NewEducation"

export default function Capsule({vals, setVals, display}) {

  return (
    <div className="capsule">
      <p className="capsule-name" onClick={() => display.setDisplay(true)}>{vals[0].school}</p>
      {display.display && <NewEducation val={vals[0]} vals={vals} setVals={setVals} setDisplay={display.setDisplay} />}
    </div>
  )
}