import { getWeather } from "../../../Services/data";


export default function Istanbul() {
  return (
    <div>
        <h3>Istanbul</h3>
    <button className='flags' id='IstanbulBtn' onClick={() => getWeather('Istanbul')}> </button>
    </div>
  )
}
