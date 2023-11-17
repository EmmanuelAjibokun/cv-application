export default function Cancel ({display}) {
  return <button onClick={() => display.setDisplay(false)}>Cancel</button>
}