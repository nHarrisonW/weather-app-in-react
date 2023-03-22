import { getWeather } from "../../../Services/data";

export default function LosAngeles() {
  return (
    <div>
        <h3>Los Angeles</h3>
      <button className='flags' id='LABtn' onClick={() => getWeather('Los Angeles')}>
        
      </button>
    </div>
  );
}
