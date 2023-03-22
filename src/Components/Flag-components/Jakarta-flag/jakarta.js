import { getWeather } from "../../../Services/data";

export default function Jakarta() {
  return (
    <div>
        <h3>Jakarta</h3>
      <button className='flags' id='JakartaBtn' onClick={() => getWeather('Jakarta')}>
        
      </button>
    </div>
  );
}
