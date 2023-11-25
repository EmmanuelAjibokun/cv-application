export default function Save ({setDisplay, vals, setVals}) {
  function handleClick() {
    const newVals = [...vals]
    const lastVal = vals[vals.length - 1]

    // Track number of keys in object
    let i = 0;

    for (const key in lastVal) {
      if (lastVal[key])
        i++;
    }
    if (i == 7) {
      newVals.pop()
      setVals(newVals)
      setDisplay(false)
    }
  }
  return <button onClick={handleClick}>Save</button>
}