// import "./neweducation.css"

import Save from "../Save"
import Delete from "../Delete"
import Cancel from "../Cancel"

export default function NewEducation({ val, setVal}) {
  return (
    <form action="#">
      <div className="user-details">
        <div>
          <p>School</p>
          <input 
            type="text" 
            value={val.school} 
            placeholder="Enter School / University"
            onChange={e => setVal.setSchool(e.target.value)} />
          
        </div>
        <div>
        <p>Degree</p>
        <input 
          type="text" 
          value={val.degree} 
          placeholder="Enter Degree / Field Of Study"
          onChange={e => setVal.setDegree(e.target.value)} />
        </div>
        <div>
        <p>Start Date</p>
        <input 
          type="text" 
          value={val.startdate}
          placeholder="Enter Start Date"
          onChange={e => setVal.setStartdate(e.target.value)} />
        </div>
        <div>
        <p>End Date</p>
        <input 
          type="text" 
          value={val.enddate}
          placeholder="Enter End Date"
          onChange={e => setVal.setEnddate(e.target.value)} />
        </div>
        <div>
        <p>Location <span>optional</span></p>
        <input 
          type="text" 
          value={val.location}
          placeholder="Enter Location"
          onChange={e => setVal.setLocation(e.target.value)} />
        </div>

        <div className="buttons">
          <Delete />
          <Cancel />
          <Save />
        </div>
      </div>
    </form>
  )
}