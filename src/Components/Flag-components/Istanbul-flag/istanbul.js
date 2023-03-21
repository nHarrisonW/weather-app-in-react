import { getWeather } from "../../../Services/data";


export default function Istanbul() {
  return (
    <>
    <button className='flags' id='IstanbulBtn' onClick={() => getWeather('Istanbul')}>
                
            </button>
    </>
  )
}
