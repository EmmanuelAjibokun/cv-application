export default function Delete ({setDisplay, vals, setVals}) {
  function handleClick() {
    const newVals = [...vals]
    setVals(newVals.map(item => ({...item, display: false})))
    setDisplay(false)
  }
  return <button onClick={handleClick}>Delete</button>
}