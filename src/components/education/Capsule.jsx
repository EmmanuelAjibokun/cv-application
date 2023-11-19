import NewEducation from "./NewEducation"

export default function Capsule({index, val, vals, setVals, display}) {
  function handleChange() {
    const newVals = [...vals]
    setVals(newVals.map(item => val.id == item.id ? {...item, display: true} : {...item, display: false}))
    display.setDisplay(true)
  }

  return (
    <div className="capsule">
      {display.display || <p className="capsule-name" onClick={handleChange}>{val.school}</p>}
      {val.display && display.display && <NewEducation index={index} val={val} vals={vals} setVals={setVals} setDisplay={display.setDisplay} />}
    </div>
  )
}