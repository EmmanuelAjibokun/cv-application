// import "./neweducation.css"

import Save from "../Save"
import Delete from "../Delete"
import Cancel from "../Cancel"

export default function NewEducation({ index, val, vals, setVals, setDisplay}) {

  function handleChange(e) {
    const newVals = [...vals]
    newVals[index][e.target.name] = e.target.value
    setVals(newVals)
  }

  return (
    <form action="#">
      <div className="user-details">
        <div>
          <p>School</p>
          <input
            type="text"
            name="school"
            value={val.school}
            placeholder="Enter School / University"
            onChange={handleChange} />
        </div>
        <div>
        <p>Degree</p>
        <input 
          type="text"
          name="degree"
          value={val.degree} 
          placeholder="Enter Degree / Field Of Study"
          onChange={handleChange} />
        </div>
        <div>
        <p>Start Date</p>
        <input 
          type="text" 
          name="startdate"
          value={val.startdate}
          placeholder="Enter Start Date"
          onChange={handleChange} />
        </div>
        <div>
        <p>End Date</p>
        <input 
          type="text" 
          name="enddate"
          value={val.enddate}
          placeholder="Enter End Date"
          onChange={handleChange} />
        </div>
        <div>
        <p>Location <span>optional</span></p>
        <input 
          type="text" 
          name="location"
          value={val.location}
          placeholder="Enter Location"
          onChange={handleChange} />
        </div>

        <div className="buttons">
          <Delete />
          <Cancel setDisplay={setDisplay} val={val} vals={vals} setVals={setVals} />
          <Save />
        </div>
      </div>
    </form>
  )
}