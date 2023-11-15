import "./personal.css"

export default function Personal({ val, setVal }) {

  return (
    <div className="container">
      <h2>Personal Details</h2>
      <form action="#">
        <div className="user-details">
          <div>
            <p>Full name</p>
            <input
              type="text" 
              value= {val.person}
              onChange={(e)=>setVal.setPerson(e.target.value)}
              placeholder="first and last name" required />
            
          </div>
          <div>
          <p>Email <span>recommended</span></p>
          <input 
            type="text" 
            value={val.mail}
            onChange={(e) => setVal.setMail(e.target.value)}
            placeholder="Enter email address" required />
          </div>
          <div>
          <p>Phone number <span>recommended</span></p>
          <input 
            type="text" 
            value={val.num}
            onChange={(e) => setVal.setNum(e.target.value)}
            placeholder="Enter phone number" required />
          </div>
          <div>
          <p>Address <span>recommended</span></p>
          <input 
            type="text" 
            value={val.addr}
            onChange={e => setVal.setAddr(e.target.value)}
            placeholder="City, Country" required />
          </div>
        </div>
      </form>
    </div>
  )
}