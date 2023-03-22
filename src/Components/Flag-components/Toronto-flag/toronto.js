import { getWeather } from "../../../Services/data";

export default function Toronto() {
  return (
    <div>
        <h3>Toronto</h3>
      <button className='flags' id='TorontoBtn' onClick={() => getWeather('Toronto')}>
        
      </button>
    </div>
  );
}