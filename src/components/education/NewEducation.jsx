import Save from "../Save"
import Delete from "../Delete"
import Cancel from "../Cancel"

export default function NewEducation({ val, setVal}) {
  return (
    <div>
      <div>
        <p>School</p>
        <input 
          type="text" 
          value={val.school} 
          placeholder="Enter School / University"
          onChange={setVal.setSchool} />
        
      </div>
      <div>
      <p>Degree</p>
      <input 
        type="text" 
        value={val.degree} 
        placeholder="Enter Degree / Field Of Study"
        onChange={val.setDegree} />
      </div>
      <div>
      <p>Start Date</p>
      <input 
        type="text" 
        value={val.startdate}
        placeholder="Enter Start Date"
        onChange={val.setStartdate} />
      </div>
      <div>
      <p>End Date</p>
      <input 
        type="text" 
        value={val.enddate}
        placeholder="Enter End Date"
        onChange={val.setEnddate} />
      </div>
      <div>
      <p>Location <span>optional</span></p>
      <input 
        type="text" 
        value={val.location}
        placeholder="Enter Location"
        onChange={val.setLocation} />
      </div>

      <Delete />
      <Cancel />
      <Save />

    </div>
  )
}