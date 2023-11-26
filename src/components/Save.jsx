export default function Save ({setDisplay, vals, setVals, val}) {
  function handleClick() {
    const newVals = [...vals]
    // const lastVal = vals[vals.length - 1]

    // Track number of keys in object
    let i = 0;

    for (const key in val) {
      // check if all input tag has a value
      if (val[key]) {
        i++;
        console.log(key)
      }
    }
    if (i == 7) {
      setVals(newVals.map(item => ({...item, display: false})))
      setDisplay(false)
    }
    console.log(i)
  }
  return <button onClick={handleClick}>Save</button>
}