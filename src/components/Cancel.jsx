export default function Cancel ({setDisplay, vals, setVals, setDisplayNewEducation}) {
  function handleClick() {
    const newVals = [...vals]
    setVals(newVals.map(item => ({...item, display: false})))
    setDisplay(false)
    setDisplayNewEducation(false)
  }
  return <button onClick={handleClick}>Cancel</button>
}