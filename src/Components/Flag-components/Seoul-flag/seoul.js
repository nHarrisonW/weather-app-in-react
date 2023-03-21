import { getWeather } from "../../../Services/data";

export default function Seoul() {
  return (
    <>
      <button className='flags' id='SeoulBtn' onClick={() => getWeather('Seoul')}>
        
      </button>
    </>
  );
}
