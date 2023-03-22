import { getWeather } from "../../../Services/data";

export default function Seoul() {
  return (
    <div>
        <h3>Seoul</h3>
      <button className='flags' id='SeoulBtn' onClick={() => getWeather('Seoul')}>
        
      </button>
    </div>
  );
}
