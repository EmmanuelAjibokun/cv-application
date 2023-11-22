export default function ShowEducation({educationVal}) {
  return (
    educationVal.map(item => (
      <div className="cat" key={item.id}>
        {console.log(item)}
        <div className="left_side">
          <p>{item["startdate"]} - {item.enddate}</p>
          <p>{item.location}</p>
        </div>
        <div className="right_side">
          <p>{item.school}</p>
          <p>{item.degree}</p>
        </div>
      </div>
    ))
  )
}