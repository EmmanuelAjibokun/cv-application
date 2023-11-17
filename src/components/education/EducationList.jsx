import Capsule from "./capsule"

export default function EducationList({val, setVal}) {
  return (
    <div>
      <Capsule val={val} setVal={setVal} />
      <button className="add-btn">+ Education</button>
    </div>
  )
}