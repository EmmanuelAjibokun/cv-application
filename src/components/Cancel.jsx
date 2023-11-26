export default function Cancel ({setDisplay, vals, setVals}) {
  
  function handleClick() {
    const newVals = [...vals]
    const lastVal = vals[vals.length - 1]
    let i = 0;
    // console.log(lastVal)

    for (const key in lastVal) {
      if (key === "school") {
        if (lastVal[key]) {
          setVals(newVals.map(item => ({...item, display: false})))
          setDisplay(false)
          console.log(key)
          break;
        }
        // console.log(2, key)
      }
      i += 1;
    }
    // console.log(i)
    if (i == 7) {
      console.log(i)
      newVals.pop()
      console.log(newVals)
      setVals(newVals)
      setDisplay(false)
    }
    // setVals(newVals.map(item => ({...item, display: false})))
    // setDisplay(false)
  }

  return <button onClick={handleClick}>Cancel</button>
}