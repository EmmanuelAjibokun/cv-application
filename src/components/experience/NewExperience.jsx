import Save from "../Save"
import Delete from "../Delete"
import Cancel from "../Cancel"

export default function NewExperience({val, setVal}) {
  return (
    <form action="#">
      <div className="user-details">
        <div>
          <p>Company Name</p>
          <input 
            type="text" 
            value={val.company}
            placeholder="Enter Company Name"
            onChange={e => setVal.setCompany(e.target.value)} />
        </div>
        <div>
          <p>Position Title</p>
          <input 
            type="text" 
            value={val.position} 
            placeholder="Enter Position Title"
            onChange={e => setVal.setPosition(e.target.value)} />
        </div>
        <div>
          <p>Start Date</p>
          <input 
            type="text" 
            value={val.startdate2}
            placeholder="Enter Start Date"
            onChange={e => setVal.setStartdate2(e.target.value)} />
        </div>
        <div>
          <p>End Date</p>
          <input 
            type="text" 
            value={val.enddate2} 
            placeholder="Enter End Date"
            onChange={e => setVal.setEnddate2(e.target.value)} />
        </div>
        <div>
          <p>Location <span>optional</span></p>
          <input 
            type="text" 
            value={val.location2} 
            placeholder="Enter Location" />
        </div>
        <div>
          <p>Description <span>optional</span></p>
          <textarea
            rows={10}
            value={val.description} 
            placeholder="Enter Location"></textarea>
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