import "./FastAction.css"

export default function FastAction ({ setVal, setEducationVal, setExperienceVal }) {

  function handleClearResume() {
    setVal.setPerson("")
    setVal.setMail("")
    setVal.setAddr("")
    setVal.setNum("")
    setEducationVal([])
    setExperienceVal([])
    console.log("clicked")
  }
  return (
    <div className="buttons">
      <button onClick={handleClearResume}>Clear Resume</button>
      <button onClick={()=> {window.location.reload(true)}}>Load Example</button>
    </div>
  )
}