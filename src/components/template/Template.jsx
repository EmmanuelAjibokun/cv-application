import '../../App.css'
import mail from '../../assets/mail.png'
import phone from '../../assets/phone.png'
import location from '../../assets/location.png'

import ShowEducation from './ShowEducation'


export default function Template({val, educationVal, experienceVal}) {

  return (
    <div className='template'>
      <div className="header">
        <h1>{val.person}</h1>
        <div className="details">
          <div className="detail">
            <img src={mail} className='icon' alt="mail" width={20} height={20} />
            <p>{val.mail}</p>
          </div>
          <div className="detail">
            <img src={phone} className='icon' alt="mail" width={20} height={20} />
            <p>{val.num}</p>
          </div>
          <div className="detail">
            <img src={location} className='icon' alt="mail" width={20} height={20} />
            <p>{val.addr}</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="body">
        <div className="subbody">
          <h4>Education</h4>
          {/* {showEducation(educationVal)} */}
          <ShowEducation educationVal={educationVal} />
        </div>
        <div className="subbody">
          <h4>Professional Experience</h4>
          <div className="cat">
            <div className="left_side">
              <p>{experienceVal.startdate2} - {experienceVal.enddate2}</p>
              <p>{experienceVal.location2}</p>
            </div>
            <div className="right_side">
              <p>{experienceVal.company}</p>
              <p>{experienceVal.position}</p>
              <p>{experienceVal.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}