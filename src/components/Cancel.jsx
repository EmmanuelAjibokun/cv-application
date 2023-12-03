export default function Cancel ({setDisplay, val, vals, setVals, temporaryClicked, cancelField}) {
  console.log("temp from cancel", temporaryClicked)
  function handleClick() {
    const newVals = [...vals]
  
    const updatedVal = newVals.map(item => {
      if (item.id == val.id) {
        return {...temporaryClicked};
      } else
        return item;
    })
    if (cancelField.cancelField) {
      updatedVal.pop()
      cancelField.setCancelField(false)
    }

    setVals(updatedVal)
    setDisplay(false)
  }

  return <button onClick={handleClick}>Cancel</button>
}