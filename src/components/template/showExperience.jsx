export default function ShowExperience({experienceVal}) {
  return (
    experienceVal.map(item => (
      <div className="cat" key={item.id}>
        <div className="left_side">
          <p>{item["startdate"]} - {item.enddate}</p>
          <p>{item.location}</p>
        </div>
        <div className="right_side">
          <p>{item.company}</p>
          <p>{item.position}</p>
          <p>{item.description}</p>
        </div>
      </div>
    ))
  )
}