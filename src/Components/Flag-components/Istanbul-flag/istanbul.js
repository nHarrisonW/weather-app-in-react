import { getWeather } from "../London-Flag/london";





export default function Istanbul() {
  return (
    <>
    <button className='flags' id='IstanbulBtn' onClick={() => getWeather('Istanbul')}>
                Istanbul
            </button>
    </>
  )
}
