import NewEducation from "./NewEducation"

export default function Education({val, setVal}) {
  return (
    <div>
      <h2>Education</h2>
      <NewEducation val={val} setVal={setVal} />
    </div>
  )
}