import Save from "../Save"
import Delete from "../Delete"
import Cancel from "../Cancel"

export default function NewExperience({ index, val, vals, setVals, setDisplay, temporaryClickedEducation, cancelField}) {
  function handleChange(e) {
    const newVals = [...vals]
    newVals[index][e.target.name] = e.target.value
    setVals(newVals)
  }

  return (
    <form action="#">
      <div className="user-details">
        <div>
          <p>Company Name</p>
          <input 
            type="text"
            name="company"
            value={val.company}
            placeholder="Enter Company Name"
            onChange={handleChange} required />
        </div>
        <div>
          <p>Position Title</p>
          <input 
            type="text"
            name="position"
            value={val.position} 
            placeholder="Enter Position Title"
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
            value={val.enddate2} 
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
            onChange={handleChange} />
        </div>
        <div>
          <p>Description <span>optional</span></p>
          <textarea
            rows={10}
            name="description"
            value={val.description} 
            placeholder="Enter Location"
            onChange={handleChange}></textarea>
        </div>
        <div className="buttons">
          <Delete setDisplay={setDisplay} val={val} vals={vals} setVals={setVals} temporaryClickedEducation={temporaryClickedEducation} />
          <Cancel setDisplay={setDisplay} val={val} vals={vals} setVals={setVals} temporaryClickedEducation={temporaryClickedEducation} cancelField={cancelField} />
          <Save />
        </div>

      </div>
    </form>
  )
}