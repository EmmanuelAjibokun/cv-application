import Save from "../Save"
import Delete from "../Delete"
import Cancel from "../Cancel"

export default function NewEducation () {
  return (
    <div>
        <div>
          <p>School</p>
          <input 
            type="text" 
            value="FUTA" 
            placeholder="Enter School / University" />
          
        </div>
        <div>
        <p>Degree</p>
        <input 
          type="text" 
          value="" 
          placeholder="Enter Degree / Field Of Study" />
        </div>
        <div>
        <p>Start Date</p>
        <input 
          type="number" 
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

        <Delete />
        <Cancel />
        <Save />

      </div>
  )
}