import "./personal.css"

export default function Personal({ val, setVal }) {

  return (
    <div className="container">
      <h2>Personal Details</h2>
      <div>
        <div>
          <p>Full name</p>
          <input 
            type="text" 
            value= {val.person}
            onChange={(e)=>setVal.setPerson(e.target.value)}
            placeholder="first and last name" />
          
        </div>
        <div>
        <p>Email <span>recommended</span></p>
        <input 
          type="text" 
          value={val.mail}
          onChange={(e) => setVal.setMail(e.target.value)}
          placeholder="Enter email address" />
        </div>
        <div>
        <p>Phone number <span>recommended</span></p>
        <input 
          type="number" 
          value={val.num}
          onChange={(e) => setVal.setMail(e.target.value)}
          placeholder="Enter phone number" />
        </div>
        <div>
        <p>Address <span>recommended</span></p>
        <input 
          type="text" 
          value={val.addr}
          onChange={e => setVal.setAddr(e.target.value)}
          placeholder="City, Country" />
        </div>
      </div>
    </div>
  )
}