import NewEducation from "./NewEducation"

export default function Capsule({index, val, vals, setVals, display, setDisplay}) {
  // function createNewEducation () {
  //   const newVals = [...vals]
  // }

  function handleClick() {
    const newVals = [...vals]
    setVals(newVals.map(item => val.id == item.id ? {...item, display: true} : {...item, display: false}))
    setDisplay(true)
  }

  return (
    <div className="capsule">
      {display || <p className="capsule-name" onClick={handleClick}>{val.school}</p>}
      {val.display && display && <NewEducation index={index} val={val} vals={vals} setVals={setVals} setDisplay={setDisplay} temporaryClickedEducation={val} />}
    </div>
  )
}