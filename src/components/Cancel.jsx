export default function Cancel ({setDisplay, val, vals, setVals, temporaryClickedEducation, cancelField}) {

  function handleClick() {
    const newVals = [...vals]
  
    const updatedVal = newVals.map(item => {
      if (item.id == val.id) {
        return {...temporaryClickedEducation};
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