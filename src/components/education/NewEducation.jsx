// import "./neweducation.css"

import Save from "../Save"
import Delete from "../Delete"
import Cancel from "../Cancel"

export default function NewEducation({ index, val, vals, setVals, setDisplay, temporaryClickedEducation, cancelField}) {
  
  function handleChange(e) {
    const newVals = [...vals]
    newVals[index][e.target.name] = e.target.value
    setVals(newVals)
  }

  return (
    <form action="#" required>
      <div className="user-details">
        <div>
          <p>School</p>
          <input
            type="text"
            name="school"
            value={val.school}
            placeholder="Enter School / University"
            onChange={handleChange} required />
        </div>
        <div>
        <p>Degree</p>
        <input 
          type="text"
          name="degree"
          value={val.degree} 
          placeholder="Enter Degree / Field Of Study"
          onChange={handleChange} required />
        </div>
        <div>
        <p>Start Date</p>
        <input 
          type="text" 
          name="startdate"
          value={val.startdate}
          placeholder="Enter Start Date"
          onChange={handleChange} required />
        </div>
        <div>
        <p>End Date</p>
        <input 
          type="text"
          name="enddate"
          value={val.enddate}
          placeholder="Enter End Date"
          onChange={handleChange} required />
        </div>
        <div>
        <p>Location <span>optional</span></p>
        <input 
          type="text"
          name="location"
          value={val.location}
          placeholder="Enter Location"
          onChange={handleChange} required />
        </div>

        <div className="buttons">

          <Delete setDisplay={setDisplay} val={val} vals={vals} setVals={setVals} temporaryClickedEducation={temporaryClickedEducation} />
          <Cancel setDisplay={setDisplay} val={val} vals={vals} setVals={setVals} temporaryClickedEducation={temporaryClickedEducation} cancelField={cancelField} />
          <Save setDisplay={setDisplay} val={val} vals={vals} setVals={setVals} />
        </div>
      </div>
    </form>
  )
}