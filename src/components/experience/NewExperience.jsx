import Save from "../Save"
import Delete from "../Delete"
import Cancel from "../Cancel"

export default function NewExperience() {
  return (
    <form action="#">
      <div className="user-details">
        <div>
          <p>Company Name</p>
          <input 
            type="text" 
            value="FUTA" 
            placeholder="Enter Company Name" />
        </div>
        <div>
          <p>Position Title</p>
          <input 
            type="text" 
            value="" 
            placeholder="Enter Position Title" />
        </div>
        <div>
          <p>Start Date</p>
          <input 
            type="text" 
            value=""
            placeholder="Enter Start Date" />
        </div>
        <div>
          <p>End Date</p>
          <input 
            type="text" 
            value="" 
            placeholder="Enter End Date" />
        </div>
        <div>
          <p>Location <span>optional</span></p>
          <input 
            type="text" 
            value="" 
            placeholder="Enter Location" />
        </div>
        <div>
          <p>Description <span>optional</span></p>
          <textarea
            rows={10}
            value="" 
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