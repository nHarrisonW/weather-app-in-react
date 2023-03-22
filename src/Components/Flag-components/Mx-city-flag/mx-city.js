import { getWeather } from "../../../Services/data";

export default function MexicoCity() {
  return (
    <div>
        <h3>Mexico City</h3>
      <button className='flags' id='MexicoCityBtn' onClick={() => getWeather('Mexico City')}>
        
      </button>
    </div>
  );
}
