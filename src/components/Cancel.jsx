export default function Cancel ({setDisplay, val, vals, setVals, temporaryClickedEducation}) {
  {console.log("from current education: temp", temporaryClickedEducation)}

  function handleClick() {
    const newVals = [...vals]
  
    const updatedVal = newVals.map(item => {
      if (item.id == val.id) {
        return {...temporaryClickedEducation};
      } else
        return item;
    })
    // const lastVal = vals[vals.length - 1]
    // let i = 0;

    // console.log(lastVal)

    // for (const key in val) {
    //   if (key === "school") {
    //     if (lastVal[key]) {
    //       setVals(newVals.map(item => ({...item, display: false})))
    //       setDisplay(false)
    //       console.log(key)
    //       break;
    //     }
    //   }
    //   i += 1;
    // }
    // console.log(i)
    // if (i == 7) {
    //   console.log(i)
    //   newVals.pop()
    //   console.log(newVals)
    //   setVals(newVals)
    //   setDisplay(false)
    // }
    setVals(updatedVal)
    setDisplay(false)
  }

  return <button onClick={handleClick}>Cancel</button>
}