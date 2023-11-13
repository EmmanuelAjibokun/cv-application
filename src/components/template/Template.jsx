import '../../App.css'
import mail from '../../assets/mail.png'
import phone from '../../assets/phone.png'
import location from '../../assets/location.png'

export default function Template({val}) {
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
    </div>
  )
}