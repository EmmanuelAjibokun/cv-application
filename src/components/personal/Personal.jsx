import "./personal.css"

export default function Personal () {
  return (
    <div className="container">
      <h2>Personal Details</h2>
      <div>
        <div>
          <p>Full name</p>
          <input 
            type="text" 
            value="Emmanuel Ajibokun" 
            placeholder="first and last name" />
          
        </div>
        <div>
        <p>Email <span>recommended</span></p>
        <input 
          type="text" 
          value="emmanuelajibokun9@gmail.com" 
          placeholder="Enter email address" />
        </div>
        <div>
        <p>Phone number <span>recommended</span></p>
        <input 
          type="number" 
          value={+234901234567}
          placeholder="Enter phone number" />
        </div>
        <div>
        <p>Address <span>recommended</span></p>
        <input 
          type="text" 
          value="Lagos, Nigeria" 
          placeholder="City, Country" />
        </div>
      </div>
    </div>
  )
}