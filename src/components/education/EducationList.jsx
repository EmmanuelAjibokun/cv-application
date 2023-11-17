import Capsule from "./capsule"

export default function EducationList({val, setVal}) {
  return (
    <div className="education-list">
      <Capsule val={val} setVal={setVal} />
      <button className="add-btn">+ Education</button>
    </div>
  )
}