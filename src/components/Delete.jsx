export default function Delete ({setDisplay, val, vals, setVals}) {
  function handleClick() {
    const newVals = [...vals]
    console.log(val)
    setVals(newVals.filter(item => item.id !== val.id))
    setDisplay(false)
  }
  return <button onClick={handleClick}>Delete</button>
}